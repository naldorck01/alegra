/**
 * Page: Dashboard
 *
 * @version 1.0.1
 * @author Naldo Duran <naldorck@gmail.com> *
 * @returns {React.FC}
 */
import SellerScore from "@components/Seller/SellerScore"
import SellerCatalog from "@components/Seller/SellerCatalog"
import Layout from "@components/Theme/Layout"

const Dashboard: React.FC = () => {
  const template = (
    <Layout>
      <section className="container">
        <article>
          <h1 className="text-title text-center">Im&aacute;genes del mundo</h1>
        </article>
        <SellerScore />
        <SellerCatalog />
      </section>
    </Layout>
  )

  return template
}

export default Dashboard
