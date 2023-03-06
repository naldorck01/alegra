import { useState, ReactNode } from "react"
import { AlegraContext } from "@contextApi/context/AlegraContext"

const AlegraProvider = (props: { children: ReactNode }) => {
  const [sellers, setSellers] = useState([])

  const dataProvider = {
    sellers: {
      state: sellers,
      dispatch: setSellers
    }
  }

  return <AlegraContext.Provider value={dataProvider}>{props.children}</AlegraContext.Provider>
}

export default AlegraProvider