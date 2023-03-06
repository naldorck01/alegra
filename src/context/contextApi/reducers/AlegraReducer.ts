/**
 * Reducer: AlegraReducer
 *
 * @version 1.0.1
 * @author Naldo Duran <naldorck@gmail.com> *
 * @returns {React.Context<ISeller[]>}
 */
import { ISeller } from "@ctypes/alegra.td"
import { AlegraActionTypes } from "@contextApi/actionsTypes/AlegraActionTypes"

interface IPayload {
  sellers?: ISeller[]
  images?: string
  vote?: boolean
}

interface IAlegraReducer {
  type: string
  payload: IPayload
}

export const AlegraReducer = (state: ISeller[], action: IAlegraReducer): ISeller[] => {
  // TODO: For loop sellers
  switch (action.type) {
    case AlegraActionTypes.seller_add_all:
      return  action.payload.sellers || []
    case AlegraActionTypes.seller_add_img:
      return action.payload.sellers || []
    case AlegraActionTypes.seller_add_vote:
      return action.payload.sellers || []
    default:
      return state
  }
}
