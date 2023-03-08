/**
 * Component: SellerScore
 *
 * @version 1.0.1
 * @author Naldo Duran <naldorck@gmail.com> *
 * @returns {React.FC}
 */
import { useEffect, useState } from "react"
import st from "@css/Seller.module.css"
import { alegra_v1 } from "@config/api.json"
import { alegra } from "@config/credentials.json"
import { ISeller } from "@ctypes/alegra.td"
import { Loading } from "@components/Loading"
import List from "@components/Seller/List"
import { AlegraActionTypes } from "@contextApi/actionsTypes/AlegraActionTypes"
import { useFetch, useAlegraContext, useInvoice } from "@hooks"

const SellerScore: React.FC = () => {
  const { sellers, current_vote_img } = useAlegraContext()
  const { invoice_post } = useInvoice()
  const [data_rest, set_data_rest] = useState<any>({})

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      authorization: `Basic ${alegra.b64}`,
    },
  }
  const { loading, data } = useFetch<ISeller[]>(`${alegra_v1}sellers`, options)

  useEffect(() => {
    if (!!data) {
      sellers.dispatch({
        type: AlegraActionTypes.seller_add_all,
        payload: {
          sellers: data,
        },
      })
    }
  }, [data])

  useEffect(() => {
    const exec = async () => {
      const participants: ISeller[] = sellers.state.map((item: ISeller) => {
        return {
          ...item,
          votes: !!item.votes ? item.votes : 0,
        }
      })

      const winner: ISeller[] = participants.filter((item: ISeller) => typeof item.votes === "number" && item.votes > 2)

      if (!!winner.length) {
        const winner_points: number = participants.reduce((accumulator: number, current: ISeller) => {
          if (typeof current.votes === "number") {
            return accumulator + current.votes
          }
          return accumulator
        }, 0)

        const rest = await invoice_post({
          seller_id: winner[0].id,
          points_total: winner_points,
        })

        set_data_rest(rest)
      }
    }

    exec()
  }, [sellers.state])

  useEffect(() => {
    data_rest.id && current_vote_img.dispatch({
      type: AlegraActionTypes.seller_handle_game_invoice_winner,
      payload: { winner_invoice_id: data_rest.id }
    })
  }, [data_rest])

  const template = (
    <>
      {loading && !data_rest["id"] && <Loading defaultOpened={loading} />}
      <article className={st["seller__score"]}>{!!sellers.state && <List data={sellers.state} />}</article>
    </>
  )

  return template
}

export default SellerScore
