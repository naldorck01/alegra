/**
 * Component: CardImage
 *
 * @version 1.0.1
 * @author Naldo Duran <naldorck@gmail.com> *
 * @returns {React.FC}
 */
import { AlegraActionTypes } from "@contextApi/actionsTypes/AlegraActionTypes"
import stb from "@css/Button.module.css"
import st from "@css/CardImage.module.css"
import { ISeller } from "@ctypes/alegra.td"
import { useAlegraContext } from "@hooks"
import Logo from "@svg/logo_header_blue.svg"

interface ICardImage {
  name: string
  seller: ISeller
}

const CardImage = ({ name, seller }: ICardImage) => {
  const { search, sellers, current_vote_img } = useAlegraContext()
  const image = !!seller.images && !!seller.images.length ? seller.images[seller.images.length - 1] : Logo

  const event_vote = (event: React.FormEvent): void => {
    event.preventDefault()

    sellers.dispatch({
      type: AlegraActionTypes.seller_add_vote,
      payload: {
        vote_id: seller.id
      }
    })
    current_vote_img.dispatch({
      type: AlegraActionTypes.seller_handle_current_vote_img,
      payload: {
        current_vote_img: image
      }
    })
    search.dispatch({
      type: AlegraActionTypes.search_clear
    })
  }

  const template = (
    <>
      <label className={st.radio_card}>
        <input className={st.radio_card_input} type="radio" name={name} value={seller.id} />
        <div className={st.card_content_wrapper}>
          <span className={st.check_icon}></span>
          <div className={st.card_content}>
            <img src={image} alt="" />
            <h4>{seller.name}</h4>
            <button className={stb.button_wrapper} onClick={event_vote}>
              <span>Votar</span>
            </button>
          </div>
        </div>
      </label>
    </>
  )

  return template
}

export default CardImage
