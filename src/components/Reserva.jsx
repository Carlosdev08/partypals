
"use client";
import React, { useState, useEffect } from "react";
import { getFunctions, httpsCallable } from "firebase/functions";
import "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { db } from "@/lib/firebase-config";
import PaymentForm from "./ui/PaymentForm"; // Asegúrate de que la ruta es correcta
import { useFormContextExtended } from '@/context/FormContext';

const ReservaSchema = z.object({
  date: z.string().min(1, "Date is required"),
  sectionSchedule: z.enum(
    ["14-16", "16-18", "18-20"],
    "The time slot is required"
  ),
  numChildren: z
    .number()
    .min(1, "The minimum number of children is 1")
    .max(40, "The maximum number of children is 40"),
});

const Reserva = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(ReservaSchema)
  });

  const numChildren = watch("numChildren", 0);
  const price = 16.90;
  const [priceTotal, setPriceTotal] = useState(numChildren * price);

  useEffect(() => {
    setPriceTotal(numChildren * price);
  }, [numChildren]);
  const [paymentData, setPaymentData] = useState(null);

  const handlePaymentSubmit = (data) => {
    setPaymentData(data);
  };

  <PaymentForm onSubmit={handlePaymentSubmit} />

  async function onSubmit(formData) {
    formData.priceTotal = priceTotal;
    console.log("Enviando formulario", formData);
    const functions = getFunctions();
    const reservaFunction = httpsCallable(functions, "reservations");
   
    try {
      const result = await sendReservationData(formData);
      console.log("Reserva guardada con exito", result);
      reset();
    } catch (error) {
      console.error("Error enviando los datos de la reserva: ", error);
    }
  }async function onSubmit(formData) {
  const combinedData = {
    ...formData,
    priceTotal: priceTotal,
    ...paymentData,
    reset,
  };

  console.log("Enviando formulario", combinedData);
  
  try {
    await sendReservationData(combinedData);
    console.log("Reserva guardada con éxito");
    reset();
  } catch (error) {
    console.error("Error enviando los datos de la reserva: ", error);
  }
}

  return (
    <div className="w-full max-w-md  p-8 border rounded">
      <h2 className="text-xl text-center font-bold mb-6">Realizar Reserva</h2>
      <div className="max-w-md mx-auto bg-white p-6 shadow-md rounded-lg">
      <PaymentForm onSubmit={handlePaymentSubmit} />
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
          <input
            {...register("date")}
            type="date"
            className="w-full px-3 py-2 border rounded"
          />
          {errors.date && <p className="text-red-500">{errors.date.message}</p>}
          <select
            {...register("sectionSchedule")}
            className="w-full px-3 py-2 border rounded bg-white text-black"
          >
            <option value="">Seleccione un tramo horario</option>
            <option value="14-16">14:00 - 16:00</option>
            <option value="16-18">16:00 - 18:00</option>
            <option value="18-20">18:00 - 20:00</option>
          </select>
          {errors.sectionSchedule && <p className="text-red-500">{errors.sectionSchedule.message}</p>}
          <label htmlFor="numChildren" className="block">
            Número de niños
            <input
              {...register("numChildren", {
                valueAsNumber: true,
                min: { value: 1, message: "El número mínimo de niños es 1" },
                max: { value: 40, message: "El número máximo de niños es 40" },
              })}
              type="number"
              min="1"
              max="40"
              className="w-full px-3 py-2 border rounded"
            />
          </label>
          {errors.numChildren && <p className="text-red-500">{errors.numChildren.message}</p>}
          
          <p className="text-lg">Precio total: {priceTotal.toFixed(2)}€</p>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Reservar
          </button>
        </form>
      </div>
    </div>
  );
};

const sendReservationData = async (formData) => {
  try {
    const docRef = await addDoc(collection(db, "reservations"), formData);
    console.log("Document written with ID: ", docRef.id);

  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export default Reserva;