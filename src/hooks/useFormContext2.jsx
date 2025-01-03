import { useContext } from "react";
import FormContext from "../context/FormContext2";

const useFormContext2 = () => {
  return useContext(FormContext);
};

export default useFormContext2;
