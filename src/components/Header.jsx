import React from "react";

const Header = () => {
  return (
    <header className="fixed flex items-center justify-between w-full h-20 bg-slate-500">
      <h1 className="text-white align-middle p-4 font-bold text-lg">ChatBot</h1>
      <button className="text-white p-4 hover:text-slate-400">Logout</button>
    </header>
  );
};

export default Header;
