import { PiList } from "react-icons/pi"
import Button from "./Button.tsx";
import {useState} from "react";
import { RxCross1 } from "react-icons/rx";
import {motion, useScroll, useTransform } from "motion/react";

const Navigation = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const { scrollY } = useScroll();
    const opacity =  useTransform(scrollY, [0,50, 50, 100], [1, 1, 1, 0.97]);


    return (
        <motion.div className="fixed top-0 z-50 border-b border-gray-600/70" style={{ opacity }}>
            <nav className="flex justify-between items-center w-screen px-8 xl:px-28 py-6 bg-[#08070E]">
                {/*Desktops*/}
                <div className="flex items-center">
                    <div className="cursor-pointer flex items-center gap-2">
                        <img src="./logo.svg" className="flex-1 h-[2rem] w-[2rem] object-cover" />
                        <h2 className="text-3xl text-white">Cryptix</h2>
                    </div>

                    <div className="max-xl:hidden text-gray-300 flex items-center gap-6 ml-10 pt-1">
                        <button className="cursor-pointer">Why Cryptix?</button>
                        <button className="cursor-pointer">Cryptos</button>
                        <button className="cursor-pointer">How it works</button>
                        <button className="cursor-pointer">Testimonials</button>
                        <button className="cursor-pointer">FAQ</button>
                    </div>
                </div>

                <span className="hidden xl:inline">
                    <Button title="Get started now" variant="primary"/>
                </span>


            {/*Mobile*/}
                <button
                    onClick={() => setIsVisible(!isVisible)}
                    className={`text-white xl:hidden`}
                >
                    {isVisible ?  <RxCross1 size={36} /> : <PiList size={36}/>}
                </button>
            </nav>

            {isVisible && (
                <div className="absolute z-50 bg-[#08070E] w-screen text-lg py-4 flex flex-col items-center border-y border-gray-600/70">
                    <div className="text-gray-300 flex flex-col items-center gap-6 pt-1">
                        <button className="cursor-pointer">Why Cryptix?</button>
                        <button className="cursor-pointer">Cryptos</button>
                        <button className="cursor-pointer">How it works</button>
                        <button className="cursor-pointer">Testimonials</button>
                        <button className="cursor-pointer">FAQ</button>
                        <Button title="Get started now" variant="primary"/>
                    </div>
                </div>
            )}
        </motion.div>
    )
}
export default Navigation
