/**
 * Test: Header
 *
 * @version 1.0.1
 * @author Naldo Duran <naldorck@gmail.com>
 * @returns {void}
 */
import { describe } from "vitest"
import { render } from "@testing-library/react"
import Header from "./Header"

describe("Header", () => {
  test("should render the component", () => {
    const { container } = render(<Header />)
    expect(container.querySelector("header")).not.toBeNull()
  })

  test("should contains the Alegra logo", () => {
    const { container } = render(<Header />)
    expect(container.querySelector("img[alt='Logo Alegra']")).not.toBeNull()
  })
})
