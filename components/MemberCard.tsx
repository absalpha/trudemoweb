// components/MemberCard.tsx
import Image from "next/image";

export interface Member {
  photoSrc: string;
  name: string;
  role: string;
  contact: string;
}

interface MemberCardProps extends Member {}

const MemberCard: React.FC<MemberCardProps> = ({ photoSrc, name, role, contact }) => (
  <div className="flex items-center bg-white dark:bg-gray-800 rounded-lg shadow p-4">
    <div className="w-16 h-16 relative rounded-full overflow-hidden mr-4">
      <Image src={photoSrc} alt={`${name} photo`} layout="fill" objectFit="cover" />
    </div>
    <div className="flex-1">
      <h3 className="font-semibold text-lg">{name}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400">{role}</p>
      <a href={`mailto:${contact}`} className="text-sm text-blue-500 hover:underline">
        {contact}
      </a>
    </div>
  </div>
);

export default MemberCard;
