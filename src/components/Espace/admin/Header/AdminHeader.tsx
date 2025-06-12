import React, { useState, useRef, useEffect } from "react";
import { FaHome } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { CgProfile } from "react-icons/cg";
import { FiLogOut } from "react-icons/fi";

import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "@/redux/features/authSlice";

import { useLogoutMutation } from "@/redux/api/authApi";

interface StudentHeaderProps {
  toggleSidebarMobile: () => void;
  toggleSidebar: () => void;

  // logout: () => void;
}

const menuItems = [
  // { label: "Profil", href: "/student", icon: <TbUserPentagon /> },
  { label: "Allez au site", href: "/", icon: <FaHome /> },
];

export default function AdminHeader({
  toggleSidebar,
  toggleSidebarMobile,
}: // logout,
StudentHeaderProps) {
  const router = useRouter();
  const dispatch = useDispatch();
  const [logoutUser] = useLogoutMutation();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const user = useSelector(selectUser);
  // console.log(user);
  const handleLogout = async () => {
    try {
      await logoutUser("").unwrap();
      dispatch(logout());
      router.push("/");
    } catch (err) {
      console.error("Logout failed", err);
    }
  };
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="bg-white shadow sticky top-0 z-[97]">
      <div className="px-5 md:px-8 py-5 flex items-center justify-between">
        {/* Mobile */}
        <button
          onClick={toggleSidebarMobile}
          data-drawer-target="cta-button-sidebar"
          data-drawer-toggle="cta-button-sidebar"
          aria-controls="cta-button-sidebar"
          type="button"
          className="lg:hidden inline-flex items-center p-2  text-sm text-gray-500 rounded-lg  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200  "
        >
          <span className="sr-only">Open sidebar</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              fillRule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            ></path>
          </svg>
        </button>
        {/* Desktop */}
        <div className="hidden lg:block">
          <button
            onClick={toggleSidebar}
            data-drawer-target="cta-button-sidebar"
            data-drawer-toggle="cta-button-sidebar"
            aria-controls="cta-button-sidebar"
            type="button"
            className="  inline-flex items-center p-2  text-sm text-gray-500 rounded-lg  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200  "
          >
            <span className="sr-only">Open sidebar</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
              ></path>
            </svg>
          </button>
        </div>

        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setDropdownOpen((prev) => !prev)}
            className="flex items-center gap-2 px-3  rounded-full bg-white   transition"
          >
            <span className="text-xs  text-gray-800">
              {user?.firstName} <br /> {user?.lastName}
            </span>
            <div>
              <CgProfile className="text-blue-600 font-light" size={27} />
            </div>
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 z-50 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600">
              <ul className="py-2">
                {menuItems.map(({ label, href, icon }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="block px-4 py-2    text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      <div className="w-full flex items-center gap-2  text-sm text-gray-500 hover:bg-gray-100">
                        {icon} {label}
                      </div>
                    </Link>
                  </li>
                ))}
                <li>
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <FiLogOut className="text-sm" />
                    <span>Sign out</span>
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
