import { collection, getDocs, getFirestore } from "firebase/firestore";
import { APP_FIREBASE } from "@/Config/firebase/firebase.config";

const useFireBaseHook = async () => {
  const db = getFirestore(APP_FIREBASE);
  const prodRef = collection(db, "Sneaker");
  const listaSneaker = await getDocs(prodRef).then((item) => {
    const lista = item.docs.map((doc) => doc.data());
    return lista;
  });

  return listaSneaker;
};

export default useFireBaseHook;
