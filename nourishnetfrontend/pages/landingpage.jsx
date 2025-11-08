import Navbar from "../components/navbar";
import HeroSection from "../components/herosection";
import Footer from "../components/footer";
import Features from "../components/features";
import ProductsPreview from "../components/products";
import Testimonials from "../components/testimonials";
import CTA from "../components/cta";

function LandngPage(){
    return(
        <>
            <Navbar/>
            <HeroSection/>
            <Features />
            <ProductsPreview />
            <Testimonials />
            <CTA />
            <Footer/>
        </>
    );
}

export default LandngPage;