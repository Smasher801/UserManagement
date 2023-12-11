"use client";
import React, { useContext } from "react";
import { UserCont } from "@/context/userContext";
// import { useContext } from "react";
import Link from "next/link";
import { logoutFun } from "@/services/userService";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

// within this component folder we will use the client side things
// hello world and the name of mine is Harsh Kamboj

const CustomNavBar = () => {
  const { user, setUser } = useContext(UserCont);
  console.log(user);

  const router = useRouter();

  const doLogout = async () => {
    try {
      const res = await logoutFun();
      console.log(res);
      setUser(undefined);
      router.push("/");
    } catch (error) {
      toast.error("some error while logout");
    }
  };

  return (
    <nav className="bg-blue-600 h-12 py-2 px-4 flex justify-between items-center h-12">
      <div>
        <h1 className="text-2xl font-semibold">
          <a href="#">Work manager</a>
        </h1>
      </div>
      <div>
        <ul className="flex space-x-5">
          {user && (
            <>
              <li>
                {/* <a href="">Home</a> */}
                {/* by using the link the page will not get refreshed */}
                <Link href={"/"} className="hover: text-blue-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href={"/add-task"}> Add Task </Link>
              </li>
              <li>
                {/* <a href="">Show Task</a> */}
                <Link href={"/show-tasks"}>Show Tasks</Link>
              </li>
            </>
          )}
        </ul>
      </div>
      <div>
        <ul className="flex space-x-5">
          {user && (
            <>
              <li>
                <Link href={"#!"}>{user.name}</Link>
              </li>
              <li>
                {/* <a href="">Sign up</a> */}
                <button href={"/logout"} onClick={doLogout}>
                  Logout
                </button>
              </li>
            </>
          )}
          {!user && (
            <>
              <li>
                <Link href={"/login"}>Login</Link>
              </li>
              <li>
                {/* <a href="">Sign up</a> */}
                <Link href={"/signup"}>Sign up</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default CustomNavBar;
