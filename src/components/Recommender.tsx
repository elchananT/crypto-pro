import { motion } from "motion/react";
import {MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight} from "react-icons/md";
import TypewriterRealistic from "./TypewriterRealistic.tsx";

const Recommender = () => {
    return (
        <div className="flex flex-col md:flex-row text-white">
            {/*Card*/}
            <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
                className="h-[60vh] flex flex-col justify-between md:w-2/3 text-wrap bg-[#1B1A21] p-6 border border-gray-600/70">
                <motion.img
                    initial={{ y: -20, x: -20 }}
                    whileInView={{ y: [-22, 10, -15, 4, -7, 10, -1, 0], x: [-22, 10, -15, 4, -7, 10, -1, 0] }}
                    transition={{ duration: 3, delay: 0.2 }}
                    viewport={{ once: true, amount: 0.3 }}
                    src="./comment.png" alt="person" className="w-[7rem]"/>
                <TypewriterRealistic size="medium" baseText={`"Criptix makes crypto tradign effortless. Fast transaction, low fees, and a sleek interface-extly what I needed."`} addText={`exactly what I needed!"`} deleteCount={21}/>

                <div>
                    <motion.p
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 3, delay: 0.2 }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="font-semibold mb-1">Alex M.</motion.p>
                    <div className="text-gray-300 flex justify-between">
                        <motion.span
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true, amount: 0.3 }}
                        >Blockchain Analyst at NovaaChain</motion.span>
                        <span className="text-lg">1/3</span>
                        </div>
                </div>
            </motion.div>

            <div className="md:w-1/3 flex justify-between md:flex-col">
                <div className="h-4/6"/>
                <motion.button
                    initial={{ x: 100 }}
                    whileInView={{ x: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="h-1/6 max-md:w-1/2 flex items-center justify-center gap-2 text-gray-300 text-xl max-md:border-r md:border-t border-gray-600/70 md:justify-start cursor-pointer py-8 px-4">
                    <motion.span
                        whileHover={{ scale: 1.03, x: -12, y: -5 }}
                        initial={{ x: -100 }}
                        whileInView={{ x: 0 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="flex items-center"
                    >
                        <MdOutlineKeyboardArrowLeft  size={32} />
                    Previous
                    </motion.span>

                </motion.button>
                <motion.button
                    initial={{ x: -100 }}
                    whileInView={{ x: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="h-1/6 max-md:w-1/2 flex items-center justify-center gap-2 text-gray-300 text-xl md:border-t border-gray-600/70 md:justify-end cursor-pointer py-8 px-4">
                    <motion.span
                        whileHover={{ scale: 1.03, x: 12, y: -5 }}
                        initial={{ x: -100 }}
                        whileInView={{ x: 0 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="flex items-center"
                    >Next
                    <MdOutlineKeyboardArrowRight  size={32} />
                    </motion.span>
                </motion.button>
            </div>

        </div>
    )
}
export default Recommender
