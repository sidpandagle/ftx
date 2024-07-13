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

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Swattch",
  description: "Unlock Your Text's Potential: Free Online Conversion Tools",
  keywords: "online converter, free converter, file converter, document converter, image converter, audio converter, video converter, unit converter, data converter, online tool, free tool, easy to use, fast conversion, batch conversion",
};

function App() {
  return (
    <>
      <Hero />
      {/* <Navbar />
      <Sponsors />
      <About />
      <HowItWorks />
      <Features />
      <Services />
      <Cta />
      <Testimonials />
      <Team />
      <Pricing />
      <Newsletter />
      <FAQ />
      <Footer />
      <ScrollToTop /> */}
    </>
  );
}

export default App;
