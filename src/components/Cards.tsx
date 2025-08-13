interface Item {
    img: string;
    heading: string;
    paragraph: string;
}

const items: Item[] = [
    { img: "./form.png", heading: "Create your account", paragraph: "Sign up easily and secure your profile in just a few steps."},
    { img: "./wallet.png", heading: "Foud your wallet", paragraph: "Deposit your cryptos or make a transfer to start trading."},
    { img: "./notification.png", heading: "Buy, sell, or convert", paragraph: "Enjoy the simplicity of a platform that makes every transaction seamless in real-time."}
]

const Cards = () => {
    return (
        <div className="flex flex-wrap">
            {items.map(({ img, heading, paragraph }, index) => (
                <div
                    key={index}
                    className="w-full sm:w-1/2 xl:w-1/3 flex flex-col justify-between text-white border border-gray-600/70 p-6 relative bg-cover bg-center h-[24rem]"
                    style={{ backgroundImage: `url(${img})` }}
                >
                    <div className="relative z-10 flex flex-col justify-between h-full">
                        <div className="w-[4rem] h-[4rem] flex justify-center items-center p-3 shadow-[inset_0_0_16px_16px_rgba(107,114,128,0.3)] border border-gray-600/70 rounded-full">
                            <p>{index + 1}</p>
                        </div>

                        <div className="flex flex-col gap-4">
                            <h3 className="mt-4 text-xl font-medium">{heading}</h3>
                            <p className="mt-2">{paragraph}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Cards
