"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button, ButtonGroup } from "@nextui-org/react";
import Link from "next/link";
import Image from "next/image";
import AcmeLogo from "./AcmeLogo";
import Logo from "@/components/Svgs/Logo";
type Props = {};

type MenuItem = {
  title: string;
  href: string;
  target?: "_blank" | "_self";
};

export default function MainNavbar({}: Props) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems: MenuItem[] = [
    {
      title: "Home",
      href: "/",
      target: "_self",
    },
    {
      title: "Fanpage",
      href: "https://www.facebook.com/AlurfiaInShelter",
      target: "_blank",
    },
    {
      title: "Services",
      href: "/services",
      target: "_self",
    },
    {
      title: "Login",
      href: "/login",
      target: "_self",
    },
  ];
  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} isBordered>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <Link href={"/"}>
          <NavbarBrand>
            {/* <AcmeLogo /> */}
            <Image src={"/favicon.ico"} width={32} height={32} alt="icon" className="mr-4" />
            <p className="font-bold text-inherit">ALURFIA</p>
          </NavbarBrand>
        </Link>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/" aria-current="page">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="https://www.facebook.com/AlurfiaInShelter"
            target="_blank"
          >
            Fanpage
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/services">
            Services
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        {/* <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem> */}
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href={item.href}
              target={item.target}
            >
              {item.title}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
