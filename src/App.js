import Header from "./components/Header";
import Cards from "./components/Cards";
import {useState} from 'react'
function App() {
  const [extend, setExtend] = useState(false)
  

  return (
    <div className="bg-background w-screen" >
      <Header/>

      <section className=" flex items-center justify-center w-full " onClick={()=> setExtend(true)}>
        <div className="relative bg-card rounded-lg border shadow-md flex flex-col w-[82%] md:w-2/3 lg:w-1/2 h-28 p-4">
          {extend && (<input type='text' className="" placeholder='Title' name='title'/>)}
            
            <textarea className="" placeholder="Take a note..." ></textarea>
            <div className="absolute -bottom-5 right-[8%]">
              <p className="bg-addBtn rounded-full w-10 h-10 cursor-pointer flex items-center justify-center text-4xl text-white">+</p>
            </div>
        </div>
        
      </section>

    <section className="p-7 md:p-16 grid md:grid-cols-2 xl:grid-cols-4  gap-4">
      <Cards/>
    </section>
    </div>
  );
}

export default App;
