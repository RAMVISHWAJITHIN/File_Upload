import axios from 'axios';
import React, { useState, useRef } from 'react';
import { BallTriangle } from 'react-loader-spinner';

const Upload = () => {
  const [img, setImg] = useState(null);
  const [video, setVideo] = useState(null);
  const [loading, setLoading] = useState(false);

  const imgRef = useRef(null);
  const videoRef = useRef(null);

  const UploadFile = async (type) => {
    const file = type === 'image' ? img : video;
    if (!file) {
      console.log(`No ${type} file selected, skipping upload.`);
      return null;
    }

    const data = new FormData();
    data.append("file", file);
    data.append(
      "upload_preset",
      type === 'image'
        ? import.meta.env.VITE_UPLOAD_PRESET_IMAGES
        : import.meta.env.VITE_UPLOAD_PRESET_VIDEOS
    );

    try {
      const api = `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUD_NAME}/${type}/upload`;
      const res = await axios.post(api, data);
      const { secure_url } = res.data;
      console.log(`${type} uploaded:`, secure_url);
      return secure_url;
    } catch (error) {
      console.error(`Upload failed for ${type}:`, error.response?.data || error.message);
      return null;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const imgUrl = await UploadFile('image');
      const videoUrl = await UploadFile('video');

      await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/videos`, { imgUrl, videoUrl });

      setImg(null);
      setVideo(null);
      if (imgRef.current) imgRef.current.value = '';
      if (videoRef.current) videoRef.current.value = '';
      console.log("File upload successful!");
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md space-y-6">
        <div>
          <label htmlFor="video" className="block text-sm font-medium text-gray-700">Upload Video</label>
          <input
            type="file"
            accept="video/*"
            id="video"
            ref={videoRef}
            onChange={(e) => setVideo(e.target.files[0])}
            className="mt-1 block w-full text-sm text-gray-900 bg-gray-50 rounded border border-gray-300 cursor-pointer"
          />
        </div>

        <div>
          <label htmlFor="image" className="block text-sm font-medium text-gray-700">Upload Image</label>
          <input
            type="file"
            accept="image/*"
            id="image"
            ref={imgRef}
            onChange={(e) => setImg(e.target.files[0])}
            className="mt-1 block w-full text-sm text-gray-900 bg-gray-50 rounded border border-gray-300 cursor-pointer"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
          disabled={loading}
        >
          {loading ? "Uploading..." : "Submit"}
        </button>
      </form>

      {loading && (
        <div className="mt-8">
          <BallTriangle
            height={80}
            width={80}
            radius={5}
            color="#3b82f6"
            ariaLabel="ball-triangle-loading"
            visible={true}
          />
        </div>
      )}
    </div>
  );
};

export default Upload;



