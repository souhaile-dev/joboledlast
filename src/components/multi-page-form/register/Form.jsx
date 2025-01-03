import FormInputs from "./FormInputs";
import useFormContext from "../../../hooks/useFormContext";
import logoImg from "../../../assets/logo.svg";
// import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

const Form = ({
  setValue,
  country,
  city,
  // birthDay,
  // highestDiplomeName,
  // diplomeLevel,
  // professionalField,
  // yearsExperience,
  // cv,
  profilType,
  signUp,
  urlParams,
  source,
}) => {
  const {
    page,
    setPage,
    title,
    desc,
    canSubmit,
    disablePrev,
    disableNext,
    prevHide,
    nextHide,
    submitHide,
  } = useFormContext();

  const handlePrev = () => {
    setPage((prev) => prev - 1);
    // console.log(canSubmit);
  };

  const handleNext = () => {
    setPage((prev) => prev + 1);
    // console.log(canSubmit);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (country !== "" && city !== "" && profilType !== "") {
      signUp();
    }
  };

  const content = (
    <form className="flex flex-row h-screen" onSubmit={handleSubmit}>
      {/* {page != 3 && (
        <> */}
      <div className="basis-1/3 bg-[#EDF0F3] flex flex-col p-16">
        <h2 className="basis-1/6 text-black/[.7] font-poppins text-xs">
          Step {page + 1}/3
        </h2>
        <h2 className="basis-2/6 font-spacegrotesk text-4xl">{title[page]}</h2>
        <div className="basis-3/6 flex">
          <p className="text-black/[.7] mt-5 font-poppins text-xs items-end self-end">
            {desc[page]}
          </p>
        </div>
      </div>

      {(page < 2 || page > 2) && (
        <div className="basis-2/3 flex flex-col p-10 pb-0 items-center justify-center">
          <div className="basis-4/6">
            <FormInputs
              setValue={setValue}
              country={country}
              city={city}
              profilType={profilType}
              // birthDay={birthDay}
              // highestDiplomeName={highestDiplomeName}
              // diplomeLevel={diplomeLevel}
              // professionalField={professionalField}
              // yearsExperience={yearsExperience}
              // cv={cv}
              signUp={signUp}
              source={source}
              urlParams={urlParams}
            />
          </div>
          <div className="basis-1/6 flex flex-row space-x-[10px]">
            <button
              type="button"
              className={`btn-03 w-[158px]  hover:bg-gray-50 hover:border ${prevHide}`}
              onClick={handlePrev}
              disabled={disablePrev}
            >
              <GoChevronLeft className="inline-block  mb-[1px]" /> Back
            </button>

            <button
              type="button"
              className={`btn-04 w-[158px]   ${nextHide}`}
              onClick={handleNext}
              disabled={disableNext}
            >
              Next <GoChevronRight className="inline-block mb-[1px]" />
            </button>
          </div>
          <div className="basis-1/6 pt-[19px]">
            {/* <div className='h-10 bg-black w-20 self-end'></div> */}
            <img
              src={logoImg}
              alt="jobold"
              className="inline-block w-[142px]"
            />
          </div>
        </div>
      )}
      {page == 2 && (
        <div className="basis-2/3 flex flex-col p-20 pt-[105px] pb-0 items-center justify-center">
          <div className="basis-6/12   mb-6">
            <FormInputs
              setValue={setValue}
              country={country}
              city={city}
              profilType={profilType}
              // birthDay={birthDay}
              // highestDiplomeName={highestDiplomeName}
              // diplomeLevel={diplomeLevel}
              // professionalField={professionalField}
              // yearsExperience={yearsExperience}
              // cv={cv}
              signUp={signUp}
              source={source}
              urlParams={urlParams}
            />
          </div>
          <div className="basis-3/12  flex flex-col space-y-[10px] items-center justify-center">
            {/* <button
              type="submit"
              className={`btn-04 w-[500px] text-[16px] ${submitHide}`}
            >
              Verify email
            </button> */}
            <button
              className={`btn-04 w-[500px] text-[16px] ${submitHide}`}
              onClick={handleNext}
              disabled={disableNext}
            >
              Verify email
            </button>
            <button
              type="button"
              className={`btn-05 w-[500px] text-[16px] hover:bg-gray-50 hover:border ${prevHide}`}
              onClick={handlePrev}
              disabled={disablePrev}
            >
              Back
            </button>
            <div className="text-center mt-3 font-poppins text-black/[.7] font-normal text-xs">
              <p className="inline-block">Didn’t get an email? </p>{" "}
              <a
                href="#"
                className="underline inline-block hover:text-black/[.9]"
              >
                Click to resend
              </a>
            </div>
          </div>

          <div className="basis-3/6 pb-14  flex">
            {/* <div className='h-10 bg-black w-20 self-end'></div> */}
            <img
              src={logoImg}
              alt="jobold"
              className="inline-block w-[142px]  items-end self-end"
            />
          </div>
        </div>
      )}
      {/* </>
      )} */}
      {/* {page == 3 && (
        <>
          <FormInputs
            setValue={setValue}
            country={country}
            city={city}
            profilType={profilType}
            birthDay={birthDay}
            highestDiplomeName={highestDiplomeName}
            diplomeLevel={diplomeLevel}
            professionalField={professionalField}
            yearsExperience={yearsExperience}
            cv={cv}
            signUp={signUp}
            source={source}
            urlParams={urlParams}
          />
        </>
      )} */}
    </form>
  );

  return content;
};
export default Form;
