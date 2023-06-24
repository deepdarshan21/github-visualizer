import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { IconWithText } from "../components/IconWithText";
import { NumberWithText } from "../components/NumberWithText";
import { Repos } from "../components/Repos";

import {fetchUserInfo, fetchUserRepos, fetchUserTopRepos} from "../utils/fetchData";
import {convertDateToDDMonthYYYY} from "../utils/commonUtil";

export const Dashboard = () => {
    const router = useRouter();

    const [loading, setLoading] = useState(true);
    const [userData, setUserData] = useState({});
    const [repos, setRepos] = useState([]);
    const [showAllRepos, setShowAllRepos] = useState(false);
    const [reposLoader, setReposLoader] = useState(false);

    useEffect(() => {
        if(!router.isReady) return;
        const username = router.query.username;
        fetchUserInfo(username).then((data) => {
            setUserData(data);
        });
        fetchUserTopRepos(userData.login).then((data) => {
            setRepos(data);
        });
        setLoading(false);
    }, [router]);

    useEffect(() => {
        setReposLoader(true);
        if(showAllRepos){
            fetchUserRepos(userData.login).then((data) => {
                setRepos(data);
            });
        }else{
            fetchUserTopRepos(userData.login).then((data) => {
                setRepos(data);
            });
        }
        setReposLoader(false);
    }, [showAllRepos]);

    return (
        <div className="w-full h-max absolute top-0 bg-[#F3F2EF]">
            {loading ? <h1>Loading...</h1> :
            (
                <>
                <nav className="w-screen px-8 flex bg-[#303536] justify-between items-center  border-b-8 border-blue-600">
                   <Image
                        src={require("../public/images/logo.png")}
                        alt="Github Logo"
                        width={80}
                        height={80}
                    /> 
                    <div className="flex items-center space-x-3">
                        <Image
                        src={userData.avatar_url}
                        alt={userData.name}
                        width={60}
                        height={60}
                        className="rounded-full"
                    />
                        <h1 className="text-[#F3F2EF] text-2xl font-bold">{userData.login}</h1>
                    </div>
                </nav>
                <main className="w-screen flex flex-col justify-center items-center">
                    <section className="flex flex-col w-[80vw] justify-center items-center pb-8 border-solid border-b-4 mt-8 space-y-4">
                        <Image
                            src={userData.avatar_url}
                            alt={userData.name}
                            width={150}
                            height={150}
                            className="rounded-full border-8 border-pink-400"
                        />
                        <h2 className="text-2xl font-bold text-10">{userData.name}</h2>
                        <a href={userData.html_url} className="text-xl font-bold text-10 text-blue-300">@{userData.login}</a>
                        <div className="flex space-x-10">
                            <IconWithText icon="location" text={userData.location} />
                            <IconWithText icon="calendar" text={`Joined since ${convertDateToDDMonthYYYY(userData.created_at)}`} />
                        </div>
                        <div className="flex space-x-10">
                            <NumberWithText val={userData.public_repos} text={"REPOSITORIES"}/>
                            <NumberWithText val={userData.followers} text={"FOLLOWERS"}/>
                            <NumberWithText val={userData.following} text={"FOLLOWING"}/>
                        </div>
                        <p>{userData.bio}</p>
                    </section>
                   {/* <section className="flex flex-row w-[80vw] justify-around items-center py-8 border-solid border-b-4">
                        <span className="flex items-center space-x-3">
                            <h4 className="text-xl font-bold">Languages</h4>
                            <p className="text-xl">REPOSITORIES</p>
                        </span>
                        <span className="flex items-center space-x-3">
                            <h4 className="text-xl font-bold">Commits per quarter</h4>
                            <p className="text-xl">REPOSITORIES</p> 
                        </span>
                   </section>
                   <section  className="flex flex-row w-[80vw] justify-around items-center py-8 border-solid border-b-4">
                        <span className="flex items-center space-x-3">
                            <h4 className="text-xl font-bold">Repos per Languages</h4>
                             <p className="text-xl">REPOSITORIES</p>
                        </span>
                        <span className="flex items-center space-x-3">
                            <h4 className="text-xl font-bold">Most Starred</h4>
                            <p className="text-xl">REPOSITORIES</p> 
                        </span>
                   </section> */}
                   <section  className="w-[80vw] justify-around items-center pt-8 border-solid">
                        <span className="flex flex-row justify-between px-6">
                            <h4 className="text-xl font-bold">{showAllRepos ? "All Repos":"Top Repops"}</h4>
                            <p 
                                className="text-blue-500 underline cursor-pointer" 
                                onClick={() => {setShowAllRepos(!showAllRepos)}}
                            >
                                {showAllRepos ? "View Less":"View All"}
                            </p>
                        </span>
                        <div className="flex flex-wrap gap-4 justify-around">
                            {repos.map((repo) => (
                                <Repos key={repo.id} repo={repo} />
                            ))}
                        </div>
                    </section>
                </main>
                </>
            )}
        </div>
    );  
};  