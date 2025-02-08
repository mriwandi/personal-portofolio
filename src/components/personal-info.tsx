import Image from "next/image";

import profile from "@/constants/profile"
import SocmedIcon from "./socmed-icon";

const {fullname, job, country, socialMedia} = profile

export default function PersonalInfo() {
  return (
    <div className="flex flex-col items-center gap-6 py-10 px-5">
      <Image
        src="/my-pic.jpeg"
        width={220}
        height={220}
        alt="My picture"
        className="rounded-3xl"
      />
      <div className="flex flex-col items-center">
        <span className="text-2xl font-bold">{fullname}</span>
        <span className="text-lg text-zinc-400">{job}</span>
        <span className="text-lg text-zinc-400">{country}</span>
      </div>
      <div className="flex gap-3">
        {socialMedia.map((social) => {
          return (
            <SocmedIcon key={social.label} icon={social.icon} link={social.url} />
          )
        })}
      </div>
    </div>
  );
}