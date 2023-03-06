/**
 * Component: CardList
 *
 * @version 1.0.1
 * @author Naldo Duran <naldorck@gmail.com> *
 * @returns {React.FC}
 */
import { useContext } from "react"
import { AlegraContext } from "@contextApi/context/AlegraContext"
import st from "@css/CardList.module.css"
import { CardImage } from "@components/CardImage"

interface ICardList {
  images: string[]
}

const CardList = ({ images }: ICardList) => {
  const { sellers } = useContext(AlegraContext)

  return (
    <div className={st.main}>
      {images.map((image: any, index: number) => (
        <CardImage key={index} name="radio" img={image.link} value={index.toString()} />
      ))}
    </div>
  )
}

export default CardList
