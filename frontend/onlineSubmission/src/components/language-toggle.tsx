"use client"

import { useState } from "react"

export function LanguageToggle() {
  const [language, setLanguage] = useState("ENG")

  return (
    <div className="flex items-center gap-2">
      <div className="w-12 h-6 rounded-full bg-gray-200 relative flex items-center p-1">
        <div
          className={`w-4 h-4 rounded-full bg-[#F8C93E] absolute transition-all duration-300 ${language === "ENG" ? "left-1" : "left-7"}`}
        ></div>
      </div>
      <span className="text-sm font-medium">{language} 한</span>
    </div>
  )
}

