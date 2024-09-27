import prof from '../assets/prof.jpg'
import { motion } from "framer-motion";
import { PROFILE } from "../constants";
const HeroSection = () => {
  return (
    <>
      <div
        className="relative flex min-h-screen items-end justify-center"
        id="hero"
      >
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          src={prof}
          alt={PROFILE.name}
          className="absolute inset-0 z-10 h-full w-full object-cover"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{duration:1}}
          className="absolute inset-0 z-10 bg-gradient-to-b from-transparent from-60% to-black lg:from-30%"
        ></motion.div>
        <motion.div
        initial={{opacity:0, y:50}}
        animate={{opacity:1, y:0}}
        transition={{duration:1, delay:1}}
        className="z-20 mx-4 max-w-3xl pb-20">
          <h1 className="text-5xl font-bold uppercase tracking-wider md:text-8xl">
            {PROFILE.name}
          </h1>
          <p className="pt-2 font-semibold">{PROFILE.info}</p>
        </motion.div>
      </div>
    </>
  );
};

export default HeroSection;
