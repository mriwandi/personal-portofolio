import Image from "next/image";
import CardLabel from "./card-label";

import profile from "@/constants/profile"
import SocmedIcon from "./socmed-icon";

const {fullname, job, contactInfo, socialMedia} = profile

export default function PersonalInfo() {
  return (
    <div className="flex flex-col items-center gap-6 p-10">
      <Image
        src="/my-pic.jpeg"
        width={150}
        height={150}
        alt="My picture"
        className="rounded-3xl"
      />
      <div className="flex flex-col items-center">
        <span className="text-xl font-bold">{fullname}</span>
        <span className="text-slate-500">{job}</span>
      </div>
      <div className="w-full h-0.5 bg-neutral-200" />
      {contactInfo.map((contact) => {
        return (
          <CardLabel key={contact.label} label={contact.label} value={contact.value} />
        )
      })}
      <div className="flex gap-3 w-full">
        {socialMedia.map((social) => {
          return (
            <SocmedIcon key={social.label} icon={social.icon} link={social.url} />
          )
        })}
      </div>
    </div>
  );
}