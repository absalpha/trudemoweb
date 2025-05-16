import Header from "components/Header";
import Hero from "components/Hero";
import Features from "components/Features";
import Section from "components/Section";
import Footer from "components/Footer";
import Customers from "components/Customers";
import Image from "next/image";
import Accordion from "components/Accordion";
import Reviews from "components/Reviews";
import Download from "components/Download";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      <main>
        <Hero />
        <Features />
        <Section
          leftHalf={
            <>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">
                Tech education is crying out for disruption. We have a fresh approach
              </h2>
              <p className="text-xl font-light">
                The Robot Underground™ aims to break open tech education for middle and high schoolers everywhere, 
                even if they live in a robot wasteland
              </p>
            </>
          }
          rightHalf={
            <Image src={"/products/Homepage_Bot.png"} alt="section-image" width={500} height={150} className="w-1/2 h-auto" />
          }
        />
        
        <Section
          leftHalf={<Accordion />}
          rightHalf={
            <div className="flex flex-col justify-end">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">
                There’s no one out there like us
              </h2>
              <p className="text-xl font-light">
                Our game allows players to learn while having fun solving puzzles and uncovering the mysteries behind the world they arrived in, 
                an aspect most other educational tools neglect
              </p>
            </div>
          }
        />
        
        <Download />
        <Customers />
      </main>
     
    </div>
  );
}
