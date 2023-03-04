/**
 * Component: Header
 *
 * @version 1.0.1
 * @author Naldo Duran <naldorck@gmail.com>
 * @returns {React.FC}
 */

import st from "@css/Layout.module.css"
import Logo from "@svg/logo_header.svg"

const Header: React.FC = () => {
  const template = (
    <header className={`fluid-container ${st["header"]}`}>
      <div>
        <a href="https://www.alegra.com/colombia/">
          <img src={Logo} alt="Logo Alegra" className={st["header__logo"]} />
        </a>
      </div>
    </header>
  )

  return template
}

export default Header
