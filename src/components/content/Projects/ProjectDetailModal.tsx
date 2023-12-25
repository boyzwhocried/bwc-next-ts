import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

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
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleNextImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % project.projectImages.length
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? project.projectImages.length - 1 : prevIndex - 1
    );
  };

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
  }, [onClose]); // Empty dependency array ensures the effect runs only once on mount

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-background bg-opacity-50 overflow-y-auto z-50">
      <div
        ref={modalRef}
        className="relative max-w-3xl w-full m-8 p-8 bg-background rounded-lg shadow-md max-h-[90vh] overflow-y-scroll"
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
        <h2 className="text-3xl font-bold mb-4">{project.projectName}</h2>
        <div className="relative aspect-w-16 aspect-h-9 mb-4">
          <Image
            className="object-cover object-center rounded aspect-video"
            src={project.projectImages[currentImageIndex]}
            alt={`${project.projectName} Image ${currentImageIndex + 1}`}
            width={1000}
            height={1000}
          />
          <button
            className="absolute top-1/2 transform -translate-y-1/2 left-4 text-text bg-primary rounded-full p-2 opacity-50"
            onClick={handlePrevImage}
            aria-label="go previous"
          >
            <FaArrowLeft />
          </button>
          <button
            className="absolute top-1/2 transform -translate-y-1/2 right-4 text-text bg-primary rounded-full p-2 opacity-50"
            onClick={handleNextImage}
            aria-label="go next"
          >
            <FaArrowRight />
          </button>
          <p className="text-sm text-center">
            Image {currentImageIndex + 1} of {project.projectImages.length}
          </p>
        </div>
        <p className="text-base mb-4">{project.projectDescription}</p>
        <div className="mb-4">
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
