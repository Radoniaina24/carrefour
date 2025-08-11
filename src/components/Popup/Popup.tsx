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
    <Modal isOpen={openModal} onClose={onClose}>
      <Image
        src={
          "https://res.cloudinary.com/dikefxjpd/image/upload/v1754890304/pop-pop_msxp7r.jpg"
        }
        alt={"popup"}
        width={1000}
        height={1000}
      />
    </Modal>
  );
}
