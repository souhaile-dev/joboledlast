import { createContext, useState, useEffect } from "react";

const FormContext = createContext({});

export const FormProvider = ({ children }) => {
  const title = {
    0: "Age Informations",
    1: "Professional Informations",
    2: "Professional Informations",
  };
  const desc = {
    0: "Your age information will be kept confidential and used solely to enhance your job matching experience.",
    1: "We'd love to learn more about you. Your bio and CV will remain confidential and solely used to enhance your job search.",
    2: "We'd love to learn more about you. Your bio and CV will remain confidential and solely used to enhance your job search.",
  };

  const [page, setPage] = useState(0);

  const [data, setData] = useState({
    highestDiplomeName: "",
    diplomeLevel: "",
    professionalField: "",
    yearsExperience: "",
    cv: "",
  });

  const handleChange = (e) => {
    const type = e.target.type;

    const name = e.target.name;

    const value = type === "checkbox" ? e.target.checked : e.target.value;

    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const { ...requiredInputs } = data;

  const canSubmit =
    [...Object.values(requiredInputs)].every(Boolean) &&
    page === Object.keys(title).length - 1;

  const canNextPage1 = Object.keys(data)
    .filter((key) => key.startsWith("Loca") && key !== "billAddress2")
    .map((key) => data[key])
    .every(Boolean);

  const canNextPage2 = Object.keys(data)
    .filter((key) => key.startsWith("Prof") && key !== "shipAddress2")
    .map((key) => data[key])
    .every(Boolean);

  const disablePrev = page === 0;

  const disableNext =
    page === Object.keys(title).length - 1 ||
    (page === 0 && !canNextPage1) ||
    (page === 1 && !canNextPage2);

  const prevHide =
    page === 0 && "cursor-not-allowed hover:bg-transparent hover:border-0";

  const nextHide = page === Object.keys(title).length - 1 && "remove-button";

  const submitHide = page !== Object.keys(title).length - 1 && "remove-button";

  return (
    <FormContext.Provider
      value={{
        title,
        desc,
        page,
        setPage,
        data,
        setData,
        canSubmit,
        disablePrev,
        disableNext,
        prevHide,
        nextHide,
        submitHide,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormContext;
