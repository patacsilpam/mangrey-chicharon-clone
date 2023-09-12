import React from "react";
import Logo from "../../public/assets/mangreylogo.svg";
import Facebook from "../../public/assets/Icon/facebook.svg";
import Twitter from "../../public/assets/Icon/twitter.svg";
import Instagram from "../../public/assets/Icon/instagram.svg";
const Footer = () => {
  return (
    <div className="bg-white-300 pt-44 pb-24">
      <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-6 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-4">
        <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start ">
          <Logo className="h-14 w-auto mb-6" />
          <p className="mb-4">
            <strong className="font-medium">Mang Rey's Mushroom Chicharon</strong>, a plant-based oyster mushroom special chicharon, is a fresh take on a Filipino favorite.
          </p>
          <div className="flex w-full mt-2 mb-8 -mx-2">
            {/* <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <Facebook className="h-6 w-6" />
            </div>
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <Twitter className="h-6 w-6" />
            </div>
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <Instagram className="h-6 w-6" />
            </div> */}
          </div>
          <p className="text-gray-400">©{new Date().getFullYear()} Mang Rey's Mushroom Chicharon</p>
        </div>
        <div className=" row-span-2 sm:col-span-2 sm:col-start-7 sm:col-end-9 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Our Flavors</p>
          <ul className="text-black-500 ">
              <li className="my-2 hover:text-[#968851]  cursor-pointer transition-all">
                Classic{" "}
              </li>
              <li className="my-2 hover:text-[#968851]  cursor-pointer transition-all">
                Cheese{" "}
              </li>
              <li className="my-2 hover:text-[#968851]  cursor-pointer transition-all">
                Honey Butter{" "}
              </li>
              <li className="my-2 hover:text-[#968851]  cursor-pointer transition-all">
                Salted Egg{" "}
              </li>
              <li className="my-2 hover:text-[#968851]  cursor-pointer transition-all">
                BBQ{" "}
              </li>
              <li className="my-2 hover:text-[#968851]  cursor-pointer transition-all">
                Sour Cream{" "}
              </li>
              <li className="my-2 hover:text-[#968851]  cursor-pointer transition-all">
                Chilli Garlic{" "}
              </li>
            </ul>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-9 sm:col-end-11 flex flex-col">
        <p className="text-black-600 mb-4 font-medium text-lg">Partnerships</p>
          <ul className="text-black-500">
            <li className="my-2 hover:text-[#968851]  cursor-pointer transition-all">
              For Resellers{" "}
            </li>
            <li className="my-2 hover:text-[#968851]  cursor-pointer transition-all">
              For Distributors{" "}
            </li>
          </ul>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-11 sm:col-end-13 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Socials</p>
          <ul className="text-black-500 ">
            <li className="my-2 hover:text-[#968851]  cursor-pointer transition-all">
              Facebook{" "}
            </li>
            <li className="my-2 hover:text-[#968851]  cursor-pointer transition-all">
              Tiktok{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;