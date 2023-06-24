import React from 'react';

export const NumberWithText = ({ val, text }) => {
    return (
        <div className="flex flex-col justify-center items-center border-solid	border-4 px-2 py-4 space-y-2">
            <p className="text-xl text-fuchsia-500]">{val}</p>
            <p className="text-nomal">{text}</p>
        </div>
    );
};
