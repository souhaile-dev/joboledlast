import Form from "./multi-page-form/register/Form";
import { FormProvider } from "../context/FormContext";
import { useState } from "react";

const AfterRegister = ({
  setValue,
  country,
  city,
  profilType,
  signUp,
  birthDay,
  highestDiplomeName,
  diplomeLevel,
  professionalField,
  yearsExperience,
  cv,
  urlParams,
  source,
}) => {
  return (
    <FormProvider>
      <Form
        urlParams={urlParams}
        source={source}
        setValue={setValue}
        country={country}
        city={city}
        birthDay={birthDay}
        profilType={profilType}
        signUp={signUp}
        highestDiplomeName={highestDiplomeName}
        diplomeLevel={diplomeLevel}
        professionalField={professionalField}
        yearsExperience={yearsExperience}
        cv={cv}
      />
    </FormProvider>
  );
};

export default AfterRegister;
