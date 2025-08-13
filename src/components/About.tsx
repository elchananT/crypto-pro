import {FiShield} from "react-icons/fi";
import React from "react";
import {HiOutlineLightningBolt} from "react-icons/hi";
import {PiDesktop} from "react-icons/pi";
import {CgArrowsExpandRight} from "react-icons/cg";

interface Items { icon: React.JSX.Element; heading: string; paragraph: string }[];

const items: Items[] = [
    {
        icon: <FiShield size={34}/>,
        heading: "Maximum Security",
        paragraph: "Your assets are protected with cutting-edge security protocols."
    },
    {
        icon: <HiOutlineLightningBolt size={34}/>,
        heading: "Instant Transactions",
        paragraph: "Execute your transactions fast in real-time, without any delays."
    },
    {
        icon: <CgArrowsExpandRight size={34}/>,
        heading: "Optimized Feed",
        paragraph: "Benefit from some of the lowest fees you can find on the market."
    },
    {
        icon: <PiDesktop size={34}/>,
        heading: "Premium Interface",
        paragraph: "An elegant, intuitive design that's easy to use, even for beginners."
    },
];

const About = () => {
    return (
        <div className="text-white">
            <div className="flex flex-wrap flex-col sm:flex-row items-center justify-center">
                {items.map(({icon, heading, paragraph}, index) => (
                    <div key={index} className={[
                        "w-full h-full md:w-1/2 xl:w-1/4 flex flex-col gap-2 p-6 border border-gray-600/70"
                    ]
                        .filter(Boolean)
                        .join(" ")}
                    >
                        <div className="w-[4rem] h-[4rem] flex justify-center items-center flex-1 p-3 shadow-[inset_0_0_12px_12px_rgba(107,114,128,0.3)] border border-gray-600/70 rounded-full">
                            {icon}
                        </div>

                        <h3 className="mt-8 font-medium">{heading}</h3>
                        <p className="text-wrap">{paragraph}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default About
