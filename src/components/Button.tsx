import { motion } from "motion/react";
import { GoArrowUpRight } from "react-icons/go"

interface ButtonProps {
    title: string;
    variant: 'primary' | 'secondary';
    right?: boolean;
    delay?: number;
}

const Button = ({ title, variant, right = false, delay = 0 }: ButtonProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1,  y: 0 }}
            transition={{
                duration: 0.35,
                ease: "easeOut",
                delay
            }}
            className={`flex items-center ${variant === 'primary' ? "p-1 bg-[#00FFB2]/20 rounded-full" : "border-t border-gray-600/70 h-14"}`}>
            <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1,  y: 0 }}
                transition={{
                    duration: 0.35,
                    ease: "easeOut",
                    delay
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                className={` w-full px-4 py-2 flex items-center gap-1 cursor-pointer ${variant === 'primary' ? "text-black bg-[#00FFB2] rounded-full" : "text-[#00FFB2]"} ${right && "md:justify-end justify-center"}`}>
                {title}
                <GoArrowUpRight size={24} />
            </motion.button>
        </motion.div>
    )
}
export default Button
