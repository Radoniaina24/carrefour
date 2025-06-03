import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import ModalDetailsCandidate from "./ModalDetailsCandidate";

/* eslint-disable */
export default function ViewCandidate({ user }: { user: any }) {
  const [open, setOpen] = useState<boolean>(false);
  const handleClose = () => {
    setOpen(false);
  };
  // console.log(open);
  return (
    <>
      <div className="hidden md:block">
        <button
          onClick={() => setOpen(true)}
          className=" flex gap-2  items-center text-green-600 text-sm px-1 py-1 rounded-lg cursor-pointer whitespace-nowrap"
        >
          <FaEye className="w-5 h-5 text-green-500 cursor-pointer" />
        </button>
      </div>
      <div className="md:hidden">
        <button
          onClick={() => setOpen(true)}
          className="bg-green-100 flex gap-2 items-center text-green-600 hover:bg-green-200 text-sm px-3 py-1 rounded-lg cursor-pointer whitespace-nowrap"
        >
          <FaEye className="w-5 h-5 text-green-500 cursor-pointer" />
          <span>voir</span>
        </button>
      </div>

      <ModalDetailsCandidate
        isOpen={open}
        title="Détails du recruteur"
        onClose={handleClose}
      >
        <div className="space-y-4">
          <div className="border border-gray-200 rounded-lg">
            <div className="bg-gray-100 px-4 py-2">
              <h4 className="font-bold text-gray-800">
                Informations personnelles
              </h4>
            </div>
            <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-500">Nom</p>
                <p className="font-medium">{user.lastName || "-"}</p>
              </div>
              <div>
                <p className="text-gray-500">Prénom</p>
                <p className="font-medium">{user.firstName || "-"}</p>
              </div>
              <div>
                <p className="text-gray-500">Email</p>
                <p className="font-medium">{user.emailAddress || "-"}</p>
              </div>
              <div>
                <p className="text-gray-500">Company</p>
                <p className="font-medium">{user.company || "-"}</p>
              </div>
              <div>
                <p className="text-gray-500">Pays</p>
                <p className="font-medium">{user.country || "-"}</p>
              </div>
            </div>
          </div>
        </div>
      </ModalDetailsCandidate>
    </>
  );
}
