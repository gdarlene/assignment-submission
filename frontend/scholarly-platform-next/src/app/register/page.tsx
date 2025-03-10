import Image from "next/image";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/src/components/ui/radio-group";
import { ChevronRight } from "lucide-react";

export default function Register() {
  return (
    <div className="min-h-screen bg-white flex">
      {/* Left side illustration */}
      <div className="hidden md:block md:w-1/2 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src="/registration-illustration.svg"
            alt="Registration"
            width={500}
            height={500}
          />
        </div>
      </div>

      {/* Right side form */}
      <div className="w-full md:w-1/2 p-8 flex flex-col">
        <div className="mb-12">
          <h1 className="text-2xl font-bold text-center">REGISTRATION</h1>
          <div className="w-12 h-1 bg-yellow-400 mx-auto mt-2"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block font-medium mb-2">Username</label>
            <Input
              type="text"
              placeholder="Type here..."
              className="rounded-full shadow-sm"
            />
          </div>

          <div>
            <label className="block font-medium mb-2">Email</label>
            <Input
              type="email"
              placeholder="Type here..."
              className="rounded-full shadow-sm"
            />
          </div>

          <div>
            <label className="block font-medium mb-2">Class</label>
            <Input
              type="text"
              placeholder="Type here..."
              className="rounded-full shadow-sm"
            />
          </div>

          <div>
            <label className="block font-medium mb-2">Phone Number</label>
            <Input
              type="tel"
              placeholder="Type here..."
              className="rounded-full shadow-sm"
            />
          </div>

          <div>
            <label className="block font-medium mb-2">Set Password</label>
            <Input
              type="password"
              placeholder="Type here..."
              className="rounded-full shadow-sm"
            />
          </div>

          <div>
            <label className="block font-medium mb-2">Confirm Password</label>
            <Input
              type="password"
              placeholder="Type here..."
              className="rounded-full shadow-sm"
            />
          </div>
        </div>

        <div className="mt-6">
          <label className="block font-medium mb-2">Gender</label>
          <RadioGroup defaultValue="male" className="flex gap-4">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="male" id="male" />
              <label htmlFor="male">Male</label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="female" id="female" />
              <label htmlFor="female">Female</label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="other" id="other" />
              <label htmlFor="other">Rather not say</label>
            </div>
          </RadioGroup>
        </div>

        <div className="mt-12">
          <Button className="w-full rounded-full py-6 bg-primary">
            Finish <ChevronRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
