"use client";
import React, { useState } from "react";
// import { Metadata } from "next";
import Image from "next/image";
import CreateTask from "../../assets/create_task.svg";
import { addTask } from "@/services/taskService";
import { toast } from "react-toastify";

// export const metadata = {
//   title: "Add Task : Work Manager",
// };
// here metadata is not working properly as we have made this component as client side

const AddTask = () => {
  // to show the title properly we use here document
  // first way
  //  document.title = "Add Task : Work Manager";
  // Another way is to rename this and make another page.jsx
  const [task, setTask] = useState({
    title: "",
    content: "",
    status: "",
    // here we want logged in user ki id
    // for that we are going to create authentication
    // temporary soln to remove the error
    // at [ 6hr 24min ]
    userId: "6554dd99dacf02254a677bec",
  });

  const handleAddTask = async (event) => {
    event.preventDefault();
    console.log(task);
    try {
      const result = await addTask(task);
      console.log(result);
      toast.success("Your task is added", {
        position: "top-center",
      });
      setTask({
        title: "",
        status: "none",
        content: "",
        userId: "",
      });
    } catch (error) {
      console.log(error);
      toast.error("Task not added", {
        position: "top-center",
      });
    }
  };

  return (
    <div className=" grid grid-cols-12 justify-center">
      <div className="col-span-4 col-start-5 p-5">
        <div className="flex justify-center">
          <Image
            src={CreateTask}
            style={{
              width: "50%",
            }}
            alt="ok"
          />
        </div>

        <h1 className="text-3xl text-center">Add your task here</h1>
        <form action="" onSubmit={handleAddTask}>
          {/* task title */}
          <div>
            <label
              htmlFor="task_title"
              className="block text-sm font-medium mb-2"
            >
              Title
            </label>
            <input
              type="text"
              className="w-full p-3 rounded-3xl bg-gray-800 focus:ring-gray-400 border border-gray-800"
              id="task_title"
              name="task_title"
              onChange={(event) => {
                setTask({ ...task, title: event.target.value });
              }}
              value={task.title}
            />
          </div>
          {/* task content */}
          <div>
            <label
              htmlFor="task_content"
              className="block text-sm font-medium mb-2"
            >
              Content
            </label>
            <textarea
              className="w-full p-3 rounded-3xl bg-gray-800 focus:ring-gray-400 border border-gray-800"
              id="task_content"
              rows={5}
              name="task_content"
              onChange={(event) => {
                setTask({ ...task, content: event.target.value });
              }}
              value={task.content}
            />
          </div>
          {/* task status */}
          <div className="mb-4">
            <label
              htmlFor="task_status"
              className="block text-sm font-medium mb-2"
            >
              Status
            </label>
            {/* <input type="text"
                  className='w-full p-3 rounded-3xl bg-gray-800 focus:ring-gray-400 border border-gray-800'
                /> */}
            <select
              // name=""
              id="task_status"
              className="w-full p-3 rounded-3xl bg-gray-800 focus:ring-gray-400 border border-gray-800"
              name="task_status"
              onChange={(event) => {
                setTask({ ...task, status: event.target.value });
              }}
              value={task.status}
            >
              <option value="none" disabled>
                {" "}
                ---select---
              </option>
              <option value="pending">Pending</option>
              <option value="completed">Completed</option>
            </select>
          </div>
          {/* button actions */}
          <div className="mt-4 flex justify-center">
            <button className="bg-blue-600 py-2 px-3 rounded-lg hover:bg-blue-800">
              Add todo
            </button>
            <button className="bg-red-600 py-2 px-3 rounded-lg hover:bg-red-800 ms-3">
              clear
            </button>
          </div>
          {
            // debugging
            // to convert object to string we use stringify
            JSON.stringify(task)
          }
        </form>
      </div>
    </div>
  );
};

export default AddTask;
