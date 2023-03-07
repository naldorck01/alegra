/**
 * Component: Modal
 *
 * @version 1.0.1
 * @author Naldo Duran <naldorck@gmail.com> *
 *
 */
import { useEffect, useImperativeHandle, useState, useCallback, forwardRef, ReactNode } from "react"
import { createPortal } from "react-dom"
import IconClose from "@svg/icon_cancel.svg"
import st from "@components/Modal/Modal.module.css"

const modalElement = document.getElementById("modal")

interface IModal {
  defaultOpened?: boolean
  blockModal?: boolean
  hideCloseButton?: boolean
  dissapearAfterTime?: boolean
  children: ReactNode
}

interface IActions {
  open: () => void
  close: () => void
}

const Modal = forwardRef<IActions | null, IModal>(
  ({ children, defaultOpened = false, blockModal = false, hideCloseButton = false, dissapearAfterTime = false }, ref) => {
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

    useEffect(() => {
      dissapearAfterTime && setTimeout(() => close(), 5000)
    }, [dissapearAfterTime])

    const onClickOverlay = () => !blockModal && close()

    if (!modalElement) return null
    return createPortal(
      isOpen ? (
        <section className={st.modal_container}>
          <div className={st.modal_overlay} onClick={onClickOverlay} />
          {!hideCloseButton && (
            <span role="button" className={st.modal_close} aria-label="close" onClick={close}>
              <img src={IconClose} alt="X" />
            </span>
          )}
          <div className={st.modal_body}>{children}</div>
        </section>
      ) : null,
      modalElement,
    )
  },
)

export default Modal
