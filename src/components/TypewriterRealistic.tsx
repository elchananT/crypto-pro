import React, { useEffect, useState } from "react";

interface TypewriterProps {
    baseText: string;
    deleteCount: number;
    addText: string;
    speed?: number;
    pause?: number;
}

const TypewriterRealistic: React.FC<TypewriterProps> = ({
                                                            baseText,
                                                            deleteCount,
                                                            addText,
                                                            speed = 100,
                                                            pause = 1000,
                                                        }) => {
    const [phase, setPhase] = useState<"typingBase" | "deleting" | "typingAdd" | "done">("typingBase");
    const [displayedText, setDisplayedText] = useState("");
    const [index, setIndex] = useState(0);

    useEffect(() => {
        let timeout: number | undefined;

        if (phase === "typingBase") {
            if (index < baseText.length) {
                timeout = setTimeout(() => {
                    setDisplayedText(baseText.slice(0, index + 1));
                    setIndex(index + 1);
                }, speed);
            } else {
                timeout = setTimeout(() => {
                    setPhase("deleting");
                    setIndex(baseText.length);
                }, pause);
            }
        } else if (phase === "deleting") {
            if (index > baseText.length - deleteCount) {
                timeout = setTimeout(() => {
                    setDisplayedText(baseText.slice(0, index - 1));
                    setIndex(index - 1);
                }, speed);
            } else {
                timeout = setTimeout(() => {
                    setPhase("typingAdd");
                    setIndex(0);
                }, pause);
            }
        } else if (phase === "typingAdd") {
            if (index < addText.length) {
                timeout = setTimeout(() => {
                    setDisplayedText(baseText.slice(0, baseText.length - deleteCount) + addText.slice(0, index + 1));
                    setIndex(index + 1);
                }, speed);
            } else {
                timeout = setTimeout(() => {
                    setPhase("done");
                }, pause);
            }
        }

        return () => clearTimeout(timeout);
    }, [phase, index, baseText, addText, deleteCount, speed, pause]);

    return (
        <h1
            style={{
                fontSize: "4rem",
                fontWeight: "bold",
                fontFamily: "monospace",
                whiteSpace: "pre-wrap",
            }}
        >
            {displayedText}
            <span
                style={{
                    display: "inline-block",
                    width: "2px",
                    height: "1.2em",
                    marginLeft: "2px",
                    animation: "blink 1s step-start infinite",
                    verticalAlign: "bottom",
                    borderRadius: "1px",
                    backgroundColor: "black",
                }}
            />
            <style>{`
        @keyframes blink {
          50% { opacity: 0; }
        }
      `}</style>
        </h1>
    );
};
export default TypewriterRealistic;
