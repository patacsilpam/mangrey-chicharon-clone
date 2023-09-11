import React, { useMemo } from "react";
import Image from "next/image";
import Testimoni from "./Testimoni";
import Maps from "../components/Maps";
import ButtonPrimary from "./misc/ButtonPrimary";
import ButtonOutline from "./misc/ButtonOutline.";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const Pricing = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  const flavors = [
    // {
    //   flavor: "Classic Mushroom Chicharon 100g",
    //   image: "/assets/flavors/sample-flavor.webp"
    // },
    {
      flavor: "Cheese Mushroom Chicharon 100g",
      image: "/assets/flavors/sample-flavor.webp"
    },
    {
      flavor: "Honey Butter Mushroom Chicharon 100g",
      image: "/assets/flavors/sample-flavor.webp"
    },
    {
      flavor: "Salted Egg  Chicharon 100g",
      image: "/assets/flavors/sample-flavor.webp"
    },
    {
      flavor: "BBQ Chicharon 100g",
      image: "/assets/flavors/sample-flavor.webp"
    },
    {
      flavor: "Sour Cream Chicharon 100g",
      image: "/assets/flavors/sample-flavor.webp"
    },
    {
      flavor: "Chili Garlic Chicharon 100g",
      image: "/assets/flavors/sample-flavor.webp"
    }
  ]
  return (
    <div
      className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14"
      id="pricing"
    >
      <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed"
            >
              Choose Your Flavor
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center"
            >
              Let's choose the package that is best for you and explore it happily
              and cheerfully.
            </motion.p>
          </ScrollAnimationWrapper>
          <div className="">
          <ScrollAnimationWrapper className="grid grid-cols-1 md:grid-cols-3  gap-7">
            {flavors.map((item,index) => (
              <motion.div
                key={index}
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-3xl py-4 px-6 lg:px-12 xl:px-20"
                whileHover={{
                  scale : 1.1,
                  transition: {
                    duration: 0.3
                  }
                }}
              >
                <div className="">
                  {/* <div> */}
                    <Image 
                      src={item.image}
                      quality={100}
                      width={100}
                      height={100}
                      layout="responsive"
                      className="object-cover w-full h-full"
                      loading="lazy"
                    />
                  {/* </div> */}
                  <div>
                    <p className="p-3 text-sm md:text-lg">{item.flavor}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </ScrollAnimationWrapper>
          </div>
        </div>
        <Maps/> 
        <div className="flex flex-col w-full my-16" id="testimoni">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-normal w-9/12 sm: lg:w-4/12 mx-auto">
              Trusted by Thousands of Happy Customer{" "}
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="leading-normal mx-auto mb-2 mt-4 w-10/12 sm:w-7/12 lg:w-6/12"
            >
              These are the stories of our customers to distributors who have joined us with great
              pleasure when using this healthy food.
            </motion.p>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="w-full flex flex-col py-12">
            <motion.div variants={scrollAnimation}>
              <Testimoni />
            </motion.div>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="relative w-full mt-16">
            <motion.div variants={scrollAnimation} custom={{duration: 3}}>
              <div className="absolute rounded-xl  py-8 sm:py-14 px-6 sm:px-12 lg:px-16 w-full flex flex-col sm:flex-row justify-between items-center z-10 bg-white-500">
                <div className="flex flex-col text-left w-10/12 sm:w-7/12 lg:w-5/12 mb-6 sm:mb-0">
                  <h5 className="text-black-600 text-xl sm:text-2xl lg:text-3xl leading-relaxed font-medium">
                     Grab your <span className="font-bold text-[#968851]">Special Chicharon</span> now!
                  </h5>
                  <p> Order now and experience the taste of Mang Rey's Special Mushroom Chicharon. 🛒</p>
                </div>
                <ButtonPrimary>Order Now</ButtonPrimary>
              </div>
              <div
                className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-60 sm:h-56 top-0 mt-8 mx-auto left-0 right-0"
                style={{ filter: "blur(114px)" }}
                ></div>
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
