import React from "react";
import { FaDownload, FaEye, FaTrash } from "react-icons/fa";

const demoFiles = [
  {
    id: 1,
    title: "Budget Report",
    department: "Finance",
    access: "Internal",
    owner: "John Doe",
    date: "2025-05-18",
    size: "2.3 MB",
    type: "PDF",
  },
  {
    id: 2,
    title: "Project Plan",
    department: "IT",
    access: "Public",
    owner: "Alice Smith",
    date: "2025-04-10",
    size: "1.1 MB",
    type: "DOCX",
  },
  {
    id: 3,
    title: "Employee Handbook",
    department: "HR",
    access: "Confidential",
    owner: "Emily Chen",
    date: "2025-03-05",
    size: "800 KB",
    type: "PDF",
  },
  {
    id: 4,
    title: "Safety Guidelines",
    department: "Operations",
    access: "Internal",
    owner: "Mike Brown",
    date: "2025-02-28",
    size: "600 KB",
    type: "DOC",
  },
  {
    id: 1,
    title: "Budget Report",
    department: "Finance",
    access: "Internal",
    owner: "John Doe",
    date: "2025-05-18",
    size: "2.3 MB",
    type: "PDF",
  },
  {
    id: 2,
    title: "Project Plan",
    department: "IT",
    access: "Public",
    owner: "Alice Smith",
    date: "2025-04-10",
    size: "1.1 MB",
    type: "DOCX",
  },
  {
    id: 3,
    title: "Employee Handbook",
    department: "HR",
    access: "Confidential",
    owner: "Emily Chen",
    date: "2025-03-05",
    size: "800 KB",
    type: "PDF",
  },
  {
    id: 4,
    title: "Safety Guidelines",
    department: "Operations",
    access: "Internal",
    owner: "Mike Brown",
    date: "2025-02-28",
    size: "600 KB",
    type: "DOC",
  },
];

const FilesTable = () => {
  return (
    <div className="">
      <div className="flex items-center justify-end gap-4 p-4 bg-gray-100">
        <input
          type="text"
          placeholder="Search files..."
          className="p-2 border rounded w-1/3"
        />
        <button className="bg-blue-800 hover:bg-blue-700 text-white px-4 py-2 rounded shadow hover:shadow-lg transition duration-200">Search</button>

      </div>
      <div className="overflow-auto pb-4 max-h-[300px]">
        <table className="min-w-full text-left border-collapse overflow-x-hidden w-[150%]">
          <thead className="bg-gray-800 text-white sticky top-0 z-10">
            <tr>
              <th className="p-3">
                <input type="checkbox" />
              </th>
              <th className="p-3">Title</th>
              <th className="p-3">Department</th>
              <th className="p-3">Access Level</th>
              <th className="p-3">Owner</th>
              <th className="p-3">Uploaded At</th>
              <th className="p-3">File Size</th>
              <th className="p-3">File Type</th>
              <th className="p-3">Uploaded At</th>
              <th className="p-3">File Size</th>
              <th className="p-3">File Type</th>
              <th className="p-3 sticky right-0 bg-gray-800">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {demoFiles.map((file) => (
              <tr key={file.id} className="border-b hover:bg-gray-100">
                <td className="p-3">
                  <input type="checkbox" />
                </td>
                <td className="p-3">{file.title}</td>
                <td className="p-3">{file.department}</td>
                <td className="p-3">{file.access}</td>
                <td className="p-3">{file.owner}</td>
                <td className="p-3">{file.date}</td>
                <td className="p-3">{file.size}</td>
                <td className="p-3">{file.type}</td>
                <td className="p-3">{file.date}</td>
                <td className="p-3">{file.size}</td>
                <td className="p-3">{file.type}</td>
                <td className="py-3 px-0 flex gap-2 justify-center sticky right-0 bg-gray-800">
                  <button className="flex items-center justify-center text-green-500 w-6 h-6 cursor-pointer" title="Preview">
                    <FaEye />
                  </button>
                  <button className="flex items-center justify-center text-blue-500 w-6 h-6 cursor-pointer" title="Download">
                    <FaDownload />
                  </button>
                  <button className="flex items-center justify-center text-red-500 w-6 h-6 cursor-pointer" title="Delete">
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FilesTable;
