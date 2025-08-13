import {useState} from "react";
import {FiPlus} from "react-icons/fi";
import {AnimatePresence, motion} from "motion/react";

interface AccordionProps {
    heading: string;
    content: string;
}

const Accordion = ({ content, heading}: AccordionProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleClick = () => setIsOpen(!isOpen);

    return (
        <div className="relative text-white">
            <div className="flex justify-between items-center border border-gray-600/70 px-8 py-6">
                <h3 className="text-lg">{heading}</h3>
                <button
                    onClick={handleClick}
                    className="text-[#00FFB2] cursor-pointer"
                >
                    <FiPlus size={32}/>
                </button>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        key="accordion-content"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{
                            duration: 0.4,
                            ease: [0.25, 0.1, 0.25, 1]
                        }}
                        className="md:absolute md:z-50 md:bg-[#08070E] text-gray-300 border border-gray-600/70 px-8 py-4 overflow-hidden"
                    >
                        <p>{content}</p>
                    </motion.div>
                )}
            </AnimatePresence>


        </div>
    )
}
export default Accordion
