/* eslint-disable react/react-in-jsx-scope */
import type { NextPage } from "next";
import Header from "../components/Header";
import Technologies from "../components/Technologies";
import TopSection from "../components/TopSection";

const Home: NextPage = () => {
    return (
        <div className=" flex w-full min-h-screen h-auto flex-col py-12 md:py-0">
            <Header />
            <TopSection />
            <Technologies />
        </div>
    );
};

export default Home;
