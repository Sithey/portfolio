"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
    {
        id: 1,
        title: "My Portfolio Website",
        description: "This is my portfolio website and was built using Next.JS",
        image: "/images/projects/portfolio-project.png",
        tag: ["All", "Web"],
        gitUrl: null,
        previewUrl: null,
    },
];

const ProjectsSection = () => {
    const [tag, setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const handleTagChange = (newTag) => {
        setTag(newTag);
    };

    const filteredProjects = projectsData.filter((project) =>
        project.tag.includes(tag)
    );

    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
    };

    return (
        <section>
            <div id="projects">
                <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
                    Some Projects
                </h2>
                <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
                    <ProjectTag
                        onClick={handleTagChange}
                        name="All"
                        isSelected={tag === "All"}
                    />
                    <ProjectTag
                        onClick={handleTagChange}
                        name="Web"
                        isSelected={tag === "Web"}
                    />
                    <ProjectTag
                        onClick={handleTagChange}
                        name="Java"
                        isSelected={tag === "Java"}
                    />
                </div>
                <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
                    {filteredProjects.map((project, index) => (
                        <motion.li
                            key={index}
                            variants={cardVariants}
                            initial="initial"
                            animate={isInView ? "animate" : "initial"}
                            transition={{duration: 0.3, delay: index * 0.4}}
                        >
                            <ProjectCard
                                key={project.id}
                                title={project.title}
                                description={project.description}
                                imgUrl={project.image}
                                gitUrl={project.gitUrl}
                                previewUrl={project.previewUrl}
                            />
                        </motion.li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default ProjectsSection;