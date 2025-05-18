import React from "react";

const NavBar = () => {
  return (
    <div className="w-full h-16 bg-gray-800 flex items-center justify-end px-6 shadow-md">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center">
          <img
            src="https://via.placeholder.com/40"
            alt="User Avatar"
            className="w-8 h-8 rounded-full"
          />
        </div>
        <div className="text-white">
          <h4 className="font-semibold">user26</h4>
          <span className="text-sm">user26@gmail.com</span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
