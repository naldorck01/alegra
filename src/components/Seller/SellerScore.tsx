/**
 * Component: SellerScore
 *
 * @version 1.0.1
 * @author Naldo Duran <naldorck@gmail.com> *
 * @returns {React.FC}
 */
import { useEffect } from "react"
import st from "@css/Seller.module.css"
import { alegra_v1 } from "@config/api.json"
import { alegra } from "@config/credentials.json"
import { ISeller } from "@ctypes/alegra.td"
import { Loading } from "@components/Loading"
import List from "@components/Seller/List"
import { AlegraActionTypes } from "@contextApi/actionsTypes/AlegraActionTypes"
import { useFetch, useAlegraContext } from "@hooks"

const SellerScore: React.FC = () => {
  const { sellers } = useAlegraContext()

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
    const participants: ISeller[] = sellers.state.map((item: ISeller) => {
      return {
        ...item,
        votes: !!item.votes ? item.votes : 0,
      }
    })

    const winner: ISeller[] = participants.filter((item: ISeller) => typeof item.votes === "number" && item.votes > 20)

    if (!!winner.length) {
      const winner_points: number = participants.reduce((accumulator: number, current: ISeller) => {
        if (typeof current.votes === "number") {
          return accumulator + current.votes
        }
        return accumulator
      }, 0)

      console.log(participants)
      console.log(winner[0])
      console.log(winner_points)
    }
  }, [sellers.state])

  const template = (
    <>
      {loading && <Loading defaultOpened={loading} />}
      <article className={st["seller__score"]}>{!!sellers.state && <List data={sellers.state} />}</article>
    </>
  )

  return template
}

export default SellerScore
