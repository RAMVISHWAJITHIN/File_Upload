// models/video.js
const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema(
  {
    imgUrl: {
      type: String,
      required: true,
    },
    videoUrl: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const videoModel = mongoose.model('Video', videoSchema); // Optional: Capitalize model name

module.exports = videoModel;
