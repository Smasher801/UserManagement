"use client";
import { UserCont } from "@/context/userContext";
import { deleteTask, getTaskOfUser } from "@/services/taskService";
import React, { useContext, useEffect, useState } from "react";
import TaskItems from "./TaskItems";
import { toast } from "react-toastify";

const ShowTasks = () => {
  const [task, setTask] = useState([]);

  const { user } = useContext(UserCont);

  async function loadTasks(userId) {
    try {
      const tasks = await getTaskOfUser(userId);
      //   console.log(tasks[1]);
      //   const result = tasks[1];
      setTask([...tasks]);
      //   console.log(task);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (user) {
      loadTasks(user._id);
    }
    // console.log(task);
  }, [user]);

 async function deleteTaskParent(itemID) {
           try {
            console.log(itemID);

            const res =  await  deleteTask(itemID);
            console.log("inside delete task");
            const updatedTask = task.filter((itemI)=> itemID!=itemI._id)
            setTask(updatedTask);
            toast.success("Task deleted success");
            console.log(res);
           } catch (error) {
              console.log(error);
              toast.error("Not deleted ")
           }
  }

  return (
    <div className="grid grid-cols-12 mt-3">
      <div className="col-span-6 col-start-4">
        <h1 className="text-3xl mb-3">Your Tasks</h1>
        {task.map((item) => (
          <TaskItems key={item._id} item={item} deleteTaskParent={deleteTaskParent} />
        ))}
      </div>
    </div>
  );
};

export default ShowTasks;
