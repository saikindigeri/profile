"use client";

import React from "react";

import { Cover } from "@/components/ui/cover";



const NewPage = () => {
  return(

    <section id="about">
  <div className="bg-black pt-20" >
          <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-red-800 via-neutral-700 to-green-800 dark:from-neutral-800 dark:via-white dark:to-white">
            Hey, I am <br /> Sai Kumar <Cover>Full Stack Dev</Cover>
          </h1>

     
        </div>
    </section>

  
      
      );
    }
    
  
 


export default NewPage


const AceternityLogo = () => {
  return (
    <svg
      width="66"
      height="65"
      viewBox="0 0 66 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-3 w-3 text-black dark:text-white"
    >
      <path
        d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
        stroke="currentColor"
        strokeWidth="15"
        strokeMiterlimit="3.86874"
        strokeLinecap="round"
      />
    </svg>
  );
};