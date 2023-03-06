/**
 * Component: CardList
 *
 * @version 1.0.1
 * @author Naldo Duran <naldorck@gmail.com> *
 * @returns {React.FC}
 */

import styles from "@components/CardList/CardList.module.css"
import { CardImage } from "@components/CardImage"

interface ICardList {
  images: string[]
}

const CardList = ({ images }: ICardList) => {
  return (
    <div className={styles.main}>
      {images.map((image: any, index: number) => (
        <CardImage key={index} name="radio" img={image.link} value={index.toString()} />
      ))}
    </div>
  )
}

export default CardList
