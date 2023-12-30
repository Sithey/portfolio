"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
    {
        title: "Programming Languages",
        id: "programming-languages",
        content: (
            <ul className="list-disc pl-2">
                <li>Java</li>
                <li>Html/CSS</li>
                <li>JS (JQuery, NodeJS, React, Next.JS)</li>
                <li>Lua</li>
                <li>Bash</li>
            </ul>
        ),
    },
    {
        title: "Database Management Systems",
        id: "database-management-systems",
        content: (
            <ul className="list-disc pl-2">
                <li>MySQL</li>
                <li>MongoDB</li>
                <li>Redis</li>
            </ul>
        ),
    },
    {
        title: "Other Skills",
        id: "other-skills",
        content: (
            <ul className="list-disc pl-2">
                <li>Work on Linux</li>
                <li>Github/Gitlab</li>
            </ul>
        ),
    },
];

const AboutSection = () => {
    const [tab, setTab] = useState("programming-languages");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };

    return (
        <section className="text-white" id="about">
            <div className="bg-[#1a1a1a] md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                <Image src="/images/about-image.png" width={500} height={500} />
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                    <p className="text-base lg:text-lg">
                        I'm a young developer, and this is my passion. Ever since I was a child,
                        I've had a deep fascination with technology. In 2018,
                        I began creating my first projects in Java, specifically in Minecraft.<br/><br/>
                        In January 2023, I founded my own company, SharpHeberg, which specializes in server hosting.
                        It's been an exciting journey, and I look forward to continued growth and innovation in the technology field.
                    </p>
                    <div className="flex flex-row justify-start mt-8">
                        <TabButton
                            selectTab={() => handleTabChange("programming-languages")}
                            active={tab === "programming-languages"}
                        >
                            {" "}
                            Programming Languages{" "}
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("database-management-systems")}
                            active={tab === "database-management-systems"}
                        >
                            {" "}
                            Database Management Systems{" "}
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("other-skills")}
                            active={tab === "other-skills"}
                        >
                            {" "}
                            Other Skills{" "}
                        </TabButton>
                    </div>
                    <div className="mt-8">
                        {TAB_DATA.find((t) => t.id === tab).content}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;