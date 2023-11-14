import React from "react";

const Loading = () => {
  return (
    <div className="h-screen w-screen bg-slate-800 opacity-50 fixed top-0 left-0 flex items-center justify-center">
      <div className="border-t-4 border-l-4 border-sky-600 rounded-full w-16 h-16 animate-spin"></div>
    </div>
  );
};

export { Loading };
