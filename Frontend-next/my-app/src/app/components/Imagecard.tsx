"use client";

import Image from "next/image";
import moment from "moment";
import React, { useState } from "react";
import { CiCalendar } from "react-icons/ci";
import CustomizedDialogs from "./Modal";

export default function Card({ element }: any) {
  const [open, setOpen] = useState(false);
  const [modalData, setModalData] = useState<any>("");
  const onOpenModal = (element: any) => {
    setOpen(true);
    setModalData(element);
  };
  const onCloseModal = () => setOpen(false);
  console.log(element, "element");
  return (
    <>
      <CustomizedDialogs
        handleOpen={onOpenModal}
        handleClose={onCloseModal}
        open={open}
        setOpen={setOpen}
        modalData={modalData}
      />
      <div
        className="max-w-sm rounded overflow-hidden shadow-lg"
        onClick={() => {
          onOpenModal(element);
        }}
      >
        <Image
          className="w-full h-48 object-cover"
          src={element?.cover?.url}
          alt="Card Image"
          width={100}
          height={100}
        />
        <div className="px-6 py-4">
          <h2
            className="text-xl font-semibold text-gray-800"
            style={{
              fontFamily: "Playfair Display",
              fontWeight: "500px",
              fontSize: "24px",
            }}
          >
            {element?.title}
          </h2>
          <div className="flex items-center">
            <CiCalendar
              style={{
                color: "#3481E8",
                width: "24px",
                height: "24px",
                marginTop: "5px",
                marginRight: "5px",
              }}
            />
            <p
              className="text-gray-600 text-base mt-2"
              style={{
                fontFamily: "Poppins",
                fontWeight: "500px",
                fontSize: "14px",
              }}
            >
              {moment(element?.eventDate).format("Do-MMM-YYYY")}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
