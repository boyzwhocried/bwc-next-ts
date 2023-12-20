interface UnderlineLinkProps {
  indexKey: number;
  href: string;
  text: string;
}

export const UnderlineLink = ({ indexKey, href, text }: UnderlineLinkProps) => {
  return (
    <a
      key={indexKey}
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      className="group hover:italic"
    >
      {text}
      <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-[1px] bg-text"></span>
    </a>
  );
};
