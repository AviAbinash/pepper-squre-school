"use client";

import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import { FaHeart } from "react-icons/fa";

const Header = () => {
  const [headerData, setHeaderdata] = useState<any>([]);
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
      <header className="bg-white-600 text-black" style={{ height: "123px" }}>
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
                  <Link href="/" className="hover:text-gray-400" key={ele?.id} style={{width:"131px",height:"36px",fontFamily:"Poppins"}}>
                    {ele?.name}
                  </Link>
                ))}
            </nav>

            <div className="flex space-x-4">
              {headerData?.csr?.isVisible == true ? (
                <button
                  className="text-white py-2 px-4 rounded-md"
                  style={{
                    background: "white",
                    color: "#F54E39",
                    border: "1px solid",
                    width: "154px",
                    height: "60px",
                  }}
                >
                  {headerData?.csr?.title}
                </button>
              ) : (
                <></>
              )}
              {headerData?.donate?.isVisible == true ? (
                <div
                  style={{
                    background: "#F54E39",
                    color: "white",
                    width: "183px",
                    height: "60px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <button className="text-white py-2 px-4 rounded-md">
                    {headerData?.donate?.title}
                  </button>
                  <FaHeart />
                </div>
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
