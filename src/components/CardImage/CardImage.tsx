/**
 * Component: CardImage
 *
 * @version 1.0.1
 * @author Naldo Duran <naldorck@gmail.com> *
 * @returns {React.FC}
 */

import st from "@css/CardImage.module.css"
import Logo from "@svg/logo_header.svg"

interface ICardImage {
  name: string
  value: string
  img: string
}

const CardImage = ({ name, img, value }: ICardImage) => {
  return (
    <label className={st.radio_card}>
      <input className={st.radio_card_input} type="radio" name={name} value={value} />
      <div className={st.card_content_wrapper}>
        <span className={st.check_icon}></span>
        <div className={st.card_content}>
          <img src={img || Logo} alt="" />
          <h4>Lorem ipsum dolor.</h4>
          <h5>Lorem ipsum dolor sit amet, consectetur.</h5>
        </div>
      </div>
    </label>
  )
}

export default CardImage
