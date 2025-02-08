import Image from "next/image";

export default function SocmedIcon({icon, link}: {icon: string, link: string}) {
  return (
    <a
      className="rounded-xl flex items-center justify-center bg-zinc-700 h-10 w-10"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        src={icon}
        alt="icon"
        width={20}
        height={20}
      />
    </a>
  );
}