"use client";
import ItemList from "./components/ItemListContainer/ItemList";
import { NavBar } from "./components/NavBar/Navbar";

export default function Home() {
  return (
    <>
      <NavBar />
      <ItemList />
    </>
  );
}
