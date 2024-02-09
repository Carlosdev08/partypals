import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'react-toastify';
import { format } from 'date-fns';

import CalendarHome from '../CalendarHome';

const FormSchema = z.object({
  dob: z.string().refine((val) => {
    // Asegúrate de validar correctamente la fecha aquí
    return new Date(val) <= new Date();
  }, {
    message: "Date of birth cannot be in the future.",
  }),
});

function DatePickerForm() {
  const methods = useForm({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit = (data) => {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-8">
        {/* Componentes de Formulario aquí */}
        <CalendarHome
          onSelect={(date) => methods.setValue('dob', format(date, 'yyyy-MM-dd'))}
          // Otros props necesarios para CalendarHome
        />
        <button type="submit">Submit</button>
      </form>
    </FormProvider>
  );
}

export default DatePickerForm;
