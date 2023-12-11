import { UserCont } from "@/context/userContext";
import React, { useContext } from "react";
import { RxCross1 } from "react-icons/rx";

const TaskItems = ({ item , deleteTaskParent }) => {
  const { user } = useContext(UserCont);

  function handleDeleteTask(itemId) {
        console.log(item);
        deleteTaskParent(itemId);
  }

  return (
    <div
      className={`shadow-lg mt-2 rounded-md ${
        item.status === "completed" ? "bg-green-500" : "bg-red-400"
      } `}
    >
      <div className="p-5">
        <div className="flex justify-between">
          <h1 className="text-2xl font-semibold">{item.title}</h1>
          <span onClick={()=>{
              handleDeleteTask(item._id)
          }} className="shadow-lg hover:bg-yellow-400 bg-gray-200 rounded-full w-9 h-9 flex justify-center items-center cursor-pointer ">
            <RxCross1 />
          </span>
        </div>

        <p className="font-normal">{item.content}</p>
        <div className="flex justify-between mt-3">
          <p className="text-left">
            Status : <span className="font-semibold"> {item?.status} </span>{" "}
          </p>
          <p className="text-right">
            Author Name : <span className="font-semibold"> {user?.name} </span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TaskItems;
