/**
 * Component: SellerScore
 *
 * @version 1.0.1
 * @author Naldo Duran <naldorck@gmail.com> *
 * @returns {React.FC}
 */
import { alegra_v1 } from "@config/api.json"
import { alegra } from "@config/credentials.json"
import List from "@components/Seller/List"
import { ISeller } from "@ctypes/alegra.td"
import { useFetch } from "@hooks"
import st from "@css/Seller.module.css"

const SellerScore: React.FC = () => {
  let options = {
    method: "GET",
    headers: {
      accept: "application/json",
      authorization: `Basic ${alegra.b64}`,
    },
  }
  const { data, error } = useFetch<ISeller[]>(`${alegra_v1}sellers`, options)
  console.log(error)
  console.log(data)

  const template = <article className={st["seller__score"]}>{!!data && <List data={data} />}</article>

  return template
}

export default SellerScore
