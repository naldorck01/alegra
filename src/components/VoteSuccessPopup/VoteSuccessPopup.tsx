import { useEffect } from 'react';
import { max_votes } from "@config/game.json"
import { Modal } from "@components/Modal"
import { ProgressBar } from "@components/ProgressBar"
import st from "@css/VoteSuccessPopup.module.css"
import Logo from '@svg/logo_header_blue.svg';
import { useAlegraContext } from "@hooks"
import { AlegraActionTypes } from "@contextApi/actionsTypes/AlegraActionTypes"
import { Button } from '@components/Button';
import { useNavigate } from 'react-router-dom';
import { ISeller } from '@ctypes/alegra.td';

const VoteSuccessPopup = () => {
  const navigate = useNavigate()
  const { current_vote_img, sellers } = useAlegraContext()
  const {
    current_vote_img: image,
    winner_invoice_id,
    is_there_invoice
  } = current_vote_img.state
  const is_there_winner = sellers.state.find((seller: ISeller) => (seller.votes && seller?.votes >= max_votes))

  useEffect(() => {
    let useTimeOut: ReturnType<typeof setTimeout>;
    if (image && !is_there_winner) {
      useTimeOut = setTimeout(() => current_vote_img.dispatch({
        type: AlegraActionTypes.seller_clear_current_vote_img
      }), 3000)
    }
    return () => clearTimeout(useTimeOut)
  }, [image, is_there_winner])

  const ConfirmVoteModal = () => (
    <Modal defaultOpened blockModal hideCloseButton dissapearAfterTime>
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
    </Modal>
  )

  const ConfirmWinnerModal = () => (
    <Modal defaultOpened blockModal hideCloseButton>
      <div className={st.vote_popup_container}>
        <div className={st.vote_header}>
          <h2>
            La carrera <span>ha finalizado</span>!
          </h2>
        </div>
        <div className={st.vote_body}>
          <img src={Logo} alt="img" />
          <p>¡Tenemos un ganador!</p>
          <p>{is_there_winner?.name}</p>
          <p>Continua para ver tu factura</p>
        </div>
        <div className={st.vote_footer}>
          <Button
            disabled={!is_there_invoice}
            label={is_there_invoice ? "Continuar" : "Generando factura"}
            onClick={() => navigate("/bill", { state: { winner_invoice_id } })}
          />
        </div>
      </div>
    </Modal>
  )

  if (is_there_winner) return <ConfirmWinnerModal />
  return image ? <ConfirmVoteModal /> : null
}

export default VoteSuccessPopup