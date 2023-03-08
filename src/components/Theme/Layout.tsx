/**
 * Layout component
 *
 * @version 1.0.1
 * @author Naldo Duran <naldorck@gmail.com>
 * @param {React.FC<IPropsChildren>} props
 * @returns {React.FC}
 */

import Header from "@components/Theme/Header"
import { IPropsChildren } from "@ctypes/generics.td"
import { WelcomePopup } from "@components/WelcomePopup"

const Layout: React.FC<IPropsChildren> = (props: IPropsChildren) => {
  const template = (
    <>
      <WelcomePopup />
      <Header />
      <main className="app">{props.children}</main>
    </>
  )

  return template
}

export default Layout
