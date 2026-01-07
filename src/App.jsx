import { useState } from "react";
import bg from "./assests/bg.png";

const App = () => {
  const [heading, setHeading] = useState("");
  const [detail, setDetail] = useState("");
  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    const copyTask = [...task];
    copyTask.push({ heading, detail });
    setTask(copyTask);

    setHeading("");
    setDetail("");
  };

  const detailHandler = (e) => {
    setDetail(e.target.value);
  };

  const inputHandler = (e) => {
    setHeading(e.target.value);
  };

  const deleteTask = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx, 1);
    setTask(copyTask);
  };

  return (
    <div className="flex ">
      <div className="p-10 bg-amber-100 w-1/2   h-screen">
        <form className="flex flex-col gap-4" onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="Enter Heading"
            className="border border-black rounded-md px-4 py-4 text-2xl"
            value={heading}
            onChange={inputHandler}
            required
          />
          <textarea
            name=""
            placeholder="Enter Detail"
            id=""
            className="border border-black rounded-md px-4 py-4 text-2xl h-60  resize-none"
            value={detail}
            onChange={detailHandler}
            required
          ></textarea>
          <button className="border border-black rounded-md px-4 py-4 text-2xl hover:bg-amber-50 transition active:bg-gray-100 bg-white active:scale-95">
            Add Note
          </button>
        </form>
      </div>

      <div className="p-10 bg-amber-600 border-l-2 w-1/2  h-screen overflow-hidden">
        <h1 className="font-extrabold text-5xl">Your Notes</h1>
        <div className="flex flex-wrap gap-5 h-full overflow-auto">
          {task.map(function (element , idx) {
            return (
              <div key={idx} className="flex justify-between flex-col w-[30%] h-[40%] mt-9 mb-9 rounded-2xl p-6" style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover" ,backgroundPosition: "center", backgroundRepeat: "no-repeat"}}>
                <div>
                  <h3 className="font-bold text-2xl pt-5">{element.heading}</h3>
                  <p className=" text-gray-500 break-words whitespace-pre-wrap pt-3 leading-relaxed letterspacing">
                    {element.detail}
                  </p>
                </div>
                <div>
                  <button onClick={function() {
                    deleteTask(idx)
                  }} className="text-center w-full cursor-pointer active:bg-red-500 active:scale-95 py-2 bg-red-600 text-white font-bold rounded-lg">Close</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
