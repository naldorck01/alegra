/**
 * Reducer: AlegraReducer, AlegraReducerSearch
 *
 * @version 1.0.1
 * @author Naldo Duran <naldorck@gmail.com> *
 * @returns {React.Context<ISeller[]>}
 */
import { ISeller, ISearch } from "@ctypes/alegra.td"
import { Item } from "@ctypes/google.td"
import { AlegraActionTypes } from "@contextApi/actionsTypes/AlegraActionTypes"

interface IPayload {
  sellers?: ISeller[]
  images?: Item[]
  vote_id?: number
}

interface IAlegraReducer {
  type: string
  payload: IPayload
}

interface IAlegraReducerSearch {
  type: string
  payload: ISearch
}

export const AlegraReducer = (state: ISeller[], action: IAlegraReducer): ISeller[] => {
  switch (action.type) {
    case AlegraActionTypes.seller_add_all:
      return action.payload.sellers || []

    case AlegraActionTypes.seller_add_img:
      const images = action.payload.images

      if (!!images && !!images.length) {
        state = state.map((item: ISeller, index: number) => {
          const _img = item["images"] || []
          item["images"] = [..._img, images[index].image.thumbnailLink]
          return item
        })
      }
      return state

    case AlegraActionTypes.seller_add_vote:
      return state.map((item: ISeller, index: number) => {
        if (action.payload.vote_id === item.id) {
          item.votes = !!item.votes ? item.votes + 3 : 3
        }
        return item
      })

    default:
      return state
  }
}

export const AlegraReducerSearch = (state: ISearch, action: IAlegraReducerSearch): ISearch => {
  switch (action.type) {
    case AlegraActionTypes.search_set:
      return {
        word: action.payload.word,
      }

    case AlegraActionTypes.search_clear:
      return {
        word: "",
      }

    default:
      return state
  }
}
