"use client";

import { useState } from "react";
import LoginForm from "../components/LoginForm";

// import RegisterForm from "@/components/RegisterForm";

export default function AuthPage() {
  const [mode, setMode] = useState("login");

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('/images/furniture-bg.jpg')", 
      }}
    >
      
     

     
      {/* <div className="relative z-10 w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        
      
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            {mode === "login" ? "Welcome Back" : "Create Account"}
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            {mode === "login"
              ? "Login to continue shopping"
              : "Register to start shopping"}
          </p>
        </div>

        
        {mode === "login" ? <LoginForm /> : <RegisterForm />}

        
        <div className="my-6 text-center text-sm text-gray-500">
          {mode === "login"
            ? "Don’t have an account?"
            : "Already have an account?"}
        </div>

        
        <button
          onClick={() =>
            setMode(mode === "login" ? "register" : "login")
          }
          className="w-full border border-gray-300 rounded-lg py-2 text-sm font-medium hover:bg-gray-100 transition"
        >
          {mode === "login"
            ? "Register"
            : "Login"}
        </button>
      </div> */}

      <LoginForm/>
    </div>
  );
}
