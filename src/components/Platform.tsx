import { motion } from "motion/react";
import Button from "./Button.tsx";

const Platform = () => {
    return (
        <div className="w-full text-white flex flex-col md:flex-row">
            <motion.div
                initial={{ x: -200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 20,
                    mass: 0.8
                }}
                viewport={{ once: true, amount: 0.3 }}
                className="md:w-1/2 flex flex-col justify-between">
                <div className="p-6">
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
                        className="text-4xl mb-4">All Cryptos, One Platform</motion.h2>
                    <motion.p
                        initial={{ x: 20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 500,
                            damping: 20,
                            mass: 0.8
                        }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="text-wrap text-lg">Buy, sell, and convert all major cryptocurrencies on a single platform. A seamless experience with no compromises.</motion.p>
                </div>
                <Button title="But crypto now" variant='secondary'/>
            </motion.div>

            <motion.img
                initial={{ x: 200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 20,
                    mass: 0.8
                }}
                viewport={{ once: true, amount: 0.3 }}
                src="./deal.png" alt="dealing" className="md:w-1/2 max-md:border-t md:border-l border-gray-600/70"/>
        </div>
    )
}
export default Platform
