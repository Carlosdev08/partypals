"use client";
import React, {useState, useEffect} from "react";
import { getFunctions, httpsCallable } from "firebase/functions";
import "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { number, z } from "zod";
import { db } from "@/lib/firebase-config";
import { Button } from "@/components/ui/button";
import Form from "./ui/forms/Forms";
import { Fomdata } from "autoprefixer";
import { useFormContextExtended } from '@/context/FormContext';
import FormControl from "./ui/forms/FormControl";
import { set } from "date-fns";
import {PaymentForm} from "@/components/PaymentForm";

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
    setValue,
    formState: { errors },
    reset,
  } = useFormContextExtended();

  const numChildren = watch("numChildren", 0);
  const price = 16.90;
  const [priceTotal, setPriceTotal] = useState(numChildren * price);

  useEffect(() => {
    setPriceTotal(numChildren * price);
  }, [numChildren]);

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
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100 mt-44">
      <h2>Hola desde reserva</h2>
      
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md mx-auto bg-white p-8 border border-gray-300 rounded"
      >
        <div className="flex  flex-col  gap-5  items-center justify-around"> 
       <PaymentForm />
<FormControl
  name="phone"
  label="Phone Number"
  type="tel"
  {...register("firstName", { required: "This field is required" })}
/>
<FormControl
  name="nameChildren"
  label="Childrens Name"
  type="text"
  {...register("firstName", { required: "This field is required" })}
/>
<FormControl
  name="surnameChildren"
  label="Childrens Surname"
  type="text"
/>
<FormControl
  name="allergies"
  label="Childrens Allergies"
  type="text"
/>
</div>
        <div className="flex flex-col gap-5 p-8 m-5 border rounded-xl w-full bg-gray-300 text-center">
          <input {...register("date")} type="date" />
          {errors.date && <span>{errors.date.message}</span>}
          <select
            {...register("sectionSchedule")}
            className="text-center mb-5 p-4 bg-black text-white"
          >
            <option value="">Seleccione un tramo horario</option>
            <option value="14-16">14:00 - 16:00</option>
            <option value="16-18">16:00 - 18:00</option>
            <option value="18-20">18:00 - 20:00</option>
          </select>
          {errors.sectionSchedule && (
            <span>{errors.sectionSchedule.message}</span>
          )}
          <label htmlFor="numChildren">
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
              
            />
            {errors.numChildren && <span>{errors.numChildren.message}</span>}
          </label>
          
          <p>Precio total: {priceTotal.toFixed(2)}€</p>
          <Button type="submit">Reservar</Button>
        </div>
      </form>
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