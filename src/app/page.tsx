"use client";
import ItemList from "./components/ItemListContainer/ItemList";
import { NavBar } from "./components/NavBar/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  return (
    <>
      <ItemList />
      <ToastContainer />
    </>
  );
}
