"use client";

import React, { useState } from "react";
import ProjectDetailModal from "./ProjectDetailModal";
import { Card } from "@/components/Others/Card";

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
      <Card
        title={projectName}
        image={projectImages[0]}
        altImage={projectName}
        description={projectDescription}
        onclickCard={openModal}
        maxHeightTW={"72"}
        imagePriority={true}
      >
        <div className="mt-4">
          <div className="text-xl font-semibold mb-2">Stacks</div>
          <div className="flex flex-wrap gap-2">
            {stack.slice(0, 5).map((tech, techIndex) => (
              <span
                key={techIndex}
                className="bg-primary50 rounded-md px-2 py-1 text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </Card>
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
