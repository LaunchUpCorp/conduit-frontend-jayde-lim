import React from 'react';
import HomepageBanner from '../components/HomepageBanner';
import TagsSidebar from "../components/TagsSidebar";
import MainFeedBoard from "../components/MainFeedBoard";
import NavBar from"../components/NavBar";

function Homepage() {
  return (
    <div>
      <NavBar/>
      <HomepageBanner/>

      <div className="flex flex-col sm:flex-row-reverse items-start h-screen pt-10 min-w-[456px] ml-4 mr-4">
        <TagsSidebar />
        <MainFeedBoard />
      </div>
    </div>
    )
}

export default Homepage;