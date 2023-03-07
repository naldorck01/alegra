// @types.generics.ts
export interface IPropsChildren {
  children: React.ReactNode
}
export interface IForm {
  search: string
}

export interface IUseform {
  form_input: IForm
  event_set_manually_input: (val: string, inp: string) => void
  handle_input_change: (event: React.FormEvent<HTMLInputElement>) => void
}
