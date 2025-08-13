import {MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight} from "react-icons/md";

const Recommender = () => {
    return (
        <div className="flex flex-col md:flex-row text-white">
            {/*Card*/}
            <div className="h-[60vh] flex flex-col justify-between md:w-2/3 text-wrap bg-[#1B1A21] p-6 border border-gray-600/70">
                <img src="./comment.png" alt="person" className="w-[7rem]"/>
                <h2 className="text-4xl">
                    "Criptix makes crypto tradign effortless. Fast
                    transaction, low fees, and a sleek interface-exactly
                    what I needed."
                </h2>

                <div>
                    <p className="font-semibold mb-1">Alex M.</p>
                    <div className="text-gray-300 flex justify-between">
                        <span>Blockchain Analyst at NovaaChain</span>
                        <span className="text-lg">1/3</span>
                        </div>
                </div>
            </div>

            <div className="md:w-1/3 flex justify-between md:flex-col">
                <div className="h-4/6"/>
                <button className="h-1/6 max-md:w-1/2 flex items-center justify-center gap-2 text-gray-300 text-xl max-md:border-r md:border-t border-gray-600/70 cursor-pointer py-8 px-4">
                    <MdOutlineKeyboardArrowLeft  size={32} />
                    Previous
                </button>
                <button className="h-1/6 max-md:w-1/2 flex items-center justify-center gap-2 text-gray-300 text-xl md:border-t border-gray-600/70 md:justify-end cursor-pointer py-8 px-4">
                    Next
                    <MdOutlineKeyboardArrowRight  size={32} />
                </button>
            </div>

        </div>
    )
}
export default Recommender
