import React from "react";
import Image from "next/image";

export const Repos = (props) => {
    return (
        <div className="bg-white p-4 my-4 w-72 h-48">
            <span className="flex items-center space-x-1 mb-2">
                <Image
                    src={require("../public/images/repository.png")}
                    alt="Repo"
                    width={20}
                    height={20}
                />                 
                <h4 className="text-xl font-bold">kolibri</h4> 
            </span>
            <p>Kolibri Learning Platform: the offline app for universal education</p>
            <span className="flex justify-between items-center space-x-3 text-sm mt-6">
                <p>Python</p>
                <p>{100000} KB</p>
                <span className="flex space-x-2">
                    <Image
                        src={require("../public/images/star.png")}
                        alt="Repo"
                        width={20}
                        height={20}
                    /> 
                    <p>{0}</p> 
                </span>
                <span className="flex space-x-2">
                    <Image
                        src={require("../public/images/fork.png")}
                        alt="Repo"
                        width={20}
                        height={20}
                    /> 
                    <p>{0}</p> 
                </span>
            </span>
        </div>
    );
}