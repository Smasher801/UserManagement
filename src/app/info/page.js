"use client";
// to make this component client side we can make use of the ("use client")
// the component in the nextjs are server side by default
import React from "react";

const InfoPage = () => {
  console.log("this is information page");
  return (
    <div >
      <div> InfoPage </div>

      <button> click me </button>
    </div>
  );
};

export default InfoPage;
