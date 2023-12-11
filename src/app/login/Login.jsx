"use client";
import { UserCont } from "@/context/userContext";
import { LoginUser } from "@/services/userService";
import { useRouter } from "next/navigation";
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";

const Login = () => {
  const router = useRouter();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const {user,setUser} = useContext(UserCont);

  const loginFormSubmitted = async(event) => {
    event.preventDefault();
    // console.log(loginData);
    if (loginData.email.trim() === "" || loginData.password.trim() === "") {
      toast.info("Invalid info!!");
      return;
    }
    console.log(loginData);
    // valid the data 
    // login 
    try {

      const result = await LoginUser(loginData);
      // console.log(result);
      console.log("inside try of login page");
      toast.success("login success");
      // redirect
      setUser(result.userKey);
      router.push("/profile/user");
      
    } catch (error) {
       console.log("error from login page")
       console.log(error);
       toast.error(error.response.data.message);
      
    }

  };

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-4 col-start-5">
        <div className="py-5"></div>
        <h1 className="text-3xl text-center">Login here</h1>
        <form action="" onSubmit={loginFormSubmitted}>
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
                setLoginData({ ...loginData, email: event.target.value });
              }}
              value={loginData.email}
            />
          </div>
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
                setLoginData({ ...loginData, password: event.target.value });
              }}
              value={loginData.password}
            />
          </div>
          <div className="mt-3 text-center">
            <button
              type="submit"
              className="px-3 py-2 bg-green-600 rounded hover:bg-red-400"
            >
              Log in
            </button>
            <button
              //   onClick={resetForm}
              type="button"
              className="px-3 py-2 ms-3 bg-orange-600 rounded hover:bg-red-400"
            >
              Reset
            </button>
          </div>
          {JSON.stringify(loginData)}
        </form>
      </div>
    </div>
  );
};

export default Login;
