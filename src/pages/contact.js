import ContactForm from "../components/contactForm";
import Footer from "../components/footer";
import Header from "../components/header";

function ContactUs() {
    return (
        <section class="bg-gray-800">
            <div class="h-screen bg-contact object-contain opacity-50 bg-left h-screen w-screen fixed">
            
            </div>
            <div class="max-w-6xl m-auto px-10 xl:px-0">
                <Header />
                <ContactForm />
            </div>
            <Footer />
        </section>
    )
}

export default ContactUs;