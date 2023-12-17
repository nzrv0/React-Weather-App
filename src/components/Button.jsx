import React from "react";

function Button({ children }) {
    return (
        <button
            type="button"
            className="w-full text-2xl font-medium bg-white bg-opacity-50 rounded-3xl text-center py-3 px-24 text-white text-opacity-80 flex justify-center items-center gap-2"
        >
            {children}
        </button>
    );
}

export default Button;
