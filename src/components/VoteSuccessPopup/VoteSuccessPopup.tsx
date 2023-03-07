import { useEffect } from 'react';
import { Modal } from "@components/Modal"
import { ProgressBar } from "@components/ProgressBar"
import st from "@css/VoteSuccessPopup.module.css"
import Logo from '@svg/logo_header_blue.svg';
import { useAlegraContext } from "@hooks"
import { AlegraActionTypes } from "@contextApi/actionsTypes/AlegraActionTypes"

interface IVote { }

const VoteSuccessPopup = ({ }: IVote) => {
  const { current_vote_img } = useAlegraContext()
  let image = current_vote_img.state.current_vote_img

  useEffect(() => {
    if (image) {
      setTimeout(() => current_vote_img.dispatch({
        type: AlegraActionTypes.seller_clear_current_vote_img
      }), 5000)
    }
  }, [image])

  return (
    image ? <Modal defaultOpened blockModal hideCloseButton dissapearAfterTime>
      <div className={st.vote_popup_container}>
        <div className={st.vote_header}>
          <h2>
            Haz realizado tu <span>elección</span>!
          </h2>
        </div>
        <div className={st.vote_body}>
          <img src={image || Logo} alt="img" />
          <p>¡Aguarda!</p>
          <p>La carrera aún no termina, continua eligiendo tus imagenes favoritas</p>
        </div>
        <div className={st.vote_footer}>
          <ProgressBar />
        </div>
      </div>
    </Modal> : null
  )
}

export default VoteSuccessPopup