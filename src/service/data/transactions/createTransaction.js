import { db } from "@/firebase/index.js";
import { addDoc, collection } from "firebase/firestore";

export const createTrnsaction = async (transaction) => {
  return await addDoc(collection(db, "transactions"), transaction);
};
