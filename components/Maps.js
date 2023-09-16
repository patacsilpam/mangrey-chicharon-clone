import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const Flavors = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  return (
    <div
      className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14"
      id="pricing"
    >
      <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
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
            <motion.div className="sm:px-2 py-12 w-full xl:px-8 mt-16" variants={scrollAnimation}> 
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d246171.7865124804!2d120.5711588!3d15.407101!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396c505a7da4e71%3A0xc49f30bd8220d5c6!2sMang%20Rey&#39;s%20Mushroom%20Chicharon!5e0!3m2!1sen!2sph!4v1694258858668!5m2!1sen!2sph"
              className="w-full rounded-3xl aspect-video" loading="lazy">
              </iframe>
            </motion.div>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper>
            <motion.div className="w-full flex justify-evenly items-center mt-4 flex-wrap lg:flex-nowrap" variants={scrollAnimation}>
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </div>
  );
};

export default Flavors;
