/**
 * Custom hook: useForm
 *
 * @version 1.0.1
 * @author Naldo Duran <naldorck@gmail.com> *
 * @returns {React.FC}
 */

import { useState } from "react"
import { IForm, IUseform } from "@ctypes/generics.td"

const useForm = (): IUseform => {
  const [form_input, set_form_input] = useState<IForm>({
    search: "",
  })

  const event_set_manually_input = (val: string, inp: string): void => {
    set_form_input({
      ...form_input,
      [inp]: val,
    })
  }

  const handle_input_change = (event: React.FormEvent<HTMLInputElement>): void => {
    set_form_input({
      ...form_input,
      [event.currentTarget.name]: event.currentTarget.value,
    })
  }

  return { form_input, event_set_manually_input, handle_input_change }
}

export default useForm
