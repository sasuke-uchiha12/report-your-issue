import React from "react";
import Header from "./header";
import HomeCarousel from "./HomeCarousel";
import LoginTypeSelection from "./LoginTypeSelection";

const HomePage = () => {
    return(
        <div>
        <Header/>
        <HomeCarousel/>
        <LoginTypeSelection/>
        </div>
    );
}

export default HomePage;