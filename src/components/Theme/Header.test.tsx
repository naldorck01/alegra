/**
 * Test: Header
 *
 * @version 1.0.1
 * @author Naldo Duran <naldorck@gmail.com>
 * @returns {void}
 */
import { describe } from "vitest"
import { render, screen } from "@testing-library/react"
import Header from "./Header"

describe("Header", () => {

  beforeEach(() => {

  })

  test("should render the component", () => {
    const { container } = render(<Header />)
    expect(container.querySelector("headers")).toBeDefined()
  })
})
