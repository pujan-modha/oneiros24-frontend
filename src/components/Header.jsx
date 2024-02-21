"use client";
import Image from "next/image";
import Link from "next/link";
import Ono from "../assets/ono.png";
import classNames from "classnames";
import { useState } from "react";
import "./components.css";
import { Divide as Hamburger } from "hamburger-react";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="fixed flex top-0 z-50 h-14 px-4 w-screen items-center bg-[#F9E390]">
        <div className="md:mx-auto">
          <div className="hidden md:flex">
            <div className="grid grid-cols-5 gap-4 items-center place-items-center text-shadow text-[#F8654B] font-bold">
              <div className="col-span-2 space-x-8 justify-self-end">
                <Link href="/events">EVENTS</Link>
                <Link href="/">SCHEDULE</Link>
                <Link href="/">CAMPUS AMABASSADOR</Link>
              </div>
              <div className="col-span-1 drop-shadow-md">
                <Link href="/">
                  <Image src={Ono} alt="Oneiros'24" className="w-20" />
                </Link>
              </div>
              <div className="col-span-2 space-x-8 justify-self-start">
                <Link href="/sponsors">SPONSORS</Link>
                <Link href="/meet-the-team">MEET THE TEAM</Link>
                <Link href="/">REGISTER</Link>
              </div>
            </div>
          </div>
          <div className="flex md:hidden items-center">
            <Link href="/" className="mr-auto drop-shadow-md">
              <Image src={Ono} alt="Oneiros'24" className="w-16" />
            </Link>
            <div className="ml-auto text-right">
              <div className="ml-auto">
                <button
                  type="button"
                  className="absolute right-4 top-1"
                  id="menu-button"
                  aria-expanded="true"
                  aria-haspopup="true"
                  onClick={() => setOpen(!open)}
                >
                  <Hamburger size={28} color="#90212E" rounded />
                </button>
              </div>
              <div
                className={classNames(
                  "w-full absolute right-0 z-10 mt-8 origin-top-right bg-[#F9E390] shadow-[4px_4px_0px_rgba(144,33,46,1)] border-black border-2",
                  { hidden: !open }
                )}
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
              >
                <div
                  role="none"
                  className="grid p-4 font-bold text-xl text-shadow text-[#F8654B] gap-y-2"
                >
                  <Link href="/events">EVENTS</Link>
                  <Link href="/">SCHEDULE</Link>
                  <Link href="/">CAMPUS AMABASSADOR</Link>
                  <Link href="/sponsors">SPONSORS</Link>
                  <Link href="/meet-the-team">MEET THE TEAM</Link>
                  <Link href="/">REGISTER</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
