import React from "react";
import Image from "next/image";

export const IconWithText = ({ icon, text }) => {
  return (
    <div className="flex space-x-2">
      <Image
        src={require(`../public/images/${icon}.png`)}
        alt={text}
        aria-label={`location is ${text}`}
        width={25}
        height={25}
      />
      <p className="text-xl">{text}</p>
    </div>
  );
};
