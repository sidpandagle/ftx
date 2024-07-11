import { About } from "@/shared/homepage/About";
import { Cta } from "@/shared/homepage/Cta";
import { FAQ } from "@/shared/homepage/FAQ";
import { Features } from "@/shared/homepage/Features";
import { Footer } from "@/shared/homepage/Footer";
import { Hero } from "@/shared/homepage/Hero";
import { HowItWorks } from "@/shared/homepage/HowItWorks";
import { Navbar } from "@/shared/homepage/Navbar";
import { Newsletter } from "@/shared/homepage/Newsletter";
import { Pricing } from "@/shared/homepage/Pricing";
import { ScrollToTop } from "@/shared/homepage/ScrollToTop";
import { Services } from "@/shared/homepage/Services";
import { Sponsors } from "@/shared/homepage/Sponsors";
import { Team } from "@/shared/homepage/Team";
import { Testimonials } from "@/shared/homepage/Testimonials";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      {/* <Hero /> */}
      {/* <Sponsors /> */}
      {/* <About /> */}
      {/* <HowItWorks /> */}
      <Features />
      <Services />
      <Cta />
      {/* <Testimonials /> */}
      <Team />
      <Pricing />
      <Newsletter />
      <FAQ />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
