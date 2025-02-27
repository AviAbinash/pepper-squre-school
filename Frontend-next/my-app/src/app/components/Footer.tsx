"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  const [footerdata, setFooterData] = useState<any>([]);
  useEffect(() => {
    async function fetchHeader() {
      const { data } = await axios.get(
        "http://localhost:1337/api/footers/footer"
      );
      console.log(data, "data");
      setFooterData(data.data);
    }
    fetchHeader();
  }, []);

  console.log(process.env.BASE_URL, "BASE_URL");
  return (
    <>
      <footer className="bg-gray-400 text-white py-8">
        <div className="container mx-auto px-6 md:px-12 border-b">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-2">
            {/* Column 1 */}
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
              }}
            >
              {/* <h5 className="text-lg font-semibold mb-4">Company</h5> */}
              <Image
                src={footerdata?.logo?.url}
                alt="logo"
                width={118}
                height={138}
              />
              <ul>
                <li style={{ width: "206px", fontFamily: "Playfair Display" }}>
                  <p className="hover:text-white-400">{footerdata?.title}</p>
                </li>
                <li
                  style={{
                    height: "60x",
                    width: "179px",
                    fontFamily: "Poppins",
                  }}
                >
                  <p className="hover:text-white-400">{footerdata?.tagLine}</p>
                </li>
                <li
                  style={{
                    height: "60x",
                    width: "193px",
                    fontFamily: "Poppins",
                  }}
                >
                  <p className="hover:text-white-400">{footerdata?.address}</p>
                </li>
              </ul>
            </div>
            {/* Column 2 */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                // gap: "10px",
              }}
            >
              <h5 className="text-lg mb-2" style={{ fontFamily: "Poppins" }}>
                {footerdata?.links?.title}
              </h5>
              <ul>
                {footerdata?.links &&
                  footerdata?.links?.links?.map((ele: any, index: number) => (
                    <li key={index} style={{ fontFamily: "Poppins" }}>
                      <Link href="#" className="hover:text-white-400">
                        {ele?.title}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
            {/* Column 3 */}
            <div>
              <h5
                className="text-lg font-semibold"
                style={{ fontFamily: "Poppins", marginTop: "7px" }}
              >
                {footerdata?.contactUs?.title}
              </h5>
              <ul>
                <li>
                  <Link
                    href="/"
                    className="hover:text-white-400"
                    style={{ fontFamily: "Poppins", lineHeight: "20px" }}
                  >
                    {footerdata?.contactUs?.address}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="hover:text-white-400"
                    style={{
                      fontFamily: "Poppins",
                      lineHeight: "20px",
                      marginTop: "10px",
                    }}
                  >
                    {footerdata?.contactUs?.phone}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="hover:text-white-400"
                    style={{ fontFamily: "Poppins", lineHeight: "10px" }}
                  >
                    {footerdata?.contactUs?.email}
                  </Link>
                </li>
              </ul>
            </div>
            {/* Column 4 */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <h5
                className="text-lg font-semibold mb-4"
                style={{
                  width: "192px",
                  height: "54px",
                  fontFamily: "Playfair Display",
                }}
              >
                {footerdata?.donate?.parag}
              </h5>
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
                  {footerdata?.donate?.title}
                </button>
                <FaHeart />
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-8 mb-2 p-10">
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ marginRight: "10px" }}>
              {footerdata?.designBy?.name}
            </div>{" "}
            |
            {/* <Image src={footerdata?.designBy?.companyName} alt="company" width={}/> */}
            <div style={{ marginLeft: "10px" }}>
              {footerdata?.rights?.title}
            </div>
          </div>
          <div
            style={{
              color: "white",
              width: "183px",
              height: "60px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "20px",
            }}
          >
            {footerdata?.social?.map((ele: any, index: number) => (
              <div key={index}>
                <Image
                  src={ele?.image?.url}
                  alt={ele?.image?.name}
                  width={22.7}
                  height={18}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-8 mb-2 pl-10">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <div>{footerdata?.designBy?.name}</div>
            <Image
              src={footerdata?.designBy?.companyName?.url}
              alt={footerdata?.designBy?.name}
              width={258.6}
              height={20.9}
            />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
