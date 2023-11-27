import React from "react";

const Dropbox = () => {
  return (
    <div className="flex items-center justify-center p-12">
      <input
        type="file"
        id="video"
        name="video"
        accept="video/*"
        className="bg-black bg-clip-text "
      />
    </div>
  );
};

export default Dropbox;
