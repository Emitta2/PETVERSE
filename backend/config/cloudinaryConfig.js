import cloudinary from 'cloudinary'
import multer from 'multer';
import {CloudinaryStorage} from 'multer-storage-cloudinary'
import dotenv from "dotenv";

dotenv.config()
// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Set up multer storage for Cloudinary
const storage = new CloudinaryStorage({
  cloudinary: cloudinary.v2,
  params: {
    folder: "Petverse", // Folder in Cloudinary
    allowedFormats: ["jpg", "png", "jpeg"],
  },
});

const upload = multer({ storage });

export {upload, cloudinary}
