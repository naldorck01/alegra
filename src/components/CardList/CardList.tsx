import "@/App.css"
import styles from "@components/CardList/CardList.module.css"
import { CardImage } from "@components/CardImage"

interface ICardList {
  images: string[],
}

const CardList = ({ images }: ICardList) => {
  return (
    <div className={styles.main}>
      {images.map((image: any, index: number) => (
        <CardImage
          key={index}
          name="radio"
          img={image.link}
          value={index.toString()}
        />
      ))}
    </div>
  )
}

export default CardList