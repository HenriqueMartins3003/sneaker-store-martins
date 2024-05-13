"use client";
import Router from "next/router";
import { createContext, useState } from "react";
import { setCookie } from "nookies";

type SingInData = {
  mail: string;
  password: string;
};

type AuthContextType = {
  isAuthenticated: boolean;
  name: string | undefined;
  email: string | undefined;
  singIn: (data: SingInData) => Promise<void>;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: any) {
  const [email, setEmail] = useState();
  const [name, setName] = useState();

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  async function singIn({ mail, password }: SingInData) {
    console.log(`Entrei no Auth!!!!  MAIL: ${mail}, SENHA: ${password} `);
    const email = mail;
    try {
      const response = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      //console.log(await response.json());

      const resp = await response.json();
      const { name, token } = resp;
      console.log(name, token, resp.email);
      if (token) {
        setCookie(null, "HAL-Token", token, {
          maxAge: 60 * 60 * 1, //1hora
        });

        setEmail(resp.email);
        setName(name);
        return setIsAuthenticated(true);
      } else {
        console.log("DEU MUITO RUIMM!!!");
        return setIsAuthenticated(false);
      }
    } catch (error: any) {
      console.log(error.message);
      return setIsAuthenticated(false);
    }
  }

  return (
    <AuthContext.Provider value={{ email, name, isAuthenticated, singIn }}>
      {children}
    </AuthContext.Provider>
  );
}
