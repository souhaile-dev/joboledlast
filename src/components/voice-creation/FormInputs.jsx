// import Billing from "./Billing"
// import OptIn from "./OptIn"
// import Shipping from "./Shipping"

import useFormContextVC from "../../hooks/useFormContextVC";
import _1 from "./pages/_1";
import _2 from "./pages/_2";
import _3 from "./pages/_3";
import _4 from "./pages/_4";
import _5 from "./pages/_5";
import _6 from "./pages/_6";
import _7 from "./pages/_7";
import _8 from "./pages/_8";
import _9 from "./pages/_9";

const FormInputs = ({
  setValue,
  image,
  fullName,
  jobTitle,
  phone,
  email,
  birthDay,
  address,
  skills,
  languages,
  education,
  experiences,
  releasedProjects,
  interests,
}) => {
  const { page } = useFormContextVC();

  const display = {
    0: <_1 />,
    1: <_2 />,
    2: <_3 />,
    3: <_4 />,
    4: <_5 />,
    5: <_6 />,
    6: <_7 />,
    7: <_8 />,
    8: <_9 />,
    // 0: <FirstPage setValue={setValue} image={image} />,
    // 1: (
    //   <SecondPage
    //     setValue={setValue}
    //     fullName={fullName}
    //     jobTitle={jobTitle}
    //     phone={phone}
    //     email={email}
    //     birthDay={birthDay}
    //     address={address}
    //   />
    // ),
    // 0: <LocationVerification setValue={setValue} />,
    // 1: <ProfileType setValue={setValue} />,
    // 2: <EmailVerification />,
  };

  const content = <div className="form-inputs flex-col">{display[page]}</div>;

  return content;
};
export default FormInputs;
