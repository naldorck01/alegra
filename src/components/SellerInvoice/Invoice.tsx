import st from "@css/Invoice.module.css"
import Logo from "@svg/logo_header_blue.svg"
import { Button } from "@components/Button"
import { useNavigate } from "react-router-dom"
import { IInvoice } from "@ctypes/alegra.td"

export const Invoice = ({ invoice }: { invoice: IInvoice }) => {
  const navigate = useNavigate()

  const template = (
    <>
      <article className={st.cont_invoice}>
        <img src={Logo} alt="logo" />
        <div className={st.invoice_content}>
          <p>
            <span className={st.key_attr}>Fecha: </span>
            <span className={st.value_attr}>{invoice?.date}</span>
          </p>
          <p>
            <span className={st.key_attr}>Vendedor: </span>
            <span className={st.value_attr}>{invoice?.seller?.name}</span>
          </p>
          <p>
            <span className={st.key_attr}>Identificación: </span>
            <span className={st.value_attr}>{invoice?.seller?.id}</span>
          </p>
          <p>
            <span className={st.key_attr}>Votos: </span>
            <span className={st.value_attr}>{invoice?.items[0]?.quantity}</span>
          </p>
          <p>{invoice?.termsConditions}</p>
        </div>
        <Button label="Volver a jugar" onClick={() => navigate("/")} />
      </article>
    </>
  )

  return template
}

export default Invoice