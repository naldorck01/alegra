/**
 * Providers: AlegraProvider
 *
 * @version 1.0.1
 * @author Naldo Duran <naldorck@gmail.com> *
 * @returns {AlegraContext.Provider}
 */
import { useReducer, ReactNode } from "react"
import { AlegraContext } from "@contextApi/context/AlegraContext"
import { AlegraReducer } from "@contextApi/reducers/AlegraReducer"

const AlegraProvider = (props: { children: ReactNode }) => {
  const [sellers, set_sellers] = useReducer(AlegraReducer, [])

  const dataProvider = {
    sellers: {
      state: sellers,
      dispatch: set_sellers,
    },
  }

  return <AlegraContext.Provider value={dataProvider}>{props.children}</AlegraContext.Provider>
}

export default AlegraProvider
