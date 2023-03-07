/**
 * custom hook: useInvoice
 *
 * @version 1.0.1
 * @author Naldo Duran <naldorck@gmail.com> *
 * @returns {}
 */
import { alegra } from "@config/credentials.json"
import { alegra_v1 } from "@config/api.json"
import { useFetch, useAlegraContext } from "@hooks"

const useInvoice = () => {
  const invoice_post = (payload: any) => {
    const options = {
      method: "POST",
      headers: {
        accept: "application/json",
        authorization: `Basic ${alegra.b64}`,
      },
      body: JSON.stringify({
        status: "open",
        date: "2023-03-03",
        dueDate: "2023-03-03",
        subtotal: 21,
        discount: 0,
        tax: 0,
        total: 21,
        totalPaid: 0,
        balance: 21,
        decimalPrecision: "0",
        numberTemplate: {
          number: 1,
        },
        client: {
          id: 1,
        },
        seller: 1,
        priceList: {
          id: 1,
          name: "General",
        },
        items: [
          {
            name: "Prueba manual",
            description: "",
            price: 1,
            discount: 0,
            reference: "",
            quantity: 10,
            id: 1,
            productKey: null,
            unit: "unit",
            tax: [],
            total: 10,
          },
        ],
      }),
    }
    const { loading, data } = useFetch<any>(`${alegra_v1}sellers`, options)

    return {
      loading,
      data,
    }
  }

  return { invoice_post }
}

export default useInvoice
