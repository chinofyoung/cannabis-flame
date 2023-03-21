import React from "react";
import { FaWindowClose } from "react-icons/fa";

export default function Menu(props) {
  const { openMenu, setOpenMenu } = props;

  return (
    <div
      className={`fixed md:hidden inset-10 left-0 top-0 bottom-0 z-30 flex flex-col overflow-auto bg-white text-lg text-slate-900 transition-all duration-300 ease-in-out sm:text-xl ${
        openMenu ? "translate-x-0" : "translate-x-[-100vw]"
      }`}
    >
      <div className="flex items-center justify-between border-b border-solid border-slate-200 p-4">
        <h1 className="select-none font-playfair text-3xl lowercase text-slate-900 ">
          <span className="font-playfair font-bold">TheDuft</span>Co.
        </h1>
        <button
          className="fa-solid fa-xmark cursor-pointer text-3xl duration-300 hover:rotate-90"
          onClick={() => setOpenMenu(false)}
        >
          <FaWindowClose />
        </button>
      </div>
      <div className="flex border-b-2 border-slate-100 px-4 py-8">
        <img
          className="h-16 w-16 rounded-full object-cover"
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8&w=1000&q=80"
        />
      </div>
      
      <div className="mt-auto flex flex-col items-center gap-3 border-t-2 border-slate-200 p-4">
        <button
          className="w-full max-w-[24ch] rounded-md border border-solid border-white text-sm bg-red-400 py-3 font-bold uppercase text-white"
        >
          Logout
        </button>
      </div>
    </div>,
  );
}
