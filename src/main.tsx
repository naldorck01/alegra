import React from "react"
import ReactDOM from "react-dom/client"
import { DashboardPage } from "@pages"
import "@/App.css"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <DashboardPage />
  </React.StrictMode>,
)
