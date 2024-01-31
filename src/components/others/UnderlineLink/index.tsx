import Link from "next/link";

interface UnderlineLinkProps {
  indexKey: number;
  href: string;
  text: string;
  openNewTab?: boolean;
}

export const UnderlineLink = ({
  indexKey,
  href,
  text,
  openNewTab = true,
}: UnderlineLinkProps) => {
  return (
    <Link
      key={indexKey}
      target={openNewTab ? "_blank" : ""}
      href={href}
      className="group hover:italic p-[6px]"
    >
      {text}
      <span className="block h-[1px] max-w-0 bg-text group-hover:max-w-full transition-all duration-500"></span>
    </Link>
  );
};

export default UnderlineLink;
