/* eslint-disable react/react-in-jsx-scope */
import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import { useTheme } from "next-themes";
import { Suspense } from "react";

const Home: NextPage = () => {
    const { theme, setTheme } = useTheme();

    return (
        <Suspense fallback="loading...">
            <NextSeo title="first" description=" some desc" />

            <div className="container-col space-y-8 ">
                <div className="prose dark:prose-dark">
                    <h1 className="text-3xl px-8 py-2 rounded-2xl transition-all duration-100  bg-teal-300 dark:bg-red-400  ">
                        Welcome to Your App
                    </h1>
                </div>

                <button
                    className="btn-base "
                    onClick={() =>
                        setTheme(theme === "dark" ? "light" : "dark")
                    }
                >
                    toggle
                </button>
            </div>
        </Suspense>
    );
};

export default Home;
