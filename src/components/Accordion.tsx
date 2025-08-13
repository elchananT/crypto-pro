import {useState} from "react";
import {FiPlus} from "react-icons/fi";

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

            {isOpen && (
                <div className="md:absolute md:z-50 md:bg-[#08070E] text-wrap text-gray-300 border border-gray-600/70 px-8 py-4">
                    <p>{content}</p>
                </div>
            )}
        </div>
    )
}
export default Accordion
