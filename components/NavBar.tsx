"use client";
import { Button } from "@base-ui/react";
import Link from "next/link";

const NavBar = () => {
  return (
    <header className="flex flex-row justify-between items-center bg-off-white p-4">
      <h2 className="font-bold">
        <Link href="/dashboard">Challenges</Link>
      </h2>
      <Button
        onClick={() => {
          console.log("Log out");
        }}
        className="bg-plum text-white p-2 pt-3 rounded-sm">
        Logout
      </Button>
    </header>
  );
};

export default NavBar;
