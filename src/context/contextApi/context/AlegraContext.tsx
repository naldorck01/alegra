/**
 * Context: AlegraContext
 *
 * @version 1.0.1
 * @author Naldo Duran <naldorck@gmail.com> *
 * @returns {React.Context<ISeller[]>}
 */
import { ISeller } from "@ctypes/alegra.td"
import { createContext } from "react"

export const AlegraContext: React.Context<ISeller[]> = createContext<ISeller[]>([])
