import * as React from "react";
import { useState } from "react";
import Image from "next/image";
import logo from "/public/logo.svg";
import instagramm_white from "/public/instagram_white.png";
import burgerOpen from "/public/burger.png";
import burgerClose from "/public/cross.png";
import Link from "next/link";

const Navigation = (): JSX.Element => {
  let Links = [
    { name: "Accueil", link: "/" },
    { name: "Mentions légales", link: "/" },
  ];
  const [toggleBurger, setToggleBurger] = useState<boolean>(false);
  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="flex items-center justify-between bg-gray-900 py-4 md:px-10 px-7">
        <div>
          <Link href="/">
            <a>
              <Image
                src={instagramm_white}
                width={20}
                height={20}
                alt={"logo isntagramm blanc"}
              ></Image>
            </a>
          </Link>
        </div>
        <div className="font-bold text-2xl cursor-pointer flex items-center text-gray-800">
          <span className="text-3xl text-indigo-600 mr-1 pt-2">
            {/* TODO : Center the logo */}
            <Image
              src={logo}
              alt={"logo du site"}
              width={30}
              height={30}
            ></Image>
          </span>
        </div>
        <div
          onClick={() => setToggleBurger(!toggleBurger)}
          className="cursor-pointer md:hidden"
        >
          {toggleBurger ? (
            <Image
              src={burgerClose}
              alt={"image d'une croix"}
              height={20}
              width={20}
            ></Image>
          ) : (
            <Image
              src={burgerOpen}
              alt={"image d'un burger menu"}
              height={10}
              width={20}
            ></Image>
          )}
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            toggleBurger ? "top-20 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li
              key={link.name}
              className="md:ml-8 text-base font-bigCalson md:my-0 my-7"
            >
              <Link href={link.link}>
                <a className="text-gray-800 md:text-white hover:text-gray-400 duration-500">
                  {link.name}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
