import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { IconWithText } from "../components/IconWithText";
import { NumberWithText } from "../components/NumberWithText";
import { Repos } from "../components/Repos";

export const Dashboard = () => {
    const router = useRouter();
    const username = router.query.userName;

    

    return (
        <div className="w-full h-max absolute top-0 bg-[#F3F2EF]">
            <nav className="w-screen px-8 flex bg-[#303536] justify-between items-center  border-b-8 border-blue-600">
               <Image
                    src={require("../public/images/logo.png")}
                    alt="Github Logo"
                    width={80}
                    height={80}
                /> 
                <div className="flex items-center space-x-3">
                    <Image
                    src={require("../public/images/logo.png")}
                    alt="Github Logo"
                    width={60}
                    height={60}
                    className="rounded-full"
                />
                    <h1 className="text-[#F3F2EF] text-2xl font-bold">{username}</h1>
                </div>
            </nav>
            <main className="w-screen flex flex-col justify-center items-center">
                <section className="flex flex-col w-[80vw] justify-center items-center pb-8 border-solid border-b-4">
                    <Image
                        src={require("../public/images/logo.png")}
                        alt="Github Logo"
                        width={150}
                        height={150}
                        className="rounded-full mt-12 border-8 border-pink-400"
                    />
                    <h2 className="text-2xl font-bold mt-4 text-10">Deepdarshan</h2>
                    <h5 className="text-xl font-bold mt-4 text-10 text-blue-300">@deepdarshan</h5>
                    <div className="flex space-x-10">
                        <IconWithText icon="location" text="Bangalore, India" />
                        <IconWithText icon="calendar" text={`Joined since 20 June`} />
                    </div>
                    <div className="flex space-x-10">
                        <NumberWithText val={54} text={"REPOSITORIES"}/>
                        <NumberWithText val={54} text={"REPOSITORIES"}/>
                        <NumberWithText val={54} text={"REPOSITORIES"}/>
                    </div>
                    <p>Ex-SDE Intern @pravegak || C4GT 22' @project-sunbird || SIH 22' Grand Finalist Student Expert @getpostman</p>
                </section>
               <section className="flex flex-row w-[80vw] justify-around items-center py-8 border-solid border-b-4">
                    <span className="flex items-center space-x-3">
                        <h4 className="text-xl font-bold">Languages</h4>
                        {/* <p className="text-xl">REPOSITORIES</p> */}
                    </span>
                    <span className="flex items-center space-x-3">
                        <h4 className="text-xl font-bold">Commits per quarter</h4>
                        {/* <p className="text-xl">REPOSITORIES</p> */}
                    </span>
               </section>
               <section  className="flex flex-row w-[80vw] justify-around items-center py-8 border-solid border-b-4">
                    <span className="flex items-center space-x-3">
                        <h4 className="text-xl font-bold">Repos per Languages</h4>
                        {/* <p className="text-xl">REPOSITORIES</p> */}
                    </span>
                    <span className="flex items-center space-x-3">
                        <h4 className="text-xl font-bold">Most Starred</h4>
                        {/* <p className="text-xl">REPOSITORIES</p> */}
                    </span>
               </section>
               <section  className="w-[80vw] justify-around items-center pt-8 border-solid">
                    <span className="flex flex-row justify-between px-6">
                        <h4 className="text-xl font-bold">Top Repops</h4>
                        <a href="#" className="text-blue-500 underline">View All</a>
                    </span>
                    <div className="flex flex-wrap gap-4 justify-around">
                        <Repos/>
                        <Repos/>
                        <Repos/>
                        <Repos/>
                        <Repos/>
                        <Repos/>
                        <Repos/>
                        <Repos/>
                        <Repos/>
                        <Repos/>
                    </div>
                </section>
            </main>
        </div>
    );
};