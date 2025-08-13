import Button from "./Button.tsx";
import {GoStarFill} from "react-icons/go";
import {FaStarHalf} from "react-icons/fa";
import {IoLogoGoogle} from "react-icons/io";
import Glowing from "./Glowing.tsx";
import {motion} from "motion/react";
import TypewriterRealistic from "./TypewriterRealistic.tsx";

const Hero = () => {
    return (
        <motion.div className="h-full mt-14 max-md:pt-10 pt-4 md:mt-24">
                <Glowing color="white" x={{ base: -700, md: -500 ,lg: -400}} y={-450}/>
                <Glowing color="white" x={1200} y={-400}/>
            <div className="relative z-40 flex flex-col items-center gap-8 text-wrap text-white">
                <TypewriterRealistic baseText="Take Control of Your Digital Assets" deleteCount={0} addText=""/>
                <motion.p
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1.1 }}
                    transition={{ duration: 0.4, delay: 3.8, ease: 'easeInOut' }}
                    className="text-center text-lg w-4/5 md:w-4/8 mb-2">Cryptix offers a seamless, secure experience for managing your digital assets. Instant transactions, optimized fees, and premium design.</motion.p>
                <Button title="Set started now" variant="primary" delay={4.3}/>
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 20,
                        mass: 0.8,
                        delay: 4.5
                }}>
                    <p className="text-center">They trust us</p>
                    <div className="flex items-center justify-around w-[8rem]">
                        <GoStarFill />
                        <GoStarFill />
                        <GoStarFill />
                        <GoStarFill />
                        <FaStarHalf />
                        <p className="font-semibold mr-1">4.5</p>
                        <IoLogoGoogle />
                    </div>
                </motion.div>
                        <div className="absolute mt-[25em] z-50 h-0 w-2/3 shadow-[0_20px_500px_70px_rgba(134,239,172,0.8)]"/>
                        <motion.img
                            initial={{ scale: 0.9, opacity: 0.02 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{
                                duration: 0.2, ease: 'easeInOut', type: 'spring', stiffness: 200, delay: 5
                            }}
                            src="./hero.png" alt="hero" className="w-10/12 rounded-xl"/>
            </div>
        </motion.div>
    )
}
export default Hero
