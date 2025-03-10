import Image from "next/image";
import { Button } from "@/src/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/components/ui/select";
import { Plus } from "lucide-react";

export default function Submission() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-medium">Current assignments</h2>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Select defaultValue="all">
              <SelectTrigger className="w-24 bg-white border">
                <SelectValue placeholder="All" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="submitted">Submitted</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="relative">
            <Select defaultValue="week">
              <SelectTrigger className="w-32 bg-white border">
                <SelectValue placeholder="This week" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="week">This week</SelectItem>
                <SelectItem value="month">This month</SelectItem>
                <SelectItem value="all">All time</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="relative">
            <Select defaultValue="state">
              <SelectTrigger className="w-36 bg-white border">
                <SelectValue placeholder="Filter by state" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="state">Filter by state</SelectItem>
                <SelectItem value="course">Course</SelectItem>
                <SelectItem value="deadline">Deadline</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-4">This week</h3>

        {/* DSA Assignment */}
        <div className="bg-white rounded-lg border mb-4 p-4 flex items-center">
          <div className="bg-yellow-100 p-2 rounded-lg mr-4">
            <Image src="/dsa-icon.svg" alt="DSA" width={30} height={30} />
          </div>

          <div className="flex-1 flex items-center">
            <div className="flex-1">
              <div className="text-xs text-gray-400">
                Deadline: 23 March, 2025
              </div>
              <div className="font-medium">DSA Assignment about stacks</div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-yellow-50 text-yellow-600 border border-yellow-200 rounded-full px-4 py-1 text-sm">
                Unsubmitted
              </div>
              <Button className="rounded-lg">
                Submit <Plus className="ml-1 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Java Assignment */}
        <div className="bg-white rounded-lg border mb-4 p-4 flex items-center">
          <div className="bg-blue-100 p-2 rounded-lg mr-4">
            <Image src="/java-icon.svg" alt="Java" width={30} height={30} />
          </div>

          <div className="flex-1 flex items-center">
            <div className="flex-1">
              <div className="text-xs text-gray-400">
                Deadline: 27 March, 2025
              </div>
              <div className="font-medium">Java Assignment on servlets</div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-blue-50 text-blue-600 border border-blue-200 rounded-full px-4 py-1 text-sm">
                Submitted
              </div>
              <Button className="rounded-lg">
                Submit <Plus className="ml-1 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-4">Next week</h3>

        {/* Mathematics Assignment */}
        <div className="bg-white rounded-lg border mb-4 p-4 flex items-center">
          <div className="bg-purple-100 p-2 rounded-lg mr-4">
            <Image
              src="/math-icon.svg"
              alt="Mathematics"
              width={30}
              height={30}
            />
          </div>

          <div className="flex-1 flex items-center">
            <div className="flex-1">
              <div className="text-xs text-gray-400">
                Deadline: 01 April, 2025
              </div>
              <div className="font-medium">
                Mathematics assignment on limits
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-blue-50 text-blue-600 border border-blue-200 rounded-full px-4 py-1 text-sm">
                Submitted
              </div>
              <Button className="rounded-lg">
                Submit <Plus className="ml-1 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Advanced Database Assignment */}
        <div className="bg-white rounded-lg border mb-4 p-4 flex items-center">
          <div className="bg-gray-200 p-2 rounded-lg mr-4">
            <Image src="/db-icon.svg" alt="Database" width={30} height={30} />
          </div>

          <div className="flex-1 flex items-center">
            <div className="flex-1">
              <div className="text-xs text-gray-400">
                Deadline: 15 April, 2025
              </div>
              <div className="font-medium">
                Advanced database assignment on functions
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-yellow-50 text-yellow-600 border border-yellow-200 rounded-full px-4 py-1 text-sm">
                Unsubmitted
              </div>
              <Button className="rounded-lg">
                Submit <Plus className="ml-1 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* English Assignment */}
        <div className="bg-white rounded-lg border mb-4 p-4 flex items-center">
          <div className="bg-green-100 p-2 rounded-lg mr-4">
            <Image
              src="/english-icon.svg"
              alt="English"
              width={30}
              height={30}
            />
          </div>

          <div className="flex-1 flex items-center">
            <div className="flex-1">
              <div className="text-xs text-gray-400">
                Deadline: 20 April, 2025
              </div>
              <div className="font-medium">
                English assignment on summary writing
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-yellow-50 text-yellow-600 border border-yellow-200 rounded-full px-4 py-1 text-sm">
                Unsubmitted
              </div>
              <Button className="rounded-lg">
                Submit <Plus className="ml-1 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Physics Assignment */}
        <div className="bg-white rounded-lg border mb-4 p-4 flex items-center">
          <div className="bg-gray-200 p-2 rounded-lg mr-4">
            <Image
              src="/physics-icon.svg"
              alt="Physics"
              width={30}
              height={30}
            />
          </div>

          <div className="flex-1 flex items-center">
            <div className="flex-1">
              <div className="text-xs text-gray-400">
                Deadline: 25 April, 2025
              </div>
              <div className="font-medium">Physics assignment on dynamics</div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-yellow-50 text-yellow-600 border border-yellow-200 rounded-full px-4 py-1 text-sm">
                Unsubmitted
              </div>
              <Button className="rounded-lg">
                Submit <Plus className="ml-1 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-4">Next week</h3>
        <p className="text-gray-500">No new assignments yet.</p>
      </div>
    </div>
  );
}
