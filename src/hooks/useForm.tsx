/**
 * Custom hook
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

  const handle_input_change = (event: React.FormEvent<HTMLInputElement>): void => {
    set_form_input({
      ...form_input,
      [event.currentTarget.name]: event.currentTarget.value,
    })
  }

  return { form_input, handle_input_change }
}

export default useForm
