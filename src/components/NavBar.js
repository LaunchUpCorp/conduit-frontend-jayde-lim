import React from "react";
import NavMenu from "./NavMenu";

function NavBar() {
  return (
    <div className="h-16 w-full bg-white flex flex-row justify-between px-4 sm:px-24 lg:px-64">
      <p className="flex items-center text-[#5cb85c] font-bold text-3xl"> conduit</p>
      <NavMenu />
    </div>
    
  )
}

export default NavBar;