import Link from "next/link";
import React from "react";

interface Menu {
  title: string;
  address: string;
  Icon: any;
}

const MenuItem = (props: Menu) => {
  return (
    <>
      <Link href={props.address} className="mx-4 lg:mx-6 hover:text-amber-600">
        <props.Icon className="text-2xl sm:hidden mx-4" />
        <p className="hidden sm:inline my-2 text-sm">{props.title}</p>
      </Link>
    
    </>
  );
};

export default MenuItem;
