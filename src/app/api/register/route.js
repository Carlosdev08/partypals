"use client";

import { ca } from "date-fns/locale";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


export default async function handler(req, res) {
    if (req.method !== "POST") {
        console.log(req.method);

      return res.status(405).json({ error: "Method not allowed" });
    }
  
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        return res.status(400).json({ error: "Email or password is empty" });
      }
      
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      
    
      res.status(200).json({ message: 'Success' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

async function registerUser(email, password) {
    const auth = getAuth();
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        return { success: true, user: userCredential.user };
    } catch (error) {
        console.error("Error in createUserWithEmailAndPassword:", error);
        return { success: false, error: error.message };
    }
}