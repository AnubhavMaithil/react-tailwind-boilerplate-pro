import React from 'react'

const SelectInput = ({ label, name, value, options, onChange, className = "" ,disabled}) => {
    return (
        <div className="flex flex-col">
            <label className="block text-xs font-medium ">{label}</label>
            <select disabled={disabled} value={value} name={name} className={`${className} mt-1 block w-full text-sm  bg-[#ffffff13] backdrop-blur-md border-gray-300 rounded shadow-sm border px-2 py-[6px] outline-none pr-10`} onChange={onChange}>
                <option className='text-bg-color1' value="">Select {label}</option>
                {options.map((option, index) => (
                    <option className='text-bg-color1' key={index} value={option.value}>{option.label}</option>
                ))}
            </select>
        </div>
    );
};

export default SelectInput