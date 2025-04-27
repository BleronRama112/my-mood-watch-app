import type React from "react"
import { Battery, Wifi, Signal } from "lucide-react"

interface IPhoneFrameProps {
  children: React.ReactNode
}

export function IPhoneFrame({ children }: IPhoneFrameProps) {
  // Get current time in format HH:MM
  const getCurrentTime = () => {
    const now = new Date()
    return now.getHours().toString().padStart(2, "0") + ":" + now.getMinutes().toString().padStart(2, "0")
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="relative mx-auto border-[14px] border-black rounded-[2.5rem] h-[600px] w-[300px] shadow-xl overflow-hidden">
        {/* iPhone Notch */}
        <div className="absolute top-0 inset-x-0 h-6 bg-black z-20">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-6">
            <div className="absolute top-1.5 left-1/2 transform -translate-x-1/2 w-16 h-1.5 bg-gray-800 rounded-md"></div>
          </div>
        </div>

        {/* Status Bar */}
        <div className="absolute top-0 inset-x-0 h-6 bg-transparent flex justify-between items-center px-6 z-10">
          <div className="text-white text-xs font-medium">{getCurrentTime()}</div>
          <div className="flex items-center space-x-1">
            <Signal className="h-3 w-3 text-white" />
            <Wifi className="h-3 w-3 text-white" />
            <Battery className="h-4 w-4 text-white" />
          </div>
        </div>

        {/* Content Area */}
        <div className="relative h-full w-full overflow-y-auto bg-white pt-6">{children}</div>

        {/* Home Indicator */}
        <div className="absolute bottom-0 inset-x-0 h-6 bg-white flex justify-center items-center">
          <div className="w-28 h-1 bg-gray-400 rounded-full"></div>
        </div>
      </div>
    </div>
  )
}
