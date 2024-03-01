"use client";
import React, { useState, useEffect } from "react";
import { getFunctions, httpsCallable,  } from "firebase/functions";
import "firebase/firestore";
import { collection, addDoc, onSnapshotsInSync } from "firebase/firestore";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { getAuth } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { db } from "@/lib/firebase-config";
import PaymentForm from "@/components/ui/PaymentForm";
import { useFormContextExtended } from "@/context/FormContext";
import BookingConfirmation from "@/components/BookingConfirmation";
import { set } from "date-fns";



const ReservaSchema = z.object({
  sectionSchedule: z.enum(
    ["14-16", "16-18", "18-20"],
    "The time slot is required"
  ),
  numChildren: z
    .number()
    .min(1, "The minimum number of children is 1")
    .max(40, "The maximum number of children is 40"),
  agechild: z
    .number()
    .min(1, "Age is required")
    .max(12, "The maximum age is 12"),
  // childrensnack: z.string().nonempty("Snack is required"),
  // sectionSnack: z.enum(
  //   [
  //     "Merienda bolsa de scnacks",
  //     "Merienda bolsa de snacks, tarta",
  //     "Merienda bolsa de snacks, tarta , bebida",
  //     "Trae tu propia merienda coste adicional de 5€ ",
  //   ],
  //   "Snack option is required"
  // ),
  nameChild: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(9, "Phone is required"),
  phoneAdional: z.string().min(9, "Additional phone is required"),
  nameParentOrMother: z.string().min(1, "Name is required"),
  PostalCode: z.string().max(5, "Postal Code is required"),
  observaatios: z.string().min(1, "Observations is required"),
});

const Reserva = () => {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(ReservaSchema),
    
  });
  const [showBookingConfirmation, setShowBookingConfirmation] = useState(false);

  const numChildren = watch("numChildren", 1);
  const price = 16.9;
  const [priceTotal, setPriceTotal] = useState(numChildren * price);

  useEffect(() => {
    setPriceTotal(numChildren * price);
  }, [numChildren]);

  const auth = getAuth();
const [user] = useAuthState(auth);


  const onSubmit = async (formData) => {
    if(!user){
      alert("No user logged in");
      return;
    
    };
  const parsed = ReservaSchema.safeParse(formData);

  if (!parsed.success) {
    console.error("Validation errors: ", parsed.error);
    return;
  }

  const validatedData = parsed.data;
  console.log("Enviando formulario", validatedData);
  
  try {
    const docRef = await addDoc(collection(db, "reservations"), validatedData);
    console.log("Document written with ID: ", docRef.id); 
    reset();
    setShowBookingConfirmation(true); 
  
  } catch (error) {
    console.error("Error enviando los datos de la reserva: ", error);
  }
};




  return (
    <div className="p-8 border rounded bg-background-image1  bg-cover bg-center mb-20 ">
    <h2 className="text-3xl font-semibold text-blue-950  font-Outfit animate-bounce mt-20">Fill in the reservation details</h2>
      <div className="max-w-4xl mx-auto bg-white p-6 shadow-lg rounded-lg  grid grid-flow-col-dense">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-8 grid grid-cols-4  items-center gap-8 text-center justify-center font-outfit font-medium text-base"
        >
          <div>
            <label htmlFor="date" className="block pt-7  " title="Select the birthday date" >
              Birthday date
              <input
                {...register("date")}
                type="date"
                min={new Date().toISOString().split('T')[0]}
                className="w-full px-3 py-2 border rounded text-center"
              />
            </label>
            
            {errors.date && (
              <p className="text-red-500">{errors.date.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="numChildren" className="block">
              Number of children
              <input
                {...register("numChildren", {
                  valueAsNumber: true,
                  min: { value: 1, message: "El número mínimo de niños es 1" },
                  max: { 
                    value: 40,
                    message: "El número máximo de niños es 40",
                  },
                })}
                type="number"
                min="1"
                max="40"
                className="w-full px-3 py-2 border rounded"
              />
            </label>
            {errors.numChildren && (
              <p className="text-red-500">{errors.numChildren.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="sectionSchedule" className="block">
              Select a time
              <select
                {...register("sectionSchedule")}
                className="w-full px-3 py-2 border rounded bg-white text-black"
              >
                <option value="">Seleccione un tramo horario</option>
                <option value="14-16">14:00 - 16:00</option>
                <option value="16-18">16:00 - 18:00</option>
                <option value="18-20">18:00 - 20:00</option>
              </select>
            </label>
            {errors.sectionSchedule && (
              <p className="text-red-500">{errors.sectionSchedule.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="agechild" className="block">
              Childs age
              <input
                {...register("agechild", {
                  valueAsNumber: true,
                  min: { value: 1, message: "La edad mínima" },
                  max: { value: 12, message: "La edad máxima es 12" },
                })}
                type="number"
                min="1"
                max="12"
                className="w-full px-3 py-2 border rounded"
              />
            </label>
            {errors.agechild && (
              <p className="text-red-500">{errors.agechild.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="nameChildren">
              Childs name
              <input
                {...register("nameChild")}
                type="text"
                className="w-full px-3 py-2 border rounded"
              />
            </label>
            {errors.nameChild && (
              <p className="text-red-500">{errors.nameChild.message}</p>
            )}
          </div>
          <div>

<label htmlFor="sectionSnack">Select a Snack
<select 
  {...register("sectionSnack", { required: true }) }
  className="w-[192px] h-10 grid gap-7 m-2 px-2 py-2 border rounded bg-white text-black"
>
  <option value="">Seleccione un snack</option>
  <option value="Merienda bolsa de scnacks">Merienda bolsa de scnacks</option>
          <option value="Merienda bolsa de snacks, tarta">Merienda bolsa de snacks, tarta</option>
          <option value="Merienda bolsa de snacks, tarta , bebida">Merienda bolsa de snacks, tarta , bebida</option>
          <option value="Trae tu propia merienda coste adicional de 5€ ">Trae tu propia merienda coste adicional de 5€ </option>
</select>
</label>
{errors.sectionSnack && <p>{errors.sectionSnack.message}</p>}
       
          </div>
          <div>
            <label htmlFor="nameParentOrMother">
              Parents name
              <input
                {...register("nameParentOrMother")}
                type="text"
                className="w-full px-3 py-2 border rounded"
              />
            </label>
            {errors.nameParentOrMother && (
              <p className="text-red-500">
                {errors.nameParentOrMother.message}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="telephono">
              Phone
              <input
                {...register("phone", { required: true })}
                type="text"
                className="w-full px-3 py-2 border rounded"
                placeholder="+34-123-456-789"
              />
            </label>
            {errors.phone && (
              <p className="text-red-500">{errors.phone.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="telephono">
              Additional telephone
              <input
                {...register("phoneAdional", { required: true })}
                type="text"
                className="w-full px-3 py-2 border rounded"
                placeholder="+34-123-456-789"
              />
            </label>
            {errors.phoneAdional && (
              <p className="text-red-500">{errors.phoneAdional.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="email">
              Email
              <input
                {...register("email", { required: true })}
                type="email"
                className="w-full px-3 py-2 border rounded"
              />
            </label>
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="confirmEmail">
              Confirma el Email
              <input
                {...register("confirmEmail", {
                  required: "Email confirmation is required",
                })}
                type="email"
                className="w-full px-3 py-2 border rounded"
              />
            </label>
          </div>
          <div>
            <label htmlFor="">
              Postal Code
              <input
                {...register("PostalCode", { required: true })}
                type="text"
                className="w-full px-3 py-2 border rounded"
              />
            </label>
          
          {errors.PostalCode && (
            <p className="text-red-500">{errors.PostalCode.message}</p>
          )}
         </div>
         <div>
            <label htmlFor="">
              Observations
              <textarea
                {...register("observaatios")}
                type="text"
                className="w-full px-3 py-2 border rounded"
              />
            </label>
          </div>
          <p className="text-lg">Total Price : {(Number(priceTotal) || 0).toFixed(2)}€</p>
          <button
            type="submit"
            className="text-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Reservar
          </button>
          {errors.date && <p>{errors.date.message}</p>}
        </form>

        <BookingConfirmation
          isOpen={showBookingConfirmation}
          onClose={() => setShowBookingConfirmation(false)}
        >
          <p>Reserva realizada con éxito</p>
        </BookingConfirmation>
      </div>
    </div>
  );
};

async function sendReservationData(formData) {
  try {
    const docRef = await addDoc(collection(db, "reservations"), formData);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export default Reserva;
