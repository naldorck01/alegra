/**
 * Page: Dashboard
 *
 * @version 1.0.1
 * @author Naldo Duran <naldorck@gmail.com> *
 * @returns {React.FC}
 */
import Invoice from "@components/SellerInvoice/Invoice"

const Bill: React.FC = () => {
  const template = (
    <section className="container">
      <article>
        <h1 className="text-title text-center">Factura de venta</h1>
      </article>
      <Invoice />
    </section>
  )

  return template
}

export default Bill
