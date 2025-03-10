import Image from "next/image";
import Link from "next/link";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Logo } from "@/src/components/logo";
import { Globe, Eye } from "lucide-react";

export default function Login() {
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

        {/* Login card */}
        <div className="bg-white rounded-lg shadow-sm p-8 w-full max-w-md">
          <div className="flex flex-col items-center mb-6">
            <h1 className="text-2xl font-bold mb-4">Login to your account</h1>
            <Image
              src="/penguin-logo.svg"
              alt="Scholarly Logo"
              width={40}
              height={40}
            />
          </div>

          <form className="space-y-6">
            <div>
              <Input
                type="text"
                placeholder="Username or email"
                className="rounded-full bg-gray-50"
              />
            </div>

            <div className="relative">
              <Input
                type="password"
                placeholder="Password"
                className="rounded-full bg-gray-50 pr-10"
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2"
              >
                <Eye className="w-5 h-5 text-gray-400" />
              </button>
            </div>

            <Button className="w-full rounded-full" type="submit">
              Login
            </Button>
          </form>

          <div className="mt-4 text-center text-sm">
            <span className="text-gray-500">Don't have an account? </span>
            <Link href="/register" className="text-blue-500">
              Sign up
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
