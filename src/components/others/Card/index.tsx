import Image from "next/image";
import { MouseEventHandler, ReactNode } from "react";

interface CardProps {
  title: string;
  image: string;
  altImage: string;
  description: string;
  onclickCard: MouseEventHandler<HTMLDivElement>;
  maxHeightTW: string;
  imagePriority: boolean;
  children: ReactNode;
}

export const Card = ({
  title,
  image,
  altImage,
  description,
  onclickCard,
  maxHeightTW,
  imagePriority,
  children,
}: CardProps) => {
  return (
    <div
      className="max-w-sm rounded-xl overflow-hidden shadow-lg cursor-pointer bg-primary10"
      onClick={onclickCard}
    >
      <Image
        className={`object-cover object-center max-h-${maxHeightTW}`}
        src={image}
        alt={altImage}
        width={1000}
        height={1000}
        priority={imagePriority}
      />
      <div className="p-6">
        <div className="font-semibold text-xl mb-2">{title}</div>
        <p className="text-base line-clamp-3">{description}</p>
        {children}
      </div>
    </div>
  );
};
