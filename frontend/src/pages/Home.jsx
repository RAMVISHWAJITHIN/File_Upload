import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-50 to-blue-100 p-6">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-xl text-center">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">Home</h1>
        <h2 className="text-lg text-gray-700 mb-6">
          Upload files using Cloudinary service in a MERN Stack Project
        </h2>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-xl transition shadow"
          >
            Home
          </Link>
          <Link
            to="/upload"
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-xl transition shadow"
          >
            Upload
          </Link>
          <Link
            to="/secure-upload"
            className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-xl transition shadow"
          >
            Secure Upload
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
