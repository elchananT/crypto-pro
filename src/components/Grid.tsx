import type { ReactNode } from "react";

interface GridProps {
    children: ReactNode[];
}

const Grid = ({ children }: GridProps) => {
    return (
        <div className="w-screen border-y border-gray-600/70 px-8 xl:px-28">
            <div className="border-x border-gray-600/70">
                {children.map((child, index) => (
                    <div
                        key={index}
                        className={`${
                            index !== children.length - 1 ? "border-b" : ""
                        } border-gray-600/70`}
                    >
                        {child}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Grid;
