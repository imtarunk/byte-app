"use client";

import { useState } from "react";
import {
  FaHome,
  FaCommentDots,
  FaBell,
  FaHeart,
  FaSync,
  FaSearch,
} from "react-icons/fa";
import Image from "next/image";
import { useUser } from "@/hooks/use-user";

export default function CustomNavbar() {
  const user = useUser();
  const [userOpen, setUserOpen] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const [imageError, setImageError] = useState(false);

  const renderAvatar = () => {
    const imageUrl = user?.image || "/default-avatar.png";

    return (
      <Image
        src={imageUrl}
        alt={`${user?.name || "User"}'s avatar`}
        width={40}
        height={40}
        className="h-10 w-10 rounded-full object-cover"
        onError={() => setImageError(true)}
        priority
      />
    );
  };

  return (
    <nav className="w-full bg-[#121212] px-6 py-1 flex items-center justify-between shadow-md fixed top-0 left-0 right-0 z-10">
      {/* Left: Logo + Explore */}
      <div className="flex items-center gap-6">
        {/* Custom logo with cut corner */}
        <Image src="/logo.png" alt="Logo" width={100} height={100} priority />

        {/* Search bar */}
        <div
          className={`flex items-center bg-[#212121] px-4 py-2 rounded-lg ${
            searchFocused ? "ring-1 ring-gray-500" : ""
          }`}
        >
          <FaSearch className="text-gray-500 mr-2 text-sm" />
          <input
            type="text"
            placeholder="# Explore"
            className="bg-transparent text-gray-300 text-sm border-none focus:outline-none w-48"
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setSearchFocused(false)}
          />
        </div>
      </div>

      {/* Center: Action Icons */}
      <div className="flex gap-6 text-gray-300">
        {/* Messages */}
        <div
          className="bg-[#212121] p-3 rounded-full hover:bg-[#2a2a2a] transition-colors cursor-pointer"
          title="Messages"
        >
          <FaCommentDots className="text-lg" />
        </div>

        {/* Refresh */}
        <div
          className="bg-[#212121] p-3 rounded-full hover:bg-[#2a2a2a] transition-colors cursor-pointer"
          title="Refresh"
        >
          <FaSync className="text-lg" />
        </div>

        {/* Favorites */}
        <div
          className="bg-[#212121] p-3 rounded-full hover:bg-[#2a2a2a] transition-colors cursor-pointer"
          title="Favorites"
        >
          <FaHeart className="text-lg" />
        </div>
      </div>

      {/* Right: Profile */}
      <div className="relative border border-gray-800 p-1 rounded-md">
        <div
          className="flex items-center gap-3 text-white cursor-pointer"
          onClick={() => setUserOpen(!userOpen)}
        >
          <div className="h-10 w-10 bg-gray-600 rounded-full flex items-center justify-center overflow-hidden">
            {renderAvatar()}
          </div>
          <span className="text-sm font-medium">{user?.name || "Guest"}</span>
          <svg
            className={`h-4 w-4 transform transition-transform ${
              userOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>

        {/* Dropdown Menu (visible when userOpen is true) */}
        {userOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-[#212121] rounded-md shadow-lg py-1 z-10">
            <a
              href="/profile"
              className="block px-4 py-2 text-sm text-gray-300 hover:bg-[#2a2a2a]"
            >
              Your Profile
            </a>
            <a
              href="/settings"
              className="block px-4 py-2 text-sm text-gray-300 hover:bg-[#2a2a2a]"
            >
              Settings
            </a>
            <a
              href="/api/auth/signout"
              className="block px-4 py-2 text-sm text-gray-300 hover:bg-[#2a2a2a] border-t border-gray-700"
            >
              Sign out
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
