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
                Wiring
              </h2>
              <p className="text-xl font-light">
                Some text
              </p>
            </>
          }
          rightHalf={
            <Image src={"/products/Robot.png"} alt="section-image" width={500} height={150} className="w-1/2 h-auto" />
          }
        />
                <Section
          leftHalf={
            <>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">
                Coding
              </h2>
              <p className="text-xl font-light">
                This is basic C++ Arduino compiler
              </p>
            </>
          }
          rightHalf={
            <Image src={"/products/Robot.png"} alt="section-image" width={500} height={150} className="w-1/2 h-auto" />
          }
        />
                <Section
          leftHalf={
            <>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">
                Run the robot
              </h2>
              <p className="text-xl font-light">
                Reach the exit to beat a level
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