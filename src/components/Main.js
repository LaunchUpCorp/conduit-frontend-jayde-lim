import React from "react";
import Menu from "./Menu";
import ContentArea from "./ContentArea";

function Main() {
  return (
    <div className="w-full sm:w-[65%]">
      <div className="ml-0 sm:ml-20 lg:ml-60 flex flex-col justify-center sm:justify-start">
        <Menu />
        <ContentArea />
      </div>
    </div>
  )
}

export default Main;