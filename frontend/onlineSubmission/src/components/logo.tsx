import Image from "next/image"
import Link from "next/link"

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-1 font-bold text-xl">
      <span className="flex items-center">
        SCH
        <span className="relative inline-block w-6 h-6">
          <Image
            src="/penguin-logo.svg"
            alt="Scholarly Logo"
            width={60}
            height={60}
            className="absolute top-0 left-0"
          />
        </span>
        LARLY
      </span>
    </Link>
  )
}