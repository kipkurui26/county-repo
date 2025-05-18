import React from "react";
import { Link } from "react-router-dom";
import { FaFile, FaFolderOpen, FaHome } from "react-icons/fa";

const SideNav = () => {
  const asideNav = [
    {
      id: 1,
      name: "Dashboard",
      icon: <FaHome size={20} />,
      url: "/",
    },
    {
      id: 2,
      name: "My Files",
      icon: <FaFile size={20} />,
      // url: "/my-files",
    },
    {
      id: 3,
      name: "Department Files",
      icon: <FaFolderOpen size={20} />,
      // url: "/department-files",
    },
  ];

  return (
    <div className="w-64 bg-gray-800 text-white h-screen p-4">
      <h2 className="text-2xl text-white font-bold mb-6">Repo.</h2>
      <nav>
        {asideNav.map(({ id, name, icon, url }) => (
          <Link
            key={id}
            to={url}
            className="flex items-center gap-4 p-3 mb-2 hover:bg-gray-700 rounded-lg transition duration-200"
          >
            {icon}
            <span>{name}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default SideNav;
