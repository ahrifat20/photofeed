import logo from "@/public/lws_logo.png";
import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <Image
        className="max-w-[100px] md:max-w-[165px]"
        src={logo}
        alt="Lws logo"
        height={165}
        width={100}
      />
    </Link>
  );
}
