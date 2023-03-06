/**
 * Providers: AlegraProvider
 *
 * @version 1.0.1
 * @author Naldo Duran <naldorck@gmail.com> *
 * @returns {AlegraContext.Provider}
 */
import { useState, ReactNode } from "react"
import { AlegraContext } from "@contextApi/context/AlegraContext"

const AlegraProvider = (props: { children: ReactNode }) => {
  const [sellers, set_seller] = useState([])

  const dataProvider = {
    sellers: {
      state: sellers,
      dispatch: set_seller,
    },
  }

  return <AlegraContext.Provider value={dataProvider}>{props.children}</AlegraContext.Provider>
}

export default AlegraProvider
