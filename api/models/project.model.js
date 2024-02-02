import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    projectimage: {
      type: String,
      required: true,
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
  },
  { timestamps: true }
);

const Project = mongoose.model("Project", projectSchema);

export default Project;
