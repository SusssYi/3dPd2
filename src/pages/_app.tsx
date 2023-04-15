import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import type { AppProps } from "next/app";
import { MainProvider } from "../context/main.context";
import "../styles/globals.css";
// eslint-disable-next-line require-jsdoc
/**
 * 描述
 * @date 2022-04-27
 * @param {any} {Component
 * @param {any} pageProps}:AppProps
 * @return {any}
 */
function MyApp({ Component, pageProps }: AppProps) {
    gsap.registerPlugin(ScrollTrigger);

    return (
        <>
            {/* the default seo , see :https://github.com/garmeeh/next-seo*/}

            <MainProvider>
                <Component {...pageProps} />
            </MainProvider>
        </>
    );
}

export default MyApp;
