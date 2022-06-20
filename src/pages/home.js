import Description from "../components/description";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Portfolio from "../components/portfolio";

function Home() {
    return (
        <div class="bg-gray-800">
            <Hero />
            <Description />
            <Portfolio />
            <Footer />
        </div>
    )
}

export default Home;