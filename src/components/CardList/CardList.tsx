import "@/App.css"
import styles from "@components/CardList/CardList.module.css"
import { CardImage } from "@components/CardImage"

const CardList = ({ images }: any) => {
  return (
    <div className={styles.main}>
      {images.map((image: any, index: number) => (
        <CardImage name="radio" img={image.link} value={index.toString()} />)
      )}
    </div>
  )
}

export default CardList