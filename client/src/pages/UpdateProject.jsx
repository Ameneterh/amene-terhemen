import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { TextInput, Select, FileInput, Button, Alert } from "flowbite-react";
import {
  getDownloadURL,
  getStorage,
  uploadBytesResumable,
  ref,
} from "firebase/storage";
import { app } from "../firebase.js";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function UpdateProject() {
  const [file, setFile] = useState(null);
  const [imageUploadProgress, setImageUploadProgress] = useState(null);
  const [imageUploadError, setImageUploadError] = useState(null);

  const [formData, setFormData] = useState({});
  const [publishError, setPublishError] = useState(null);

  const { currentUser } = useSelector((state) => state.user);
  const { projectId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const fetchProject = async () => {
        const res = await fetch(
          `/api/project/getprojects?projectId=${projectId}`
        );
        const data = await res.json();

        if (!res.ok) {
          console.log(data.message);
          setPublishError(data.message);
          return;
        }

        if (res.ok) {
          setPublishError(null);
          setFormData(data.projects[0]);
        }
      };
      fetchProject();
    } catch (error) {
      console.log(error.message);
    }
  }, [projectId]);

  const handleUploadImage = async () => {
    try {
      if (!file) {
        setImageUploadError("Please, select an image");
        return;
      }
      setImageUploadError(null);
      const storage = getStorage(app);
      const fileName = new Date().getTime() + "-" + file.name;
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setImageUploadProgress(progress.toFixed(0));
        },
        (error) => {
          setImageUploadError("Image upload failed!");
          setImageUploadProgress(null);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setImageUploadProgress(null);
            setImageUploadError(null);
            setFormData({ ...formData, projectimage: downloadURL });
          });
        }
      );
    } catch (error) {
      setImageUploadError("Image upload failed!!");
      setImageUploadProgress(null);
      // console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        `/api/project/updateproject/${formData._id}/${currentUser._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      const data = await res.json();
      if (!res.ok) {
        setPublishError(data.message);
        return;
      }
      if (res.ok) {
        setPublishError(null);
        navigate(`/project/${data.slug}`);
      }
    } catch (error) {
      setPublishError("Something went wrong");
    }
  };

  return (
    <div className="p-3 max-w-3xl mx-auto min-h-screen">
      <h1 className="text-center text-3xl my-7 font-semibold">
        Update Project
      </h1>

      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="flex gap-4 items-center justify-between border-2 border-purple-500 p-3 rounded-lg">
          <FileInput
            type="file"
            accept="image/*"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <Button
            type="button"
            gradientDuoTone="purpleToBlue"
            size="sm"
            outline
            onClick={handleUploadImage}
            disabled={imageUploadProgress}
          >
            {imageUploadProgress ? (
              <div className="w-16 h-16">
                <CircularProgressbar
                  value={imageUploadProgress}
                  text={`${imageUploadProgress || 0}%`}
                />
              </div>
            ) : (
              "Upload Image"
            )}
          </Button>
        </div>
        {imageUploadError && <Alert color="failure">{imageUploadError}</Alert>}

        {formData.projectimage && (
          <img
            src={formData.projectimage}
            alt="upload"
            className="w-full, h-72 object-cover"
          />
        )}

        <div className="flex flex-col gap-4 sm:flex-row justify-between">
          <TextInput
            type="text"
            placeholder="Project Name"
            required
            id="projectname"
            className="flex-1"
            value={formData.projectname}
            onChange={(e) =>
              setFormData({ ...formData, projectname: e.target.value })
            }
          />
          <Select
            value={formData.category}
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
          >
            <option>Select a category</option>
            <option value="webdev">Web Development</option>
            <option value="graphics">Graphics Design</option>
          </Select>
        </div>

        <TextInput
          type="text"
          placeholder="Project URL (for webdev projects only)"
          id="liveurl"
          className="flex-1"
          value={formData.liveurl}
          onChange={(e) =>
            setFormData({ ...formData, liveurl: e.target.value })
          }
        />

        <ReactQuill
          theme="snow"
          placeholder="Write something ..."
          className="h-20 mb-12"
          required
          onChange={(value) => {
            setFormData({ ...formData, description: value });
          }}
          value={formData.description}
        />

        <Button type="submit" gradientDuoTone="purpleToPink" outline>
          Update Project
        </Button>

        {publishError && (
          <Alert color="failure" className="mt-5">
            {publishError}
          </Alert>
        )}
      </form>
    </div>
  );
}
