import Button from "./Button.tsx";

const Platform = () => {
    return (
        <div className="w-full text-white flex flex-col md:flex-row">
            <div className="md:w-1/2 flex flex-col justify-between">
                <div className="p-6">
                    <h2 className="text-4xl mb-4">All Cryptos, One Platform</h2>
                    <p className="text-wrap text-lg">Buy, sell, and convert all major cryptocurrencies on a single platform. A seamless experience with no compromises.</p>
                </div>
                <Button title="But crypto now" variant='secondary'/>
            </div>

            <img src="./deal.png" alt="dealing" className="md:w-1/2 max-md:border-t md:border-l border-gray-600/70"/>
        </div>
    )
}
export default Platform
