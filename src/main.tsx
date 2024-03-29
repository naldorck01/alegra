import React  from "react"
import ReactDOM from "react-dom/client"
import AlegraRouter from "@router/AlegraRouter"
import AlegraProvider from "@contextApi/providers/AlegraProvider"
import "@/App.css"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AlegraProvider>
      <AlegraRouter />
    </AlegraProvider>
  </React.StrictMode>
  ,
)
