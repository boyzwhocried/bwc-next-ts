import Image from "next/image";
import React, { useRef, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

interface ProjectDetailModalProps {
  project: {
    projectName: string;
    projectImages: string[];
    projectDescription: string;
    stack: string[];
  };
  onClose: () => void;
}

const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    // Attach event listener when the component mounts
    document.addEventListener("click", handleClickOutside);

    // Remove event listener when the component unmounts
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-background bg-opacity-50 overflow-y-auto z-50">
      <div
        ref={modalRef}
        className="relative max-w-3xl w-full m-8 py-8 bg-background rounded-lg shadow-md max-h-[90vh] overflow-y-scroll"
      >
        <button
          className="absolute top-4 right-4 text-text"
          onClick={onClose}
          aria-label="close project detail"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <h2 className="text-3xl font-bold mb-4 px-8">{project.projectName}</h2>
        <Carousel
          className="relative aspect-w-16 aspect-h-9 mb-4"
          infiniteLoop
          ariaLabel={project.projectName}
        >
          {project.projectImages.map((projectImg, index) => (
            <div key={index}>
              <Image
                className="object-cover object-center aspect-video"
                src={projectImg}
                alt={`${project.projectName} Image ${index + 1}`}
                width={1000}
                height={1000}
              />
            </div>
          ))}
        </Carousel>
        <p className="text-base mb-4 px-8">{project.projectDescription}</p>
        <div className="mb-4 px-8">
          <h3 className="text-lg font-semibold">Stacks</h3>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="bg-primary rounded-md px-2 py-1 text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailModal;
