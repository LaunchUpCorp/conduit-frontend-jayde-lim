import React from "react";

function Body() {
    return (
      <div className="flex flex-col sm:flex-row-reverse items-start h-screen pt-10 min-w-[456px] ml-4 mr-4">

        {/*Popular Tag pane on the right side will move to top on smaller view*/}
        <div className="w-full sm:w-[35%] sm:ml-4">
          <p className="bg-slate-200 h-12 w-full sm:w-2/4 min-w-fit p-1.5 rounded-md">Popular Tags</p>
        </div>

        {/*Feed pane on the left side will move under the Popular Tag pane on a smaller view*/}
        <div className="w-full sm:w-[65%]">
            <div className="ml-0 sm:ml-20 lg:ml-60 flex flex-col justify-center sm:justify-start">
              <div className="flex flex-row h-12">
                <p className="text-[#5cb85c] border-b-[#5cb85c] border-b-2 w-[15%] min-w-fit p-1.5 text-center">Global Feed</p>
                <p className="text-[#5cb85c] border-b-gray-300 border-b-2 w-[85%] p-1.5"></p>
              </div>
              <div className="h-10 mt-6">
                <p>No articles are here...yet.</p>
              </div>
          </div>
        </div>
      </div>
    )
  }

export default Body;