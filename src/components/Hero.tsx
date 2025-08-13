import Button from "./Button.tsx";
import {GoStarFill} from "react-icons/go";
import {FaStarHalf} from "react-icons/fa";
import {IoLogoGoogle} from "react-icons/io";
import Glowing from "./Glowing.tsx";

const Hero = () => {
    return (
        <div className="h-full mt-24">
                <Glowing color="white" x={{ base: -700, md: -500 ,lg: -400}} y={-450}/>
                <Glowing color="white" x={1200} y={-400}/>
            <div className="relative z-40 flex flex-col items-center gap-8 text-wrap text-white">
                <h1 className="text-center text-5xl md:text-8xl md:w-6/10 font-semibold">Take Control of Your Digital Assets</h1>
                <p className="text-center text-lg w-4/5 md:w-4/8 mb-2">Cryptix offers a seamless, secure experience for managing your digital assets. Instant transactions, optimized fees, and premium design.</p>
                <Button title="Set started now" variant="primary" />
                <div>
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
                </div>
                        <div className="absolute mt-[25em] z-50 h-0 w-2/3 shadow-[0_20px_500px_70px_rgba(134,239,172,0.8)]"/>
                        <img src="./hero.png" alt="hero" className="w-10/12 rounded-xl"/>
            </div>
        </div>
    )
}
export default Hero
