import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
  return (
    <div className="flex z-1000 relative bg-transparent gap-32 justify-center items-center  w-full h-[15vh]  text-lg   text-white font-bold">
      <Link href="/about" className="nav-link">
        About Us
      </Link>
      <Link href="/verticals" className="nav-link">
        Verticals
      </Link>
      <Link href="/services" className="nav-link">
        Services
      </Link>
      <Link href="/" className="nav-link">
        <Image
          src="/Logo.svg"
          alt="Neurologicai logo"
          width={250}
          height={250}
        />
      </Link>
      <Link href="/resources" className="nav-link">
        Resources
      </Link>
      <Link href="/news" className="nav-link">
        News & Updates
      </Link>
      <Link href="/contact" className="nav-link">
        Contact Us
      </Link>
    </div>
  );
};

export default Navbar;
