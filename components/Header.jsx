import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <div>
      <div className="logo bg-navbar flex flex-row justify-center">
        <Link href="/">
          <Image src="/imgs/logo.webp" width={200} height={150} />
        </Link>
      </div>
    </div>
  );
};

export default Header;
