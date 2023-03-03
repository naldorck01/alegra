/**
 * Header component
 *
 * @version 1.0.1
 * @author Naldo Duran <naldorck@gmail.com>
 * @returns {FunctionComponent<T>}
 */

import st from "@css/Layout.module.css"
import Logo from "@svg/logo_header.svg"

const Header = () => {
  const template = (
    <header className={`fluid-container ${st["header"]}`}>
      <a href="https://www.alegra.com/colombia/">
        <img src={Logo} alt="Logo Alegra" className={st["header__logo"]} />
      </a>
    </header>
  )

  return template
}

export default Header
