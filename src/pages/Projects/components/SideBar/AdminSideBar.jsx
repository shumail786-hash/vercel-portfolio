import React from "react";

const AdminSideBar = () => {
  return (
    <>
      <div className="flex my-2 flex-col">
        <p className="text-white text-center text-xl font-semibold md:text-2xl md:font-bold tracking-wide">
          Shu<span className="text-blue-400">mail</span>
        </p>
        <div className="flex  flex-col text-slate-200 justify-center h-96">
          <p className="text-xl font-normal text-center">Schema</p>
          <ul className="text-end pr-4 py-2 sm:text-center">
            <li className="py-1 cursor-pointer hover:text-blue-500">
              Projects
            </li>
            <li className="py-1 cursor-pointer hover:text-blue-500">About</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default AdminSideBar;
