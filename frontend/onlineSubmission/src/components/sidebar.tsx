"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, FileText, Upload, Plus } from "lucide-react";
import { Logo } from "./logo";

export function Sidebar() {
  const pathname = usePathname();

  const navItems = [
    { href: "/dashboard", label: "Dashboard", icon: Home },
    { href: "/assignments", label: "Assignments", icon: FileText },
    { href: "/submission", label: "Submission", icon: Upload },

  ];

  return (
    <div className="w-[220px] min-h-screen py-8 px-4 flex flex-col gap-8">
      <Logo />

      <div className="bg-gray-100 rounded-lg p-4">
        <div className="flex flex-col gap-2">
          <h3 className="text-sm font-medium">Create</h3>
          <div className="flex items-center justify-between">
            <span className="text-sm">New Category</span>
            <button className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
              <Plus className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <nav className="flex flex-col gap-4">
        {navItems.map(({ href, label, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className={`flex items-center gap-3 py-2 px-4 rounded-lg transition ${
              pathname === href
                ? "bg-blue-100 text-blue-600"
                : "text-gray-600 hover:text-black hover:bg-gray-100"
            }`}
          >
            <Icon className="w-5 h-5" />
            <span>{label}</span>
          </Link>
        ))}
      </nav>

      <div className="mt-auto">
        <div className="border rounded-lg p-4 flex flex-col items-center">
          <div className="flex justify-center mb-2">
            <img
              src="/upgrade-illustration.svg"
              alt="Upgrade"
              className="h-16"
            />
          </div>
          <p className="text-xs text-center text-gray-500 mb-2">
            Upgrade to our new version Scholarly G-Plus
          </p>
          <button className="w-full bg-primary text-white rounded-lg py-2 text-sm">
            Upgrade
          </button>
        </div>
      </div>
    </div>
  );
}
