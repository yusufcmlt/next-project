// Navbar.js
import Link from "next/link";
import Image from "next/image";

import Search from "./Search";
import { FC } from "react";
import shoppingCartLogo from "@/assets/shooping-cart.png";

type NavbarProps = {
  onSearch: (searchText: string) => void;
};

const Navbar: FC<NavbarProps> = ({ onSearch }) => {
  return (
    <nav>
      <ul>
        <li className="navbar-logo">
          <Image alt="logo" src={shoppingCartLogo} />
        </li>
        <li>
          <Link href={"/"}>Ürünler</Link>
        </li>
        <li>
          <Link href={"/about"}>Hakkımızda</Link>
        </li>
        <li>
          <Search onSearch={onSearch} />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
