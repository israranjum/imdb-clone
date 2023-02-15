"use client";
import Link from "next/link";
import React from "react";
import { useSearchParams } from "next/navigation";

interface MenuItems {
  title: string;
  param: string;
}
const NavbarItem = (props: MenuItems) => {
  //   for dynamic underline in menu
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");
  return (
    <div>
      <Link href={`/?genre=${props.param}`}>
        <h1
          className={` hover:text-amber-600 font-semibold p-2 ${
            // Add Dynamic css in menu
            genre &&
            genre === props.param &&
            "underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg"
          }`}
        >
          {props.title}
        </h1>
      </Link>
    </div>
  );
};

export default NavbarItem;
