"use client";

import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
// import Link from "next/link";
// import Image from "next/image";
const Dashboard = () => {
  const [dashboardData, setDashboarddata] = useState<any>([]);
  useEffect(() => {
    async function fetchHeader() {
      const { data } = await axios.get(
        "http://localhost:1337/api/dashboards/dashboard"
      );
      console.log(data, "data");
      setDashboarddata(data.data);
    }
    fetchHeader();
  }, []);
  console.log(dashboardData?.bannerSection?.image?.url, "dashboardData");
  return (
    <>
      <div
        className="relative bg-center h-[400px]"
        style={{
          backgroundImage: `url(${dashboardData?.bannerSection?.image?.url})`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>

        <div className="absolute inset-0 flex justify-center items-center text-center text-white px-6">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {dashboardData?.bannerSection?.title && (
              <h1
                className="text-4xl font-bold mb-4"
                style={{
                  width: "688px",
                  height: "95px",
                  fontFamily: "Playfair Display",
                  fontSize: "82px",
                  lineHeight: "96px",
                }}
              >
                {dashboardData?.bannerSection?.title}
              </h1>
            )}
            {dashboardData?.bannerSection?.description && (
              <p
                className="text-lg"
                style={{
                  width: "915px",
                  height: "84px",
                  fontFamily: "Poppins",
                  fontSize: "28px",
                  lineHeight: "42px",
                }}
              >
                {dashboardData?.bannerSection?.description}
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
