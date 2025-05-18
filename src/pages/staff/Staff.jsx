import React from "react";
import NavBar from "../../components/NavBar";
import SideNav from "../../components/SideNav";
import { FaFile, FaGripHorizontal } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FiExternalLink } from "react-icons/fi";
import { IoMdAdd } from "react-icons/io";
import FilesTable from "./FilesTable";

const Staff = () => {
  const dashList = [
    {
      id: 1,
      name: "My Files",
      value: 7,
      icon: <FaFile size={30} className="text-blue-500" />, 
      // url: "/my-files",
    },
    {
      id: 2,
      name: "Department Files",
      value: 50,
      icon: <FaGripHorizontal size={30} className="text-green-500" />, 
      // url: "/department-files",
    },
  ];

  return (
    <div className="h-screen overflow-hidden flex">
      {/* Side Navigation */}
      <SideNav />
      {/* Main Content */}
      <div className="flex-1 bg-gray-50 flex flex-col">
        <NavBar />
        <div className="flex-1 p-6 overflow-auto pb-20">
          {/* Dashboard Header */}
          <div className="">
            <h1 className="text-3xl font-semibold text-gray-800">Welcome Back!</h1>
            <p className="text-gray-500">Here is an overview of your files</p>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              {dashList.map(({ id, value, name, icon, url }) => (
                <div key={id} className="bg-white p-6 shadow rounded-xl flex items-center justify-between hover:shadow-lg transition-transform duration-300">
                  <div className="flex items-center gap-4">{icon}
                    <div>
                      <h2 className="text-2xl font-bold">{value}</h2>
                      <p className="text-gray-600">{name}</p>
                    </div>
                  </div>
                  <Link to={url} className="text-xl ">
                    <FiExternalLink />
                  </Link>
                </div>
              ))}
            </div>
          </div>
          {/* Add File Section */}
          <div className="mt-10">
            <div>
              <Link className="flex gap-1 items-center justify-center bg-blue-800 hover:bg-blue-700 max-w-max text-white px-8 py-2 rounded shadow hover:shadow-lg transition duration-200">
                <IoMdAdd />
                Add File
              </Link>
            </div>
            {/* Files Table */}
            <FilesTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Staff;
