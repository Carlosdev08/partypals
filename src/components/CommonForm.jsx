import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { EyeOff, Eye } from "lucide-react";

const CommonForm = ({ onSubmit, buttonText, hasConfirmPassword }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const validatePasswordsMatch = (confirmPassword) => {
    const password = watch("password");
    return password === confirmPassword || "The passwords do not match";
  };

  return (
    <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label className="block text-gray-700">Email Address</label>
        <input
          type="email"
          {...register("email", {
            required: "Email address is required",
            pattern: {
              value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
              message: "Invalid email address"
            }
          })}
          placeholder="Enter Email Address"
          className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
        />
        {errors.email && <div className="text-red-500 mt-2">{errors.email.message}</div>}
      </div>

      <div className="mt-4 relative">
        <label className="block text-gray-700">Password</label>
        <input
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must have at least 8 characters"
            },
            pattern: {
              value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
              message: "Password must contain at least one uppercase letter, one lowercase letter, and one number"
            }
          })}
          type={showPassword ? "text" : "password"}
          placeholder="Enter Password"
          className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
        >
          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
        {errors.password && <div className="text-red-500 mt-2">{errors.password.message}</div>}
      </div>

      {hasConfirmPassword && (
        <div className="mt-4 relative">
          <label className="block text-gray-700">Confirm Password</label>
          <input
            {...register("confirmPassword", {
              required: "Confirming password is required",
              validate: validatePasswordsMatch
            })}
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm Password"
            className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute inset-y-0 right-0 pr-3 flex items-center justify-center text-sm leading-5"
          >
            {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20}  className="text-center flex justify-center items-center" />}
          </button>
          {errors.confirmPassword && <div className="text-red-500 mt-2">{errors.confirmPassword.message}</div>}
        </div>
      )}

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
