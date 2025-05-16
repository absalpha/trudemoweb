import Section from "components/Section";
import Image from "next/image";



export default function Page() {
  return (
    <main>

        <Section
          leftHalf={
            <>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">
                Bringing Robots to Life in Unreal
              </h2>
              <p className="text-xl font-light">
                This demo is a student-built project, and we created everything you see, from the electrifying robot wiring, to the sleek laptop environment, 
                to three tantalizingly challenging levels from scratch in the Unreal Engine.
              </p>
            </>
          }
          rightHalf={
            <Image src={"/products/Website_Graphix_1.png"} alt="section-image" width={500} height={150} className="w-1/2 h-auto" />
          }
        />
                <Section
          leftHalf={
            <>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">
                The first step: wiring your new best friend
              </h2>
              <p className="text-xl font-light">
                One of the key ingredients in any robot recipe is clean, pristine wiring. 
                The first step in our demo is to dive head-first into wiring up your new robot friend, Speedy Luigi, so that signals from its brain (microcontroller, if you're in the biz) can reach its motors and bring it to life!
              </p>
            </>
          }
          rightHalf={
            <Image src={"/products/Website_Graphix_2.png"} alt="section-image" width={500} height={150} className="w-1/2 h-auto" />
          }
        />
                <Section
          leftHalf={
            <>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">
                Next up: Bringing your bot to life
              </h2>
              <p className="text-xl font-light">
                Using our homemade IDE and compiler, you can write real robot code, telling Speedy Luigi how to move around in its environment. 
                Warning: testing out code on Speedy Luigi is extremely addictive. Proceed with caution.
              </p>
            </>
          }
          rightHalf={
            <Image src={"/products/Website_Graphix_3.png"} alt="section-image" width={500} height={150} className="w-1/2 h-auto" />
          }
        />
                <Section
          leftHalf={
            <>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">
                Hurry! Solve the levels before it’s too late!
              </h2>
              <p className="text-xl font-light">
                You have a limited window to program Speedy Luigi to navigate through a treacherous research facility. There are puzzles and traps inside, 
                so be careful and keep your eyes open. Speedy Luigi must be protected at all costs
              </p>
            </>
          }
          rightHalf={
            <Image src={"/products/Robot.png"} alt="section-image" width={500} height={150} className="w-1/2 h-auto" />
          }
        />
    </main>

  );
}