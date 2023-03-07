/**
 * Component: CardList
 *
 * @version 1.0.1
 * @author Naldo Duran <naldorck@gmail.com> *
 * @returns {React.FC}
 */
import st from "@css/CardList.module.css"
import { CardImage } from "@components/CardImage"
import { useAlegraContext } from "@hooks"

const CardList = () => {
  const { sellers } = useAlegraContext()

  const template = (
    <div className={st.main}>
      {sellers.state.map((item: any, index: number) => (
        <CardImage key={index} name="radio" seller={item} />
      ))}
    </div>
  )

  return template
}

export default CardList
