import React from "react";

const ButtonOutline = ({ children }) => {
  return (
    <button className="font-medium tracking-wide py-2 px-5 sm:px-8 border border-[#968851] text-[#968851] active:bg-[#968851] bg-white-500 outline-none rounded-l-full rounded-r-full capitalize hover:bg-[#968851] hover:text-white-500 transition-all hover:shadow-[#968851] ">
      {" "}
      {children}
    </button>
  );
};

export default ButtonOutline;