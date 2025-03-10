import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { X } from "lucide-react";
import Image from "next/image";

export default function SubmitAssignment() {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-3xl p-8 relative">
        <button className="absolute top-4 right-4">
          <X className="w-6 h-6" />
        </button>

        <h2 className="text-xl font-bold mb-6">Submit your assignment</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block font-medium mb-2">Student Name</label>
            <Input
              type="text"
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
            <label className="block font-medium mb-2">Email</label>
            <Input
              type="email"
              placeholder="Type here..."
              className="rounded-full shadow-sm"
            />
          </div>

          <div>
            <label className="block font-medium mb-2">Short description</label>
            <Input
              type="text"
              placeholder="Type here..."
              className="rounded-full shadow-sm"
            />
          </div>

          <div>
            <label className="block font-medium mb-2">Course</label>
            <Input
              type="text"
              placeholder="Type here..."
              className="rounded-full shadow-sm"
            />
          </div>
        </div>

        <div className="mt-6">
          <label className="block font-medium mb-2">
            Upload your assignment
          </label>
          <div className="border border-dashed rounded-lg p-8 flex flex-col items-center justify-center relative">
            <p className="text-gray-400 mb-4">Drag your file here</p>
            <Button
              variant="outline"
              className="bg-yellow-400 text-black hover:bg-yellow-500"
            >
              Browse
            </Button>

            <div className="absolute right-0 bottom-0">
              <Image
                src="/upload-illustration.svg"
                alt="Upload"
                width={200}
                height={150}
              />
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <Button className="px-12">Submit</Button>
        </div>
      </div>
    </div>
  );
}
