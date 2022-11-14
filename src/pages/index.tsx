/* eslint-disable react/react-in-jsx-scope */
import type { NextPage } from "next";
import Header from "../components/Header";
import Technologies from "../components/Technologies";
import TopSection from "../components/TopSection";

const Home: NextPage = () => {
    return (
        <div className=" flex w-full min-h-screen h-auto flex-col py-12 md:py-0">
            <head>
                <title>Unfinished</title>
            </head>

            {/* TODO: add animation svg or 3d scene */}
            <Header />
            <TopSection />
            <Technologies />
            {/* TODO:work section */}
            {/* TODO:email section */}
        </div>
    );
};

export default Home;
