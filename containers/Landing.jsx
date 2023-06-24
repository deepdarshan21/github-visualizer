import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const Landing = () => {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission here
    };

    return (
        <div className="w-full h-max absolute top-0 bg-[#F3F2EF]">
            <header className="w-[full] h-[30vh] flex flex-col bg-[#303536] justify-center items-center border-b-8 border-blue-600">
               <Image
                    src={require("../public/images/logo.png")}
                    alt="Github Logo"
                    width={80}
                    height={80}
                /> 
                <h1 className="text-[#F3F2EF] text-4xl font-bold">Github Visualizer</h1>
            </header>
            <main className="w-[full] h-[70vh] flex flex-col justify-center items-center">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={inputValue}
                        onChange={handleChange}
                        placeholder="Enter something"
                        className="p-[0.75rem] border-solid focus:border-none bg-transparent text-[2rem] w-[500px] h-[50px] text-[rgb(36, 41, 46)] font-medium border-b-2 border-pink-400"
                    />
                    <Link href={`/${inputValue}`} passHref>
                        <button type="submit" className="text-[1.2rem] mx-2 px-[0.5rem] py-[0.5rem] bg-indigo-500 font-normal cursor-pointer border-r-4 justify-center items-center text-white">Submit</button>
                    </Link>
                    <p className="text-xl text-red-600">Please enter valid username</p>
                </form>
            </main>
        </div>
    );
};