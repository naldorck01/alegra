import React from "react"
import ReactDOM from "react-dom/client"
import { DashboardPage } from "@pages"
import AlegraProvider from "@contextApi/providers/AlegraProvider"
import "@/App.css"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AlegraProvider>
      <DashboardPage />
    </AlegraProvider>
  </React.StrictMode>,
)
