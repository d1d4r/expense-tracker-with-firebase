
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase/index.js";

export const getAllTransactions = async () => {
  const querySnapshot = await getDocs(collection(db, "transactions"));
  const transactions = querySnapshot.docs.map(doc => doc.data());
  return transactions;
};