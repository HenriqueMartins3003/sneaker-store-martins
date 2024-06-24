"use client";
import { createContext, useState } from "react";
import { setCookie } from "nookies";
import { useRouter } from "next/navigation";
import { login } from "@/Hooks/backend.api";
type User = {
  id: string;
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
      const resp = await login({email,password});

      const { token } = resp;

      const user = { id: resp.id ,name: resp.name, email: resp.email, role: resp.role };
      
      if (token) {
        setCookie(null, "HAL-Token", token, {
          maxAge: 60 * 60 * 1, //1hora
        });

        localStorage.setItem("ID_USER",user.id);
        localStorage.setItem("User_Email", user.email)
        
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
