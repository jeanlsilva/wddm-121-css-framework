import Header from "./header";
import binary from "../assets/images/binary.gif";

function Hero() {
    return (
        <section id="1" className="bg-gray-800 h-screen">
            <div class="h-screen bg-hero object-contain opacity-50 bg-left h-screen w-screen fixed">
                
            </div>
            <div class="relative z-2 px-10 sm:px-0 max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-6xl m-auto">
                <Header />
                <div class="flex flex-col xl:flex-row items-center">
                    <div class="flex flex-col h-[90vh] justify-center w-full text-center md:text-left xl:max-w-screen-md ">
                        <h2 class="text-4xl text-white leading-normal">Letters forms code</h2>
                        <h2 class="text-4xl text-white leading-normal">Code forms instructions</h2>
                        <h2 class="text-4xl text-white leading-normal">Instructions create solutions</h2>
                        <h2 class="text-6xl text-white leading-tight">
                            Solutions make your business <span class="font-bold text-yellow-500">Grow</span>
                        </h2>
                    </div>
                    <img src={binary} alt="binary" class="h-80 rounded-lg hidden xl:block" />
                </div>
            </div>
        </section>
    )
}

export default Hero;