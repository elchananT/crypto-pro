import { motion } from "motion/react";
import TypewriterRealistic from "./TypewriterRealistic.tsx";

const items: string[] = ["Why Cryptix?", "Cryptos", "How it works", "Testimonials", "FAQ"];
const socials: string[] = ["Twitter (X)", "Instagram", "LinkdIn"];

const Footer = () => {
    return (
        <footer className="w-screen bg-[#08070E] text-gray-400 text-lg px-8 xl:px-28">
            <div className="border-x border-gray-600/70 pb-6">
            <div className="h-full flex flex-col sm:flex-row sm:justify-between py-6 px-6 md:px-12">
                {/*Left*/}
                <section className="flex flex-col justify-around gap-6 sm:justify-between">
                    <section className="flex flex-col gap-5">
                        <div className="cursor-pointer flex items-center gap-2">
                            <motion.img
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, delay: 0.2 }}
                                viewport={{ once: true, amount: 0.3 }}
                                src="./logo.svg" className="h-[2rem] w-[2rem] object-cover" />
                            <TypewriterRealistic  baseText="Cryptix" addText="Cryptix" deleteCount={7} size="medium" speed={Math.random() * 100} />
                        </div>
                        <motion.p
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.2 }}
                            viewport={{ once: true, amount: 0.3 }}
                        >Secure, fast, and seamless crypto trading. <br/>
                            Cryptix makes digital assets effortless.</motion.p>
                    </section>

                    <span className="flex items-center">
                        <TypewriterRealistic baseText="Created by" addText="" deleteCount={0} size="small"/>
                        <motion.img
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1.1 }}
                            transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 15,
                                mass: 0.5,
                                delay: 2
                            }}
                            viewport={{ once: true, amount: 0.3 }}
                            src="./person.png" alt="person" className="rounded-full h-4 inline mx-2"/>
                        <TypewriterRealistic baseText="Author in Framer" addText="" deleteCount={0} size="small"/>

                    </span>
                </section>

            {/*Right*/}
                <section className="flex gap-18 mt-12 md:mt-auto md:w-1/4">
                    <div className="flex flex-col items-start gap-4">
                        <motion.h3
                            initial={{ opacity: 0, x: -300 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.2, delay: 0.2 }}
                            viewport={{ once: true, amount: 0.3 }}
                            className="text-white mb-2">Navigation</motion.h3>
                        {items.map((title: string, index: number) => (
                            <motion.button
                                initial={{ opacity: 0, x: -500 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: index * 0.3, delay: 0.2 }}
                                viewport={{ once: true, amount: 0.3 }}
                                key={index} className="cursor-pointer">{title}</motion.button>
                        ))}
                    </div>

                    <div className="flex flex-col items-start gap-4">
                        <motion.h3
                            initial={{ opacity: 0, x: -400 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.2, delay: 0.2 }}
                            viewport={{ once: true, amount: 0.3 }}
                            className="text-white mb-2">Socials</motion.h3>
                        {socials.map((social: string, index: number) => (
                            <motion.button key={index}
                                           initial={{ opacity: 0, x: -600 }}
                                           whileInView={{ opacity: 1, x: 0 }}
                                           transition={{ duration: index * 0.35, delay: 0.2 }}
                                           viewport={{ once: true, amount: 0.3 }}
                                           className="cursor-pointer">{social}</motion.button>
                        ))}
                    </div>
                </section>
            </div>
                <div className="flex justify-center">
                    <motion.p
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.35, delay: 0.2 }}
                        viewport={{ once: true, amount: 0.1 }}
                        className="text-sm text-wrap w-10/12 text-gray-400 text-center mt-8">This website is intended for educational purposes only. It is not affiliated with or related to any real-world company or business.</motion.p>
                </div>
            </div>

        </footer>
    )
}
export default Footer
