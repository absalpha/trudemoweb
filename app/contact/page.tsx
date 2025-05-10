// app/contact/page.tsx
import Image from "next/image";
import MemberCard, { Member } from "../../components/MemberCard";

const members: Member[] = [
  { photoSrc: "/Robot.png", name: "Alice Nguyen", role: "Project Manager", contact: "alice@example.com" },
  { photoSrc: "/Robot.png", name: "Bob Patel",       role: "Lead Engineer",    contact: "bob@example.com" },
  // …add more members as needed
];

export default function ContactPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      {/* Our Team Hero */}
      <h1 className="text-5xl font-bold text-center mb-8">Our Team</h1>
      <div className="flex justify-center mb-12">
        <Image
          src="/Robot.png"
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
