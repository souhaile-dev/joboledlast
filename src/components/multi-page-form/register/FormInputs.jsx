// import Billing from "./Billing"
// import OptIn from "./OptIn"
// import Shipping from "./Shipping"
import EmailVerification from "./EmailVerification";
import ProfileType from "./ProfileStatus";
import LocationVerification from "./LocationVerification";
import useFormContext from "../../../hooks/useFormContext";
import AgeInformations from "./AgeInformations";
import ProfessionalInformations from "./ProfessionalInformations";
import ProfessionalInformations2 from "./ProfessionalInformations2";

const FormInputs = ({
  setValue,
  country,
  city,
  profilType,
  urlParams,
  source,
}) => {
  const { page } = useFormContext();

  const display = {
    0: (
      <LocationVerification setValue={setValue} city={city} country={country} />
    ),
    1: <ProfileType setValue={setValue} profilType={profilType} />,
    2: <EmailVerification />,
  };

  const content = <div className="form-inputs flex-col">{display[page]}</div>;

  return content;
};
export default FormInputs;
