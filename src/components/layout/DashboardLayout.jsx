import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import SideMenu from "../dashboard/SideMenu";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Loading = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <AiOutlineLoading3Quarters className="animate-spin h-7 w-7 mr-3 text-[#6610F2]" />
      <span>Loading...</span>
    </div>
  );
};
const DashboardLayout = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Simulate a delay before the page loads
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="flex flex-row justify-start bg-[#EDF0F3] h-screen scrollbar scrollbar-thumb-[#6610F2] scrollbar-w-[10px] scrollbar-track-gray-100 overflow-y-scroll">
          {/* <div className="flex flex-row justify-start bg-[#EDF0F3] h-screen scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-[#6610F2] scrollbar-track-white overflow-y-scroll"> */}
          {/* <div className=""> */}
          <SideMenu />
          {/* </div> */}
          <div className="ml-[291px] flex-1">
            <Outlet />
          </div>
        </div>
      )}
    </>
  );
};

export default DashboardLayout;
