import React from 'react';
import Header from '../components/Header';
import Sidebar from "../components/Sidebar";
import Main from "../components/Main";

function Homepage() {
  return (
    <div>
      <Header/>

      <div className="flex flex-col sm:flex-row-reverse items-start h-screen pt-10 min-w-[456px] ml-4 mr-4">
        <Sidebar />
        <Main />
      </div>
    </div>
    )
}

export default Homepage;