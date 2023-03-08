/**
 * Action Types: AlegraActionTypes
 *
 * @version 1.0.1
 * @author Naldo Duran <naldorck@gmail.com> *
 *
 */
import st from "@css/Button.module.css"

interface IButton {
  label: string
  onClick: () => void
  disabled?: boolean
}

const Button = ({ label, onClick, disabled = false }: IButton) => {
  return (
    <button className={st.button_wrapper} onClick={onClick} disabled={disabled}>
      <span>{label}</span>
    </button>
  )
}

export default Button
