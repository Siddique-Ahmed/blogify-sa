import React from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

const EditBlogForm = () => {
  return (
    <div className="py-20 px-4 sm:px-16 flex items-center justify-center">
      <form className="flex max-w-[430px] flex-col bg-white py-4 px-6 shadow-lg rounded-md items-center gap-3">
        <h1 className="text-lg font-semibold text-gray-600">Edit Blog</h1>
        <div className="flex flex-col gap-2 w-full">
          <Label className="text-gray-700 font-serif">Title</Label>
          <Input
            type="text"
            className="w-full px-2 py-3"
            name="title"
            placeholder="Title"
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <Label className="text-gray-700 font-serif">Description</Label>
          <textarea
            name="description"
            className="w-full outline-none border border-gray-200 px-2 py-3"
            placeholder="Description"
            rows={2}
          ></textarea>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <Label className="text-gray-700 font-serif">Background Cover</Label>
          <Input type="file" />
        </div>
        <Button className="w-full sm:w-1/2">Update Blog</Button>
      </form>
    </div>
  );
};

export default EditBlogForm;
