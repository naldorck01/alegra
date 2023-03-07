/**
 * Component: CardImage
 *
 * @version 1.0.1
 * @author Naldo Duran <naldorck@gmail.com> *
 * @returns {React.FC}
 */
import st from "@css/CardImage.module.css"
import { ISeller } from "@ctypes/alegra.td"
import Logo from "@svg/logo_header_blue.svg"

interface ICardImage {
  name: string
  seller: ISeller
}

const CardImage = ({ name, seller }: ICardImage) => {
  const image = !!seller.images && !!seller.images.length ? seller.images[seller.images.length - 1] : Logo

  const template = (
    <label className={st.radio_card}>
      <input className={st.radio_card_input} type="radio" name={name} value={seller.id} />
      <div className={st.card_content_wrapper}>
        <span className={st.check_icon}></span>
        <div className={st.card_content}>
          <img src={image} alt="" />
          <h4>{seller.name}</h4>
        </div>
      </div>
    </label>
  )

  return template
}

export default CardImage
