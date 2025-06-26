import React, { useState } from "react";
import { FaUser, FaCamera } from "react-icons/fa";

const PhotoUpload = ({ image, setImage }) => {
  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="relative w-24 h-24 rounded-full border-1 border-gray-500 shadow-md">
      {preview ? (
        <img
          src={preview}
          alt="Profile"
          className="w-full h-full object-cover rounded-full"
        />
      ) : (
        <div className="w-full h-full rounded-full flex items-center justify-center">
          <FaUser className="text-gray-500 text-3xl" />
        </div>
      )}
      <input
        type="file"
        className="absolute inset-0 opacity-0 cursor-pointer"
        onChange={handleImageChange}
      />
      <div className="absolute bottom-0 right-0 bg-white rounded-full p-1 shadow">
        <FaCamera className="text-gray-500 text-sm" />
      </div>
    </div>
  );
};

export default PhotoUpload;
