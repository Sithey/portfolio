"use client";
import React from "react";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(
    () => import("react-animated-numbers"),
    { ssr: false }
);

const achievementsList = [
    {
        metric: "Projects",
        value: "150",
        postfix: "+",
    },
    {
        metric: "Years",
        value: "5",
    },
];

const AchievementsSection = () => {
    return (
        <div className="bg-[#1a1a1a] py-8 px-4 xl:px-16 sm:py-16 rounded-md">
            <h3 className={"text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12"}>Experience</h3>
            <div className="p-8 flex flex-col sm:flex-row items-center justify-center">
                {achievementsList.map((achievement, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
                    >
                        <h2 className="text-white text-4xl font-bold flex flex-row items-center">
                            {achievement.prefix}
                            {achievement.postfix}
                            <AnimatedNumbers
                                includeComma
                                animateToNumber={parseInt(achievement.value)}
                                locale="en-US"
                                className="text-white text-4xl font-bold"
                                configs={(_, index) => ({
                                    mass: 1,
                                    friction: 100,
                                    tension: 140 * (index + 1),
                                })}
                            />

                        </h2>
                        <p className="text-gray-400 text-base">{achievement.metric}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AchievementsSection;
