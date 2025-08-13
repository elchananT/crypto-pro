import Button from "./Button.tsx";
import Glowing from "./Glowing.tsx";

const PreFooter = () => {
    return (
        <div className="flex flex-col justify-center items-center text-wrap text-center text-white overflow-hidden py-16 px-6">

            <div className="relative">
                <Glowing x={-400} y={-500} />
            </div>

            <div className="md:w-3/5 flex flex-col items-center gap-4">
                <h2 className="text-5xl">Ready to take control of your crypto?</h2>
                <p className="my-6 md:mb-2 md:w-12/13">Join thousands of users who trust Cryptix for secure, seamless, and efficient cryptocurrency transactions. Start now and unlock the full potential of digital assets.</p>
                <Button title="Get started now" variant="primary" />
            </div>

            <div className="relative">
                <Glowing x={-400} y={-110} color="circle-green"/>
            </div>
        </div>
    )
}
export default PreFooter
