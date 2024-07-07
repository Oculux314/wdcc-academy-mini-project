import pfp from "@/../public/pfp.png";
import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="py-4 px-20 bg-slate-300 border-b-2 border-black">
      <ul className="flex items-center gap-10">
        <li className="mr-auto">
          <Link href="/">
            <Image
              src={pfp}
              alt="Oculux"
              className="rounded-full h-8 w-8 inline mr-4"
            />
          </Link>
          <span>Nate&apos;s Blog Site</span>
        </li>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/blogs">Blogs</Link>
        </li>
        <li>
          <Link href="/instructions">Instructions</Link>
        </li>
      </ul>
    </nav>
  );
}
