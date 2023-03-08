import { useEffect } from 'react';
import { Modal } from "@components/Modal"
import { ProgressBar } from "@components/ProgressBar"
import st from "@css/VoteSuccessPopup.module.css"
import Logo from '@svg/logo_header_blue.svg';
import { useAlegraContext } from "@hooks"
import { AlegraActionTypes } from "@contextApi/actionsTypes/AlegraActionTypes"
import { Button } from '@components/Button';
import { useNavigate } from 'react-router-dom';

interface IVote { }

const VoteSuccessPopup = ({ }: IVote) => {
  const navigate = useNavigate()
  const { current_vote_img } = useAlegraContext()
  let {
    current_vote_img: image,
    winner_invoice_id,
    is_there_winner
  } = current_vote_img.state

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
          <p>Continua para ver tu factura</p>
        </div>
        <div className={st.vote_footer}>
          <Button label="Continuar" onClick={() => navigate("/bill", { state: { winner_invoice_id } })} />
        </div>
      </div>
    </Modal>
  )

  if (is_there_winner) return <ConfirmWinnerModal />
  return image ? <ConfirmVoteModal /> : null
}

export default VoteSuccessPopup