import st from "@css/Invoice.module.css"
import Logo from "@svg/logo_header_blue.svg"
import { Button } from "@components/Button"

export const Invoice = () => {
  const template = (
    <article className={st.cont_invoice}>
      <img src={Logo} alt="logo" />
      <div className={st.invoice_content}>
        <p>
          <span className={st.key_attr}>Fecha: </span>
          <span className={st.value_attr}>Marzo 7, 2023</span>
        </p>
        <p>
          <span className={st.key_attr}>Nombre: </span>
          <span className={st.value_attr}>John Doe</span>
        </p>
        <p>
          <span className={st.key_attr}>Identificación: </span>
          <span className={st.value_attr}>123456</span>
        </p>
        <p>
          <span className={st.key_attr}>Dirección: </span>
          <span className={st.value_attr}>Bogotá, Colombia</span>
        </p>
        <p>
          <span className={st.key_attr}>Votos: </span>
          <span className={st.value_attr}>16</span>
        </p>
      </div>
      <Button label="Volver a jugar" onClick={() => console.log("Volver")} />
    </article>
  )

  return template
}

export default Invoice