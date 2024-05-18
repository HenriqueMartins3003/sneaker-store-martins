"use client";
import { createContext, useState } from "react";
import { setCookie } from "nookies";
import { useRouter } from "next/navigation";
type User = {
  name: string;
  email: string;
  role: string;
};
type SingInData = {
  email: string;
  password: string;
};

type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  singIn: (data: SingInData) => Promise<void>;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: any) {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();
  let isAuthenticated: boolean = !!user;

  async function singIn({ email, password }: SingInData) {
    console.log(`Entrei no Auth!!!!  MAIL: ${email}, SENHA: ${password} `);
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

      const { token } = resp;

      const user = { name: resp.name, email: resp.email, role: resp.role };

      if (token) {
        setCookie(null, "HAL-Token", token, {
          maxAge: 60 * 60 * 1, //1hora
        });
        setUser(user);
        console.log("fiz o setUser teoricamente vou para o /Item");
        router.push("/Item");
      } else {
        console.log("DEU MUITO RUIMM!!!");
      }
    } catch (error: any) {
      console.log(error.message);
    }
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, singIn }}>
      {children}
    </AuthContext.Provider>
  );
}
