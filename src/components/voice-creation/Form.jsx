import FormInputs from "./FormInputs";
import React, { useState, useEffect } from "react";
import useFormContextVC from "../../hooks/useFormContextVC";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import Audio from "./components/Audio";
import Progress from "./components/Progress";
import Audio2 from "./components/Audio2";
import MockUp from "./components/MockUp";
import MockUp2 from "./components/MockUp2";


const Form = ({
  setValue,
  image,
  fullName,
  jobTitle,
  phone,
  email,
  address,
  birthDay,
  skills,
  languages,
  education,
  experiences,
  releasedProjects,
  interests,
  
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
  } = useFormContextVC();

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
    // if (country !== "" && city !== "" && profilType !== "") {
    //   // signUp();
    // }
  };

  const [modal, setModal] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    displayImage(file);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    displayImage(file);
  };

  const displayImage = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      setUploadedImage(e.target.result);
      setUploadSuccess(true);
    };
    reader.readAsDataURL(file);
  };

  const toggleModal = () => {
    setModal(!modal);
  };

  useEffect(() => {
    if (modal) {
      document.body.classList.add("active-modal");
    } else {
      document.body.classList.remove("active-modal");
    }
  }, [modal]);
  const content = (
    <>
      {/* <form className="flex flex-row h-screen" onSubmit={handleSubmit}>
        <div className="basis-1/3 bg-[#EDF0F3] flex flex-col p-16">
          <h2 className="basis-1/6 text-black/[.7] font-poppins text-xs">
            Step {page + 1}/3
          </h2>
          <h2 className="basis-2/6 font-spacegrotesk text-4xl">
            {title[page]}
          </h2>
          <div className="basis-3/6 flex">
            <p className="text-black/[.7] mt-5 font-poppins text-xs items-end self-end">
              {desc[page]}
            </p>
          </div>
        </div>

        <div className="basis-2/3 flex flex-col p-10 pb-0 items-center justify-center">
          <div className="basis-4/6">
            <FormInputs setValue={setValue} />
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
          <div className="basis-1/6 pt-[19px]"></div>
        </div>
      </form> */}
      <form
        onSubmit={handleSubmit}
        className="bg-voice-creation bg-cover overflow-hidden h-screen w-screen p-5 flex flex-row justify-center space-x-5 scrollbar scrollbar-thumb-[#6610F2] scrollbar-w-[10px] scrollbar-track-gray-100 overflow-y-scroll  overflow-x-hidden"
      >
        <div className="bg-white h-[792px] w-[475px] rounded-[20px] shadow scrollbar scrollbar-thumb-[#6610F2] scrollbar-w-[10px] scrollbar-track-gray-100 overflow-y-scroll  overflow-x-hidden">
          {/* the profile picture */}
          <div className="flex ml-[33px] my-5">
            <button onClick={toggleModal} className="btn-modal">
              {uploadedImage ? (
                <img
                  src={uploadedImage}
                  alt="Uploaded"
                  className="w-16 h-16 rounded-full object-cover shadow-2xl"
                />
              ) : (
                <svg
                  className="p-2 opacity-90 bg-white rounded-[20px] shadow"
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  height="60"
                  viewBox="0 0 96 96"
                  fill="none"
                >
                  <path
                    d="M48 29.6729L48 67.2001"
                    stroke="black"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                  <path
                    d="M66.7637 48.4365L29.2364 48.4365"
                    stroke="black"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                  <circle cx="48" cy="48" r="48" fill="#6610F2" />
                  <path
                    d="M48 36L48 61"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <path
                    d="M60 48L36 48"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              )}
            </button>
            <h5 className=" mt-4 text-xl ml-2">Upload your photo here</h5>
          </div>
          {/* the ligne between profile and the informations */}
          <div className="w-[475px] h-[0px] border border-black"></div>
          <div className="flex flex-col space-y-[40px]">
            <div className="">
              <div className="flex flex-row space-x-1"></div>
              <div className=" flex flex-col space-y-[16px]"></div>
            </div>
          </div>
          <div className=" ml-[36px] mt-[20px]  text-black text-3xl font-normal font-['Space Grotesk']">
            Your Details
          </div>
          {/* information : name tele.... */}
          <div class="w-[154px] h-[17px] flex flex-col items-center justify-start py-5 pl-[80px] space-y-[16px]  text-black text-sm font-normal font-['Poppins']">
            <label
              class=" text-black   text-sm font-normal font-['Poppins']"
              htmlFor="FullName"
            >
              FullName
            </label>
            <label
              class=" text-black   text-sm font-normal font-['Poppins']"
              htmlFor="Job Title"
            >
              Job Title
            </label>
            <label
              class=" text-black   text-sm font-normal font-['Poppins']"
              htmlFor="Phone"
            >
              Phone
            </label>
            <label
              class=" text-black   text-sm font-normal font-['Poppins']"
              htmlFor="Phone"
            >
              Email
            </label>
            <label
              class=" text-black   text-sm font-normal font-['Poppins']"
              htmlFor="Phone"
            >
              Birthay
            </label>
            <label
              class=" text-black   text-sm font-normal font-['Poppins']"
              htmlFor="Phone"
            >
              Address
            </label>
          </div>

          <div className=" ml-[36px] mt-[220px]  text-black text-3xl font-normal font-['Space Grotesk']">
            Short Bio
          </div>
          <div class="w-[154px] h-[17px] flex flex-col items-center justify-start py-5 pl-[80px]  text-black text-sm font-normal font-['Poppins']">
            <label
              class=" text-black py-2  text-sm font-normal font-['Poppins']"
              htmlFor="FullName"
            >
              bio
            </label>
          </div>

          <div className=" ml-[36px] mt-8 text-black text-3xl font-normal font-['Space Grotesk']">
            Skills
          </div>
          <div class="  py-10 pl-[80px] flex flex-col text-black text-sm font-normal font-['Poppins']">
            <label
              class=" text-black py-2  text-sm font-normal font-['Poppins']"
              htmlFor="FullName"
            >
              include your hard skills in your CV.
            </label>
            <label
              class=" text-black py-2  text-sm font-normal font-['Poppins']"
              htmlFor="FullName"
            >
              Please include your soft skills in your CV.
            </label>
          </div>
        </div>
        <FormInputs
          setValue={setValue}
          fullName={fullName}
          jobTitle={jobTitle}
          phone={phone}
          email={email}
          birthDay={birthDay}
          address={address}
          image={image}
        />
        {/* <MockUp /> */}
        <MockUp2 />
        {modal && (
          <div className="fixed inset-0 h-full w-screen bg-white bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
            <div className="modal border w-[597px]">
              <div className="modal-content w-full border-1 bg-white border-gray-500 shadow-2xl py-4 pr-4 rounded-lg pb-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  onClick={toggleModal}
                  className=" close-modal flex float-right cursor-pointer"
                >
                  <path
                    d="M9.4158 8.00409L15.7158 1.71409C15.9041 1.52579 16.0099 1.27039 16.0099 1.00409C16.0099 0.73779 15.9041 0.482395 15.7158 0.294092C15.5275 0.105788 15.2721 0 15.0058 0C14.7395 0 14.4841 0.105788 14.2958 0.294092L8.0058 6.59409L1.7158 0.294092C1.52749 0.105788 1.2721 2.36434e-07 1.0058 2.38419e-07C0.739497 2.40403e-07 0.484102 0.105788 0.295798 0.294092C0.107495 0.482395 0.00170684 0.73779 0.00170684 1.00409C0.00170684 1.27039 0.107495 1.52579 0.295798 1.71409L6.5958 8.00409L0.295798 14.2941C0.20207 14.3871 0.127676 14.4977 0.0769072 14.6195C0.0261385 14.7414 0 14.8721 0 15.0041C0 15.1361 0.0261385 15.2668 0.0769072 15.3887C0.127676 15.5105 0.20207 15.6211 0.295798 15.7141C0.388761 15.8078 0.499362 15.8822 0.621222 15.933C0.743081 15.9838 0.873786 16.0099 1.0058 16.0099C1.13781 16.0099 1.26852 15.9838 1.39038 15.933C1.51223 15.8822 1.62284 15.8078 1.7158 15.7141L8.0058 9.41409L14.2958 15.7141C14.3888 15.8078 14.4994 15.8822 14.6212 15.933C14.7431 15.9838 14.8738 16.0099 15.0058 16.0099C15.1378 16.0099 15.2685 15.9838 15.3904 15.933C15.5122 15.8822 15.6228 15.8078 15.7158 15.7141C15.8095 15.6211 15.8839 15.5105 15.9347 15.3887C15.9855 15.2668 16.0116 15.1361 16.0116 15.0041C16.0116 14.8721 15.9855 14.7414 15.9347 14.6195C15.8839 14.4977 15.8095 14.3871 15.7158 14.2941L9.4158 8.00409Z"
                    fill="black"
                  />
                </svg>
                <div className="flex flex-col justify-start items-center">
                  <label
                    htmlFor="formFile"
                    className="w-[395px] h-[51px] flex items-center justify-center text-center text-black text-2xl font-normal font-['Space Grotesk']"
                  >
                    {uploadSuccess ? (
                      <>
                        Success
                        <img
                          src={uploadedImage}
                          alt="Uploaded"
                          className="w-10 h-10 rounded-full ml-2 object-cover"
                        />
                      </>
                    ) : (
                      "Upload your photo"
                    )}
                  </label>
                  <div
                    className="flex items-center justify-center w-50 mx-5 rounded-full"
                    onDrop={handleDrop}
                    onDragOver={(e) => e.preventDefault()}
                  >
                    <label
                      htmlFor="dropzone-file"
                      className="flex flex-col w-[525px] items-center justify-center  h-40 border-2 shadow-2xl border-gray-500 rounded-lg cursor-pointer bg-gray-200 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                    >
                      {uploadedImage ? (
                        <>
                          <img
                            src={uploadedImage}
                            alt="Uploaded"
                            className="w-full h-full object-cover rounded-lg"
                          />
                        </>
                      ) : (
                        <div className="flex flex-col items-center justify-center pt-5 mb-5">
                          <svg
                            className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 16"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                            />
                          </svg>
                          <p className="mb-2 text-sm text-black-500 dark:text-black-400">
                            Click to
                            <span className="font-semibold"> Upload</span> or
                            Drag & Drop
                          </p>
                        </div>
                      )}
                      <input
                        id="dropzone-file"
                        type="file"
                        className="hidden"
                        onChange={handleFileChange}
                      />
                    </label>
                  </div>
                  <div className="text-left ml-4 text-black text-sm font-normal font-['Poppins'] leading-none mt-2">
                    <span className=" w-[18px] rounded-full border border-black">
                      ?
                    </span>{" "}
                    We recommend using a high-quality headshot that presents you
                    in a professional and positive light.
                  </div>
                  <button
                    onClick={toggleModal}
                    disabled={disableNext}
                    onClickCapture={handleNext}
                    className="rounded-full bg-blue-500 ml-2 text-white mt-2 shadow-2xl px-[130px] min-w-2 "
                  >
                    Save and Continue
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        <div
          onClick={() => setIsRecording(true)}
          className="h-[792px] w-[250px] flex flex-col space-y-[20px]"
        >
          {isRecording ? (
            <Audio2
              pressed={false}
              disableNext={disableNext}
              bgColor="bg-[#F05A5866]"
              isRecording={isRecording}
              setIsRecording={setIsRecording}
            />
          ) : (
            <Audio bgColor="bg-[#F15B59]" pressed={false} />
          )}

          <Progress stepNbr={page + 1} title={title[page]} desc={desc[page]} />
        </div>
      </form>
    </>
  );

  return content;
};
export default Form;
