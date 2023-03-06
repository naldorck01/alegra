/**
 * Component: SellerScore
 *
 * @version 1.0.1
 * @author Naldo Duran <naldorck@gmail.com> *
 * @returns {React.FC}
 */
import { useContext, useEffect } from "react"
import st from "@css/Seller.module.css"
import { alegra_v1 } from "@config/api.json"
import { alegra } from "@config/credentials.json"
import { ISeller } from "@ctypes/alegra.td"
import { Loading } from "@components/Loading"
import List from "@components/Seller/List"
import { AlegraActionTypes } from "@contextApi/actionsTypes/AlegraActionTypes"
import { AlegraContext } from "@contextApi/context/AlegraContext"
import { useFetch } from "@hooks"

const SellerScore: React.FC = () => {
  const { sellers } = useContext(AlegraContext)

  let options = {
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

  const template = (
    <>
      {loading && <Loading defaultOpened={loading} />}
      <article className={st["seller__score"]}>{!!sellers.state && <List data={sellers.state} />}</article>
    </>
  )

  return template
}

export default SellerScore
