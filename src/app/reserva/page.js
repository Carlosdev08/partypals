import Reserva from '@/components/Reserva'
import React from 'react'
import { FormContextProvider } from '@/context/FormContext'

const page = () => {
  return (
    <FormContextProvider defaultValues={{ dob: undefined }}>

  <Reserva/>
  </FormContextProvider>
  )
}

export default page