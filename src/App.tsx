import Navigation from "./components/Navigation.tsx";
import Footer from "./components/Footer.tsx";
import Hero from "./components/Hero.tsx";
import About from "./components/About.tsx";
import Grid from "./components/Grid.tsx";
import More from "./components/More.tsx";
import Platform from "./components/Platform.tsx";
import StartNowLike from "./components/StartNowLike.tsx";
import Cards from "./components/Cards.tsx";
import Recommender from "./components/Recommender.tsx";
import AccordionContainer from "./components/AccordionContainer.tsx";
import PreFooter from "./components/PreFooter.tsx";

const App = () => {
    return (
        <div className="bg-[#08070E] relative z-40">
            <Navigation />
            {/*Content*/}
            <Hero />
            <More />
            <Grid>
                <About />
                <div className="h-[24vh]"/>
                <Platform />
                <div className="h-[24vh]"/>
                <StartNowLike heading="How It Works" paragraph="A simple, fast, and secure platform to manage your cryptocurrencies in just a few steps." />
                <Cards />
                <div className="h-[24vh]"/>
                <div className=" flex flex-col justify-center items-center text-white text-center text-wrap">
                    <h2 className="text-4xl my-4">Trusted by Crypto Enthusiasts Worldwide</h2>
                    <p className="w-10/12 mb-4">Join a growing community of investors who choose Cryptix for its seamless experience, security, and premium design.</p>
                </div>
                <Recommender />
                <div className="h-[24vh]"/>
                <StartNowLike heading="Your Questions, Answered" paragraph="Find everything you need to know about Cryptix, from security to supported assets." />
                <AccordionContainer />
                <div className="h-[24vh]"/>
                <PreFooter />
            </Grid>
                <Footer />
        </div>
    )
}
export default App
