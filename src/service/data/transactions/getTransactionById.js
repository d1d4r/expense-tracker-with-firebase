import { db } from "@/firebase/index.js";
import {  doc, getDoc } from "firebase/firestore";

export const getTransactionById = async (id) => {
  const docRef = doc(db, "transactions", id);

  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    return [];
  }
};
