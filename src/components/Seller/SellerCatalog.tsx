/**
 * Component: SellerCatalog
 *
 * @version 1.0.1
 * @author Naldo Duran <naldorck@gmail.com> *
 * @returns {React.FC}
 */
import { useEffect } from "react"
import { useForm } from "@hooks"

const SellerCatalog: React.FC = () => {
  const { form_input, handle_input_change } = useForm()

  useEffect(() => {
    console.log(form_input)
  }, [form_input])

  const template = (
    <article>
      <h2 className="text-subtitle text-center">&#161;Busca y escoge tu imagen favorita!</h2>
      <section>
        <form>
          <input
            type="text"
            required
            placeholder="Im&aacute;genes del mundo"
            name="search"
            onChange={handle_input_change}
          />
          <input type="submit" value="Buscar" />
        </form>
      </section>
    </article>
  )

  return template
}

export default SellerCatalog
