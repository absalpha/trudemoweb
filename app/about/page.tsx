// app/about/page.tsx
'use client'
import React from 'react'
import Image from 'next/image'
import MemberCard, { Member } from "../../components/MemberCard";
const members: Member[] = [
    { photoSrc: "/products/Website_Graphix_4.png", name: "Parker Caywood Mayer", 
    role: "Simulation Engineer and Robot Guardian", contact: "mayerpa@oregonstate.edu" },
    { photoSrc: "/products/Website_Graphix_4.png", name: "Crystal Lee",       
    role: "Wiring and Game Master Engineer",    contact: "" },
    { photoSrc: "/products/Website_Graphix_4.png", name: "Evelyn Nixon",       
    role: "Art Lead: Modeling and Animation",    contact: "" },
    { photoSrc: "/products/Website_Graphix_4.png", name: "Him Shun Lee",       
    role: "Compilation Engineer",    contact: "" },
    { photoSrc: "/products/Website_Graphix_4.png", name: "Ian Dugo",       
    role: "“Level Designer and Inventory System Developer",    contact: "" },
    { photoSrc: "/products/Website_Graphix_4.png", name: "Luke Williams",       
    role: "Robot Simulation Engineer & Texturing Artist",    contact: "" },
  // …add more members as needed
];
export default function AboutPage() {
  return (
    <main className="py-16 px-4 md:px-8 lg:px-16 flex flex-col items-center">
      {/* Big centered title */}
      <h1 className="text-5xl font-bold text-center mb-8">About this project</h1>

      {/* Placeholder text block */}
      <div className="max-w-3xl text-center mb-16">
        <p>
          This demo for The Robot Underground was developed as part of our
          year-long computer science capstone project for Oregon State
          University! The six of us joined forces with one mission: to build a
          demo for a robotics video game the likes of which the world has
          never seen before.
        </p>
        <p>
          Our development journey was not for the faint of heart—we raced up the
          Unreal Engine learning curve, designed game mechanics from scratch,
          and created art in-house so that we could bring our vision to life.
          Below is a timeline of this journey, for your enjoyment.
        </p>
        <p>
          If you want to follow the next chapter of The Robot Underground
          (spoiler alert: it’s pretty exciting), then follow us on all the
          socials.
        </p>
      </div>

      {/* Timeline section */}
      <h2 className="text-4xl font-semibold text-center mb-8">Timeline</h2>
      <div className="w-full flex justify-center">
        <Image
          src="/products/Website_Graphix_5.png"       // or "/images/timeline.png"
          alt="Timeline graphic"
          width={1000}              // pick a width that suits your design
          height={400}              // adjust height proportionally
          className="object-contain"
        />
      </div>

      <h2 className="text-3xl font-semibold text-center mb-6">Meet the Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {members.map((m, idx) => (
          <MemberCard key={idx} {...m} />
        ))}
      </div>
    </main>
  )
}
