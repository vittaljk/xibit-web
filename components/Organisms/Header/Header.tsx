import Link from "next/link";

function Header() {
  return (
    <div className="bg-headerBg">
      <div className="container mx-auto p-0 md:px-4 h-14 md:h-20 block md:flex items-center justify-between">
        <div className="text-white">header content</div>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </div>
  );
}

export default Header;
