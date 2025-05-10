import React from "react";
import FeatureCard from "./FeatureCard";
import { FaNetworkWired, FaGamepad } from "react-icons/fa";
import { SiArduino } from "react-icons/si";

const Features = () => {
  const features = [
    {
      icon: FaNetworkWired,
      title: "Wiring",
      description: "Learn to wire pins on robots",
    },
    {
      icon: SiArduino ,
      title: "Coding",
      description: "Learn to code in Arduino C++",
    },
    {
      icon: FaGamepad ,
      title: "Gaming",
      description: "Move the robot across the arena and clear different levels",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-12 bg-gray-50 dark:bg-gray-900 transition-colors duration-200 rounded-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">Features</h2>
          <p className="mt-8 text-xl text-gray-600 dark:text-gray-300 font-light">
            Multiple way of learning basic robotic and programming
          </p>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
