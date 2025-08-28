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
          "https://res.cloudinary.com/dnfdr35vf/image/upload/v1756379786/popup_udembl.jpg"
        }
        alt={"popup"}
        width={1000}
        height={1000}
        className="w-full h-full"
      />
    </Modal>
  );
}
