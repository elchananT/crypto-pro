import Button from "./Button.tsx";

interface StartNowLikeProps {
    heading: string;
    paragraph: string;
}

const StartNowLike = ({ heading, paragraph }: StartNowLikeProps) => {
    return (
        <div className="w-full text-white flex flex-col md:flex-row">
            <div className="md:w-2/3 flex flex-col justify-between">
                <div className="max-md:text-center p-6">
                    <h2 className="text-4xl mb-4">{heading}</h2>
                    <p className="text-wrap text-lg">{paragraph}</p>
                </div>
            </div>
            <div className="md:w-1/3 md:border-l border-gray-600/70">
                <div className="h-1/2"/>
                <Button title="Create account now" variant='secondary' right={true}/>
            </div>
        </div>
    )
}
export default StartNowLike
