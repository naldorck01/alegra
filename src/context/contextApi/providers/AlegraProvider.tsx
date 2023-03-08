/**
 * Providers: AlegraProvider
 *
 * @version 1.0.1
 * @author Naldo Duran <naldorck@gmail.com> *
 * @returns {AlegraContext.Provider}
 */
import { useReducer, ReactNode } from "react"
import { AlegraContext } from "@contextApi/context/AlegraContext"
import { AlegraReducer, AlegraReducerSearch, AlegraReducerVoteImg } from "@contextApi/reducers/AlegraReducer"

const AlegraProvider = (props: { children: ReactNode }) => {
  const [sellers, set_sellers] = useReducer(AlegraReducer, [])
  const [word, set_word] = useReducer(AlegraReducerSearch, { word: "", status: 0 })
  const [current_vote_img, setcurrent_vote_img] = useReducer(AlegraReducerVoteImg, {
    current_vote_img: "",
    is_there_winner: false,
    winner_invoice_id: ""
  })

  const dataProvider = {
    sellers: {
      state: sellers,
      dispatch: set_sellers,
    },
    search: {
      state: word,
      dispatch: set_word
    },
    current_vote_img: {
      state: current_vote_img,
      dispatch: setcurrent_vote_img
    }
  }

  return <AlegraContext.Provider value={dataProvider}>{props.children}</AlegraContext.Provider>
}

export default AlegraProvider
