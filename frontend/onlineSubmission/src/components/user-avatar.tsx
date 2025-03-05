import { ChevronDown } from "lucide-react"

interface UserAvatarProps {
  name: string
  initials: string
}

export function UserAvatar({ name, initials }: UserAvatarProps) {
  return (
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 bg-blue-200 rounded-md flex items-center justify-center text-sm font-medium">
        {initials}
      </div>
      <span className="font-medium">{name}</span>
      <ChevronDown className="w-4 h-4" />
    </div>
  )
}

