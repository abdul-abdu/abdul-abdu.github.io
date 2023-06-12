import { Chilanka } from "next/font/google"
import { ReactNode } from "react"

export const Layout = ({ children }: { children: ReactNode }) => {
  return <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">{children}</div>
}
