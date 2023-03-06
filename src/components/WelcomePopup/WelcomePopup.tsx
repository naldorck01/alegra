import { useRef } from "react"
import { Modal } from "@components/Modal"
import styles from "@components/WelcomePopup/WelcomePopup.module.css"
import Logo from "@svg/logo_header_blue.svg"
import { Button } from "@components/Button"

const WelcomePopup = () => {
  const popupRef: any = useRef()

  return (
    <Modal defaultOpened blockModal hideCloseButton ref={popupRef}>
      <div className={styles.welcome_popup_container}>
        <div className={styles.welcome_header}>
          <img src={Logo} alt="Logo" />
          <h2>¡Bienvenido a la carrera para encontrar las <span>im&aacute;genes</span> más interesantes de la web!</h2>
        </div>
        <div className={styles.welcome_body}>
          <p>Instrucciones:</p>
          <ul>
            <li>Debe ingresar en la aplicación la palabra sobre la cual desea consultar imágenes.</li>
            <li>Debe seleccionar la imagen que más le guste con esto se le otorgarán 3 puntos a un vendedor.</li>
          </ul>
          <p>Consideraciones:</p>
          <ul>
            <li>Cada vendedor tendrá una imagen asignada, basándose en la palabra que usted ingrese como criterio de búsqueda.</li>
            <li>Al seleccionar la imagen que más le guste se le otorgarán 3 puntos al vendedor.</li>
            <li>El juego deberá continuar hasta que algún vendedor acumule 20 puntos, esto marca el fin de la carrera.</li>
          </ul>
        </div>
        <div className={styles.welcome_footer}>
          <Button label="¡A Correr!" onClick={() => popupRef.current.close()} />
        </div>
      </div>
    </Modal>
  )
}

export default WelcomePopup