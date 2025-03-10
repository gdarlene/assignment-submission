import type React from "react";
import { Sidebar } from "@/src/components/sidebar";
import { LanguageToggle } from "@/src/components/language-toggle";
import { UserAvatar } from "@/src/components/user-avatar";

export default function AssignmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1">
        <header className="py-4 px-6 flex justify-between items-center border-b">
          <div className="text-sm text-gray-500">
            Monday, <span className="text-gray-400">03 March 2025</span>
          </div>
          <div className="flex items-center gap-4">
            <LanguageToggle />
            <UserAvatar name="Louis Calton" initials="LM" />
          </div>
        </header>
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
