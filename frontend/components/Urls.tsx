import React from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Urls = () => {
  return (
    <div className="flex flex-col p-6 mt-5">
      <Input type="url" id="url" pattern="https?://.+" required />
      <Button className="mt-10">Download and Give me Audio</Button>
    </div>
  );
};

export default Urls;
