// controllers/videoController.js
const videoModel = require('../models/videoModel');
const cloudinary = require('cloudinary').v2;

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

// Create Video Document
const createVideo = async (req, res, next) => {
  const { imgUrl, videoUrl } = req.body;

  if (!imgUrl || !videoUrl) {
    res.status(400);
    return next(new Error("imgUrl & videoUrl are required"));
  }

  try {
    const video = await videoModel.create({ imgUrl, videoUrl }); 
    res.status(201).json({
      success: true,
      video,
    });
  } catch (error) {
    console.error(error);
    res.status(500); 
    next(error);
  }
};

// Generate Cloudinary Signature
const generateSignature = async (req, res, next) => {
  const { folder } = req.body;

  if (!folder) {
    res.status(400);
    return next(new Error("Folder name is required"));
  }

  try {
    const timestamp = Math.round(new Date().getTime() / 1000);
    const signature = cloudinary.utils.api_sign_request(
      { timestamp, folder },
      process.env.CLOUDINARY_API_SECRET
    );
    res.status(200).json({ timestamp, signature });
  } catch (error) {
    console.error(error);
    res.status(500); 
    next(error);
  }
};

module.exports = {
  createVideo,
  generateSignature,
};
