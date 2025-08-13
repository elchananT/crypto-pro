import { motion } from "motion/react";
import TypewriterRealistic from "./TypewriterRealistic.tsx";

interface Item {
    img: string;
    heading: string;
    paragraph: string;
}

const items: Item[] = [
    { img: "./form.png", heading: "Create your account", paragraph: "Sign up easily and secure your profile in just a few steps."},
    { img: "./wallet.png", heading: "Foud your wallet", paragraph: "Deposit your cryptos or make a transfer to start trading."},
    { img: "./notification.png", heading: "Buy, sell, or convert", paragraph: "Enjoy the simplicity of a platform that makes every transaction seamless in real-time."}
]

const Cards = () => {
    return (
        <div className="flex flex-wrap">
            {items.map(({ img, heading, paragraph }, index) => (
                <div
                    key={index}
                    className="w-full sm:w-1/2 xl:w-1/3 flex flex-col justify-between text-white border border-gray-600/70 p-6 relative bg-cover bg-center h-[24rem]"
                    style={{ backgroundImage: `url(${img})` }}
                >
                    <div className="relative z-10 flex flex-col justify-between h-full">
                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.6,
                                ease: "easeInOut",
                                delay: index * 0.2
                            }}
                            viewport={{ once: true, amount: 0.3 }}
                            className="w-[4rem] h-[4rem] flex justify-center items-center p-3 shadow-[inset_0_0_16px_16px_rgba(107,114,128,0.3)] border border-gray-600/70 rounded-full">
                            <p>{index + 1}</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.6,
                                ease: "easeOut",
                                delay: index * 0.25
                            }}
                            viewport={{ once: true, amount: 0.6 }}
                            className="flex flex-col gap-4 mt-4"
                        >
                            <TypewriterRealistic baseText={heading} addText="" deleteCount={0} size='small'/>
                            <motion.p
                                initial={{ opacity: 0, x: 10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                viewport={{ once: true, amount: 0.3 }}
                                className="mt-2"
                            >
                                {paragraph}
                            </motion.p>
                        </motion.div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Cards
