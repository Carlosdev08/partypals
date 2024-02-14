/* eslint-disable react-hooks/exhaustive-deps */
import Image from "next/image";
import React, { useEffect, useState, useContext } from "react";
import { get, useForm } from "react-hook-form";
import { FormContext } from "@/context/FormContext";

const PaymentForm = () => {
  const [isCardSelected, setIsCardSelected] = useState(false);
  const [formValues, setFormValues] = useState({});
  const [isPaymentFormValid, setIsPaymentFormValid] = useState(false);

  const [details, setDetails] = useState(false);

  const toggleDetails = () => {
    setDetails((prev) => !prev);
  };

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isValid },
    watch,
  } = useForm({ mode: "onChange" });

  const onFormValidityChange = () => {
    console.log("Form is valid:", isValid);
  };
  useEffect(() => {
    if (typeof onFormValidityChange === "function") {
      onFormValidityChange(isValid);
    }
  }, [isValid, onFormValidityChange]);

  const onSubmit = (data) => {
    console.log(data);
  };

  const isFormComplete = () => {
    const values = getValues();
    const requiredFields = [
      "paymentMethod",
      "cardName",
      "cardNumber",
      "expDate",
      "cvc",
      "firstName",
      "lastName",
      "email",
    ];

    return requiredFields.every((field) => values[field]);
  };

  const handlepaymentMethodChange = (e) => {
    setIsCardSelected(e.target.value === "Card");
  };

  const handleCheckoutSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log("Form Data:", formData);
  };

  return (
    <div className="flex mb-20">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-6 rounded  mb-4"
      >
        <div className="flexflex-col mb-4 ">
          <h3 className="text-lg leading-6 font-outfit font-semibold mb-4">
            Seleccionar método de pago
          </h3>
          <div className="flex flex-col mb-4">
            <label htmlFor="paymentMethodCard" className="items-center mb-2">
              <input
                {...register("paymentMethod", { required: true })}
                type="radio"
                value="Card"
                id="paymentMethodCard"
                className="mr-2 accent-custom-shop "
                onChange={() => {
                  setIsCardSelected(true);
                  toggleDetails();
                }}
              />
              Tarjeta de crédito
            </label>
            {isCardSelected && (
              <div className="ml-6 text-sm font-normal">
                Opción estándar sin seguimiento
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 gap-4 mb-6"></div>
          <div className="mb-4">
            <label className="font-outfit font-normal text-xs  "  htmlFor="cardName">Titular</label>
            <input
              {...register("cardName", {
                required: "El nombre del titular es requerido",
              })}
              placeholder="Nombre del titular"
              className="p-2 h-9 border border-gray-300 rounded-md flex flex-col"
            />
            {errors.cardName && (
              <span className="text-red-500 text-xs italic block mt-1">
                {errors.cardName.message}
              </span>
            )}
          </div>
          <div className="rid grid-cols-2 gap-4 mb-6">
            <label className="font-outfit font-normal text-xs  "  htmlFor="cardNumber">Número de la tarjeta</label>
            <input
              {...register("cardNumber", {
                required: "El número de la tarjeta es requerido",
                pattern: {
                  value: /^\d{16}$/,
                  message: "El número de la tarjeta no es válido",
                },
              })}
              placeholder="1234 1234 1234 1234"
              className="p-2 h-9 border border-gray-300 rounded-md flex flex-col"
            />
            {errors.cardNumber && (
              <span className="text-red-500 text-xs italic">
                {errors.cardNumber.message}
              </span>
            )}
          </div>
        </div>
        <div className="flex flex-grow gap-5">
          <div>
            <label className="font-outfit font-normal text-xs"  htmlFor="expDate">Fecha de caducidad</label>
            <input
              {...register("expDate", {
                required: "La fecha de caducidad es requerida",
                pattern: {
                  value: /^(0[1-9]|1[0-2])\/\d{2}$/,
                  message: "La fecha de caducidad no es válida",
                },
              })}
              placeholder="MM/YY"
              className="border w-28 flex flex-col h-9 p-2.5 rounded-md"
              required={isFormComplete(isValid)}
            />
            {errors.expDate && (
              <span className="text-red-500 text-xs italic">
                {errors.expDate.message}
              </span>
            )}
          </div>
          <div className="grid grid-cols mb-4">
            <label className="font-outfit font-normal text-xs "  htmlFor="cvc">CVC</label>
            <input
              {...register("cvc", {
                required: "El CVC es requerido",
                pattern: {
                  value: /^\d{3}$/,
                  message: "El CVC no es válido",
                },
              })}
              placeholder="123"
              className="border w-28 flex flex-col h-9 p-2.5 rounded-md"
            />
            {errors.cvc && (
              <span className="text-red-500 text-xs italic">
                {errors.cvc.message}
              </span>
            )}
          </div>
        </div>
        <div className="border-t border-solid  my-4 leading-4 bg-[#E3DED7]" />{" "}
        <div className="flex flex-col">
          <label htmlFor="paymentMethod" className=" items-center mb-2 ">
            <input
              {...register("paymentMethod")}
              type="radio"
              value="bankTransfer"
              className="mr-2"
              onClick={toggleDetails}
            />
            Transferencia bancaria a la cuenta ES12 1234 1234 123457890
          </label>
          {details && (
            <span className="font-normal font-outfit ml-4  flex flex-col">
              Será necesario recibir el comprobante de la transferencia para
              preparar tu pedido
            </span>
          )}
        </div>
        <div className="border-t border-solid  my-4 leading-4 bg-[#E3DED7]" />{" "}
        <div></div>
        <div className="flex items-center text-center  ">
          <label htmlFor="paymentMethod" className=" items-center mb-2">
            <input
              {...register("paymentMethod")}
              type="radio"
              value="bizum"
              className="mr-2"
            />
            Bizum
          </label>

          <Image
            className="w-20 h-10 object-cover  place-items-center flex gap-10 p-2"
            src="/Bizum.svg"
            width={69}
            height={30}
            alt="Bizum"
          />
        </div>
        <h2 className="text-xl font-semibold mt-8 mb-4">Dirección de envío</h2>
        <div className="grid grid-cols-1 gap-4 mb-4">
          <div className="grid grid-col-1">
            <label className="font-outfit font-normal text-xs  "  htmlFor="text">Nombre</label>
            <input
              {...register("firstName", { required: true })}
              placeholder="Nombre"
              className="border p-2 "
            />
            {errors.firstName && <span>Este campo es requerido</span>}
          </div>
          <div className="grid grid-col-1">
            <label className="font-outfit font-normal text-xs  "  htmlFor="text">Apellido</label>
            <input
              {...register("LastName", { required: true })}
              className="border p-2 "
            />
            {errors.LastName && <span>Este campo es requerido</span>}
          </div>
        </div>
        <div className="flex flex-col">
          <div className="mt-4">
            <label className="font-outfit font-normal text-xs  "  htmlFor="email">Email</label>
            <input
              {...register("email", {
                required: "Este campo es requerido",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Por favor, introduce un correo electrónico válido",
                },
              })}
              className="border p-2 w-full"
            />
            {errors.email && <span>{errors.email.message}</span>}
          </div>

          <div className="mt-4">
            <label className="font-outfit font-normal text-xs  " htmlFor="País">
              País
            </label>
            <select
              {...register("País", { required: "Este campo es requerido" })}
              className="border p-2 w-[521px] h-9 grid grid-cols-1 gap-2 rounded-md text-[#515051]"
            >
              <option value="">Selecciona un país</option>
              <option value="España">España</option>
              <option value="Francia">Francia</option>
              <option value="Portugal">Portugal</option>
            </select>
          </div>
          <div className="mt-4 flex">
            <div className="flex flex-col mr-4 w-1/2">
              <label
                className="font-outfit text-xs  rounded font-normal"
                htmlFor="Población"
              >
                Población
              </label>
              <input
                {...register("Población", {
                  required: "Este campo es requerido",
                })}
                placeholder="Población"
                className="w-[248.5px] h-[36px] px-2 py-2.5 rounded-md border border-solid grid gap-2"
              />
            </div>
            <div className="flex flex-col w-1/2">
              <label
                className="font-outfit text-xs  rounded font-normal"
                htmlFor="CP"
              >
                Código Postal
              </label>
              <input
                {...register("CP", { required: "Campo obligatorio" })}
                placeholder="123"
                className="w-[248.5px] h-[36px] p-[10px] rounded-md border border-solid grid gap-2"
              />
            </div>
          </div>
          <div className="grid grid-cols-4 gap-6 w-[521px] h-[5px] font-outfit ">
            <div className="mt-4  text-sm font-normal border-solid h-9 rounded flex gap-2 flex-col">
              <label
                className="font-outfit text-xs  rounded font-normal "
                htmlFor="Calle"
              >
                Calle
              </label>
              <input
                {...register("Calle", { required: "Campo obligatorio" })}
                className="w-28 h-9 p-2.5 rounded border border-solid grid gap-2"
              />
            </div>

            <div className="mt-4">
              <label
                className="font-outfit text-xs  rounded font-normal "
                htmlFor="Número"
              >
                Número
              </label>
              <input
                {...register("Número", { required: "Campo obligatorio" })}
                className="w-28 h-9 p-2.5 rounded border border-solid grid gap-2"
              />
            </div>

            <div className="mt-4">
              <label
                className="font-outfit text-xs  rounded font-normal "
                htmlFor="Piso"
              >
                Piso
              </label>
              <input
                {...register("Piso", { required: "Campo obligatorio" })}
                className="w-28 h-9 p-2.5 rounded border border-solid grid gap-2"
              />
            </div>

            <div className="mt-4">
              <label
                htmlFor="Puerta"
                className="font-outfit text-xs rounded-sm w-[112.25px]  gap-[3px]   h-14 font-normal "
              >
                Puerta
              </label>
              <input
                {...register("Puerta", { required: "Campo obligatorio" })}
                className="w-28 h-9 p-2.5 rounded-md  border border-solid grid gap-2"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PaymentForm;
