import type { AppProps } from "next/app";

import { useEffect } from "react";
import { NextUIProvider } from "@nextui-org/system";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useRouter } from "next/router";
import "aos/dist/aos.css";
import AOS from "aos";

import "@/styles/globals.scss";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      // once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <NextUIProvider navigate={router.push}>
      <NextThemesProvider>
        <Component {...pageProps} />
      </NextThemesProvider>
    </NextUIProvider>
  );
}
