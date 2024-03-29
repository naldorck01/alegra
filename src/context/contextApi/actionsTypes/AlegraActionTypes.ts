/**
 * Action Types: AlegraActionTypes
 *
 * @version 1.0.1
 * @author Naldo Duran <naldorck@gmail.com> *
 *
 */
import { Dispatch } from "react"
import { ISearch, ISeller, ICurrentVoteImg } from "@ctypes/alegra.td"

interface IContextProps<State, DispactActions> {
  state: State
  dispatch: Dispatch<DispactActions>
}

type ContextPropType<State, DispactActions> = IContextProps<State, DispactActions>

export type GlobalStateType = {
  sellers: ContextPropType<ISeller[], any>
  search: ContextPropType<ISearch, any>
  current_vote_img: ContextPropType<ICurrentVoteImg, any>
}

export const AlegraActionTypes = {
  seller_add_all: "[alegra] add all sellers",
  seller_add_vote: "[alegra] add 1 vote",
  seller_add_img: "[alegra] add 1 img",
  seller_handle_current_vote_img: "[alegra] add current vote image",
  seller_handle_game_invoice_winner: "[alegra] add game invoice winner",
  seller_clear_current_vote_img: "[alegra] clear current vote image",
  search_set: "[alegra] set search current word",
  search_set_status: "[alegra] set search current status",
  search_clear: "[alegra] clear search word",
}
