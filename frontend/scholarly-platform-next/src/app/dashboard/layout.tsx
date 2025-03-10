// import type React from "react"
// import { Sidebar } from "@/components/sidebar"
// import { LanguageToggle } from "@/components/language-toggle"
// import { UserAvatar } from "@/components/user-avatar"

// export default function DashboardLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <div className="flex min-h-screen">
//       <Sidebar />
//       <div className="flex-1">
//         <header className="py-4 px-6 flex justify-between items-center border-b">
//           <div className="text-sm text-gray-500">
//             Monday, <span className="text-gray-400">03 March 2025</span>
//           </div>
//           <div className="flex items-center gap-4">
//             <LanguageToggle />
//             <UserAvatar name="Louis Calton" initials="LM" />
//           </div>
//         </header>
//         <main className="p-6">{children}</main>
//       </div>
//     </div>
//   )
// }

"use client";

import React, { useState } from "react";
import { Sidebar } from "@/src/components/sidebar";
import { LanguageToggle } from "@/src/components/language-toggle";
import { UserAvatar } from "@/src/components/user-avatar";
import { Menu, User, LogOut } from "lucide-react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1">
        <header className="py-4 px-6 flex justify-between items-center border-b relative">
          <div className="text-sm text-gray-500">
            Monday, <span className="text-gray-400">03 March 2025</span>
          </div>
          <div className="flex items-center gap-4 relative">
            <LanguageToggle />
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="focus:outline-none"
              >
                <UserAvatar name="Louis Calton" initials="LM" />
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg p-2 z-10">
                  <button
                    className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                    onClick={() => console.log("Profile Clicked")}
                  >
                    <User className="w-4 h-4 mr-2" />
                    Profile
                  </button>
                  <button
                    className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-100 rounded-md"
                    onClick={() => console.log("Logout Clicked")}
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
