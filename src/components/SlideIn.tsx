import { motion } from "framer-motion";

export default function SlideIn({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }} // Start hidden and off to the left
      whileInView={{ opacity: 1, x: 0 }} // Slide in smoothly
      exit={{ opacity: 0, x: 50 }} // Slide out when leaving
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }} // Repeats animation when scrolling
    >
      {children}
    </motion.div>
  );
}
