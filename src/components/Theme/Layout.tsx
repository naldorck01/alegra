import { useEffect, useState } from "react"

import "@/App.css"
import st from "@css/Layout.module.css"
import { SellerList } from "@components/Seller"
import Header from "@components/Theme/Header"

const Layout = () => {
  const [data, set_data]: any = useState({
    seller_List: null,
  })
  const [loading, set_loading] = useState(false)
  const [form_input, set_form_input] = useState({
    search: "",
  })

  const alegra = {
    user: "naldorck@gmail.com",
    pass: "a47e06678f3b004ac108",
    b64: "bmFsZG9yY2tAZ21haWwuY29tOmE0N2UwNjY3OGYzYjAwNGFjMTA4",
  }
  const url_base = "https://api.alegra.com/api/v1/"

  useEffect(() => {
    const get_sellers = async () => {
      try {
        const options = {
          method: "GET",
          headers: {
            accept: "application/json",
            authorization: `Basic ${alegra.b64}`,
          },
        }

        const res = await (await fetch(`${url_base}sellers`, options)).json()
        set_data({ ...data, seller_list: res })
      } catch (e) {
        set_data({})
        console.log(e)
      }
    }

    get_sellers()
  }, [])

  useEffect(() => {
    if (!!form_input.search) {

    }
  }, [form_input])

  const handle_input_change = (event: any) => {
    set_form_input({
      ...form_input,
      [event.target.name]: event.target.value,
    })
  }

  const template = (
    <>
      <Header />
      <main className="app">
        <section className="container">
          <article>
            <h1 className="text-title text-center">Im&aacute;genes del mundo</h1>
          </article>

          <article>
            <h2 className="text-subtitle">Así van los resultados: </h2>
            {data.seller_list && <SellerList data={data.seller_list} />}
          </article>

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
        </section>
      </main>
    </>
  )

  return template
}

export default Layout
