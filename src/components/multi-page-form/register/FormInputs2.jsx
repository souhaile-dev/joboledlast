// import Billing from "./Billing"
// import OptIn from "./OptIn"
// import Shipping from "./Shipping"
import EmailVerification from "./EmailVerification";
import ProfileType from "./ProfileStatus";
import LocationVerification from "./LocationVerification";
import useFormContext from "../../../hooks/useFormContext2";
import AgeInformations from "./AgeInformations";
import ProfessionalInformations from "./ProfessionalInformations";
import ProfessionalInformations2 from "./ProfessionalInformations2";

const FormInputs = ({
  setValue,
  country,
  city,
  profilType,
  birthDay,
  highestDiplomeName,
  diplomeLevel,
  professionalField,
  yearsExperience,
  cv,
  urlParams,
  source,
}) => {
  const { page } = useFormContext();

  const display = {
    0: <AgeInformations setValue={setValue} birthDay={birthDay} />,
    1: (
      <ProfessionalInformations
        setValue={setValue}
        highestDiplomeName={highestDiplomeName}
        diplomeLevel={diplomeLevel}
        professionalField={professionalField}
        yearsExperience={yearsExperience}
      />
    ),
    2: <ProfessionalInformations2 setValue={setValue} cv={cv} />,
  };

  const content = <div className="form-inputs flex-col">{display[page]}</div>;

  return content;
};
export default FormInputs;
