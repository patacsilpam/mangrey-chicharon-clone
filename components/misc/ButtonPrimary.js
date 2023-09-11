// import React from "react";

// const ButtonPrimary = ({ children, addClass }) => {
//   return (
//     <button
//       className={
//         "py-3 lg:py-4 px-12 lg:px-16 text-black-100 font-semibold rounded-lg border-2 border-white bg-black-100 hover:shadow-[#968851] hover:bg-black hover:border-0  hover:border-white outline outline-offset-2 transition-all outline-none " +
//         addClass
//       }
//     >
//       {children}
//     </button>
//   );
// };

// export default ButtonPrimary;

import React from "react";

const ButtonPrimary = ({ children, addClass }) => {
  return (
    <button
    href="https://www.facebook.com/profile.php?id=100092878066198" 
    taget="_blank"
      className={
        "py-3 lg:py-4 px-12 lg:px-16 text-black-100 font-semibold rounded-lg border-2 border-black  bg-black-100 hover:shadow-[#968851]  hover:border-[#968851] outline outline-offset-2 transition-all outline-none " +
        addClass
      }
    >
      {children}
    </button>
  );
};

export default ButtonPrimary;
