import { useEffect } from "react";

const withAuth = (WrappedComponent: React.FC) => {
  const Wrapper = (props: any) => {
    useEffect(() => {
      const role = localStorage.getItem("User_Role");
      if (role !== "admin") {
        // Redirecionar para a rota Denied caso não seja admin
        window.location.href = "/Denied"; // Isso redirecionará diretamente pelo navegador
      }
    }, []);

    if (typeof window === "undefined") return null; // Para evitar problemas no servidor

    return <WrappedComponent {...props} />;
  };

  return Wrapper;
};

export default withAuth;