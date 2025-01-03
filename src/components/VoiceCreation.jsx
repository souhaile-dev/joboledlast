import Form from "./voice-creation/Form";
import { FormProvider } from "../context/FormContextVC";

const VoiceCreation = ({
  setValue,
  image,
  fullName,
  jobTitle,
  phone,
  email,
  birthDay,
  skills,
  address,
  languages,
  education,
  experiences,
  releasedProjects,
  interests,
}) => {
  return (
    <FormProvider>
      <Form
        setValue={setValue}
        image={image}
        fullName={fullName}
        jobTitle={jobTitle}
        phone={phone}
        email={email}
        birthDay={birthDay}
        address={address}
        skills={skills}
        languages={languages}
        education={education}
        experiences={experiences}
        releasedProjects={releasedProjects}
        interests={interests}
      />
    </FormProvider>
  );
};

export default VoiceCreation;
