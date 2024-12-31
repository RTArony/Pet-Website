import React from "react";
import SidebarMenu from "./Menu";

const HomePage = () => {
  return (
    <div >
        <SidebarMenu></SidebarMenu>
        <div className="bg-pink-200 h-screen flex flex-col justify-between">
        {/* Main Content */}
        <div className="flex items-center justify-center h-4/5">
            {/* Left Section - Design Boxes */}
            <div className="w-1/2 flex justify-center">
            <div className="grid grid-cols-2 gap-4">
                {/* Row 1 */}
                <div className="bg-cyan-200 h-16 w-24 rounded-lg shadow-lg"></div>
                <div className="bg-cyan-200 h-16 w-24 rounded-lg shadow-lg"></div>
                {/* Row 2 */}
                <div className="bg-cyan-200 h-16 w-24 rounded-lg shadow-lg"></div>
                <div className="bg-cyan-200 h-16 w-24 rounded-lg shadow-lg"></div>
                {/* Row 3 */}
                <div className="bg-cyan-200 h-16 w-24 rounded-lg shadow-lg"></div>
                <div className="bg-cyan-200 h-16 w-24 rounded-lg shadow-lg"></div>
            </div>
            </div>
            {/* Right Section - Title and Subtitle */}
            <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-800">Safe Heaven Paws</h1>
            <p className="text-2xl text-gray-600 mt-2">
            A Pet Rescue & Adopt System
            </p>
        </div>
        </div>
        {/* Footer */}
        <div className="bg-pink-300 py-4">
            <p className="text-center font-bold text-gray-700">Rescue.Care.Connect</p>
        </div>
        </div>
    </div>
  );
};

export default HomePage;
