import React from "react";

const Loader = () => {
    return (
        <div className="flex justify-center items-center h-screen absolute top-0 left-0 w-full z-50 bg-bg-color1/70">
            <div className="relative w-10 h-10 rotate-[165deg]">
                <div className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full animate-before8 bg-transparent" />
                <div className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full animate-after6 bg-transparent" />
            </div>
        </div>
    );
};

export default Loader;
