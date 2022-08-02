import Header from "./components/Header";
import Cards from "./components/Cards";
function App() {
  return (
    <div className="bg-background w-screen">
      <Header/>

      <section className="flex items-center justify-center w-full ">
        <div className="bg-card rounded-lg border shadow-md flex flex-col w-[82%] md:w-2/3 lg:w-1/2 h-28 p-4">
            <input type='text' className="" placeholder='Title' name='title'/>
            <textarea className="" placeholder="Take a note..." ></textarea>
        </div>
      </section>

    <section className="p-7 md:p-16 grid md:grid-cols-2 xl:grid-cols-4  gap-4">
      <Cards/>
    </section>
    </div>
  );
}

export default App;
