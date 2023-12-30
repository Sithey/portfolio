import React from "react";
import Image from "next/image";
const SocialButton = ({ displayName, image, link }) => {
    return (
        <a
            href={link}
            target="_blank"
            className="flex flex-col items-center justify-center rounded-full w-128 h-128 bg-transparent
                 transition transform hover:scale-110 hover:text-white"
        >
            <h3 className="text-white text-lg font-bold">{displayName}</h3>
            <Image src={image} alt={displayName} width={128} height={128} />
        </a>
    );
};


export default SocialButton;