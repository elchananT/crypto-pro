const Footer = () => {
    return (
        <footer className="w-screen bg-[#08070E] text-gray-400 text-lg px-8 xl:px-28  border-t border-gray-600/70">
            <div className="h-full flex flex-col sm:flex-row sm:justify-between py-6 px-6 md:px-12 border-x border-gray-600/70">
                {/*Left*/}
                <section className="flex flex-col justify-around gap-6 sm:justify-between">
                    <section className="flex flex-col gap-5">
                        <div className="cursor-pointer flex items-center gap-2">
                            <img src="./logo.svg" className="h-[2rem] w-[2rem] object-cover" />
                            <h2 className="text-3xl text-white">Cryptix</h2>
                        </div>
                        <p>Secure, fast, and seamless crypto trading. <br/>
                            Cryptix makes digital assets effortless.</p>
                    </section>

                    <span>
                        Created by
                        <img src="./person.png" alt="person" className="rounded-full h-4 inline mx-2"/>
                        Author in Framer
                    </span>
                </section>

            {/*Right*/}
                <section className="flex gap-18 mt-12 md:mt-auto md:w-1/4">
                    <div className="flex flex-col items-start gap-4">
                        <h3 className="text-white mb-2">Navigation</h3>
                        <button className="cursor-pointer">Why Cryptix?</button>
                        <button className="cursor-pointer">Cryptos</button>
                        <button className="cursor-pointer">How it works</button>
                        <button className="cursor-pointer">Testimonials</button>
                        <button className="cursor-pointer">FAQ</button>
                    </div>

                    <div className="flex flex-col items-start gap-4">
                        <h3 className="text-white mb-2">Socials</h3>
                        <button className="cursor-pointer">Twitter (X)</button>
                        <button className="cursor-pointer">Instagram</button>
                        <button className="cursor-pointer">LinkdIn</button>
                    </div>
                </section>
            </div>
        </footer>
    )
}
export default Footer
