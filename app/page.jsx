"use client"
import React, { useState } from "react";

const page = () => {
  const [title, settitle] = useState('');
  const [desc, setdesc] = useState('')
  const [mainTask, setMainTask] = useState([]);
  const submitHandler = (e) => {
    e.preventDefault();
    setMainTask([...mainTask,{title, desc}]);
    settitle("")
    setdesc("")
  };
  const deletehandler = (i) => {
    let copytask = [...mainTask]
    copytask.splice(i, 1);
    setMainTask(copytask);
  }
  let renderTask = <h2 className="text-center uppercase">NO Task Avaiable</h2>
 if(mainTask.length > 0){
  renderTask = mainTask.map((t,i) => {
    return < >
      <li className="flex items-center justify-between mb-5" key={i}>
        <div className="flex justify-between items-center w-2/3">
          <h6 className="text-xl font-smibold">{t.title}</h6>
          <h6 className="text-xl font-smibold">{t.desc}</h6>
        </div>
        <button onClick={() => {
          deletehandler()
        }} className="bg-red-400 text-white px-4 py-2 rounded font-semibold">Delete</button>
      </li>
    </>
  })
 }
 
  return (
    <>
      <h1 className="bg-black p-5 text-4xl font-bold text-white text-center ">
        Niloy's Todo List
      </h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Enter Task Here"
          className="2xl border-zinc-800 border-4 m-5 px-4 py-2"
          value={title}
          onChange={(e => {
            settitle(e.target.value);
          })}
        />
        <input
          type="text"
          placeholder="Enter Description Here"
          className="2xl border-zinc-800 border-4 m-5 px-4 py-2"
          value={desc}
          onChange={(e => {
            setdesc(e.target.value);
          })}
        />
        <button className="bg-black text-white px-4 py-3 uppercase text-xl font-semibold rounded m-5">
          Add Task
        </button>
      </form>
      <hr />
      <div className="p-12  bg-slate-200">
          <ul>
            {renderTask}
          </ul>
      </div>
    </>
  );
};

export default page;
