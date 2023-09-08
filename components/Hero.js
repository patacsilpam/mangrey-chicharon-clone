import React, { useMemo } from "react";
import Image from "next/image";
import { Link as LinkScroll } from "react-scroll";
import ButtonPrimary from "./misc/ButtonPrimary";
import {motion} from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const Hero = ({
  listUser = [
    {
      name: "Comillas, La Paz Tarlac, Philippines",
      // number: "20",
      icon: "/assets/Icon/location-pin.svg",
    },
    {
      name: "(+63) 963-7081-384",
      // number: "Free Shipping",
      icon: "/assets/Icon/call.svg",
    },
    {
      name: "Free Shipping",
      // number: "50",
      icon: "/assets/Icon/free-delivery.svg",
    },
  ],
}) => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto"
      id="about"
    >
      <ScrollAnimationWrapper>
          <motion.div
            className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16"
            variants={scrollAnimation}>
            <div className=" flex flex-col justify-center items-start row-start-2 sm:row-end-1">
              <h1 className="font-serif text-4xl lg:text-6xl xl:text-5xl font-medium text-black-600 leading-normal">
              Mang Rey's Mushroom Chicharon 
              </h1>
              <p className="text-black-500 lg:text-lg mt-4 mb-6">
               a plant-based oyster mushroom special chicharon, a fresh take on a Filipino favorite. It's crispy, flavorful, and completely vegan, making it a great and environmentally friendly snack.
              </p>
              <LinkScroll
              activeClass="active"
              to="feature"
              spy={true}
              smooth={true}>
              <ButtonPrimary> 
                Learn more
              </ButtonPrimary>
              </LinkScroll>
            </div>
            <div className="flex w-full">
              <motion.div className="h-full w-full" variants={scrollAnimation}>
                <Image
                  src="/assets/mangreylogo.webp"
                  // src="/assets/mangreylogo.svg"
                  alt="  Mang Rey's Mushroom Chicharon Logo"
                  quality={100}
                  width={100}
                  height={100}
                  layout="responsive"
                />
              </motion.div>
            </div>
          </motion.div>
      </ScrollAnimationWrapper>
      <div className="relative w-full flex">
        <ScrollAnimationWrapper
          className="rounded-lg w-full grid grid-flow-row sm:grid-flow-row grid-cols-1 sm:grid-cols-3 py-9 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-gray-100 bg-white-500 z-10">
          {listUser.map((listUsers, index) => (
            <motion.div
              className="flex items-center justify-start sm:justify-center py-4 sm:py-6 w-8/12 px-4 sm:w-auto mx-auto sm:mx-0"
              key={index}
              custom={{duration: 2 + index}}
              variants={scrollAnimation}
            >
              <div className="flex mx-auto w-40 sm:w-auto">
                <div className="flex items-center justify-center bg-brown-100 w-12 h-12 mr-6 rounded-full">
                  <img src={listUsers.icon} className="h-6 w-6" /> 
                </div>
                <div className="flex items-center justify-center">
                  <p className="text-xl text-black-600 font-bold">
                    {listUsers.number}
                  </p>
                  <p className="text-lg text-black-500">{listUsers.name}</p>
                </div>
              </div>
            </motion.div>
          ))}
       </ScrollAnimationWrapper>
       <div
          className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-64 sm:h-48 top-0 mt-8 mx-auto left-0 right-0"
          style={{ filter: "blur(114px)" }}
       ></div>
      </div>
    </div>
  );
};

export default Hero;