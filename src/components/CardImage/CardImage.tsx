/**
 * Component: CardImage
 *
 * @version 1.0.1
 * @author Naldo Duran <naldorck@gmail.com> *
 * @returns {React.FC}
 */
import styles from "@components/CardImage/CardImage.module.css"
import Logo from "@svg/logo_header.svg"

interface CardImageInterface {
  name: string
  value: string
  img: string
}

const CardImage = ({ name, img, value }: CardImageInterface) => {
  return (
    <label className={styles.radio_card}>
      <input className={styles.radio_card_input} type="radio" name={name} value={value} />
      <div className={styles.card_content_wrapper}>
        <span className={styles.check_icon}></span>
        <div className={styles.card_content}>
          <img src={img || Logo} alt="" />
          <h4>Lorem ipsum dolor.</h4>
          <h5>Lorem ipsum dolor sit amet, consectetur.</h5>
        </div>
      </div>
    </label>
  )
}

export default CardImage
