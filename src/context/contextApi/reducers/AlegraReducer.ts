/**
 * Reducer: AlegraReducer
 *
 * @version 1.0.1
 * @author Naldo Duran <naldorck@gmail.com> *
 * @returns {React.Context<ISeller[]>}
 */
import { ISeller } from "@ctypes/alegra.td"
import { AlegraActionTypes } from "@contextApi/actionsTypes/AlegraActionTypes"

interface IAlegraReducer {
  type: string
  payload: any
  seller_id?: number
}

export const AlegraReducer = (state: ISeller, action: IAlegraReducer) => {
  // TODO: For loop sellers
  switch (action.type) {
    case AlegraActionTypes.seller_add_all:
      return action.payload
    case AlegraActionTypes.seller_add_img:
      return {
        ...state,
        images: action.payload,
      }
    case AlegraActionTypes.seller_add_vote:
      return {
        ...state,
        votes: state.id + 1,
      }
    default:
      return state
  }
}
