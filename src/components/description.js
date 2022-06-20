import coding from "../assets/images/coding.gif";

function Description() {
    return (
        <section id="2" class="lg:max-w-4xl xl:max-w-6xl lg:h-screen m-auto relative z-2 px-10 sm:px-0">
            <h2 class="text-6xl font-bold text-white text-center mb-20">The best experience</h2>
            <div class="text-2xl lg:h-[60vh] pb-20 lg:pb-0 flex flex-col lg:flex-row items-center lg:justify-center">
                <img src={coding} alt="coding" class="rounded-lg w-4xl lg:w-full " />
                <div class="max-w-2xl text-2xl flex flex-col justify-around h-full ml-10 mt-10 lg:mt-0">
                    <p class="text-white">
                        My work always focuses on giving the best possible as possible to the customers. 
                        No matter what they want or they need.
                    </p>
                    <p class="text-white">
                        With the usage of the market's top level current technologies, along with years of 
                        experience, I'm qualified to plan, build and maintain highly responsive, customizable applications.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Description;