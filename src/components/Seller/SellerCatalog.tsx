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
  const [images, setImages] = useState<string[]>([])

  const template = (
    <article>
      <h2 className="text-subtitle text-center">&#161;Busca y escoge tu imagen favorita!</h2>
      <section>
        <SearchBarImages setImages={setImages} />
      </section>
      <section>
        <CardList images={images} />
      </section>
    </article>
  )

  return template
}

export default SellerCatalog
