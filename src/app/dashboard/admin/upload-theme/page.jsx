"use client"

import React, { useState } from "react";

const UploadTheme = () => {
    const [description,setDescription] = useState('');


    const handleSubmit = (e)=>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const version = form.version.value;
        const price = form.price.value;
        const thumbnails = form.thumbnails.value;
        console.log(name,version,price,description);
        console.log(thumbnails);

    }

  return (
    <div>
      <h2 className="text-3xl font-bold mb-5">Upload your Theme</h2>
      <div className="border-2 border-gray-400 rounded-xl p-7">
        <form onSubmit={handleSubmit}>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-lg font-medium">
                Project Name
              </span>
            </div>
            <input
              type="text"
              placeholder="Type project name"
              className="input input-bordered w-full max-w-xs"
              name="name"
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-lg font-medium">
                Project Version
              </span>
            </div>
            <input
              type="text"
              placeholder="Type project version"
              className="input input-bordered w-full max-w-xs"
              name="version"
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-lg font-medium">
                Project Price
              </span>
            </div>
            <input
              type="number"
              placeholder="Type project price"
              className="input input-bordered w-full max-w-xs"
              name="price"
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-lg font-medium">
                Project thumbnails
              </span>
            </div>
            <input
              type="file"
              placeholder="import project thumbnails"
              className="input input-bordered w-full max-w-xs"
              name="thumbnails"
            />
          </label>
          <label className="form-control">
            <div className="label">
              <span className="label-text text-lg font-medium">
                Short Description
              </span>
            </div>
            <textarea
              className="textarea textarea-bordered h-24"
              placeholder="Write short description for your projects"
              onChange={(e)=>setDescription(e.target.value)}
            ></textarea>
          </label>
          <div className="mt-5">
            <input
              className="btn btn-sm btn-outline"
              type="submit"
              value="Submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UploadTheme;
