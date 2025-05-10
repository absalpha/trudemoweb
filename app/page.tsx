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
                Control the robot via code and clear each level
              </h2>
              <p className="text-xl font-light">
                Our game has different levels for student to complete. They have to learn to wire the robot and code in C++ 
                for the robot to move properly. In the process learn about coding logic, simple syntax, function declaration and more
              </p>
            </>
          }
          rightHalf={
            <Image src={"/products/Robot.png"} alt="section-image" width={500} height={150} className="w-1/2 h-auto" />
          }
        />
        
        <Section
          leftHalf={<Accordion />}
          rightHalf={
            <div className="flex flex-col justify-end">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">
                Major benifit of choosing our game
              </h2>
              <p className="text-xl font-light">
                Without any directly competitors, our game provide unqiue support for teachers planning on creating 
                an interactive class for high school studnets
              </p>
            </div>
          }
        />
        
        <Download />
        <Customers />
      </main>
      <Footer />
    </div>
  );
}
