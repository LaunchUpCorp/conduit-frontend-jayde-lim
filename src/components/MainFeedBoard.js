import React from "react";
import FeedMenu from "./FeedMenu";
import ArticleFeed from "./ArticleFeed";

function MainFeedBoard() {
  return (
    <div className="w-full sm:w-[65%]">
      <div className="ml-0 sm:ml-20 lg:ml-60 flex flex-col justify-center sm:justify-start">
        <FeedMenu />
        <ArticleFeed />
      </div>
    </div>
  )
}

export default MainFeedBoard;