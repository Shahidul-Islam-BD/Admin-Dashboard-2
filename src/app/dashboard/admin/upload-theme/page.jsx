import React from "react";

const UploadTheme = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-5">Upload your Theme</h2>
      <div className="border-2 border-gray-400 rounded-xl p-7">
        <form>
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
            ></textarea>
          </label>
          <div className="flex justify-between mt-5">
            <input  className="btn btn-sm btn-outline" type="submit" value="Submit" />
            <button className="btn btn-sm btn-outline">Add new input field</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UploadTheme;
