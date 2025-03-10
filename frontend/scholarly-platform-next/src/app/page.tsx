import Image from "next/image";
import Link from "next/link";
import { Button } from "@/src/components/ui/button";
import { LanguageToggle } from "@/src/components/language-toggle";
import { Globe } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="w-full py-4 px-6 flex justify-between items-center">
        <div></div>
        <div className="flex items-center gap-4">
          <Globe className="w-5 h-5" />
          <LanguageToggle />
          <Link href="/login">
            <Button className="rounded-full px-8">Login</Button>
          </Link>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center text-center px-4">
        <div className="mb-8">
          <Image
            src="/penguin-logo.svg"
            alt="Scholarly Logo"
            width={80}
            height={80}
          />
        </div>

        <h1 className="text-5xl font-bold mb-4">
          Welcome to <span className="text-primary">Scholarly</span>
        </h1>

        <p className="text-xl text-gray-600 mb-12 max-w-2xl">
          Submission management system for scholars and teachers
        </p>

        <Link href="/register">
          <Button className="rounded-full px-12 py-6 text-lg bg-primary">
            Get Started
          </Button>
        </Link>
      </main>
    </div>
  );
}
