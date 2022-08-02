import React from "react";
import { BsTrash } from "react-icons/bs";
import { MdDoneOutline } from "react-icons/md";

function Edit() {
  return (
    <div className=" bg-card rounded-lg border shadow-md flex flex-col w-[82%] md:w-2/3 lg:w-1/2 p-4">
      <input type="text" className="outline-none" placeholder="Title" name="title" />
      <textarea className="outline-none" placeholder="Take a note..."></textarea>
      <div className="flex justify-between">
        <BsTrash size={20} className="text-red-500 cursor-pointer " />
        <MdDoneOutline size={20} className="text-addBtn cursor-pointer " />
      </div>
    </div>
  );
}

export default Edit;
