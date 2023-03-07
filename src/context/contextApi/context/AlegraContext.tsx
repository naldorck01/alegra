/**
 * Context: AlegraContext
 *
 * @version 1.0.1
 * @author Naldo Duran <naldorck@gmail.com> *
 * @returns {React.Context<ISeller[]>}
 */
import { GlobalStateType } from "@contextApi/actionsTypes/AlegraActionTypes"
import { createContext } from "react"

export const AlegraContext = createContext<GlobalStateType>({
  sellers: {
    state: [],
    dispatch: () => null
  },
  search: {
    state: [],
    dispatch: () => null
  }
})
