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
      className="group hover:italic p-[6px]"
    >
      {text}
      <span className="block h-[1px] max-w-0 bg-text group-hover:max-w-full transition-all duration-500"></span>
    </a>
  );
};
