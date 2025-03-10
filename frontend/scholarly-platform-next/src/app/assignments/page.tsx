import Image from "next/image";
import { Button } from "@/src/components/ui/button";
import { ChevronRight, Download } from "lucide-react";

export default function Assignments() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">This Week</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Java Assignment */}
        <div className="bg-white rounded-lg shadow-sm p-6 relative">
          <div className="absolute top-4 right-4">
            <Download className="w-4 h-4 text-blue-500" />
          </div>

          <div className="flex items-center gap-3 mb-4">
            <div className="bg-blue-100 p-2 rounded-lg">
              <Image src="/java-icon.svg" alt="Java" width={30} height={30} />
            </div>
            <h3 className="font-medium">Java Assignment about servlets</h3>
          </div>

          <p className="text-sm text-gray-500 mb-4">
            You are developing a student submission portal using Jakarta EE
            Servlets. When a student logs in, they should be able to upload a
            file...
          </p>

          <div className="flex items-center justify-between mt-4">
            <div className="text-xs text-gray-400">
              Deadline: 17 March, 2025
            </div>
            <Button variant="ghost" size="sm" className="p-0">
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </Button>
          </div>
        </div>

        {/* DSA Assignment */}
        <div className="bg-white rounded-lg shadow-sm p-6 relative">
          <div className="absolute top-4 right-4">
            <Download className="w-4 h-4 text-blue-500" />
          </div>

          <div className="flex items-center gap-3 mb-4">
            <div className="bg-yellow-100 p-2 rounded-lg">
              <Image src="/dsa-icon.svg" alt="DSA" width={30} height={30} />
            </div>
            <h3 className="font-medium">DSA Assignment about stacks</h3>
          </div>

          <p className="text-sm text-gray-500 mb-4">
            A text editor implements an "undo" feature using a stack. Every time
            a user types a character, it is pushed onto the stack. When the user
            presses UNDO, the last entered character...
          </p>

          <div className="flex items-center justify-between mt-4">
            <div className="text-xs text-gray-400">
              Deadline: 23 March, 2025
            </div>
            <Button variant="ghost" size="sm" className="p-0">
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </Button>
          </div>
        </div>

        {/* Mathematics Assignment */}
        <div className="bg-white rounded-lg shadow-sm p-6 relative">
          <div className="absolute top-4 right-4">
            <Download className="w-4 h-4 text-blue-500" />
          </div>

          <div className="flex items-center gap-3 mb-4">
            <div className="bg-purple-100 p-2 rounded-lg">
              <Image
                src="/math-icon.svg"
                alt="Mathematics"
                width={30}
                height={30}
              />
            </div>
            <h3 className="font-medium">Mathematics Assignment for limits</h3>
          </div>

          <p className="text-sm text-gray-500 mb-4">
            A scientist is studying the growth rate of a bacteria colony over
            time. The number of bacteria at time t(t in hours) is given by the
            function...
          </p>

          <div className="flex items-center justify-between mt-4">
            <div className="text-xs text-gray-400">
              Deadline: 01 April, 2025
            </div>
            <Button variant="ghost" size="sm" className="p-0">
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </Button>
          </div>
        </div>
      </div>

      <h1 className="text-3xl font-bold pt-8">Next Week</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Advanced DB Assignment */}
        <div className="bg-white rounded-lg shadow-sm p-6 relative">
          <div className="absolute top-4 right-4">
            <Download className="w-4 h-4 text-blue-500" />
          </div>

          <div className="flex items-center gap-3 mb-4">
            <div className="bg-gray-200 p-2 rounded-lg">
              <Image src="/db-icon.svg" alt="Database" width={30} height={30} />
            </div>
            <h3 className="font-medium">Advanced DB Assignment on functions</h3>
          </div>

          <p className="text-sm text-gray-500 mb-4">
            You are designing a student grading system using PostgreSQL/MySQL.
            Each student has multiple assignments...
          </p>

          <div className="flex items-center justify-between mt-4">
            <div className="text-xs text-gray-400">
              Deadline: 15 April, 2025
            </div>
            <Button variant="ghost" size="sm" className="p-0">
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </Button>
          </div>
        </div>

        {/* English Assignment */}
        <div className="bg-white rounded-lg shadow-sm p-6 relative">
          <div className="absolute top-4 right-4">
            <Download className="w-4 h-4 text-blue-500" />
          </div>

          <div className="flex items-center gap-3 mb-4">
            <div className="bg-green-100 p-2 rounded-lg">
              <Image
                src="/english-icon.svg"
                alt="English"
                width={30}
                height={30}
              />
            </div>
            <h3 className="font-medium">
              English Assignment on summary writing
            </h3>
          </div>

          <p className="text-sm text-gray-500 mb-4">
            Read the following passage and write a concise summary in your own
            words, keeping it within 200 words while preserving the key ideas.
          </p>

          <div className="flex items-center justify-between mt-4">
            <div className="text-xs text-gray-400">
              Deadline: 20 April, 2025
            </div>
            <Button variant="ghost" size="sm" className="p-0">
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </Button>
          </div>
        </div>

        {/* Physics Assignment */}
        <div className="bg-white rounded-lg shadow-sm p-6 relative">
          <div className="absolute top-4 right-4">
            <Download className="w-4 h-4 text-blue-500" />
          </div>

          <div className="flex items-center gap-3 mb-4">
            <div className="bg-gray-200 p-2 rounded-lg">
              <Image
                src="/physics-icon.svg"
                alt="Physics"
                width={30}
                height={30}
              />
            </div>
            <h3 className="font-medium">Physics Assignment on Dynamics</h3>
          </div>

          <p className="text-sm text-gray-500 mb-4">
            A car traveling at a constant speed of 20 m/s is approaching a hill
            with a slope of 10 degrees. If the car has a mass of 1000 kg...
          </p>

          <div className="flex items-center justify-between mt-4">
            <div className="text-xs text-gray-400">
              Deadline: 25 April, 2025
            </div>
            <Button variant="ghost" size="sm" className="p-0">
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </Button>
          </div>
        </div>
      </div>

      <div className="pt-8">
        <h1 className="text-3xl font-bold mb-4">Next Week</h1>
        <p className="text-gray-500">No new assignments yet.</p>
      </div>
    </div>
  );
}
