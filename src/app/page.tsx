"use client";

import AppSheel from "@/components/layouts/AppSheel/page";

import Navbar from "./navbar";
import Nav from "./navbar";
import Link from "next/link";
import { IoIosArrowUp } from "react-icons/io";
import { useEffect, useState } from "react";
import LandingPage from "./landing-page/page";




export default function Home() {

  const [onScroll, setOnScroll] = useState(false);


  const toTop = () => {
    if (window.scrollY >= 1) {
      setOnScroll(true);
    } else {
      setOnScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toTop);
  });
  
  return (
    <div>
      {/* <AppSheel>
      </AppSheel> */}
        <LandingPage/>
        <div>
          <Link
            href="#top"
            className={`p-3 bg-primary rounded-full fixed m-5 bottom-0 right-0 z-[999] text-white shadow-md transition-all duration-150 delay-150 ${
              onScroll ? "scale-100" : "scale-0"
            }`}
          >
            <IoIosArrowUp />
          </Link>
        </div>
    </div>
  );
}
