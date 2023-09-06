import { motion } from "framer-motion";
import { forwardRef } from "react";

export default forwardRef(function Menu({ openMenu, children }, ref) {
  return (
    <motion.ul
      ref={ref}
      initial={{ scale: 0.6, opacity: 0 }}
      exit={{ scale: 0.6, opacity: 0 }}
      transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.3 }}
      animate={{ scale: 1, opacity: 1 }}
      className={` font-semibold flex flex-col  object-top origin-top md:absolute md:inset-x-0 rounded-b-md md:top-full text-white  md:bg-gold-500 `}
    >
      {children}
    </motion.ul>
  );
});
