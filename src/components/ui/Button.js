import React from "react";

export function Button({ children, onClick, className = "", type = "button" }) {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`px-4 py-2 rounded-md text-white bg-yellow-400 hover:bg-yellow-500 transition duration-200 ${className}`}
        >
            {children}
        </button>
    );
}
