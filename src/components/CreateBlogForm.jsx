import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const CreateBlogForm = () => {
  return (
    <div className="py-16 flex-wrap sm:py-20 px-4 flex-col sm:flex-row sm:px-16 flex gap-2">
      <div className="flex flex-1 w-full flex-col gap-4">
        <h3 className="text-center font-bold text-xl sm:text-2xl text-blue-500">Why Share Your Blog?</h3>
        <ul className="text-gray-400 text-center sm:text-left flex flex-col gap-2 mt-0 sm:mt-20">
          <li>Express your creativity and thoughts.</li>
          <li>Connect with a wider audience.</li>
          <li>Build your online presence and personal brand.</li>
          <li>Inspire others with your experiences and ideas.</li>
        </ul>
        <p className="text-sm text-center font-serif text-gray-600">Start writing your story today—your voice matters!</p>
      </div>
      <div className="mt-4 flex-1 sm:mt-0 flex flex-col items-center gap-3">
          <h1 className="text-center font-bold uppercase text-2xl sm:text-3xl text-blue-500">Blogify</h1>
        <p className="max-w-[340px] text-center text-gray-400">Add blogs in your daily routine and share your experience or thoughts</p>
        <form className="flex flex-col bg-white py-4 px-6 shadow-lg rounded-md items-center gap-3">
        <h1 className="text-lg font-semibold text-gray-600">Add Blog</h1>
          <div className="flex flex-col gap-2 w-full">
            <Label className="text-gray-700 font-serif">Title</Label>
            <Input type="text" className="w-full px-2 py-3" name="title" placeholder="Title"/>
          </div>
          <div className="flex flex-col gap-2 w-full">
            <Label className="text-gray-700 font-serif">Description</Label>
            <textarea name="description" className="w-full outline-none border border-gray-200 px-2 py-3" placeholder="Description" rows={2}></textarea>
          </div>
          <div className="flex flex-col gap-2 w-full">
            <Label className="text-gray-700 font-serif">Background Cover</Label>
            <Input type="file" />
          </div>
          <Button className="w-full sm:w-1/2">Add Blog</Button>
        </form>
      </div>
    </div>
  );
};

export default CreateBlogForm;
