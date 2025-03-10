import Image from "next/image";
import { Button } from "@/src/components/ui/button";
import { FileText, Book, PenTool, ChevronRight, Clock } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Hero section */}
      <div className="bg-[#a2c5f4] rounded-lg p-8 flex justify-between items-center">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold">Hi, Louis</h1>
          <p className="text-gray-600">
            Ready to catch up with your work or submit any due assignments?
          </p>
        </div>
        <div>
          <Image
            src="/dashboard-illustration.svg"
            alt="Dashboard"
            width={300}
            height={200}
          />
        </div>
      </div>

      {/* Overview section */}
      <div>
        <h2 className="text-gray-400 mb-4">Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-[#ffd65c] rounded-lg p-6 flex items-center">
            <div className="bg-[#ffe28d] p-3 rounded-lg mr-4">
              <FileText className="w-6 h-6 text-yellow-500" />
            </div>
            <div>
              <h3 className="text-3xl font-bold">80%</h3>
              <p className="text-sm text-gray-600">Completed Assignments</p>
            </div>
          </div>

          <div className="bg-[#9e7daa] rounded-lg p-6 flex items-center">
            <div className="bg-[#bba4c3] p-3 rounded-lg mr-4">
              <Book className="w-6 h-6 text-purple-500" />
            </div>
            <div>
              <h3 className="text-3xl font-bold">20</h3>
              <p className="text-sm text-gray-600">Given Assignments</p>
            </div>
          </div>

          <div className="bg-[#636363] rounded-lg p-6 flex items-center">
            <div className="bg-[#919191] p-3 rounded-lg mr-4">
              <PenTool className="w-6 h-6 text-gray-500" />
            </div>
            <div>
              <h3 className="text-3xl font-bold">5</h3>
              <p className="text-sm text-[#ffffff]x">Marked Assignments</p>
            </div>
          </div>
        </div>
      </div>

      {/* Assignments section */}
      <div className="space-y-4">
        <div className="bg-white rounded-lg p-6 border flex items-start gap-4">
          <div className="bg-green-100 p-2 rounded-lg">
            <Image src="/dsa-icon.svg" alt="DSA" width={40} height={40} />
          </div>

          <div className="flex-1">
            <h3 className="text-blue-500 font-medium">
              DSA Assignment on stacks
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              A text editor implements an "undo" feature using a stack. Every
              time a user types a character, it is pushed onto the stack. When
              the user presses UNDO, the last entered character ...
            </p>
            <div className="flex items-center gap-1 mt-2 text-xs text-gray-400">
              <Clock className="w-3 h-3" />
              <span>Deadline: 23 March, 2025</span>
            </div>
          </div>

          <Button
            variant="outline"
            className="text-blue-500 hover:bg-primary hover:text-white transition-colors"
          >
            View more <ChevronRight className="ml-1 w-4 h-4" />
          </Button>
        </div>

        <div className="bg-white rounded-lg p-6 border flex items-start gap-4">
          <div className="bg-yellow-100 p-2 rounded-lg">
            <Image src="/math-icon.svg" alt="Math" width={40} height={40} />
          </div>

          <div className="flex-1">
            <h3 className="text-blue-500 font-medium">
              Math Assignment on limits
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              A scientist is studying the growth rate of a bacteria colony over
              time. The number of bacteria at time t(t in hours) is given by the
              function...
            </p>
            <div className="flex items-center gap-1 mt-2 text-xs text-gray-400">
              <Clock className="w-3 h-3" />
              <span>Deadline: 01 April, 2025</span>
            </div>
          </div>

          <Button
            variant="outline"
            className="text-blue-500 hover:bg-primary hover:text-white transition-colors"
          >
            View more <ChevronRight className="ml-1 w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
