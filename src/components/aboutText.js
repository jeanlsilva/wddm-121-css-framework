import profile from "../assets/images/profile.jpg";

function AboutText() {
    return (
        <section id="1" class="lg:h-screen pt-10">
            <img src={profile} alt="profile" class="rounded-full w-64 h-64 object-cover m-auto animate-slide" />
            <h1 class="text-5xl font-bold text-white my-10">Let me briefly introduce myself...</h1>
            <p class="text-white text-xl">
                I'm Jean Silva, born and raised in São Paulo, Brazil, and currently living in Toronto, Canada. My first
                contact with the world of programming was in 2011, during my technician course in informatics. It was there 
                where I learnt how that magic world works, and since then, I've been working tirelessly to become an specialist 
                in that matter, and thus contributing to small and mid-sized companies to achieve its goals by offering efficient, 
                adaptative and attractive solutions as Web and Mobile applications.
            </p>
        </section>
    )
}

export default AboutText;