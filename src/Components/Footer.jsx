import React from "react";
import { MainContent } from "../Content/MainContent";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div className=" bg-[#ffffff13] backdrop-blur-md py-3 rounded-md text-center">
            <p className="text-sm font-light">Copyright © {currentYear} {MainContent.AppName}. All Rights Reserved.</p>
        </div>
    );
};

export default Footer;