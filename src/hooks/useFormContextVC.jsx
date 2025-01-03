import { useContext } from "react";
import FormContextVC from "../context/FormContextVC";

const useFormContextVC = () => {
  return useContext(FormContextVC);
};

export default useFormContextVC;
