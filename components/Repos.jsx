import React from "react";
import Image from "next/image";

export const Repos = ({repo}) => {
    let repoDescription = repo.description?.substring(0, 130);
    if(repo.description?.length > 130) repoDescription = repoDescription+"...";
    return (
        <div href={repo.html_url} className="bg-white p-4 my-4 w-80 h-54">
            <span className="flex items-center space-x-1 mb-2">
                <Image
                    src={require("../public/images/repository.png")}
                    alt="Repo"
                    width={20}
                    height={20}
                />                 
                <h4 className="text-xl font-bold">{repo.name}</h4> 
            </span>
            <p className="h-24">{repoDescription}</p>
            <span className="flex justify-between items-center space-x-3 text-sm mt-6">
                <p>{repo.language}</p>
                <p>{repo.size} KB</p>
                <span className="flex space-x-2">
                    <Image
                        src={require("../public/images/star.png")}
                        alt="Stars"
                        width={20}
                        height={20}
                    /> 
                    <p>{repo.stargazers_count}</p> 
                </span>
                <span className="flex space-x-2">
                    <Image
                        src={require("../public/images/fork.png")}
                        alt="Forks"
                        width={20}
                        height={20}
                    /> 
                    <p>{repo.forks_count}</p> 
                </span>
            </span>
        </div>
    );
}