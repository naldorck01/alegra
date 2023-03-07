/**
 * Custom hook: useAlegraContext
 *
 * @version 1.0.1
 * @author Naldo Duran <naldorck@gmail.com> *
 * @returns {React.FC}
 */
import { useContext } from "react"
import { AlegraContext } from "@contextApi/context/AlegraContext"
import { GlobalStateType } from "@contextApi/actionsTypes/AlegraActionTypes"

const useAlegraContext = () => {
  const { sellers, search } = useContext<GlobalStateType>(AlegraContext)

  return { sellers, search }
}

export default useAlegraContext
