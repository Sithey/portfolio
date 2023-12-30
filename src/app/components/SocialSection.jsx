import React from "react";
import SocialButton from "./SocialButton";
const SocialSection = () => {

    const social = [
        {
            displayName: "Github",
            link: "https://github.com/Sithey",
            image: "/images/social/github.png"
        },
        {
            displayName: "X/Twitter",
            link: "https://x.com/SitheyMC",
            image: "/images/social/x.png"
        },
        {
            displayName: "Mail",
            link: "mailto:raphi.zerbib@gmail.com",
            image: "/images/social/mail.png"
        }

        ]

    return (
      <section className={"mt-10"}>
          <div id="social" className={"bg-[#1a1a1a]"}>
              <h2 className={"text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12"}>My Social Media</h2>
              <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 md:mr-40 md:ml-40">
                  {social.map((social, index) => (
                      <li key={index} className="list-none">
                          <SocialButton displayName={social.displayName} image={social.image} link={social.link}/>
                      </li>
                  ))}
              </ul>
          </div>
      </section>
    );
};

export default SocialSection;