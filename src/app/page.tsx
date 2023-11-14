import Button from "./components/Button/Button";
import Input from "./components/Input/Input";
import { Loading } from "./components/Loading/Page";
import { NavBar } from "./components/NavBar/Index";

export default function Home() {
  const handleSearch = (title: string) => {
    console.log("Entrou handleSearch", title);
  };

  const handleSend = (title: string) => {
    console.log("Entrou handleSend", title);
  };

  return (
    <>
      <NavBar />
      {/* <Loading /> */}
      <Button title="Buscar" handleClick={handleSearch} />
      <Button title="Enviar" handleClick={handleSend} />
      <Input placeholder="Insira seu email:" />
    </>
  );
}
