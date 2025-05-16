// app/contact/page.tsx
import Image from "next/image";
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

export default function ContactPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      {/* Our Team Hero */}
      <h1 className="text-5xl font-bold text-center mb-8">More About Us & The Demo</h1>
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
      <h2 className="text-3xl font-semibold text-center mb-6">Meet the Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {members.map((m, idx) => (
          <MemberCard key={idx} {...m} />
        ))}
      </div>
    </main>
  );
}
