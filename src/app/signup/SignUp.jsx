"use client";
import React, { useState } from "react";
import signImage from "../../assets/signup.svg";
import Image from "next/image";
import { toast } from "react-toastify";
import { SignUpUser } from "@/services/userService";

const SignUp = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    about: "",
    profileURL: "https://i.stack.imgur.com/34AD2.jpg",
  });

  const resetForm = () => {
    setUserData({
      name: "",
      email: "",
      password: "",
      about: "",
      profileURL: "https://i.stack.imgur.com/34AD2.jpg",
    });
  };

  const doSignUp = async (event) => {
    event.preventDefault();
    console.log(event.target);
    console.log(userData);
    if (userData.name.trim() === "" || userData.name.trim == null) {
      toast.warning("name is required!!");
      return;
    }
    // apply rest of the validations

    // form submit
    try {
      const result = await SignUpUser(userData);
      toast.success("user is registered");
      setUserData({
        name: "",
        email: "",
        password: "",
        about: "",
        profileURL: "https://i.stack.imgur.com/34AD2.jpg",
      });
    } catch (error) {
      console.log(error.response.data.message);
      toast.error("email should be unique");
    }
  };

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-4 col-start-5">
        <div className="py-5">
          <div className="flex justify-center">
            <Image
              src={signImage}
              style={{
                width: "50%",
              }}
              alt="sign up banner"
            />
          </div>
          <h1 className="text-3xl text-center">Sign up here</h1>
          <form action="#" className="" onSubmit={doSignUp}>
            {/* name */}
            <div className="mt-3">
              <label
                htmlFor="username"
                className="block text-sm font-medium mb-2"
              >
                Username
              </label>
              <input
                type="text"
                className="w-full p-3 rounded-3xl bg-gray-800 focus:ring-gray-400 border border-gray-800"
                id="username"
                name="username"
                onChange={(event) => {
                  setUserData({ ...userData, name: event.target.value });
                }}
                value={userData.name}
              />
            </div>
            {/* email */}
            <div className="mt-3">
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full p-3 rounded-3xl bg-gray-800 focus:ring-gray-400 border border-gray-800"
                id="email"
                name="email"
                onChange={(event) => {
                  setUserData({ ...userData, email: event.target.value });
                }}
                value={userData.email}
              />
            </div>
            {/* password */}
            <div className="mt-3">
              <label
                htmlFor="password"
                className="block text-sm font-medium mb-2"
              >
                Password
              </label>
              <input
                type="password"
                className="w-full p-3 rounded-3xl bg-gray-800 focus:ring-gray-400 border border-gray-800"
                id="password"
                name="password"
                onChange={(event) => {
                  setUserData({ ...userData, password: event.target.value });
                }}
                value={userData.password}
              />
            </div>
            {/* About  */}
            <div className="mt-3">
              <label htmlFor="about" className="block text-sm font-medium mb-2">
                About
              </label>
              <textarea
                type="text"
                className="w-full p-3 rounded-3xl bg-gray-800 focus:ring-gray-400 border border-gray-800"
                id="about"
                name="about"
                rows={8}
                onChange={(event) => {
                  setUserData({ ...userData, about: event.target.value });
                }}
                value={userData.about}
              />
            </div>
            {/* Profile URL  */}
            {/* <div className="mt-3">
              <label
                htmlFor="profile_url"
                className="block text-sm font-medium mb-2"
              >
                Profile URL
              </label>
              <input
                type="text"
                className="w-full p-3 rounded-3xl bg-gray-800 focus:ring-gray-400 border border-gray-800"
                id="profile_url"
                name="profile_url"
                //   onChange={(event) => {
                //     setTask({ ...task, title: event.target.value });
                //   }}
                //   value={task.title}
              />
            </div> */}
            <div className="mt-3 text-center">
              <button
                type="submit"
                className="px-3 py-2 bg-green-600 rounded hover:bg-red-400"
              >
                Sign Up
              </button>
              <button
                onClick={resetForm}
                type="button"
                className="px-3 py-2 ms-3 bg-orange-600 rounded hover:bg-red-400"
              >
                Reset
              </button>
            </div>
            {JSON.stringify(userData)}
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
