import { createContext, useState, useEffect } from "react";

const FormContextVC = createContext({});

export const FormProvider = ({ children }) => {
  const title = {
    0: "Add Your Photo",
    1: "Enter Your Details",
    2: "Compose a Brief Bio",
    3: "List Your Soft and Hard Skills",
    4: "List your languages",
    5: "Enter Your Education Details",
    6: "List Your Work Experiences",
    7: "Your Released Projects",
    8: "Tell Us Your Interests",
  };
  const desc = {
    0: `Enhance your CV by including a professional photo. A photo adds a personal touch and helps create a strong first impression. Click the '<span class="underline">Upload your photo here</span>' button on the top left-hand to add your image.`,
    1: `<div class="w-[210px] h-[190px] text-center"><span class="text-white text-sm font-semibold font-['Poppins']">Please press the audio recording feature above to share your </span><span class="text-white text-sm font-semibold font-['Poppins'] underline">name</span><span class="text-white text-sm font-semibold font-['Poppins']">, job title, date of birth, current address, and email address. Speaking naturally, introduce yourself and cover these details clearly for an accurate CV creation.</span></div>`,
    2: `Share a succinct professional bio by utilizing the record button. Speak briefly about your motivations, personality, and aspirations.`,
    3: `Highlighting a comprehensive list of your Hard and soft skills will give potential employers a better understanding of your qualifications and expertise.`,
    4: `Add your language skills and corresponding proficiency levels to your profile. This will aid us in aligning you with job opportunities requiring specific language proficiencies.`,
    5: `<div class="w-[210px] h-[190px] text-center"><span class="text-white text-sm font-semibold font-['Poppins']">Kindly follow the steps mentioned for each diploma<br/></span><span class="text-white text-sm font-semibold font-['Poppins'] underline">Diploma Name<br/>Institution<br/>Degree Obtained<br/>Graduation Date<br/></span><span class="text-white text-sm font-semibold font-['Poppins']">Once completed, proceed to the next diploma.</span></div>`,
    6: `<div class="w-[210px] h-[190px] text-center"><span class="text-white text-sm font-semibold font-['Poppins']">For each experience, enter the following details:<br/></span><span class="text-white text-sm font-semibold font-['Poppins'] underline">Position Name<br/>Company Name<br/>Period<br/>Role Description<br/></span><span class="text-white text-sm font-semibold font-['Poppins']">Once completed, proceed to the next position.</span></div>`,
    7: `<div class="w-[210px] h-[190px] text-center"><span class="text-white text-sm font-semibold font-['Poppins']">For each project you've released, kindly provide:<br/></span><span class="text-white text-sm font-semibold font-['Poppins'] underline">Project Name<br/>your role<br/>Description<br/></span><span class="text-white text-sm font-semibold font-['Poppins']">Once completed, proceed to the next diploma.</span></div>`,
    8: `Please let us know about your personal interests and hobbies. This could include activities you enjoy outside of work or any passions you pursue in your free time`,
  };

  const [page, setPage] = useState(0);

  const [data, setData] = useState({
    country: "",
    city: "",
    profileStatus: "",
    image: "",
    fullName: "",
    jobTitle: "",
    phone: "",
    email: "",
    address: "",
    birthDay: "",
    skills: "",
    languages: "",
    education: "",
    experiences: "",
    releasedProjects: "",
    interests: "",
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
  const {
    billAddress2,
    sameAsBilling,
    shipAddress2,
    optInNews,
    ...requiredInputs
  } = data;

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
    <FormContextVC.Provider
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
    </FormContextVC.Provider>
  );
};

export default FormContextVC;
