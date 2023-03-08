/**
 * custom hook: useInvoice
 *
 * @version 1.0.1
 * @author Naldo Duran <naldorck@gmail.com> *
 * @returns {}
 */
import { alegra } from "@config/credentials.json"
import { alegra_v1 } from "@config/api.json"

interface IInvoicePost {
  data: any
}

interface IInvoicePostPayload {
  seller_id: number
  points_total: number
}

interface IUseInvoice {
  invoice_post: (payload: IInvoicePostPayload) => Promise<IInvoicePost>
}

const useInvoice = (): IUseInvoice => {
  const invoice_post = async (payload: IInvoicePostPayload): Promise<IInvoicePost> => {
    const _date = new Date()

    const options = {
      method: "POST",
      headers: {
        accept: "application/json",
        authorization: `Basic ${alegra.b64}`,
      },
      body: JSON.stringify({
        status: "open",
        date: _date.toISOString().split("T")[0],
        dueDate: _date.toISOString().split("T")[0],
        numberTemplate: {
          number: 1,
        },
        client: {
          id: 1,
        },
        seller: payload.seller_id,
        priceList: {
          id: 1,
          name: "General",
        },
        items: [
          {
            price: 1,
            quantity: payload.points_total,
            id: 1,
          },
        ],
      }),
    }
    const data = await (await fetch(`${alegra_v1}invoices`, options)).json()

    return data
  }

  return { invoice_post }
}

export default useInvoice
