import { NavLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import AuthoProviders from "./AuthoProviders";
const Navbar = () => {
  const session = {};
  return (
    <nav className="flexBetween navbar">
      <div className="flex-1 flexStart gap-10">
        <Link href="/">
          <Image src="/logo.svg" width={145} height={43} alt="flexibble" />
        </Link>
        <ul className="xl:flex hidden text-small gap-7">
          {NavLinks.map((link) => (
            <Link href={link.href} key={link.key}>
              {link.text}
            </Link>
          ))}
        </ul>
      </div>
      <div className="flexCenter gap-4 ">
        {session ? (
          <>
            Userphoto
            <Link href="/create-project"></Link>
          </>
        ) : (
          <AuthoProviders />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
