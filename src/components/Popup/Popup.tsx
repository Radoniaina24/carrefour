"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Modal from "./Modal";

export default function PopUp() {
  const [openModal, setOpenModal] = useState<boolean>(false);
  function onClose() {
    setOpenModal(false);
  }

  useEffect(() => {
    const id = setTimeout(() => {
      setOpenModal(true);
    }, 2000);
    return () => clearTimeout(id);
  }, []);
  return (
    <Modal
      maxWidth="max-w-4xl"
      maxHeight="max-h-[90%]"
      isOpen={openModal}
      onClose={onClose}
    >
      <Image
        src={
          "https://res.cloudinary.com/dbpoyo4gw/image/upload/v1760350116/WhatsApp_Image_2025-10-13_%C3%A0_07.35.24_e8667921_tokez2.jpg"
        }
        alt={"popup"}
        width={1000}
        height={800}
        className=""
      />
    </Modal>
  );
}
