import React from "react";
import { Link } from "react-router-dom";

const Button = ({ title, className, route, icon, onClick, disabled, type = "button" }) => {
    return route ? (
        <Link to={route} className={`inline-block ${className}`}>
            {title}
            {icon && icon}
        </Link>
    ) : (
        <button className={`${className}`} disabled={disabled} type={type} onClick={onClick}>
            {title}
            {icon && icon}
        </button>
    );
};

export default Button;