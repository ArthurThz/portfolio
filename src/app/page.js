"use client";

import Intro from "@/components/Intro";
import NavBar from "@/components/Navbar";
import About from "@/components/about-me";

export default function Home() {
  return (
    <main className=" min-h-screen">
      <NavBar />
      <Intro />
      <About />
    </main>
  );
}
