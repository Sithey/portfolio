import React from "react";
import NavLink from "./NavLink";

const MenuOverlay = ({ links }) => {
    return (
        <ul className="flex flex-col py-4 items-center bg-[#121212]">
            {links.map((link, index) => (
                <li key={index}>
                    <NavLink to={link.to} title={link.title} />
                </li>
            ))}
        </ul>
    );
};

export default MenuOverlay;