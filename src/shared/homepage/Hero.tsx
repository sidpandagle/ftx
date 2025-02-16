import { Button, buttonVariants } from "@/components/ui/button";
import { HeroCards } from "./HeroCards";
import { Aperture } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          {/* <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">
              Shadcn
            </span>{" "}
            landing page
          </h1>{" "} */}
          <h2 className="inline">
            Welcome to {" "}
            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
              Swattch
            </span>
          </h2>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          Transform your digital toolkit with our powerful converter tools and gradient browser. Effortlessly switch between formats and explore stunning gradients.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Link href={'/converter'}>
            <Button className="w-full md:w-1/3">Check Tools</Button>
          </Link>

          <a
            rel="noreferrer noopener"
            href="/gradient"
            className={`w-full md:w-1/3 ${buttonVariants({
              variant: "outline",
            })}`}
          >
            Browse Gradients
          </a>
        </div>
      </div>

      {/* Hero cards sections */}
      <div className="z-10">
        {/* <HeroCards /> */}
        <Image alt="hero-img" src={"/hero-img.png"} width={500} height={500}></Image>
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
