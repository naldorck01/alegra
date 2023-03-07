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
import { NotFound } from "@components/NotFound"

const SellerCatalog: React.FC = () => {
  const { search, sellers } = useAlegraContext()
  console.log("search", search.state)

  const template = (
    <article>
      <h2 className="text-subtitle text-center">&#161;Busca y escoge tu imagen favorita!</h2>
      <section>
        <SearchBarImages />
      </section>
      <section>{search.state.status === 404 ? <NotFound /> : search.state.status && <CardList />}</section>
    </article>
  )

  return template
}

export default SellerCatalog
