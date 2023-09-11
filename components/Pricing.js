import React, { useMemo } from "react";
import Image from "next/image";
import Testimoni from "./Testimoni";
import ButtonPrimary from "./misc/ButtonPrimary";
import ButtonOutline from "./misc/ButtonOutline.";
import Maps from "../public/assets/HugeGlobal.svg";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const Pricing = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  const flavors = [
    {
      flavor: "Classic Mushroom Chicharon 100g",
      image: "/assets/flavors/sample-flavor.png"
    },
    {
      flavor: "Cheese Mushroom Chicharon 100g",
      image: "/assets/flavors/sample-flavor.png"
    },
    {
      flavor: "Honey Butter Mushroom Chicharon 100g",
      image: "/assets/flavors/sample-flavor.png"
    },
    {
      flavor: "Salted Egg  Chicharon 100g",
      image: "/assets/flavors/sample-flavor.png"
    },
    {
      flavor: "BBQ Chicharon 100g",
      image: "/assets/flavors/sample-flavor.png"
    },
    {
      flavor: "Sour Cream Chicharon 100g",
      image: "/assets/flavors/sample-flavor.png"
    },
    {
      flavor: "Chili Garlic Chicharon 100g",
      image: "/assets/flavors/sample-flavor.png"
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
          <ScrollAnimationWrapper className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {flavors.map((item,index) => (
              <motion.div
                key={index}
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center border-2 border-gray-500 rounded py-4 px-6 lg:px-12 xl:px-20"
                whileHover={{
                  scale : 1.1,
                  transition: {
                    duration: .2
                  }
                }}
              >
                <div className="">
                  <div>
                    <Image 
                      src={item.image}
                      quality={100}
                      width={100}
                      height={100}
                      layout="responsive"
                      loading="lazy"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <p className="p-3 text-sm md:text-lg">{item.flavor}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </ScrollAnimationWrapper>
          </div>
        </div>
        <div className="flex flex-col w-full my-16">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed w-9/12 sm:w-6/12 lg:w-4/12 mx-auto">
                Across the Nation, Your Best Choice{"."}
            </motion.h3>
            <motion.p className="leading-normal  mx-auto my-2 w-10/12 sm:w-7/12 lg:w-6/12" variants={scrollAnimation}>
            We're proud to serve customers nationwide, making our high-quality offerings accessible to all, no matter where you call home.
            </motion.p>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper>
            <motion.div className="py-12 w-full px-8 mt-16" variants={scrollAnimation}> 
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d246171.7865124804!2d120.5711588!3d15.407101!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396c505a7da4e71%3A0xc49f30bd8220d5c6!2sMang%20Rey&#39;s%20Mushroom%20Chicharon!5e0!3m2!1sen!2sph!4v1694258858668!5m2!1sen!2sph"
              className="w-full h-screen rounded" loading="lazy">
              </iframe>
            </motion.div>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper>
            <motion.div className="w-full flex justify-evenly items-center mt-4 flex-wrap lg:flex-nowrap" variants={scrollAnimation}>
              {/* <Netflix className="h-18 w-auto" /> 
              <Maps className="w-full h-auto" />
                <img
                src="/assets/Icon/amazon.png"
                className="h-14 w-auto mt-4 lg:mt-2"
                alt=""
              />
              <img
                src="/assets/Icon/netflix.png"
                className="h-14 w-auto mt-2 lg:mt-0"
                alt=""
              />
              <img
                src="/assets/Icon/reddit.png"
                className="h-12 w-auto mt-2 lg:mt-0"
                alt=""
              />
              <img
                src="/assets/Icon/discord.png"
                className="h-14 w-auto mt-2 lg:mt-0"
                alt=""
              />
              <img
                src="/assets/Icon/spotify.png"
                className="h-12 w-auto mt-2 lg:mt-0"
                alt=""
              />
              
              */}
              
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
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
                    Order Now and <br /> Get Special Features!
                  </h5>
                  <p>Let's subscribe with us and find the fun.</p>
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
