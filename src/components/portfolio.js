import orbee from "../assets/images/orbee.gif";
import upfi from "../assets/images/upfi.gif";
import nlwHeat from "../assets/images/nlw-heat.gif";
import predictnow from "../assets/images/predictnow.gif";
import { useState } from "react";
import ImageModal from "./imageModal";

function Portfolio() {
    const [imageProps, setImageProps] = useState();
    const [showModal, setShowModal] = useState(false);

    const displayModal = (image, title, description) => {
        setImageProps({
            image,
            title,
            description,
        })
        setShowModal(true);
    }

    return (
        <>
            <section id="3" class="max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-6xl m-auto pb-20 px-10 sm:px-0 relative z-2">
                <h1 class="text-4xl font-bold text-white mb-20">These are my best projects</h1>
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-5">
                    <button class="rounded-lg w-150 h-200 bg-white hover:shadow-lg hover:shadow-yellow-500/50 transition-all ease-in-out duration-500" onClick={() => displayModal(orbee, 'Orbee', 'Real Estate Platform')}>
                        <img src={orbee} alt="portfolio" className="p-5" />
                        <div class="flex justify-between items-center h-15 p-5">
                            <h2 class="text-3xl font-bold">Orbee </h2>
                            <p>Real Estate Platform</p>
                        </div>
                    </button>
                    <button class="rounded-lg w-150 h-200 bg-white hover:shadow-lg hover:shadow-yellow-500/50 transition-all ease-in-out duration-500" onClick={() => displayModal(upfi, 'Upfi', 'Image uploading platform')}>
                        <img src={upfi} alt="portfolio" className="p-5" />
                        <div class="flex justify-between items-center h-15 p-5">
                            <h2 class="text-3xl font-bold">Upfi</h2>
                            <p>Image uploading platform</p>
                        </div>
                    </button>
                    <button class="rounded-lg w-150 h-200 bg-white hover:shadow-lg hover:shadow-yellow-500/50 transition-all ease-in-out duration-500" onClick={() => displayModal(nlwHeat, 'NLW Heat', 'Event promotion website')}>
                        <img src={nlwHeat} alt="portfolio" className="p-5" />
                        <div class="flex justify-between items-center h-15 p-5">
                            <h2 class="text-3xl font-bold">NLW Heat</h2>
                            <p>Event promotion website</p>
                        </div>
                    </button>
                    <button class="rounded-lg w-150 h-200 bg-white hover:shadow-lg hover:shadow-yellow-500/50 transition-all ease-in-out duration-500" onClick={() => displayModal(predictnow, 'Predictnow', 'Financial Platform')}>
                        <img src={predictnow} alt="portfolio" className="p-5" />
                        <div class="flex justify-between items-center h-15 p-5">
                            <h2 class="text-3xl font-bold">Predictnow</h2>
                            <p>Financial platform</p>
                        </div>
                    </button>
                </div>
            </section>
            <ImageModal showModal={showModal} setShowModal={setShowModal} imageProps={imageProps} />
        </>
    )
}

export default Portfolio;