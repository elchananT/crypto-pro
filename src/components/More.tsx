import { motion } from "motion/react"

const   More = () => {
    return (
        <div className="mt-50 flex flex-col justify-center text-white mb-4">
            <motion.p
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1.1, opacity: 1 }}
                transition={{
                    duration: 1.1,
                    type: "spring",
                    stiffness: 500,
                    damping: 20,
                    mass: 0.8
                }}
                viewport={{ once: true, amount: 0.3 }}
                className="text-5xl text-center text-wrap self-center mb-50 w-2/3"
            >
                Simplicity, performance, and security, <br/>
                empowering you to navigate the digital world with confidence and agility. </motion.p>

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
                className="text-5xl text-center">Why Choose Cryptix?</motion.h2>
            <motion.p
                initial={{ x: 200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 20,
                    mass: 0.8
                }}
                viewport={{ once: true, amount: 0.3 }}
                className="text-center text-wrap mt-6">Benefits designed to provide a seamless, secure, and accessible experience for all users.</motion.p>
        </div>
    )
}
export default More
