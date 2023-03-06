/**
 * Component: Loading
 *
 * @version 1.0.1
 * @author Naldo Duran <naldorck@gmail.com> *
 *
 */
import { Fragment, useEffect, useImperativeHandle, useState, useCallback, forwardRef } from "react"
import { createPortal } from "react-dom"
import st from "@components/Loading/Loading.module.css"

const loadingElement = document.getElementById("loading")

const Loading = forwardRef(({ defaultOpened = false }: any, ref) => {
  const [isOpen, setIsOpen] = useState(defaultOpened)

  const close = useCallback(() => setIsOpen(false), [])

  useImperativeHandle(
    ref,
    () => ({
      open: () => setIsOpen(true),
      close,
    }),
    [close],
  )

  const handleEscape = useCallback(
    (event: any) => {
      if (event.keyCode === 27) close()
    },
    [close],
  )

  useEffect(() => {
    if (isOpen) document.addEventListener("keydown", handleEscape, false)
    return () => {
      document.removeEventListener("keydown", handleEscape, false)
    }
  }, [handleEscape, isOpen])

  if (!loadingElement) return null
  return createPortal(
    isOpen ? (
      <Fragment>
        <div className={st.container_loading}>
          <svg>
            <circle
              className={st.circle}
              cx="50"
              cy="50"
              r="40"
              stroke="#00b19d"
              strokeDasharray="78.5 235.5"
              strokeWidth="3"
              fill="none"
            />
            <circle
              className={st.circle}
              cx="50"
              cy="50"
              r="30"
              stroke="#00535e"
              strokeDasharray="62.8 188.8"
              strokeWidth="3"
              fill="none"
            />
            <circle
              className={st.circle}
              cx="50"
              cy="50"
              r="20"
              stroke="#00d5bd"
              strokeDasharray="47.1 141.3"
              strokeWidth="3"
              fill="none"
            />
          </svg>
        </div>
      </Fragment>
    ) : null,
    loadingElement,
  )
})

export default Loading
