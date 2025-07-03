/* eslint-disable react/prop-types */
import { useState } from "react";
import { IoEyeOffOutline, IoEyeSharp } from "react-icons/io5";

const InputField = ({
    label,
    name,
    value,
    onChange,
    placeholder,
    type = "text",
    maxLength,
    minLength,
    error,
    accept,
    disabled,
    className = "",
}) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleToggle = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="relative text-text-white" >
            <label className="block text-xs text-text-white ">{label}</label>
            <div className="relative">
                <input
                    min={minLength}
                    placeholder={placeholder || label}
                    type={type === "password" && showPassword ? "text" : type}
                    name={name}
                    value={type === "file" ? undefined : value}
                    onChange={onChange}
                    maxLength={maxLength}
                    minLength={minLength}
                    accept={accept}
                    disabled={disabled}
                    className={`mt-1 block w-full text-text-white ${type === "text" ? "text-xs" : "text-xs"} bg-[#ffffff13] backdrop-blur-md placeholder:text-text-white border-white rounded shadow-sm border p-2 outline-none  transition-all duration-300 
                    ${error ? "border-red-500" : ""}
                    ${disabled ? "bg-[#ffffff13] backdrop-blur-md1 cursor-not-allowed opacity-60" : ""}
                    ${className}
                `}
                />
                {type === "password" && (
                    <span
                        // type="button"
                        onClick={handleToggle}
                        className="absolute right-2 top-0 transform -translate-x-1/2 translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                        {showPassword ? <IoEyeSharp /> : <IoEyeOffOutline />}
                    </span>
                )}
            </div>

            {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
        </div>
    );
};

export default InputField;