import { motion } from "framer-motion";


const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.8,
    },
  },
};
const Blogs = () => {
  return (
    <div
      id="blogs"
      className="container mx-auto mt-20 py-16 tracking-tighter"
    >
      <h2 className="mb-12 text-center text-4xl font-semibold ">
        Latest Blogs
      </h2>
      <motion.div
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
      viewport={{once:true}}
      className="mx-auto max-w-3xl h-64 border border-neutral-800 rounded-lg flex justify-center items-center">
        <h1 className="italic text-neutral-500">Blogs will be uploaded</h1>
      </motion.div>
    </div>
  );
};

export default Blogs;
