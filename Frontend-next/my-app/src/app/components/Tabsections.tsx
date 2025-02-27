"use client";

import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Imagecard";
const Tabsections = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [categories, setCategories] = useState<any>([]);
  const [articles, setArticles] = useState<any>([]);

  useEffect(() => {
    async function fetchHeader() {
      const { data } = await axios.get(
        "http://localhost:1337/api/categories?populate=*"
      );
      const res = await axios.get(
        "http://localhost:1337/api/articles?populate=*"
      );
      setArticles(res?.data?.data);
      //   console.log(res?.data?.data, "res");
      setCategories(data?.data);
    }
    fetchHeader();
  }, []);

  const handleArticle = async (index: number, tab: any) => {
    setActiveTab(index);
    console.log(tab, "tab");
    if (tab.name == "All") {
      const res = await axios.get(
        "http://localhost:1337/api/articles?populate=*"
      );
      setArticles(res?.data?.data);
    } else {
      const { data } = await axios.get(
        `http://localhost:1337/api/categories/${tab?.slug}`
      );
      console.log(data, "res>>>");
      setArticles(data?.data?.articles);
    }
  };

  return (
    <>
      <div
        className="mx-auto m-10"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: "5px",
        }}
      >
        {/* Tab buttons */}
        <div className="flex  border-gray-300 text-gray-500 hover:text-blue-500">
          {/* <button className={`py-2 px-4 text-sm font-semibold`}>All</button> */}
          {categories?.map((tab:any, index:number) => (
            <button
              key={index}
              className={`py-2 px-4 text-sm font-semibold ${
                activeTab === index
                  ? "border-b-2 border-blue-500 text-blue-500"
                  : "text-gray-500 hover:text-blue-500"
              }`}
              style={{
                width: "170px",
                height: "54px",
                borderRadius: "30px",
                border: "1px solid",
              }}
              //   onClick={() => setActiveTab(index)}
              onClick={() => handleArticle(index, tab)}
            >
              {tab.name}
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-10">
        {articles?.map((ele:any, index:number) => (
          <div key={index} className="">
            <Card element={ele} />
          </div>
        ))}
      </div>
      <div>
        {" "}
        <button className="text-white py-2 px-4 rounded-md" style={{}}>
         rghergerg
        </button>
      </div>
    </>
  );
};

export default Tabsections;
