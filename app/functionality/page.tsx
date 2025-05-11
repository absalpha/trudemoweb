import Section from "components/Section";
import Image from "next/image";



export default function Page() {
  return (
    <main>

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
    </main>

  );
}