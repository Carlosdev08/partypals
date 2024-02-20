import React from 'react'
import ReactDOM from 'react-dom';
import { Button } from './ui/button';

const BookingConfirmation = ({isOpen, onClose, children}) => {
    if(!isOpen) return null;
  return ReactDOM.createPortal (
    <>
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50" onClick={onClose} />
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="bg-white p-6 rounded shadow-lg" role="dialog">
          {children}
          <Button onClick={onClose}>Cerrar</Button>
        </div>
      </div>
    </>,
 document.body

  )
}

export default BookingConfirmation