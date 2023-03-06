/**
 * Action Types: AlegraActionTypes
 *
 * @version 1.0.1
 * @author Naldo Duran <naldorck@gmail.com> *
 *
 */
import { Dispatch } from "react"
import { ISeller } from "@ctypes/alegra.td"

type ContextPropType<State, DispactActions> = IContextProps<State, DispactActions>

interface IContextProps<State, DispactActions> {
  state: State
  dispatch: Dispatch<DispactActions>
}

export type GlobalStateType = {
  sellers: ContextPropType<Array<ISeller>, any>
}

export const AlegraActionTypes = {
  seller_add_all: "[alegra] add all sellers",
  seller_add_vote: "[alegra] add 1 vote",
  seller_add_img: "[alegra] add 1 img",
}
