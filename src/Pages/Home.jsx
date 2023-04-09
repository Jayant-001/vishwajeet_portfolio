import React from "react";
import NavBar from "../components/NavBar";
import Hero from "./Hero";

const Home = ({darkMode, setDarkMode}) => {
    return (
        <div className=" h-[50vh] lg:h-screen bg-gradient-to-t from-indigo-200 dark:from-slate-800 dark:to-slate-900 relative overflow-hidden ">
            {/* intro section */}
            <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
            <Hero />
        </div>
    );
};

export default Home;
