/**
 * Component: List
 *
 * @version 1.0.1
 * @author Naldo Duran <naldorck@gmail.com> *
 * @returns {React.FC}
 */

import st from "@css/Seller.module.css"
import { ISeller } from "@ctypes/alegra.td"

interface IList {
  data: ISeller[]
}

const List: React.FC<IList> = ({ data }: IList) => {
  const template = (
    <ul className={st["seller__score__table"]}>
      <li className={st["seller__score__table__header"]}>
        <h5>Vendedor</h5>
        <h5 className="text-right">Puntos</h5>
      </li>
      {data.map((item: ISeller, index: number) => (
        <li key={index} className={st["seller__score__table__item"]}>
          <p>{item.name}</p>
          <p className="text-right text-primary text-bold">0</p>
        </li>
      ))}
    </ul>
  )

  return template
}

export default List
