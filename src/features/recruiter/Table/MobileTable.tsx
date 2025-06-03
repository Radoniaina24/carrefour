import React, { useEffect, useRef } from "react";

import dayjs from "dayjs";
import ViewCandidate from "../Actions/ViewCandidate";
import EditCandidate from "../Actions/EditCandidate";
import DeleteCandidate from "../Actions/DeleteCandidate";
import { useRecruiterContext } from "../context/RecruiterContext";
/* eslint-disable */
export default function MobileTable() {
  const { visibleColumns, currentPage, data } = useRecruiterContext();
  const scrollRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }
  }, [currentPage]); // 3. dépendance sur currentPage
  dayjs.locale("en");
  const formatDate = (
    isoDate: string | number | Date | dayjs.Dayjs | null | undefined
  ) => {
    return dayjs(isoDate).format("DD MMMM YYYY ");
  };
  const getStatusClass = (status: string) => {
    switch (status) {
      case "approved":
        return "bg-green-500 text-gray-600";
      case "unapproved":
        return "bg-red-500 text-white";
      default:
        return "bg-blue-100 text-blue-800";
    }
  };
  const users = data?.recruiters;
  return (
    <div
      ref={scrollRef}
      className="md:hidden"
      style={{
        height: "calc(100vh - 300px)",
        minHeight: "400px",
        maxHeight: "800px",
        overflowY: "auto",
      }}
    >
      {users?.length > 0 ? (
        users.map((user: any) => (
          <div key={user._id} className="bg-white p-4 border-b border-gray-200">
            {visibleColumns.nom && (
              <div className="mb-2">
                <h3 className="text-lg font-medium text-gray-900">
                  {user.lastName} {user.firstName}
                </h3>
              </div>
            )}
            {visibleColumns.email && (
              <ul className="mb-2 max-w-md  ">
                <li className="pb-3 sm:pb-4">
                  <div className="flex items-center space-x-4 rtl:space-x-reverse">
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-gray-500 ">Email:</p>
                    </div>
                    <div className="inline-flex items-center text-base  text-gray-900 ">
                      {user.emailAddress}
                    </div>
                  </div>
                </li>
              </ul>
            )}
            {visibleColumns.company && (
              <ul className="mb-2 max-w-md  ">
                <li className="pb-3 sm:pb-4">
                  <div className="flex items-center space-x-4 rtl:space-x-reverse">
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-gray-500 ">Company:</p>
                    </div>
                    <div className="inline-flex items-center text-base  text-gray-900 ">
                      {user.company}
                    </div>
                  </div>
                </li>
              </ul>
            )}

            {visibleColumns.dateInscription && (
              <ul className="mb-2 max-w-md  ">
                <li className="pb-3 sm:pb-4">
                  <div className="flex items-center space-x-4 rtl:space-x-reverse">
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-gray-500 "> Inscription:</p>
                    </div>
                    <div className="inline-flex items-center text-base  text-gray-900 ">
                      {formatDate(user.createdAt)}
                    </div>
                  </div>
                </li>
              </ul>
            )}
            {visibleColumns.status && (
              <ul className="mb-2 max-w-md  ">
                <li className="pb-3 sm:pb-4">
                  <div className="flex items-center space-x-4 rtl:space-x-reverse">
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-gray-500 "> Status:</p>
                    </div>
                    <div
                      className={` px-2 inline-flex items-center text-xs leading-5 font-semibold rounded-full  text-gray-900 ${getStatusClass(
                        user.status
                      )}`}
                    >
                      {user.status === "unapproved" ? "Non validé" : "validé"}
                    </div>
                  </div>
                </li>
              </ul>
            )}
            {visibleColumns.actions && (
              <div className="mt-4 gap-2 flex justify-end">
                {user.status === "unapproved" ? (
                  <>
                    {" "}
                    <ViewCandidate user={user} />
                    <EditCandidate user={user} />
                    <DeleteCandidate user={user} />
                  </>
                ) : (
                  <ViewCandidate user={user} />
                )}
              </div>
            )}
          </div>
        ))
      ) : (
        <div className="p-6 text-center text-gray-500">
          Aucun recruteur trouvé
        </div>
      )}
    </div>
  );
}
