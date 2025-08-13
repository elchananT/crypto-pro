import { motion } from "motion/react";
import Button from "./Button.tsx";

interface StartNowLikeProps {
    heading: string;
    paragraph: string;
}

const StartNowLike = ({ heading, paragraph }: StartNowLikeProps) => {
    return (
        <div className="w-full text-white flex flex-col md:flex-row">
            <div className="md:w-2/3 flex flex-col justify-between">
                <div className="max-md:text-center p-6">
                    <motion.h2
                        initial={{ x: -200, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 500,
                            damping: 20,
                            mass: 0.8
                        }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="text-4xl mb-4">{heading}</motion.h2>
                    <motion.p
                        initial={{ x: -200, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 500,
                            damping: 20,
                            mass: 0.8,
                            delay: 0.2
                        }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="text-wrap text-lg">{paragraph}</motion.p>
                </div>
            </div>
            <motion.div
                initial={{ x: -500, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 20,
                    mass: 0.8,
                    delay: 0.5
                }}
                viewport={{ once: true, amount: 0.3 }}
                className="md:w-1/3 md:border-l border-gray-600/70">
                <div className="h-1/2"/>
                <Button title="Create account now" variant='secondary' right={true}/>
            </motion.div>
        </div>
    )
}
export default StartNowLike
