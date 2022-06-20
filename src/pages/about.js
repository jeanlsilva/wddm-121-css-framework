import AboutCTA from "../components/aboutCTA";
import AboutText from "../components/aboutText";
import Footer from "../components/footer";
import Header from "../components/header";
import Technologies from "../components/technologies";

function About() {
    return (
        <div>
            <div class="h-screen bg-about object-contain bg-opacity-50 bg-left h-screen w-screen fixed">
            
            </div>
            <div class="max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl m-auto relative z-1 px-10 sm:px-0">
                <Header />
                <AboutText />
                <Technologies />
                <AboutCTA />
            </div>
            <Footer />
        </div>
    )
}

export default About;