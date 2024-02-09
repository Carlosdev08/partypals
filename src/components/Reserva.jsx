"use client";
import { db } from "@/lib/firebase-config";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Form from "@/context/FormContext";
import { format } from "date-fns";
import { ca } from "date-fns/locale";
import { Button } from "@/components/ui/button";
const FormSchema = z.object({
  dob: z.date().optional(),
});

const precioPorNiño = 16.9;

const ReservaSchema = z.object({
  fecha: z.string().min(1, "La fecha es requerida"),
  tramoHorario: z.enum(
    ["14-16", "16-18", "18-20"],
    "El tramo horario es requerido"
  ),
  numeroDePersonas: z
    .number()
    .min(1, "El número mínimo de personas es 1")
    .max(40, "El número máximo de personas es 40"),
});

const Reserva = () => {
  const {
    handleSubmit,
    formState: { errors },
    setValue,
    register,
    watch,
  } = useForm({
    resolver: zodResolver(ReservaSchema),
  });
  const numeroDePersonas = watch("numeroDePersonas");
  const precioTotal = numeroDePersonas ? numeroDePersonas * precioPorNiño : 0;

  const onSubmit = async (data) => {
    try {
      await enviarDatosReserva(data);
      setValue("fecha", "");
      setValue("tramoHorario", "");
      setValue("numeroDePersonas", 1);
      console.log("Reserva realizada con éxito", data);
    } catch (error) {
      console.error("Error al realizar la reserva", error);
    }
  };
  return (
    <div className="grid text-center place-items-center h-screen  rounded-sm bg-slate-500 border border-black">
      <h2>Hola desde reserva</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("fecha")} type="date" className="text-center" />
        {errors.fecha && <span>{errors.fecha.message}</span>}

        <select
          {...register("tramoHorario")}
          className="text-center mb-5 p-4 bg-black text-white"
        >
          <option value="" className="  ">
            Seleccione un tramo horario
          </option>
          <option value="14-16">14:00 - 16:00</option>
          <option value="16-18">16:00 - 18:00</option>
          <option value="18-20">18:00 - 20:00</option>
        </select>
        {errors.tramoHorario && <span>{errors.tramoHorario.message}</span>}
        <label className="" htmlFor="numeroDePersonas">
          Cuantos niños
          <input
            {...register("numeroDePersonas")}
            type="number"
            min="1"
            max="40"
          />
          {errors.numeroDePersonas && (
            <span>{errors.numeroDePersonas.message}</span>
          )}
        </label>
        <p>Precio total: {precioTotal}</p>

        <Button type="submit">Reservar</Button>
      </form>
    </div>
  );
};
async function enviarDatosReserva(data) {
  try {
    const docRef = await db.collection("reserva").add(data);
    console.log("Document written with ID: ", docRef.id);
  } catch (error) {
    console.error("Error adding document: ", error);
  }
}

export default Reserva;
