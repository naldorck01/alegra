/**
 * Action Types: AlegraActionTypes
 *
 * @version 1.0.1
 * @author Naldo Duran <naldorck@gmail.com> *
 *
 */
import st from "@components/Button/Button.module.css"

interface IButton {
  label: string
  onClick: () => void
}

const Button = ({ label, onClick }: IButton) => {
  return (
    <button className={st.button_wrapper} onClick={onClick}>
      <span>{label}</span>
    </button>
  )
}

export default Button
