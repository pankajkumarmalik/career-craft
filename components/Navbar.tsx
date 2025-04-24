"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { signOut } from "@/lib/actions/auth.action";
import { LogOut } from "lucide-react";
import { Button } from "./ui/button";

export default function Navbar() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);
  const closeDropdown = () => setDropdownOpen(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        closeDropdown();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSignOut = async () => {
    await signOut();
    router.push("/sign-in");
  };

  return (
    <nav className="flex items-center justify-between px-4 py-2 shadow-md">
      <Link href="/" className="flex items-center gap-2">
        <Image src="/logo.svg" alt="Logo" width={38} height={32} />
        <h2 className="text-primary-100">CareerCraft</h2>
      </Link>

      <div className="relative" ref={dropdownRef}>
        <Image
          src="/user-avatar.png"
          alt="User Avatar"
          width={40}
          height={40}
          className="rounded-full cursor-pointer"
          onClick={toggleDropdown}
        />
        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-30 text-white shadow rounded-xl z-20 overflow-hidden border border-gray-700 bg-red-700">
            <Button
              onClick={handleSignOut}
              variant="destructive"
              className="w-full justify-start px-4 py-3 text-sm font-medium text-white hover:opacity-80 transition-opacity duration-200 cursor-pointer"
            >
              <LogOut className="mr-2 h-5 w-5" />
              Logout
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
