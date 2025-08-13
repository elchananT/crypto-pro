import { motion } from "motion/react";
import Button from "./Button.tsx";
import Glowing from "./Glowing.tsx";

const PreFooter = () => {
    return (
        <div className="flex flex-col justify-center items-center text-wrap text-center text-white overflow-hidden py-16 px-6">

            <div>
                <Glowing x={-400} y={-500} />
            </div>

            <div className="md:w-3/5 flex flex-col items-center gap-4">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y:0 }}
                    transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 20,
                        mass: 0.8
                    }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="text-5xl">Ready to take control of your crypto?</motion.h2>
                <motion.p
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1.1 }}
                    transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 20,
                        mass: 0.8
                    }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="my-6 md:mb-2 md:w-12/13">Join thousands of users who trust Cryptix for secure, seamless, and efficient cryptocurrency transactions. Start now and unlock the full potential of digital assets.</motion.p>
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y:0 }}
                    transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 20,
                        mass: 0.8
                    }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <Button title="Get started now" variant="primary" />
                </motion.span>
            </div>

            <div className="relative">
                <Glowing x={-400} y={-110} color="circle-green"/>
            </div>
        </div>
    )
}
export default PreFooter
