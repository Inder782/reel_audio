import React from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Urls = () => {
  return (
    <div className="flex flex-col mt-32">
      <Input
        type="url"
        id="url"
        pattern="https?://.+"
        required
        placeholder="Paste the Url here"
      />
      <Button className="mt-10">Download Reel</Button>
    </div>
  );
};

export default Urls;
