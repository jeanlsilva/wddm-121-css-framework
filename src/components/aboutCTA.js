import { useNavigate } from "react-router-dom";

function AboutCTA() {
    const navigate = useNavigate();

    return (
        <section id="3" class="max-w-6xl m-auto">
            <div class="flex flex-col items-center justify-center h-screen">
                <h2 class="text-white">GOT INTERESTED?</h2>
                <button 
                    onClick={() => navigate('contact')} 
                    class="rounded-full w-full sm:w-1/2 bg-yellow-500 border-0 text-2xl lg:text-5xl font-medium hover:text-yellow-500 hover:bg-black transition-all ease-in-out duration-500 p-10 mt-20">
                    GET IN TOUCH NOW
                </button>
            </div>
        </section>
    );
}

export default AboutCTA;