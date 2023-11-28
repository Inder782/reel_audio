"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";

const Dropbox = () => {
  const [file, setfile] = useState(null);

  const uploadtoclient = (event: any) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];
      setfile(i);
    }
  };
  const uploadtoserver = async () => {
    const video = new FormData();
    video.append("video", file!);
    const response = await fetch("http://127.0.0.1:8000/audio/get_audio/", {
      method: "POST",
      body: video,
    });
    console.log(response);
  };

  return (
    <div className="flex flex-col items-center justify-center p-12">
      <input
        type="file"
        id="video"
        name="video"
        accept="video/*"
        className="bg-black bg-clip-text "
        onChange={uploadtoclient}
        multiple={true}
      />
      <Button className="mt-10" onClick={uploadtoserver}>
        Get Audio
      </Button>
    </div>
  );
};

export default Dropbox;
