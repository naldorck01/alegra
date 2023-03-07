/**
 * Component: SellerCatalog
 *
 * @version 1.0.1
 * @author Naldo Duran <naldorck@gmail.com> *
 * @returns {React.FC}
 */

import { SearchBarImages } from "@components/SearchBarImages"
import { CardList } from "@components/CardList"
import { useAlegraContext } from "@hooks"

const SellerCatalog: React.FC = () => {
  const { sellers } = useAlegraContext()

  const template = (
    <article>
      <h2 className="text-subtitle text-center">&#161;Busca y escoge tu imagen favorita!</h2>
      <section>
        <SearchBarImages />
      </section>
      <section>
        <CardList />
      </section>
    </article>
  )

  return template
}

export default SellerCatalog
