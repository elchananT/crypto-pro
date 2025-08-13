import React from "react";

type PositionValue = number | { base: number; md?: number; lg?: number };

interface GlowingProps {
    color?: "white" | "green" | "circle-green";
    x: PositionValue;
    y: PositionValue;
}

const getResponsiveValue = (val: PositionValue, screen: "base" | "md" | "lg") => {
    if (typeof val === "number") return val;
    return val[screen] ?? val.base;
};

const Glowing = ({ color = "white", x, y }: GlowingProps) => {
    const [screen, setScreen] = React.useState<"base" | "md" | "lg">("base");

    React.useEffect(() => {
        const update = () => {
            if (window.innerWidth >= 1024) setScreen("lg");
            else if (window.innerWidth >= 768) setScreen("md");
            else setScreen("base");
        };
        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, []);

    return (
        <div
            className="absolute transition-transform duration-500"
            style={{
                transform: `translate(${getResponsiveValue(x, screen)}px, ${getResponsiveValue(y, screen)}px)`
            }}
        >
            <div className={`flex justify-center items-center w-[50rem] ${color === "white" ? "rounded-full bg-white/[0.6%] h-[50rem] " : "bg-green-300/[1.2%] rounded-[60%]"} ${ color === "circle-green" ? "h-[50rem]" : "h-[10rem]"}`}>
                <div className={`flex justify-center items-center h-10/12 w-10/12 ${color === "white" ? "rounded-full bg-white/[0.8%]" : "bg-green-300/[1.4%] rounded-[60%]"}`}>
                    <div className={`flex justify-center items-center h-10/12 w-10/12 ${color === "white" ? "rounded-full bg-white/[0.10%]" : "bg-green-300/[1.6%] rounded-[60%]"}`}>
                        <div className={`h-10/12 w-10/12 ${color === "white" ? "rounded-full bg-white/[1.1%]" : "bg-green-300/[1.8%] rounded-[60%]"}`}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Glowing;

