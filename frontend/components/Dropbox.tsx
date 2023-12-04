"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { useToast } from "./ui/use-toast";

const Dropbox = () => {
  const [file, setfile] = useState<File | null>(null);
  const [audio, setaudio] = useState<Blob | null>(null);
  const uploadtoclient = (event: any) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];
      setfile(i);
    }
  };
  const uploadtoserver = async () => {
    if (file) {
      const formdata = new FormData();
      formdata.append("video_file", file);
      const response = await fetch("http://127.0.0.1:8000/api/", {
        method: "POST",
        body: formdata,
      });
      if (response.ok) {
        const blob = await response.blob();
        setaudio(blob);
      }
    }
  };

  return (
    <div className="fixed flex flex-col mt-32 max-sm:flex max-sm:flex-col">
      <input
        type="file"
        id="video"
        name="video"
        accept="video/*"
        className="flex mt-32 "
        onChange={uploadtoclient}
        multiple={true}
      />
      <Button className="mt-10 w-[280px]" onClick={uploadtoserver}>
        Get Audio
      </Button>
      {audio && (
        <a href={URL.createObjectURL(audio)} download={file?.name || "audio"}>
          <Button className="w-[280px] mt-10">Download Audio</Button>
        </a>
      )}
    </div>
  );
};

export default Dropbox;
