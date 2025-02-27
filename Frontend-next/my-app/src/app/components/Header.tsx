"use client";

import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [headerData, setHeaderdata] = useState([]);
  useEffect(() => {
    async function fetchHeader() {
      const { data } = await axios.get(
        "http://localhost:1337/api/headers?populate=*"
      );
      console.log(data?.data);
      setHeaderdata(data?.data[0]);
    }
    fetchHeader();
  }, []);
  return (
    <>
      <header className="bg-white-600 text-black">
        <div className="max-w-screen-xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {headerData ? (
              <div className="text-2xl font-semibold">
                <Link href="/">
                  <Image
                    src={headerData?.logo?.url}
                    alt="logo"
                    width={82}
                    height={96}
                  />
                </Link>
              </div>
            ) : (
              <></>
            )}

            <nav className="flex-1 flex justify-center space-x-6">
              {headerData?.mainmenu &&
                headerData?.mainmenu?.map((ele: any) => (
                  <Link href="/" className="hover:text-gray-300" key={ele?.id}>
                    {ele?.name}
                  </Link>
                ))}
            </nav>

            <div className="flex space-x-4">
              {headerData?.csr?.isVisible == true ? (
                <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md">
                  {headerData?.csr?.title}
                </button>
              ) : (
                <></>
              )}
              {headerData?.donate?.isVisible == true ? (
                <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md">
                  {headerData?.donate?.title}
                </button>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
