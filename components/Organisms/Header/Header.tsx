import Link from "next/link";
import { useEffect, useState } from "react";

import styles from "./Header.module.scss";

function Header() {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Adjust opacity based on scroll position (0.5 minimum)
      const newOpacity = Math.max(1 - scrollY / 300, 0.95);

      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={styles.headerContainer}
      style={{ opacity, position: "sticky", top: 0, zIndex: 1000 }}
    >
      <div className="container mx-auto p-0 md:px-4 h-14 md:h-20 block md:flex items-center justify-between text-white">
        <div>Menu</div>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/projects">Projects</Link>
        <img alt="Logo" className="h-20" src="/images/logo.jpeg" />
      </div>
    </div>
  );
}

export default Header;
