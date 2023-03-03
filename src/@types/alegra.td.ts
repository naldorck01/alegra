// @types.alegra.td
export interface ISeller {
  id: number
  name: string
  identification: string
  observations: string
  status: string
  votes?: number
  images?: string[]
}

export interface Address {
  address?: any
  department?: any
  city?: any
}

export interface IdentificationObject {
  type: string
  number: string
}

export interface Client {
  id: string
  name: string
  identification: string
  phonePrimary?: any
  phoneSecondary?: any
  fax?: any
  mobile?: any
  email?: any
  address: Address
  kindOfPerson: string
  regime: string
  identificationObject: IdentificationObject
}

export interface NumberTemplate {
  id: string
  prefix?: any
  number: string
  text?: any
  documentType: string
  fullNumber: string
  formattedNumber: string
}

export interface Warehouse {
  id: string
  name: string
}

export interface PriceList {
  id: number
  name: string
}

export interface Item {
  name: string
  description: string
  price: number
  discount: number
  reference: string
  quantity: number
  id: number
  productKey?: any
  unit: string
  tax: any[]
  total: number
}

export interface IInvoice {
  id: string
  date: string
  dueDate: string
  datetime: string
  observations: string
  anotation: string
  termsConditions: string
  status: string
  client: Client
  numberTemplate: NumberTemplate
  subtotal: number
  discount: number
  tax: number
  total: number
  totalPaid: number
  balance: number
  decimalPrecision: string
  warehouse: Warehouse
  paymentForm: string
  paymentMethod: string
  barCodeContent: string
  seller?: ISeller
  priceList: PriceList
  items: Item[]
  costCenter?: any
}

export type AlegraContextType = {
  sellers: ISeller[]
  save: (seller: ISeller) => void
  saveAll: (list: ISeller[]) => void
  addImg: (pathImg: string) => void
  addVote: () => void
}
