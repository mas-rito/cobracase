import { ReactNode } from "react"

import { Steps } from "@/components/molecules/steps"

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="container flex flex-1 flex-col">
      <Steps />
      {children}
    </main>
  )
}

export default Layout
