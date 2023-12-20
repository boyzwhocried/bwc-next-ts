import { UnderlineLink } from "@/components/Others/UnderlineLink";
import socialLinks from "./SocialLinksConst";

function Socials() {
  return (
    <div className="flex flex-col gap-2 px-4">
      <span className="font-semibold text-xl">me elsewhere:</span>
      <div className="flex flex-col items-center sm:items-start">
        {socialLinks.map((link, index) => (
          <UnderlineLink key={index} href={link.href} text={link.text} indexKey={index} />
        ))}
      </div>
    </div>
  );
}

export default Socials;
