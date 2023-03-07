/**
 * Providers: AlegraProvider
 *
 * @version 1.0.1
 * @author Naldo Duran <naldorck@gmail.com> *
 * @returns {AlegraContext.Provider}
 */
import { useReducer, ReactNode } from "react"
import { AlegraContext } from "@contextApi/context/AlegraContext"
import { AlegraReducer, AlegraReducerSearch } from "@contextApi/reducers/AlegraReducer"

const AlegraProvider = (props: { children: ReactNode }) => {
  const [sellers, set_sellers] = useReducer(AlegraReducer, [])
  const [word, set_word] = useReducer(AlegraReducerSearch, { word: ""})

  const dataProvider = {
    sellers: {
      state: sellers,
      dispatch: set_sellers,
    },
    search: {
      state: word,
      dispatch: set_word
    }
  }

  return <AlegraContext.Provider value={dataProvider}>{props.children}</AlegraContext.Provider>
}

export default AlegraProvider
