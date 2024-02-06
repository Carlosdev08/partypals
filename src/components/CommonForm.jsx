import React from "react";
import { useForm } from "react-hook-form";

const CommonForm = ({ onSubmit, buttonText, hasConfirmPassword }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form className="mt-6" action="#" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label className="block text-gray-700">Email Address</label>
        <input
          type="email"
          {...register("email")}
          placeholder="Enter Email Address"
          className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
        />
      </div>
      <div className="mt-4">
        <label className="block text-gray-700">Password</label>
        <input
          {...register("password")}
          type="password"
          placeholder="Enter Password"
          className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
        />
      </div>
      {hasConfirmPassword && (
        <div className="mt-4">
          <label className="block text-gray-700">Confirm Password</label>
          <input
            {...register("confirmPassword")}
            type="password"
            placeholder="Confirm Password"
            className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
          />
        </div>
      )}
      {errors && <div className="text-red-500 mt-2 mb-4">{errors}</div>}
      <button
        type="submit"
        className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg px-4 py-3 mt-6"
      >
        {buttonText}
      </button>
    </form>
  );
};

export default CommonForm;
