import React, { useState } from "react";
import Link from "next/link";
import ContainerFull from "./containerFull";
import Container from "./container";
import Menu from "./menu";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <ContainerFull className="bg-slate-100">
      <Container>
        <header className="flex w-full items-center justify-center py-8 md:justify-between">
          <GiHamburgerMenu
            onClick={() => setOpenMenu(true)}
            className="absolute left-4 text-2xl md:hidden"
          />
          <Menu setOpenMenu={setOpenMenu} openMenu={openMenu} />
          <img
            className="h-6 md:h-10"
            src="/images/logo.png"
            alt="company logo"
          />
          <nav className="hidden gap-4 md:flex">
            <Link href="/">
              <span className="font-bold uppercase text-slate-500 hover:text-slate-700">
                Home
              </span>
            </Link>
            <Link href="/">
              <span className="font-bold uppercase text-slate-500 hover:text-slate-700">
                Products
              </span>
            </Link>
            <Link href="/">
              <span className="font-bold uppercase text-slate-500 hover:text-slate-700">
                About
              </span>
            </Link>
            <Link href="/">
              <span className="font-bold uppercase text-slate-500 hover:text-slate-700">
                Contact
              </span>
            </Link>
          </nav>
        </header>
      </Container>
    </ContainerFull>
  );
}
