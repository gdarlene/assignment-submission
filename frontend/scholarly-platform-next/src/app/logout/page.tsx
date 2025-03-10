import Image from "next/image";
import Link from "next/link";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Logo } from "@/src/components/logo";
import { Globe, Eye } from "lucide-react";

export default function Logout() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="w-full py-4 px-6 flex justify-between items-center">
        <Logo />
        <div className="flex items-center gap-4">
          <Globe className="w-5 h-5" />
          <Link href="/register" className="font-medium">
            Sign up
          </Link>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center p-4 relative">
        {/* Decorative elements */}
        <div className="absolute left-20 top-20">
          <Image
            src="/hot-air-balloon.svg"
            alt="Hot air balloon"
            width={120}
            height={120}
          />
        </div>

        <div className="absolute right-40 top-40">
          <Image src="/map-pin.svg" alt="Map pin" width={80} height={80} />
        </div>

        <div className="absolute left-40 bottom-40">
          <Image src="/signpost.svg" alt="Signpost" width={100} height={100} />
        </div>

        {/* Logout card */}
        <div className="bg-white rounded-lg shadow-sm p-8 w-full max-w-md">
          <div className="flex flex-col items-center mb-6">
            <h1 className="text-2xl font-bold mb-4">
              You have been logged out
            </h1>
            <Image
              src="/penguin-logo.svg"
              alt="Scholarly Logo"
              width={40}
              height={40}
            />
          </div>

          <Button className="w-full rounded-full" asChild>
            <Link href="/login">Login Again</Link>
          </Button>
        </div>
      </main>
    </div>
  );
}
