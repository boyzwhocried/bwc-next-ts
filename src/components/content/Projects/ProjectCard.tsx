"use client";

import React, { useState } from "react";
import ProjectDetailModal from "./ProjectDetailModal";
import { Reveal } from "@/components/others/RevealAnimation";
import { Card } from "@/components/others/Card";

interface ProjectCardProps {
  projectName: string;
  projectImages: string[];
  projectDescription: string;
  stack: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  projectName,
  projectImages,
  projectDescription,
  stack,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <Reveal>
        <Card
          title={projectName}
          image={projectImages[0]}
          altImage={projectName}
          description={projectDescription}
          onclickCard={openModal}
          maxHeightTW="72"
          imagePriority={false}
        >
          <div className="mt-4">
            <div className="font-semibold text-xl mb-2">Stacks</div>
            <div className="flex flex-wrap gap-2">
              {stack.slice(0, 5).map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="rounded-md bg-primary50 px-2 py-1 text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </Card>
      </Reveal>
      {isModalOpen && (
        <ProjectDetailModal
          project={{ projectName, projectImages, projectDescription, stack }}
          onClose={closeModal}
        />
      )}
    </>
  );
};

export default ProjectCard;
