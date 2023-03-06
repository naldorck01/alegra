import styles from '@components/Button/Button.module.css'

interface IButton {
  label: string
  onClick: () => void
}

const Button = ({ label, onClick }: IButton) => {
  return (
    <button className={styles.button_wrapper} onClick={onClick}>
      <span>{label}</span>
    </button>
  )
}

export default Button