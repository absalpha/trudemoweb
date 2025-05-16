import React from "react";
import {
  FaGithub,      // GitHub
  FaInstagram,   // Instagram
  FaYoutube,     // YouTube
  FaGlobe,       // generic “web” icon
} from 'react-icons/fa';
import { SiTiktok } from 'react-icons/si'; 

const icons = [
  { Icon: FaGithub, url:"https://github.com/sicktronics/The-Robot-Underground-Demo"},
  { Icon: FaInstagram,url: "https://www.instagram.com/therobotunderground/"  },
  { Icon: FaYoutube,url:"https://www.youtube.com/channel/UCGiVgfm5pshJ7L6ViB6xAog" },
  { Icon: FaGlobe,url: "https://robotunderground.party/"},
  { Icon: SiTiktok,url: "https://www.instagram.com/therobotunderground/"},
];

const Customers: React.FC = () => {
  return (
    <div className="w-full py-12 bg-black dark:bg-white">
      <div className="w-full px-4 md:px-8 lg:px-16">
        <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row w-full">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-0 text-white dark:text-black text-center md:text-left md:w-1/3">
              Follow us on social media
            </h2>
            <div className="flex flex-wrap justify-center md:justify-end gap-6 md:w-2/3">
              {icons.map(({ Icon }, index) => (
              <a
                key={index}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center text-white dark:text-black hover:opacity-75"
              >
                <Icon className="text-3xl md:text-4xl" />
              </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
