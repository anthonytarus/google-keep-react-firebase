import React from "react";
import { BsTrash } from "react-icons/bs";
import { MdDoneOutline } from "react-icons/md";

function Edit() {
  return (
    <section className="fixed inset-0 z-10 w-full h-full bg-black/40 flex items-center justify-center transition-all duration-500">
      <div className=" bg-card rounded-lg border shadow-md flex flex-col w-[82%] md:w-2/3 lg:w-1/2 p-4">
        <input
          type="text"
          className="outline-none"
          placeholder="Title"
          name="title"
        />
        <textarea
          className="outline-none"
          placeholder="Take a note..."
        ></textarea>
        <div className="flex justify-between">
          <BsTrash size={20} className="text-red-500 cursor-pointer " />
          <MdDoneOutline size={20} className="text-addBtn cursor-pointer " />
        </div>
      </div>
    </section>
  );
}

export default Edit;
