/* eslint-disable no-dupe-keys */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import MyContext from "./myContext";
import {
  QuerySnapshot,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { fireDB } from "../firebase/FirebaseConfig";
import toast from "react-hot-toast";

function MyState({ children }) {
  // const name = "Raju Kumar Pal"
  const [loading, setLoading] = useState(false);

  //get All product States
  const [getAllProduct, setGetAllProduct] = useState([]);

  const getAllProductFunction = async () => {
    try {
      setLoading(true);
      const q = query(collection(fireDB, "products"), orderBy("time"));

      const data = onSnapshot(q, (QuerySnapshot) => {
        let productArray = [];

        QuerySnapshot.forEach((doc) => {
          productArray.push({ ...doc.data(), id: doc.id });
        });

        setGetAllProduct(productArray);
        setLoading(false);
      });
      return () => data;
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // order States
  const [getAllOrder, setGetAllOrder] = useState([]);
  const getAllOrdefunction = async () => {
    setLoading(true);
    try {
      const q = query(collection(fireDB, "order"), orderBy("time"));
      const data = onSnapshot(q, (QuerySnapshot) => {
        let orderArray = [];
        QuerySnapshot.forEach((doc) => {
          orderArray.push({ ...doc.data(), id: doc.id });
        });
        setGetAllOrder(orderArray);
        setLoading(false);
      });
      return () => data;
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  // console.log(getAllOrder)

  // Delete Order Function
  const deleteOrder = async (id) => {
    setLoading(true);
    try {
      await deleteDoc(doc(fireDB, "order", id));
      toast.success("order delete successfully");
      getAllOrdefunction();
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  // get All User Function

  const [getAllUser, setGetAllUser] = useState([]);
  const getAllUserFunction = async () => {
    setLoading(true);
    try {
      const q = query(collection(fireDB, "user"), orderBy("time"));
      const data = onSnapshot(q, (QuerySnapshot) => {
        let userArray = [];
        QuerySnapshot.forEach((doc) => {
          userArray.push({ ...doc.data(), id: doc.id });
        });
        setGetAllUser(userArray);
        setLoading(false);
      });
      return () => data;
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect
  useEffect(() => {
    getAllProductFunction(); // kyu ki autometicli data get ho paye
    getAllOrdefunction();
    getAllUserFunction();
  }, []);

  return (
    <MyContext.Provider
      value={{
        loading,
        setLoading,
        getAllProduct,
        getAllProductFunction,
        getAllOrder,
        deleteOrder,
        getAllUser,
      }}
    >
      {children}
    </MyContext.Provider>
  );
}

export default MyState;
