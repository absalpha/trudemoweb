// app/contact/page.tsx
import Image from "next/image";
import MemberCard, { Member } from "../../components/MemberCard";

const members: Member[] = [
    { photoSrc: "/products/Logo.png", name: "Parker Caywood Mayer", 
    role: "Project Manager", contact: "mayerpa@oregonstate.edu" },
    { photoSrc: "/products/Logo.png", name: "Crystal Lee",       
    role: "Robot Wiring Designer",    contact: "leecry@oregonstate.edu" },
    { photoSrc: "/products/Logo.png", name: "Evelyn Nixon",       
    role: "Modelling Designer",    contact: "nixone@oregonstate.edu" },
    { photoSrc: "/products/Logo.png", name: "Him Shun Lee",       
    role: "Arduino Compilation Engineer",    contact: "leehi@oregonstate.edu" },
    { photoSrc: "/products/Logo.png", name: "Ian Dugo",       
    role: "Level Designer and Inventory Manager",    contact: "dugoi@oregonstate.edu" },
    { photoSrc: "/products/Logo.png", name: "Luke Williams",       
    role: "Robot Simulation and Texturing Engineer",    contact: "williluk@oregonstate.edu" },
  // …add more members as needed
];

export default function ContactPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      {/* Our Team Hero */}
      <h1 className="text-5xl font-bold text-center mb-8">Our Team</h1>
      <div className="flex justify-center mb-12">
        <Image
          src="/products/Logo.png"
          alt="Team placeholder"
          width={300}
          height={300}
          className="rounded-full"
        />
      </div>

      {/* Members Section */}
      <h2 className="text-3xl font-semibold text-center mb-6">Members</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {members.map((m, idx) => (
          <MemberCard key={idx} {...m} />
        ))}
      </div>
    </main>
  );
}
