// components/AnimatedRunningText.tsx
import { motion } from 'framer-motion';

interface AnimatedRunningTextProps {
  text: string;
}

const AnimatedRunningText: React.FC<AnimatedRunningTextProps> = ({ text }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.5 }}
      className="text-lg font-semibold text-gray-800"
    >
      {text}
    </motion.div>
  );
};

export default AnimatedRunningText;
