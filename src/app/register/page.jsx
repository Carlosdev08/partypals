"use client";

import { signInWithRedirect } from "firebase/auth";
import { GoogleAuthProvider } from 'firebase/auth';
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";
import { auth, provider } from "@/lib/firebase-config";
import Image from "next/image";
import { useForm } from "react-hook-form";
import CommonForm from "@/components/CommonForm";

export default function Page() {
  const router = useRouter();

  const {
    watch,
    formState: { errors },
  } = useForm();

  const [error, setError] = useState("");

  const onSubmit = (data) => {
    if (data.password !== data.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setError(""); 
    RegisterWithEmail(data);
  };

  const RegisterWithEmail = async (data) => {
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        body: JSON.stringify(data ? data : {}),
      });

      if (res.ok) {
        const result = await res.json();
        console.log(result);
        setError(""); 
        router.push("/login");
      } else {
        const errorResponse = await res.json();
        console.error(errorResponse);
        setError("Registration failed. Please check your credentials.");
      }
    } catch (error) {
      console.error("Error during registration:", error);
      setError("An unexpected error occurred. Please try again."); 
    }
  };
  const provider = new GoogleAuthProvider();
  
  function signInWithGoogle() {
    signInWithRedirect(auth, provider);
  }

  return (
    <>
      <section className="flex flex-col md:flex-row h-screen items-center">
        <div className="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
          <Image
            width={200}
            height={200}
            src="https://source.unsplash.com/random"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto  md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center">
          <div className="w-full h-100">
            <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">
              Create new Account
            </h1>
            {error && <div className="text-red-500 mt-2 mb-4">{JSON.stringify(error)}</div>}            <CommonForm
              onSubmit={onSubmit}
              buttonText="Create new Account"
              error={error}
              hasConfirmPassword={true}
            />
            <hr className="my-6 border-gray-300 w-full" />
            <button
              type="button"
              className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300"
            >
              <div
                onClick={signInWithGoogle}
                className="flex items-center justify-center"
              >
                <FcGoogle />
                <span className="ml-4">Log in with Google</span>
              </div>
            </button>
            <p className="mt-8">
              Need an account?{" "}
              <a
                href="#"
                className="text-blue-500 hover:text-blue-700 font-semibold"
              >
                Login
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}