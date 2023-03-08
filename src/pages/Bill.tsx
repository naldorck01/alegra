/**
 * Page: Dashboard
 *
 * @version 1.0.1
 * @author Naldo Duran <naldorck@gmail.com> *
 * @returns {React.FC}
 */
import Invoice from "@components/SellerInvoice/Invoice"
import { useState, useEffect } from 'react';
import useInvoice from '@hooks/useInvoice';
import { useLocation, useNavigate } from 'react-router-dom';
import { IInvoice } from "@ctypes/alegra.td"
import { Loading } from "@components/Loading";

const Bill: React.FC = () => {
  const [invoice, setInvoice] = useState<IInvoice>()
  const [load, setload] = useState(true)
  const { invoice_get } = useInvoice()
  const { state } = useLocation()
  const navigate = useNavigate()
  
  useEffect(() => {
    state?.winner_invoice_id ? getInvoice() : navigate("/")
  }, [state])

  const getInvoice = async () => {
    setInvoice(await invoice_get(state.winner_invoice_id))
    setload(false)
  }

  const template = (
    <>
      {load && <Loading defaultOpened={load} />}
      <section className="container">
        <article>
          <h1 className="text-title text-center">Factura de venta</h1>
        </article>
        {invoice && <Invoice invoice={invoice}/>}
      </section>
    </>
  )

  return template
}

export default Bill
