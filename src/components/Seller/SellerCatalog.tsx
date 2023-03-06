/**
 * Component: SellerCatalog
 *
 * @version 1.0.1
 * @author Naldo Duran <naldorck@gmail.com> *
 * @returns {React.FC}
 */
import { useState } from "react"
import { SearchBarImages } from "@components/SearchBarImages"
import { CardList } from "@components/CardList"

const SellerCatalog: React.FC = () => {
  const [images, set_images] = useState<string[]>([])

  const template = (
    <article>
      <h2 className="text-subtitle text-center">&#161;Busca y escoge tu imagen favorita!</h2>
      <section>
        <SearchBarImages set_images={set_images} />
      </section>
      <section>
        <CardList images={images} />
      </section>
    </article>
  )

  return template
}

export default SellerCatalog
