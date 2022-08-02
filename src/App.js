import Header from "./components/Header";
import { BsPinAngle } from "react-icons/bs";
import { BiPencil } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";
import Edit from "./components/Edit";
import { Popover, Transition } from "@headlessui/react";

function App() {
  const [extend, setExtend] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [notes, setNotes] = useState([]);

  const addNote = () => {
    const newNote = { title, content };
    setNotes([newNote, ...notes]);
  };

  return (
    <div className="bg-background h-full">
      <div className="flex justify-center items-center w-screen z-10 bg-black opacity-30 h-screen ">
      <Edit className=''/>
      </div>
      
      <Header />

      <section
        className=" flex items-center justify-center w-full "
        onClick={() => setExtend(true)}
      >
        <div className="relative bg-card rounded-lg border shadow-md flex flex-col w-[82%] md:w-2/3 lg:w-1/2 p-4">
          {extend && (
            <input
              type="text"
              className="p-1 outline-none text-xl"
              placeholder="Title"
              name="title"
              onChange={(e) => setTitle(e.target.value)}
            />
          )}

          <textarea
            className="outline-none text-xl"
            placeholder="Take a note..."
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
          <div className="absolute -bottom-5 right-[8%]">
            <p
              className="bg-addBtn rounded-full w-10 h-10 cursor-pointer flex items-center justify-center text-4xl text-white"
              onClick={addNote}
            >
              <AiOutlinePlus />
            </p>
          </div>
        </div>
      </section>

      <section className="p-7 md:p-16 grid md:grid-cols-2 xl:grid-cols-4 gap-4">
        <div className="bg-card rounded-lg h-28 p-4 hover:shadow-lg border relative">
          <h2 className="font-bold capitalize text-gray-700">Default Note</h2>
          <p className="text-gray-600">Had fun building this ❤❤</p>
          <div className="absolute top-3 right-4">
            <BsPinAngle size={20} />
          </div>
        </div>

        {notes.map((note) => (
          <div className="bg-card rounded-lg  p-4 hover:shadow-lg border ">
            <div className="flex">
              <h2 className="font-bold capitalize text-gray-700 w-[100%]">
                {note.title}
              </h2>
              <p className="w-[6%] cursor-pointer">
                
                  
                    <BiPencil size={20} />
                  
              </p>
            </div>

            <p className="text-gray-600">{note.content}</p>
          </div>
        ))}
      </section>
    </div>
  );
}

export default App;
