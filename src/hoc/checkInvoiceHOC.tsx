import { FC, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

export default function checkInvoiceHOC<T extends JSX.IntrinsicElements>(WrappedComponent: FC<T>) {
  return (props: T) => {
    const navigate = useNavigate()
    const { state } = useLocation()

    useEffect(() => {
      !state?.winner_invoice_id && navigate("/")
    }, [state])

    return <WrappedComponent {...props} />
  }
}
