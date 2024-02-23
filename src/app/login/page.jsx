"use client";

import {
    createUserWithEmailAndPassword,
    getRedirectResult,
    signInWithRedirect,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";
import { auth } from '../../lib/firebase-config';
import { provider } from '../../lib/firebase-config';
import Image from "next/image";
import { useForm } from "react-hook-form";
import { getAuth, GoogleAuthProvider } from "firebase/auth";



const signInWithGoogle = () => {
  if (!auth) {
    console.error("Auth is undefined");
    return;
  }

  try {
    signInWithRedirect(auth, new GoogleAuthProvider());
  } catch (error) {
    console.error("Error signing in with Google: ", error);
    setError("Error signing in with Google.");
  }
};


export default function SignIn() {
  const router = useRouter();

  const {
      register,
      handleSubmit,
      formState: { errors },
  } = useForm();

  const [error, setError] = useState("");

  useEffect(() => {
      getRedirectResult(auth).then((result) => {
          if (result?.user) {
              router.replace("/events");
          }
      }).catch((error) => {
          console.error("Error obtaining redirect result: ", error);
          setError("Failed to sign in with Google. Please try again.");
      });
  }, [router]);

 

  const signInWithEmail = async (data) => {
    try {
        const res = await fetch("/api/login", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (res.ok) {
            router.replace("/protected");
        } else {
            throw new Error("Login failed. Please check your credentials.");
        }
    } catch (error) {
  console.error("Error during login:", error);
  setError(error instanceof Error ? error.message : "An unexpected error occurred. Please try again.");
}
};
  return (
    <>
      <section className="flex flex-col md:flex-row h-screen items-center">
        <div className="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
          
        </div>
        <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto  md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center">
          <div className="w-full h-100">
            <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">
              Log in to your account
            </h1>
            {error && <div className="text-red-500 mt-2 mb-4">{error}</div>}
            <form
              className="mt-6"
              action="#"
              onSubmit={handleSubmit(signInWithEmail)}
            >
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

              <button
                type="submit"
                className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg px-4 py-3 mt-6"
              >
                Log In
              </button>
            </form>
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
              Need an account?
              <a
                href="/register"
                className="text-blue-500 hover:text-blue-700 font-semibold"
              >
                Create an account
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}