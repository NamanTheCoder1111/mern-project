import React, { useState } from "react";
import { FaUser, FaCamera } from "react-icons/fa";

const PhotoUpload = ({image,setImage}) => {
  

  return (
    <div className="relative w-24 h-24 rounded-full border-1 border-purple-500 shadow-md">

     {image ? (
        <img
          src={image}
          alt="Profile"
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="w-full h-full rounded-full flex items-center justify-center ">
          <FaUser className="text-purple-500 text-3xl" />
        </div>
      )}
         <input
        type="file"
        className="absolute inset-0 opacity-0 cursor-pointer"
        value={image}
        onChange={(e)=>{setImage(e.target.value)}}
      />

    <div className="absolute bottom-0 right-0 bg-white rounded-full p-1 shadow ">
        <FaCamera className="text-purple-500 text-sm" />
      </div>
    </div>
       
   
  );
};

export default PhotoUpload;
