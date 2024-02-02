import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    projectimage: {
      type: String,
      default:
        "https://img.favpng.com/7/6/12/vector-graphics-teamwork-planning-project-png-favpng-PHEDn0rPWvjxtyNwUwiSXGH1B.jpg",
    },
    projectname: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

const Project = mongoose.model("Project", projectSchema);

export default Project;
