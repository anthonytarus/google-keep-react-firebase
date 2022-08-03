import Header from "./components/Header";
import { BsPinAngle, BsTrash } from "react-icons/bs";
import { BiPencil } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import { useState, useEffect } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  updateDoc,
} from "firebase/firestore";
import { db } from "./firebase.config";

function App() {
  const [extend, setExtend] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [notes, setNotes] = useState([]);
  const [error, setError] = useState(false);

  //create note
  const addNote = async () => {
    if(content === ''){
      setError(true)
      setTimeout(() => {
        setError(false)
      }, 3000);
      return
    } else {
    await addDoc(collection(db, "notes"), {
      title: title,
      content: content,
    });
    setTitle("");
    setContent("");
  }};

  //read note
  useEffect(() => {
    const q = query(collection(db, "notes"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let notesArr = [];
      querySnapshot.forEach((doc) => {
        notesArr.push({ ...doc.data(), id: doc.id });
      });
      setNotes(notesArr);
    });
    return () => unsubscribe();
  }, []);

  //update note
  const updateNote = (id) => {
    setTitle(title);
    setContent(content);
  };

  //delete note
  const deleteNote = async (id) => {
    await deleteDoc(doc(db, "notes", id));
  };

  return (
    <div className="bg-background h-full">
      <Header />

      <section
        className=" flex items-center justify-center w-full "
        onClick={() => setExtend(true)}
      >
        <div className="relative bg-card rounded-lg border shadow-md flex flex-col w-[82%] md:w-2/3 lg:w-1/2 p-4">
          {extend && (
            <div>
              
              <input
                type="text"
                name="title"
                value={title}
                class="bg-gray-50 text-sm rounded-lg  block w-full p-2.5 outline-none"
                placeholder="Title"
                onChange={(e) => setTitle(e.target.value)}
              />
              
              
            </div>
          )}

          <textarea
          value={content}
            id="message"
            rows="4"
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg outline-none"
            placeholder="Take a note..."
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
          {error && (
                <p class="mt-2 text-sm text-red-600 dark:text-red-500"><span class="font-medium">Oh, snapp!</span> Write something, anything. Fields must be filled.</p>
              )}

          <div className="absolute -bottom-5 right-[8%]">
            <p
              className="bg-addBtn rounded-full w-10 h-10 cursor-pointer flex items-center justify-center text-xl text-white"
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
          <div
            className="bg-card rounded-lg  p-4 hover:shadow-lg border "
            key={note.id}
          >
            <div className="flex">
              <h2 className="font-bold capitalize text-gray-700 w-[100%]">
                {note.title}
              </h2>
              <p className="w-[6%] cursor-pointer">
                <BsTrash
                  size={18}
                  className="text-red-500 cursor-pointer "
                  onClick={() => deleteNote(note.id)}
                />
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
