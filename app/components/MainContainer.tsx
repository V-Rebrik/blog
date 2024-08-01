import React from "react";
import Link from "next/link";

type Props = {
  children: JSX.Element;
};

const MainContainer = ({ children }: Props) => {
  return (
    <>
      <div className="p-2 bg-orange-400 mb-2">
        <Link className="border rounded border-r-slate-500 mr-2 p-1" href="/">
          Home
        </Link>
        <Link
          className="border rounded border-r-slate-500 p-1"
          href="/pages/add"
        >
          Add New Post
        </Link>
      </div>
      <div>{children}</div>
    </>
  );
};

export default MainContainer;
