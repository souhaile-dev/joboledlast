import React, { useState, createContext, useContext, useEffect } from "react";
import {
  Button,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Radio,
  List,
  ListItem,
  ListItemPrefix,
  Typography,
  Textarea,
} from "@material-tailwind/react";
import { Route, Link } from "react-router-dom";
import axios from "axios";
//images
import logoImg01 from "../assets/logo.svg";
import pith_landing_imgection_1 from "../assets/svg/pith_landing_imgection_1.svg";
import orange_logo from "../assets/png/orange_logo.png";
import hedera_logo from "../assets/png/hedera_logo.png";
import Group161 from "../assets/png/Group161.png";
import Group160 from "../assets/png/Group160.png";
import Group159 from "../assets/png/Group159.png";
import workDistribution from "../assets/png/workDistribution.png";

import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Loading = () => {
  return (
    <div className="w-screen h-screen flex flex-row space-x-5 items-center justify-center">
      <img src={logoImg01} alt="jobold" className="inline-block w-[192px] " />
      <AiOutlineLoading3Quarters className="animate-spin h-10 w-10 mr-3 text-[#6610F2]" />
    </div>
  );
};

const handleDownload = () => {
  fetch("/pitch-deck-jobold.pdf")
    .then((response) => response.blob())
    .then((blob) => {
      const url = window.URL.createObjectURL(new Blob([blob]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "pitch-deck.pdf");
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
    });
};
const handleRadioChange = (e) => {
  console.log(e.target.value);
};
function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="29"
      height="29"
      viewBox="0 0 29 29"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
      strokeWidth={2}
      fill="none"
    >
      <path
        d="M28 15L1 15"
        stroke="black"
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M14 28L14 1"
        stroke="black"
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  );
  //   <svg xmlns="http://www.w3.org/2000/svg" width="29" height="2" viewBox="0 0 29 2" fill="none">
  //   <path d="M28 1L1 1" stroke="black" stroke-width="2" stroke-linecap="round"/>
  // </svg>
}

function RadioIconSelected() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="13"
      height="13"
      viewBox="0 0 13 13"
      fill="none"
    >
      <circle cx="6.5" cy="6.5" r="6.5" fill="white" />
    </svg>
  );
}
function RadioIconNotSelected() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="13"
      height="13"
      viewBox="0 0 13 13"
      fill="none"
    >
      <circle cx="6.5" cy="6.5" r="5.5" stroke="black" stroke-width="2" />
    </svg>
  );
}
function FileNotSelected() {
  return (
    <span className="flex flex-row space-x-[7px] laptop:space-x-[22px]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="21"
        height="25"
        viewBox="0 0 21 25"
        className="w-[13px] h-[14.948px] laptop:w-[21px] laptop:h-[25px]"
        fill="none"
      >
        <path
          d="M19.8333 19.3169H18.6667V18.1096C18.6667 17.7894 18.5438 17.4823 18.325 17.2559C18.1062 17.0295 17.8094 16.9023 17.5 16.9023C17.1906 16.9023 16.8938 17.0295 16.675 17.2559C16.4562 17.4823 16.3333 17.7894 16.3333 18.1096V19.3169H15.1667C14.8572 19.3169 14.5605 19.4441 14.3417 19.6705C14.1229 19.8969 14 20.204 14 20.5242C14 20.8444 14.1229 21.1515 14.3417 21.3779C14.5605 21.6043 14.8572 21.7315 15.1667 21.7315H16.3333V22.9388C16.3333 23.259 16.4562 23.5661 16.675 23.7925C16.8938 24.0189 17.1906 24.1461 17.5 24.1461C17.8094 24.1461 18.1062 24.0189 18.325 23.7925C18.5438 23.5661 18.6667 23.259 18.6667 22.9388V21.7315H19.8333C20.1428 21.7315 20.4395 21.6043 20.6583 21.3779C20.8771 21.1515 21 20.8444 21 20.5242C21 20.204 20.8771 19.8969 20.6583 19.6705C20.4395 19.4441 20.1428 19.3169 19.8333 19.3169ZM11.6667 21.7315H3.5C3.19058 21.7315 2.89383 21.6043 2.67504 21.3779C2.45625 21.1515 2.33333 20.8444 2.33333 20.5242V3.62192C2.33333 3.30172 2.45625 2.99464 2.67504 2.76822C2.89383 2.54181 3.19058 2.41461 3.5 2.41461H9.33333V6.03653C9.33333 6.99712 9.70208 7.91837 10.3585 8.59761C11.0148 9.27685 11.9051 9.65844 12.8333 9.65844H16.3333V13.2804C16.3333 13.6006 16.4562 13.9076 16.675 14.1341C16.8938 14.3605 17.1906 14.4877 17.5 14.4877C17.8094 14.4877 18.1062 14.3605 18.325 14.1341C18.5438 13.9076 18.6667 13.6006 18.6667 13.2804V8.45114C18.6667 8.45114 18.6667 8.45114 18.6667 8.3787C18.6545 8.26779 18.6311 8.15852 18.5967 8.05273V7.94407C18.5406 7.81994 18.4657 7.70583 18.375 7.60603L11.375 0.362192C11.2786 0.268283 11.1683 0.190852 11.0483 0.132803C11.0097 0.125813 10.9703 0.125813 10.9317 0.132803C10.8182 0.0700274 10.6963 0.0252592 10.57 0H3.5C2.57174 0 1.6815 0.381594 1.02513 1.06084C0.368749 1.74008 0 2.66132 0 3.62192V20.5242C0 21.4848 0.368749 22.406 1.02513 23.0853C1.6815 23.7645 2.57174 24.1461 3.5 24.1461H11.6667C11.9761 24.1461 12.2728 24.0189 12.4916 23.7925C12.7104 23.5661 12.8333 23.259 12.8333 22.9388C12.8333 22.6186 12.7104 22.3115 12.4916 22.0851C12.2728 21.8587 11.9761 21.7315 11.6667 21.7315ZM11.6667 4.11691L14.6883 7.24383H12.8333C12.5239 7.24383 12.2272 7.11664 12.0084 6.89022C11.7896 6.66381 11.6667 6.35673 11.6667 6.03653V4.11691ZM5.83333 7.24383C5.52391 7.24383 5.22717 7.37103 5.00838 7.59745C4.78958 7.82386 4.66667 8.13094 4.66667 8.45114C4.66667 8.77134 4.78958 9.07842 5.00838 9.30483C5.22717 9.53125 5.52391 9.65844 5.83333 9.65844H7C7.30942 9.65844 7.60617 9.53125 7.82496 9.30483C8.04375 9.07842 8.16667 8.77134 8.16667 8.45114C8.16667 8.13094 8.04375 7.82386 7.82496 7.59745C7.60617 7.37103 7.30942 7.24383 7 7.24383H5.83333ZM11.6667 16.9023H5.83333C5.52391 16.9023 5.22717 17.0295 5.00838 17.2559C4.78958 17.4823 4.66667 17.7894 4.66667 18.1096C4.66667 18.4298 4.78958 18.7369 5.00838 18.9633C5.22717 19.1897 5.52391 19.3169 5.83333 19.3169H11.6667C11.9761 19.3169 12.2728 19.1897 12.4916 18.9633C12.7104 18.7369 12.8333 18.4298 12.8333 18.1096C12.8333 17.7894 12.7104 17.4823 12.4916 17.2559C12.2728 17.0295 11.9761 16.9023 11.6667 16.9023ZM12.8333 12.0731H5.83333C5.52391 12.0731 5.22717 12.2003 5.00838 12.4267C4.78958 12.6531 4.66667 12.9602 4.66667 13.2804C4.66667 13.6006 4.78958 13.9076 5.00838 14.1341C5.22717 14.3605 5.52391 14.4877 5.83333 14.4877H12.8333C13.1428 14.4877 13.4395 14.3605 13.6583 14.1341C13.8771 13.9076 14 13.6006 14 13.2804C14 12.9602 13.8771 12.6531 13.6583 12.4267C13.4395 12.2003 13.1428 12.0731 12.8333 12.0731Z"
          fill="black"
        />
      </svg>
      <span className="text-black text-sm laptop:text-base flex items-center justify-center font-semibold font-['Poppins'] underline">
        Join file
      </span>
    </span>
  );
}
function FileSelected({ fileName }) {
  return (
    <span className="w-[112px] text-black text-sm laptop:text-base flex items-center font-semibold font-['Poppins'] underline truncate text-start">
      {fileName}
    </span>
  );
}
const PitshLandingPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [open, setOpen] = useState(0);
  const [selectedOption, setSelectedOption] = useState("1");
  const [selectedFile, setSelectedFile] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  useEffect(() => {
    // Simulate a delay before the page loads
    setTimeout(() => {
      setIsLoading(false);
    }, 200);
  }, []);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    selectedOption: "",
    attachment: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    //console.log(e.target.value)
    setFormData({ ...formData, [name]: value });
  };

  const handleInputChange1 = (e) => {
    const { name, value } = e.target;
    //console.log(e.target.value)
    setFormData({ ...formData, selectedOption: e.target.value });
  };

  const handleFileChange = (e) => {
    if (!e.target.files[0]) return;
    setFormData({ ...formData, attachment: e.target.files[0] });
    setSelectedFile(e.target.files[0].name);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("message", formData.message);
    formDataToSend.append("attachment", formData.attachment);
    formDataToSend.append("selectedOption", formData.selectedOption);

    const apiUrl = "https://api-back-office-jobold.onrender.com/"; // Replace with your API server's URL

    // Example API request  ${apiUrl}

    try {
      axios.post(
        `https://api-back-office-jobold.onrender.com/contact`,
        formDataToSend
      );
      alert("Message sent successfully");
      // Clear the form
      setFormData({
        name: "",
        email: "",
        message: "",
        selectedOption: "",
        attachment: "",
      });
    } catch (error) {
      console.error("Error sending message:", error);
      alert("An error occurred while sending the message");
    }
  };
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="scroll-smooth flex flex-col bg-white h-screen scrollbar scrollbar-thumb-[#6610F2] scrollbar-w-[6px] laptop:scrollbar-w-[10px] scrollbar-track-gray-100 overflow-y-scroll overflow-x-hidden pt-[9px] sm:pt-[19px] tablet:pt-[29px] laptop:pt-[39px]">
          {/* The Nav Bar */}
          <div className="px-[25px] sm:px-[60px] tablet:px-[80px] laptop:px-[100px]  w-full flex flex-col space-y-[52px] relative">
            <div className="h-[51px] w-full flex flex-col sm:flex-row  justify-between items-center">
              <Link to="/" className=" mb-2 sm:mb-0">
                <img
                  src={logoImg01}
                  alt="jobold"
                  className="inline-block min-w-[77px] w-[192px] "
                />
              </Link>
              <div className="flex flex-row justify-end">
                <Link
                  to="/"
                  className="font-poppins  hover:bg-[#e7e7e7] rounded-3xl text-xs sm:text-md tablet:text-base  font-normal text-black w-[67px] tablet:w-[97px]  flex items-center justify-center"
                >
                  <span className="text-center">Home</span>
                </Link>
                <Link
                  to="#"
                  className="font-poppins  hover:bg-[#e7e7e7] rounded-3xl text-xs sm:text-md tablet:text-base font-normal text-black w-[67px] tablet:w-[97px]  flex items-center justify-center"
                >
                  <span className="text-center">Blogs</span>
                </Link>
                <a
                  href="/#invest"
                  className="text-center text-white hover:bg-[#8941fc] text-xs sm:text-md tablet:text-base font-bold w-[100px] sm:w-[120px] tablet:w-[180px] h-[30px] sm:h-[40px] tablet:h-[50px] bg-[#6610F2] rounded-3xl  flex items-center justify-center ml-[21px]"
                >
                  <span className="text-center">Invest</span>
                </a>
              </div>
            </div>
            <div className="w-full flex flex-col space-y-[24px]">
              <div className="max-h-[646px] w-full pb-[49px] tablet:pb-[69px] flex flex-col laptop:flex-row justify-between space-y-[25px] laptop:space-y-0 space-x-0 laptop:space-x-[48px]">
                <div className="h-full w-full justify-center items-center flex laptop:hidden">
                  <img
                    src={pith_landing_imgection_1}
                    alt="jobold"
                    className="inline-block w-[210px] max-h-[233px]"
                  />
                </div>
                <div className="h-full laptop:w-[667px] pt-0 sm:pt-6 tablet:pt-14 laptop:pt-[108px] flex flex-col">
                  <div className="flex flex-col space-y-[25px]">
                    <span className="text-black text-[31px] laptop:text-[80px] font-bold  leading-[35px] laptop:leading-[90px] font-darkergrotesque">
                      We match businesses with the right talent
                    </span>
                    <span className="text-black text-base laptop:text-xl font-normal font-poppins">
                      Welcome to the Future of Recruitment. Discover Efficiency,
                      Innovation, and Opportunity.
                    </span>
                  </div>
                </div>
                <div className="h-full items-center laptop:flex hidden">
                  <img
                    src={pith_landing_imgection_1}
                    alt="jobold"
                    className="inline-block w-[525px] max-h-[584px]"
                  />
                </div>
              </div>
            </div>
            <a
              href="/#invest"
              className="absolute -bottom-[27px] tablet:-bottom-[30px] laptop:-bottom-[40px] left-0 right-0 mx-auto w-[224px] tablet:w-[294px] laptop:w-[364px] h-[54px] tablet:h-[60px] laptop:h-20 hover:bg-[#8941fc] bg-[#6610F2] rounded-[20px] font-poppins text-white text-xl tablet:text-2xl laptop:text-[32px] font-bold flex items-center justify-center"
            >
              <span>Invest</span>
            </a>
          </div>
          <div className=" bg-gray-100 w-full min:h-[823px] pt-10 tablet:pt-20 xl:pt-[124px] pb-[77px] px-[20px] tablet:px-[60px] 2xl:px-[80px] flex flex-col laptop:flex-row space-y-10 space-x-0 tablet:space-x-[20px] 2xl:space-x-[94px]">
            <span className="text-black text-3xl sm:text-5xl font-extrabold leading-[57px] font-darkergrotesque">
              Key Features
            </span>
            <div className="flex flex-col space-y-[60px] w-full font-poppins">
              <div className="flex flex-wrap">
                <div className="flex flex-col w-full mx-[15px] mb-[20px] tablet:w-[300px] space-y-[30px]">
                  <span className="h-[100px] flex justify-center tablet:justify-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="46"
                      height="100"
                      viewBox="0 0 46 100"
                      fill="none"
                    >
                      <path
                        d="M13.3401 49.4897V62.8297C13.4523 65.2739 14.5021 67.5807 16.2715 69.2707C18.0408 70.9607 20.3934 71.9037 22.8401 71.9037C25.2868 71.9037 27.6394 70.9607 29.4087 69.2707C31.178 67.5807 32.2279 65.2739 32.3401 62.8297V49.4897C32.399 48.2055 32.197 46.9226 31.7461 45.7187C31.2953 44.5148 30.605 43.4147 29.7171 42.4851C28.8291 41.5554 27.7619 40.8155 26.5799 40.3099C25.3979 39.8044 24.1257 39.5437 22.8401 39.5437C21.5545 39.5437 20.2823 39.8044 19.1003 40.3099C17.9183 40.8155 16.851 41.5554 15.9631 42.4851C15.0751 43.4147 14.3849 44.5148 13.934 45.7187C13.4832 46.9226 13.2811 48.2055 13.3401 49.4897ZM19.0101 49.4897C19.0074 48.9855 19.1046 48.4858 19.296 48.0194C19.4875 47.553 19.7693 47.129 20.1254 46.7721C20.4814 46.4151 20.9046 46.1321 21.3705 45.9395C21.8364 45.7469 22.3359 45.6484 22.8401 45.6497C23.8585 45.6497 24.8352 46.0543 25.5554 46.7744C26.2755 47.4946 26.6801 48.4713 26.6801 49.4897V62.8297C26.6801 63.8468 26.276 64.8223 25.5568 65.5415C24.8376 66.2607 23.8622 66.6647 22.8451 66.6647C21.828 66.6647 20.8525 66.2607 20.1333 65.5415C19.4141 64.8223 19.0101 63.8468 19.0101 62.8297V49.4897Z"
                        fill="#6610F2"
                      />
                      <path
                        d="M5.86001 11.4597C6.22985 11.5013 6.60429 11.4688 6.96143 11.3641C7.31857 11.2594 7.65125 11.0845 7.94001 10.8497C12.1804 7.49151 17.4309 5.66428 22.84 5.66428C28.2491 5.66428 33.4996 7.49151 37.74 10.8497C38.2454 11.246 38.8678 11.464 39.51 11.4697C40.0912 11.4611 40.6561 11.2763 41.13 10.9397C41.6075 10.6043 41.9682 10.1281 42.1618 9.57768C42.3555 9.02726 42.3723 8.43011 42.21 7.86966C42.0563 7.30787 41.7312 6.80799 41.28 6.43966C36.0344 2.2699 29.531 0 22.83 0C16.129 0 9.62562 2.2699 4.38001 6.43966C4.0886 6.67369 3.84626 6.96294 3.66687 7.29083C3.48748 7.61871 3.37458 7.97878 3.33463 8.35039C3.29468 8.722 3.32848 9.09784 3.43408 9.45636C3.53967 9.81488 3.715 10.149 3.95001 10.4397C4.18395 10.7288 4.47354 10.9681 4.80162 11.1433C5.1297 11.3185 5.4896 11.4261 5.86001 11.4597Z"
                        fill="#6610F2"
                      />
                      <path
                        d="M44.86 60.8198C44.3281 60.2921 43.6092 59.9961 42.86 59.9961C42.1108 59.9961 41.3919 60.2921 40.86 60.8198C40.5963 61.0817 40.3871 61.3933 40.2446 61.7366C40.1021 62.0799 40.0292 62.4481 40.03 62.8198C40.0387 66.2216 39.0372 69.5494 37.1526 72.3815C35.2679 75.2136 32.5849 77.4224 29.4435 78.728C26.3022 80.0336 22.844 80.3772 19.5071 79.7153C16.1703 79.0533 13.1051 77.4156 10.7 75.0098C9.10339 73.4187 7.83911 71.5261 6.98073 69.4419C6.12234 67.3578 5.68699 65.1237 5.7 62.8698C5.70404 62.4922 5.63249 62.1177 5.48956 61.7682C5.34664 61.4187 5.13523 61.1014 4.86778 60.8349C4.60033 60.5684 4.28226 60.3581 3.93229 60.2164C3.58232 60.0746 3.20753 60.0044 2.83 60.0098C2.08117 60.0098 1.36286 60.3065 0.832415 60.8351C0.301974 61.3637 0.00264605 62.0809 0 62.8298C0.00212178 68.3191 1.98292 73.6238 5.57921 77.7711C9.17549 81.9184 14.1462 84.6304 19.58 85.4098L20.01 85.4698V96.1798C20.007 96.5518 20.0789 96.9206 20.2215 97.2642C20.3641 97.6078 20.5744 97.9192 20.84 98.1798C21.3715 98.7088 22.0901 99.007 22.84 99.0098C23.2125 99.0111 23.5816 98.9388 23.9261 98.7972C24.2706 98.6556 24.5837 98.4473 24.8476 98.1844C25.1114 97.9215 25.3208 97.6091 25.4636 97.2651C25.6065 96.9211 25.68 96.5522 25.68 96.1798V85.4698L26.11 85.4098C31.5412 84.6244 36.5083 81.9108 40.1035 77.7648C43.6986 73.6188 45.6816 68.3174 45.69 62.8298C45.6899 62.0764 45.3915 61.3537 44.86 60.8198Z"
                        fill="#6610F2"
                      />
                      <path
                        d="M22.8399 32.3097C23.5898 32.3069 24.3084 32.0087 24.8399 31.4797C25.2384 31.0767 25.5096 30.5655 25.6199 30.0097C25.7329 29.4593 25.6771 28.8877 25.4599 28.3697C25.2613 27.8557 24.9129 27.4133 24.4599 27.0997C23.9934 26.7845 23.4428 26.6172 22.8799 26.6197C22.32 26.6173 21.7727 26.7847 21.3099 27.0997C20.8416 27.4095 20.4761 27.8515 20.2599 28.3697C20.0345 28.8851 19.9649 29.4552 20.0599 30.0097C20.1908 30.6512 20.5387 31.2281 21.045 31.6433C21.5513 32.0586 22.1851 32.2868 22.8399 32.2897V32.3097Z"
                        fill="#6610F2"
                      />
                      <path
                        d="M35.1099 20.0097C35.1071 19.2598 34.8089 18.5412 34.2799 18.0097C31.2447 14.9814 27.1323 13.2808 22.8449 13.2808C18.5574 13.2808 14.445 14.9814 11.4099 18.0097C11.1443 18.2722 10.9336 18.585 10.7899 18.9297C10.6484 19.2724 10.5737 19.6389 10.5699 20.0097C10.5676 20.381 10.6425 20.7488 10.7899 21.0897C10.9287 21.4345 11.1362 21.7476 11.3999 22.0097C11.6625 22.2752 11.9752 22.4859 12.3199 22.6297C12.6657 22.7724 13.0358 22.8471 13.4099 22.8497C13.7807 22.847 14.1475 22.7723 14.4899 22.6297C14.8347 22.4908 15.1478 22.2833 15.4099 22.0197C16.3837 21.0406 17.5415 20.2637 18.8166 19.7336C20.0917 19.2035 21.459 18.9306 22.8399 18.9306C24.2208 18.9306 25.5881 19.2035 26.8632 19.7336C28.1383 20.2637 29.296 21.0406 30.2699 22.0197C30.8014 22.5487 31.52 22.8469 32.2699 22.8497C32.6422 22.8486 33.0106 22.7738 33.3539 22.6297C33.6971 22.4855 34.0085 22.2748 34.2699 22.0097C34.5363 21.7493 34.7479 21.4381 34.8922 21.0946C35.0365 20.7511 35.1105 20.3822 35.1099 20.0097Z"
                        fill="#6610F2"
                      />
                    </svg>
                  </span>
                  <div className="flex flex-col space-y-[13px]">
                    <span className="text-black text-2xl font-bold flex justify-center sm:justify-start">
                      Voice-Recorded CVs
                    </span>
                    <p className="text-black text-lg font-normal flex justify-center tablet:justify-start">
                      Stand Out with Your Voice. Impress Employers with
                      Personalized Voice-Recorded CVs
                    </p>
                  </div>
                </div>
                <div className="flex flex-col w-full mx-[15px] mb-[20px] tablet:w-[300px] space-y-[30px]">
                  <span className="h-[100px] flex justify-center tablet:justify-start">
                    <svg
                      width="80"
                      height="80"
                      viewBox="0 0 80 80"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M58.228 21.4308L58.3056 21.6864L58.5612 21.764C63.4375 23.2443 67.8471 25.9626 71.3604 29.6539C74.8738 33.3452 77.371 37.8836 78.6087 42.827C79.8464 47.7704 79.7824 52.9502 78.423 57.8615C77.0636 62.7728 74.4551 67.2483 70.8517 70.8517C67.2483 74.4551 62.7728 77.0636 57.8615 78.423C52.9502 79.7824 47.7704 79.8464 42.827 78.6087C37.8836 77.371 33.3452 74.8738 29.6539 71.3604C25.9626 67.8471 23.2443 63.4375 21.764 58.5612L21.6864 58.3056L21.4308 58.228C16.5546 56.7477 12.1449 54.0295 8.6316 50.3382C5.11826 46.6469 2.62107 42.1084 1.38335 37.165C0.145624 32.2216 0.209589 27.0419 1.56901 22.1305C2.92843 17.2192 5.53693 12.7438 9.14035 9.14035C12.7438 5.53693 17.2192 2.92843 22.1305 1.56901C27.0419 0.209589 32.2216 0.145624 37.165 1.38335C42.1084 2.62107 46.6469 5.11826 50.3382 8.6316C54.0295 12.1449 56.7477 16.5546 58.228 21.4308ZM6.99393 29.9969L6.99393 29.9987C6.99897 34.2776 8.19752 38.4702 10.4548 42.1052C12.7121 45.7402 15.9387 48.6735 19.7717 50.5752L20.4939 50.9335V50.1273V49.9981C20.4939 42.1742 23.602 34.6708 29.1343 29.1385C34.6666 23.6061 42.17 20.4981 49.9939 20.4981H50.1231H50.9317L50.5704 19.7747C48.2571 15.1428 44.4487 11.4269 39.7613 9.22815C35.0739 7.02944 29.7817 6.47658 24.7411 7.65902C19.7005 8.84145 15.2062 11.69 11.9856 15.7438C8.76487 19.7976 7.00614 24.8195 6.99393 29.9969ZM27.1259 52.4216L27.1685 52.8236L27.5704 52.8661C30.777 53.2059 34.0191 52.8677 37.0865 51.8733C40.1538 50.879 42.9778 49.2508 45.3752 47.0944C47.7726 44.938 49.6898 42.3016 51.0023 39.3563C52.3148 36.411 52.9934 33.2227 52.9939 29.9982C52.9941 29.1873 52.9514 28.3769 52.8662 27.5705L52.8236 27.1685L52.4216 27.1259C49.0111 26.7645 45.563 27.1703 42.3296 28.3138C39.0962 29.4572 36.1595 31.3093 33.7344 33.7344C31.3093 36.1595 29.4572 39.0962 28.3138 42.3296C27.1703 45.563 26.7645 49.0111 27.1259 52.4216ZM29.8648 59.4981H29.0585L29.4169 60.2203C31.3186 64.0534 34.2518 67.2799 37.8868 69.5372C41.5219 71.7945 45.7145 72.9931 49.9933 72.9981L49.9951 72.9981C55.1726 72.9859 60.1944 71.2272 64.2482 68.0065C68.302 64.7858 71.1506 60.2916 72.333 55.2509C73.5155 50.2103 72.9626 44.9182 70.7639 40.2308C68.5652 35.5434 64.8493 31.7349 60.2173 29.4216L59.4939 29.0603V29.8689V29.9981C59.4939 33.8721 58.7309 37.7082 57.2484 41.2873C55.7659 44.8664 53.5929 48.1184 50.8536 50.8578C48.1143 53.5971 44.8622 55.77 41.2831 57.2525C37.704 58.7351 33.8679 59.4981 29.9939 59.4981H29.8648Z"
                        fill="#418DFD"
                        stroke="#EDF0F3"
                      />
                    </svg>
                  </span>
                  <div className="flex flex-col space-y-[13px]">
                    <span className="text-black text-2xl font-bold flex justify-center sm:justify-start">
                      Advanced AI Matching
                    </span>
                    <p className="text-black text-lg font-normal flex justify-center tablet:justify-start">
                      Effortless Matchmaking. Our AI Technology Connects the
                      Right Talent with the Right Jobs
                    </p>
                  </div>
                </div>
                <div className="flex flex-col w-full mx-[15px] mb-[20px] tablet:w-[300px] space-y-[30px]">
                  <span className="h-[100px] flex justify-center tablet:justify-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="77"
                      height="77"
                      viewBox="0 0 77 77"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_869_85)">
                        <path
                          d="M76.5599 23.88C76.1099 20.5 75.1399 17.65 72.8799 15.39C70.6199 13.13 67.7699 12.16 64.3899 11.71C61.0692 11.3523 57.7292 11.2053 54.3899 11.27C54.1538 8.21107 52.7747 5.35316 50.527 3.26488C48.2794 1.17659 45.3279 0.0109979 42.2599 0L34.7399 0C31.665 0.000947614 28.7037 1.16205 26.4475 3.25133C24.1914 5.3406 22.8067 8.2042 22.5699 11.27C19.2307 11.2053 15.8906 11.3523 12.5699 11.71C9.18993 12.16 6.34993 13.13 4.07993 15.39C1.80993 17.65 0.889934 20.5 0.439934 23.88C0.0377716 28.0438 -0.10917 32.2283 -6.63549e-05 36.41V51.85C-0.109596 56.0317 0.0373467 60.2162 0.439934 64.38C0.889934 67.77 1.85993 70.61 4.11993 72.87C6.37993 75.13 9.22993 76.1 12.6099 76.56C16.777 76.9624 20.9649 77.1093 25.1499 77H51.8499C56.035 77.1093 60.2228 76.9624 64.3899 76.56C67.7699 76.1 70.6099 75.13 72.8799 72.87C75.1499 70.61 76.1099 67.77 76.5599 64.38C76.9625 60.2162 77.1095 56.0317 76.9999 51.85V36.41C77.1091 32.2283 76.9621 28.0438 76.5599 23.88ZM30.4399 7.24C31.6321 6.20208 33.1593 5.63025 34.7399 5.63H42.2599C43.84 5.63301 45.3663 6.20451 46.5598 7.24008C47.7532 8.27564 48.5342 9.70609 48.7599 11.27H28.2399C28.4621 9.70494 29.2437 8.27331 30.4399 7.24ZM5.99993 24.63C6.36993 21.87 6.99993 20.42 8.08993 19.38C9.17993 18.34 10.5899 17.66 13.3499 17.29C17.3386 16.9219 21.3457 16.7916 25.3499 16.9H51.6499C55.6541 16.7923 59.6612 16.9225 63.6499 17.29C66.3999 17.66 67.8599 18.29 68.8999 19.38C69.9399 20.47 70.6199 21.87 70.9899 24.63C71.2794 27.3667 71.4063 30.1182 71.3699 32.87C55.8699 39.39 48.3699 42.39 40.6499 42.75C39.2199 42.81 37.7999 42.81 36.3699 42.75C28.5899 42.39 21.1499 39.39 5.64993 32.87C5.6039 30.1188 5.72077 27.3674 5.99993 24.63ZM71.3499 51.63C71.4576 55.6342 71.3274 59.6413 70.9599 63.63C70.5899 66.39 69.9599 67.85 68.8699 68.89C67.7799 69.93 66.3899 70.6 63.6299 71C59.641 71.3637 55.6339 71.4906 51.6299 71.38H25.3499C21.3459 71.4899 17.3389 71.3631 13.3499 71C10.5999 70.62 9.13993 70 8.09993 68.91C7.05993 67.82 6.38993 66.39 5.99993 63.63C5.63247 59.6413 5.50224 55.6342 5.60993 51.63V39C19.4699 44.81 27.6099 48 36.0799 48.39C37.6799 48.4633 39.2799 48.4633 40.8799 48.39C49.4199 48 57.5099 44.8 71.3699 39L71.3499 51.63Z"
                          fill="#FE764B"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_869_85">
                          <rect width="77" height="77" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  <div className="flex flex-col space-y-[13px]">
                    <span className="text-black text-2xl font-bold flex justify-center sm:justify-start">
                      Complete Job Listings
                    </span>
                    <p className="text-black text-lg font-normal flex justify-center tablet:justify-start">
                      Endless Possibilities. Explore a Vast Database of Job
                      Opportunities Across Industries
                    </p>
                  </div>
                </div>
                <div className="flex flex-col w-full mx-[15px] mb-[20px] tablet:w-[300px] space-y-[30px]">
                  <span className="h-[100px] flex justify-center tablet:justify-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="71"
                      height="77"
                      viewBox="0 0 71 77"
                      fill="none"
                    >
                      <path
                        d="M70.0772 63.455L69.9772 63.135C68.5303 58.5663 66.1858 54.3324 63.0812 50.6817C59.9765 47.031 56.1742 44.0369 51.8972 41.875L51.5872 41.715L51.8272 41.475C55.9991 37.2538 58.3413 31.5599 58.3472 25.625C58.3513 23.5995 58.089 21.5822 57.5672 19.625L57.5072 19.415L57.7172 19.335L60.4172 18.205L60.7672 18.065V25.745C60.7803 26.4348 61.0486 27.0952 61.5201 27.5988C61.9916 28.1023 62.633 28.4134 63.3204 28.4718C64.0078 28.5302 64.6925 28.3319 65.2422 27.9151C65.792 27.4983 66.1678 26.8926 66.2972 26.215C66.3174 26.059 66.3174 25.901 66.2972 25.745V14.745C66.3969 14.4727 66.4477 14.185 66.4472 13.895C66.4451 13.3577 66.2833 12.8332 65.9824 12.388C65.6814 11.9429 65.255 11.5972 64.7572 11.395L39.4572 0.855001C38.1009 0.290576 36.6463 0 35.1772 0C33.7081 0 32.2535 0.290576 30.8972 0.855001L5.69719 11.405C5.15894 11.626 4.70502 12.0126 4.40117 12.5088C4.09733 13.0051 3.95934 13.5851 4.00719 14.165C3.94322 14.764 4.07919 15.3674 4.39392 15.8811C4.70865 16.3948 5.18445 16.7899 5.74719 17.005L12.7472 19.785L12.9472 19.865L12.8972 20.075C12.4291 21.898 12.1939 23.7729 12.1972 25.655C12.202 31.5901 14.5444 37.2844 18.7172 41.505L18.9572 41.745L18.6472 41.905C14.3162 44.0869 10.4707 47.1213 7.34147 50.8262C4.21225 54.5311 1.86384 58.83 0.437191 63.465C-0.0279245 64.9859 -0.123579 66.5958 0.158168 68.161C0.439914 69.7263 1.09093 71.2018 2.05719 72.465C3.01343 73.7335 4.25275 74.7612 5.67639 75.4661C7.10003 76.171 8.66863 76.5336 10.2572 76.525H60.2572C61.8459 76.5343 63.4148 76.1721 64.8385 75.4671C66.2623 74.7622 67.5015 73.7341 68.4572 72.465C69.425 71.2006 70.077 69.7234 70.3587 68.1563C70.6405 66.5891 70.544 64.9773 70.0772 63.455ZM16.3372 15.285H16.2772L13.9672 14.365L13.3972 14.145L13.9672 13.905L33.1472 5.905C33.8057 5.62132 34.5152 5.47501 35.2322 5.47501C35.9492 5.47501 36.6587 5.62132 37.3172 5.905L56.1172 13.725L56.6672 13.955L56.1172 14.185L54.0072 15.005H53.9572C53.6143 15.0173 53.2761 15.0883 52.9572 15.215C52.618 15.3589 52.3092 15.5659 52.0472 15.825L37.2672 22.005C35.9547 22.5318 34.4896 22.5318 33.1772 22.005L18.5972 16.205C18.3177 15.9126 17.9759 15.687 17.5972 15.545C17.2033 15.361 16.7717 15.272 16.3372 15.285ZM32.4672 71.005H10.2672C9.53864 71.0103 8.81908 70.844 8.16677 70.5195C7.51446 70.195 6.94772 69.7215 6.51246 69.1372C6.07719 68.553 5.78562 67.8744 5.66136 67.1565C5.53709 66.4386 5.58363 65.7016 5.79719 65.005C7.1507 60.608 9.48356 56.5752 12.6203 53.2098C15.7571 49.8444 19.6161 47.234 23.9072 45.575H24.0172L24.1172 45.635C26.6409 47.0077 29.3977 47.8995 32.2472 48.265H32.4672V71.005ZM17.7672 25.625C17.7643 24.4797 17.8783 23.3372 18.1072 22.215L18.1672 21.925L18.4472 22.035L31.0672 27.035C32.3792 27.5518 33.777 27.8165 35.1872 27.815C36.6534 27.8309 38.1082 27.5555 39.4672 27.005L52.0072 21.745L52.2872 21.635L52.3472 21.925C52.6102 23.1408 52.7443 24.381 52.7472 25.625C52.7472 30.2663 50.9034 34.7175 47.6216 37.9994C44.3397 41.2813 39.8885 43.125 35.2472 43.125C30.6059 43.125 26.1547 41.2813 22.8728 37.9994C19.5909 34.7175 17.7472 30.2663 17.7472 25.625H17.7672ZM64.0072 69.145C63.572 69.7252 63.0072 70.1956 62.3578 70.5186C61.7084 70.8415 60.9925 71.0081 60.2672 71.005H38.0572V48.245H38.2772C41.127 47.8809 43.884 46.989 46.4072 45.615H46.5072H46.6172C50.9039 47.2699 54.7602 49.8741 57.8967 53.2323C61.0332 56.5905 63.3684 60.6154 64.7272 65.005C64.9463 65.7024 64.9953 66.4422 64.87 67.1625C64.7448 67.8827 64.4489 68.5625 64.0072 69.145Z"
                        fill="#71CE9A"
                      />
                    </svg>
                  </span>
                  <div className="flex flex-col space-y-[13px]">
                    <span className="text-black text-2xl font-bold flex justify-center sm:justify-start">
                      Student Opportunities
                    </span>
                    <p className="text-black text-lg font-normal flex justify-center tablet:justify-start">
                      Bridge the Gap. Unlock Practical Experience and Career
                      Kickstarts for Students
                    </p>
                  </div>
                </div>
                <div className="flex flex-col w-full mx-[15px] mb-[20px] tablet:w-[300px] space-y-[30px]">
                  <span className="h-[100px] flex justify-center tablet:justify-start">
                    <svg
                      width="67"
                      height="82"
                      viewBox="0 0 67 82"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M56.8875 0.15C62.1859 0.15 66.475 4.43909 66.475 9.7375V72.2625C66.475 77.5609 62.1859 81.85 56.8875 81.85H9.7375C4.43909 81.85 0.15 77.5609 0.15 72.2625V9.7375C0.15 4.43909 4.43909 0.15 9.7375 0.15H56.8875ZM56.8875 77.025C59.5328 77.025 61.65 74.9078 61.65 72.2625V9.7375C61.65 7.09216 59.5328 4.975 56.8875 4.975H9.7375C7.09216 4.975 4.975 7.09216 4.975 9.7375V72.2625C4.975 74.9078 7.09216 77.025 9.7375 77.025H56.8875Z"
                        fill="#F05A58"
                        stroke="#EDF0F3"
                        stroke-width="0.3"
                      />
                      <path
                        d="M49.8622 44.9938L49.8517 45.0043L49.8435 45.0167C49.3664 45.7322 48.6524 45.9749 47.9183 45.9749H17.6808C16.9466 45.9749 16.2326 45.7322 15.7556 45.0167L15.7473 45.0043L15.7368 44.9938C15.509 44.766 15.3905 44.4777 15.3299 44.1442C15.2692 43.8104 15.2683 43.4435 15.2683 43.0597C16.0326 37.2285 20.0929 32.4021 25.1791 29.8591L25.3399 29.7787L25.232 29.6349C23.7073 27.602 22.6995 25.3266 22.6995 22.8062C22.6995 17.2515 27.2449 12.7062 32.7995 12.7062C38.3542 12.7062 42.8995 17.2515 42.8995 22.8062C42.8995 25.5856 41.8897 27.858 40.3731 29.6273L40.2427 29.7794L40.4255 29.8617C45.5034 32.1468 49.3158 36.9726 50.3328 43.0746L50.3347 43.0862L50.3385 43.0973C50.5743 43.8047 50.3404 44.5156 49.8622 44.9938ZM44.587 41.1499H44.8178L44.7241 40.939C42.6504 36.2733 37.9849 33.1624 32.7995 33.1624C27.6142 33.1624 22.9486 36.2733 20.8749 40.939L20.7812 41.1499H21.012H44.587ZM32.7995 17.7874C29.8979 17.7874 27.5245 20.1608 27.5245 23.0624C27.5245 25.964 29.8979 28.3374 32.7995 28.3374C35.7011 28.3374 38.0745 25.964 38.0745 23.0624C38.0745 20.1608 35.7011 17.7874 32.7995 17.7874ZM12.812 53.9624H53.812C54.5467 53.9624 55.1472 54.2066 55.5638 54.6232C55.9803 55.0397 56.2245 55.6402 56.2245 56.3749C56.2245 57.1096 55.9803 57.7101 55.5638 58.1266C55.1472 58.5432 54.5467 58.7874 53.812 58.7874H12.812C12.0773 58.7874 11.4768 58.5432 11.0603 58.1266C10.6437 57.7101 10.3995 57.1096 10.3995 56.3749C10.3995 55.6402 10.6437 55.0397 11.0603 54.6232C11.4768 54.2066 12.0773 53.9624 12.812 53.9624ZM12.812 64.2124H53.812C54.5467 64.2124 55.1472 64.4566 55.5638 64.8732C55.9803 65.2897 56.2245 65.8902 56.2245 66.6249C56.2245 67.3596 55.9803 67.9601 55.5638 68.3766C55.1472 68.7932 54.5467 69.0374 53.812 69.0374H12.812C12.0773 69.0374 11.4768 68.7932 11.0603 68.3766C10.6437 67.9601 10.3995 67.3596 10.3995 66.6249C10.3995 65.8902 10.6437 65.2897 11.0603 64.8732C11.4768 64.4566 12.0773 64.2124 12.812 64.2124Z"
                        fill="#F05A58"
                        stroke="#EDF0F3"
                        stroke-width="0.3"
                      />
                    </svg>
                  </span>
                  <div className="flex flex-col space-y-[13px]">
                    <span className="text-black text-2xl font-bold flex justify-center sm:justify-start">
                      Effortless CV Creation
                    </span>
                    <p className="text-black text-lg font-normal flex justify-center tablet:justify-start">
                      Simplify CVs. Create and Edit Your Resume with Ease
                    </p>
                  </div>
                </div>
                <div className="flex flex-col w-full mx-[15px] mb-[20px] tablet:w-[300px] space-y-[30px]">
                  <span className="h-[100px] flex justify-center tablet:justify-start">
                    <svg
                      width="90"
                      height="55"
                      viewBox="0 0 90 55"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M85.5 50.4167C86.3425 50.4194 87.1689 50.1812 87.885 49.7292C88.5335 49.3163 89.068 48.742 89.4381 48.0604C89.8081 47.3787 90.0015 46.6122 90 45.8333L85.5 50.4167ZM83.8337 6.16453L83.8633 6.14965L83.8919 6.13284C84.4231 5.82048 85.0242 5.65679 85.635 5.65679C86.24 5.65679 86.8354 5.81736 87.3628 6.12393C87.8602 6.44405 88.2723 6.88817 88.5592 7.41676C88.8491 7.95071 89.0012 8.55236 89 9.1647V9.16667L89 45.8333L89 45.8353C89.0012 46.4476 88.8491 47.0493 88.5592 47.5832C88.2696 48.1167 87.8526 48.5641 87.3491 48.8849C86.7951 49.234 86.1581 49.4176 85.5097 49.4167C84.9791 49.4069 84.4568 49.2736 83.9829 49.026L83.9738 49.0214L67.9538 40.8631L66.5571 40.1518L66.5006 41.7182C66.3816 45.0236 65.008 48.1494 62.6747 50.4388C60.342 52.7276 57.2322 54.0022 54.0007 54H54H13.5C10.1908 54 7.0133 52.6612 4.66762 50.2721C2.32133 47.8824 1 44.6374 1 41.25V13.75C1 10.3626 2.32133 7.11761 4.66762 4.72787C7.0133 2.33876 10.1908 1 13.5 1L54 1L54.0007 1C57.2322 0.99779 60.342 2.27241 62.6747 4.56122C65.008 6.85059 66.3816 9.97638 66.5006 13.2818L66.5567 14.8384L67.9487 14.1395L83.8337 6.16453ZM80.5462 39.2994L82 40.0398V38.4083V16.5917V14.9602L80.5462 15.7006L67.0462 22.5756L66.5 22.8537V23.4667V31.5333V32.1463L67.0462 32.4244L80.5462 39.2994ZM57.8955 45.1915C58.9249 44.1431 59.5 42.7249 59.5 41.25V13.75C59.5 12.2751 58.9249 10.8569 57.8955 9.80851C56.8656 8.75946 55.4647 8.16667 54 8.16667H13.5C12.0353 8.16667 10.6344 8.75946 9.60445 9.80851C8.57509 10.8569 8 12.2751 8 13.75V41.25C8 42.7249 8.57509 44.1431 9.60445 45.1915C10.6344 46.2405 12.0353 46.8333 13.5 46.8333H54C55.4647 46.8333 56.8656 46.2405 57.8955 45.1915Z"
                        fill="#030303"
                        stroke="#EDF0F3"
                        stroke-width="2"
                      />
                    </svg>
                  </span>
                  <div className="flex flex-col space-y-[13px]">
                    <span className="text-black text-2xl font-bold flex justify-center sm:justify-start">
                      Video Interviews
                    </span>
                    <p className="text-black text-lg font-normal flex justify-center tablet:justify-start">
                      Break Boundaries. Seamlessly Conduct Remote Interviews
                      with Built-in Video Technology
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[940px] laptop:h-[1379px] w-full py-[29px] laptop:py-[70px] px-[40px] tablet:px-[32px] laptop:px-[100px] flex flex-col space-y-[40px] laptop:space-y-[100px]">
            <div className="h-[92px] laptop:h-[145px] pb-[24px] laptop:pb-[88px] border-0 border-black border-b-2 flex flex-col tablet:flex-row justify-center laptop:justify-start space-y-[14px] tablet:space-y-0 space-x-0 tablet:space-x-[20px] laptop:space-x-[200px]">
              <span className="h-full font-darkergrotesque text-black text-xl tablet:text-[32px] laptop:text-5xl font-extrabold leading-tight laptop:leading-[57px] flex items-center">
                Invested in our Solution
              </span>
              <div className="h-full flex flex-row space-x-[37px] laptop:space-x-[71px] items-center">
                <img
                  src={orange_logo}
                  alt="orange"
                  className="inline-block w-[74px] h-[25px] laptop:w-[141px] laptop:h-[47px]"
                />

                <img
                  src={hedera_logo}
                  alt="hedera"
                  className="inline-block w-24 h-[25px] laptop:w-[182px] laptop:h-[47px]"
                />
              </div>
            </div>
            <div className="flex flex-col laptop:flex-row space-y-[49px] laptop:space-y-0 laptop:space-x-[74px] tablet:px-[33px] laptop:pb-16">
              <span className="font-darkergrotesque text-black text-xl tablet:text-[32px] laptop:text-5xl font-extrabold leading-tight tablet:leading-[35px] laptop:leading-[57px] ">
                Problems we are solving
              </span>
              <div className=" laptop:pt-[22px] flex flex-col space-y-[37px] laptop:space-y-8">
                <div className="flex flex-col tablet:flex-row space-y-[17px] tablet:space-y-0 tablet:space-x-[20px] laptop:space-x-10 items-center">
                  <div className="flex flex-row  tablet:flex-col space-x-[11px] tablet:space-x-0 tablet:space-y-[12px] laptop:space-y-[13px]  font-poppins items-center justify-start tablet:w-[205.817px] w-full">
                    <img
                      src={Group161}
                      alt="hedera"
                      className="tablet:hidden inline-block w-[37px] h-[37px]"
                    />
                    <span className="text-black text-xs tablet:text-base laptop:text-2xl font-bold">
                      High Employee Turnover
                    </span>
                    <p className="hidden tablet:inline-block text-black tablet:text-xs laptop:text-lg font-normal tablet:w-[205.82px] laptop:w-[232px]">
                      Tackling Turnover. We're Solving the Challenge of Frequent
                      Employee Changes in High-Turnover Industries
                    </p>
                  </div>
                  <span className="flex flex-row items-center tablet:justify-center space-x-[18px] tablet:space-x-0">
                    <p className="tablet:hidden inline-block text-black text-[9px] font-normal">
                      Tackling Turnover. We're Solving the Challenge of Frequent
                      Employee Changes in High-Turnover Industries
                    </p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="104"
                      height="24"
                      viewBox="0 0 104 24"
                      fill="none"
                      className="hidden laptop:inline-block"
                    >
                      <path
                        d="M2 10.5C1.17157 10.5 0.5 11.1716 0.5 12C0.5 12.8284 1.17157 13.5 2 13.5V10.5ZM103.061 13.0607C103.646 12.4749 103.646 11.5251 103.061 10.9393L93.5147 1.3934C92.9289 0.807611 91.9792 0.807611 91.3934 1.3934C90.8076 1.97919 90.8076 2.92893 91.3934 3.51472L99.8787 12L91.3934 20.4853C90.8076 21.0711 90.8076 22.0208 91.3934 22.6066C91.9792 23.1924 92.9289 23.1924 93.5147 22.6066L103.061 13.0607ZM2 13.5H102V10.5H2V13.5Z"
                        fill="black"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="34"
                      height="16"
                      viewBox="0 0 34 16"
                      fill="none"
                      className="hidden tablet:inline-block laptop:hidden"
                    >
                      <path
                        d="M1 7C0.447715 7 4.82823e-08 7.44772 0 8C-4.82823e-08 8.55228 0.447715 9 1 9L1 7ZM33.7071 8.70711C34.0976 8.31659 34.0976 7.68342 33.7071 7.2929L27.3431 0.928934C26.9526 0.53841 26.3195 0.53841 25.9289 0.928934C25.5384 1.31946 25.5384 1.95262 25.9289 2.34315L31.5858 8L25.9289 13.6569C25.5384 14.0474 25.5384 14.6805 25.9289 15.0711C26.3195 15.4616 26.9526 15.4616 27.3431 15.0711L33.7071 8.70711ZM1 9L33 9L33 7L1 7L1 9Z"
                        fill="black"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="12"
                      viewBox="0 0 24 12"
                      fill="none"
                      className="inline-block tablet:hidden"
                    >
                      <path
                        d="M1 5.25C0.585787 5.25 0.25 5.58579 0.25 6C0.25 6.41421 0.585786 6.75 1 6.75L1 5.25ZM23.5303 6.53033C23.8232 6.23744 23.8232 5.76257 23.5303 5.46967L18.7574 0.696701C18.4645 0.403808 17.9896 0.403808 17.6967 0.696701C17.4038 0.989595 17.4038 1.46447 17.6967 1.75736L21.9393 6L17.6967 10.2426C17.4038 10.5355 17.4038 11.0104 17.6967 11.3033C17.9896 11.5962 18.4645 11.5962 18.7574 11.3033L23.5303 6.53033ZM1 6.75L23 6.75L23 5.25L1 5.25L1 6.75Z"
                        fill="black"
                      />
                    </svg>
                    <p className="tablet:hidden inline-block text-black text-[9px] font-semibold font-poppins">
                      Smarter Matchmaking - Our AI connects employers with
                      candidates who are more likely to stay longer
                    </p>
                  </span>
                  <div className="flex-row tablet:space-x-[18px] laptop:space-x-[39px] items-center hidden tablet:flex">
                    <img
                      src={Group161}
                      alt="hedera"
                      className=" tablet:w-[66px] tablet:h-[66px] laptop:w-[125px] laptop:h-[125px]"
                    />
                    <p className="text-black tablet:text-xs tablet:font-semibold laptop:text-xl laptop:font-bold font-poppins">
                      Smarter Matchmaking - Our AI connects employers with
                      candidates who are more likely to stay longer
                    </p>
                  </div>
                </div>
                <div className="flex flex-col tablet:flex-row space-y-[17px] tablet:space-y-0 tablet:space-x-[20px] laptop:space-x-10 items-center">
                  <div className="flex flex-row  tablet:flex-col space-x-[11px] tablet:space-x-0 tablet:space-y-[12px] laptop:space-y-[13px]  font-poppins items-center justify-start tablet:w-[205.817px] w-full">
                    <img
                      src={Group160}
                      alt="hedera"
                      className="tablet:hidden inline-block w-[37px] h-[37px]"
                    />
                    <span className="text-black text-xs tablet:text-base laptop:text-2xl font-bold">
                      Time-Consuming Hiring
                    </span>
                    <p className="hidden tablet:inline-block text-black tablet:text-xs laptop:text-lg font-normal tablet:w-[205.82px] laptop:w-[232px]">
                      Save Time and Resources. Our AI Speeds Up and Enhances the
                      Hiring Process
                    </p>
                  </div>
                  <span className="flex flex-row items-center tablet:justify-center space-x-[18px] tablet:space-x-0">
                    <p className="tablet:hidden inline-block text-black text-[9px] font-normal">
                      Save Time and Resources. Our AI Speeds Up and Enhances the
                      Hiring Process
                    </p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="104"
                      height="24"
                      viewBox="0 0 104 24"
                      fill="none"
                      className="hidden laptop:inline-block"
                    >
                      <path
                        d="M2 10.5C1.17157 10.5 0.5 11.1716 0.5 12C0.5 12.8284 1.17157 13.5 2 13.5V10.5ZM103.061 13.0607C103.646 12.4749 103.646 11.5251 103.061 10.9393L93.5147 1.3934C92.9289 0.807611 91.9792 0.807611 91.3934 1.3934C90.8076 1.97919 90.8076 2.92893 91.3934 3.51472L99.8787 12L91.3934 20.4853C90.8076 21.0711 90.8076 22.0208 91.3934 22.6066C91.9792 23.1924 92.9289 23.1924 93.5147 22.6066L103.061 13.0607ZM2 13.5H102V10.5H2V13.5Z"
                        fill="black"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="34"
                      height="16"
                      viewBox="0 0 34 16"
                      fill="none"
                      className="hidden tablet:inline-block laptop:hidden"
                    >
                      <path
                        d="M1 7C0.447715 7 4.82823e-08 7.44772 0 8C-4.82823e-08 8.55228 0.447715 9 1 9L1 7ZM33.7071 8.70711C34.0976 8.31659 34.0976 7.68342 33.7071 7.2929L27.3431 0.928934C26.9526 0.53841 26.3195 0.53841 25.9289 0.928934C25.5384 1.31946 25.5384 1.95262 25.9289 2.34315L31.5858 8L25.9289 13.6569C25.5384 14.0474 25.5384 14.6805 25.9289 15.0711C26.3195 15.4616 26.9526 15.4616 27.3431 15.0711L33.7071 8.70711ZM1 9L33 9L33 7L1 7L1 9Z"
                        fill="black"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="12"
                      viewBox="0 0 24 12"
                      fill="none"
                      className="inline-block tablet:hidden"
                    >
                      <path
                        d="M1 5.25C0.585787 5.25 0.25 5.58579 0.25 6C0.25 6.41421 0.585786 6.75 1 6.75L1 5.25ZM23.5303 6.53033C23.8232 6.23744 23.8232 5.76257 23.5303 5.46967L18.7574 0.696701C18.4645 0.403808 17.9896 0.403808 17.6967 0.696701C17.4038 0.989595 17.4038 1.46447 17.6967 1.75736L21.9393 6L17.6967 10.2426C17.4038 10.5355 17.4038 11.0104 17.6967 11.3033C17.9896 11.5962 18.4645 11.5962 18.7574 11.3033L23.5303 6.53033ZM1 6.75L23 6.75L23 5.25L1 5.25L1 6.75Z"
                        fill="black"
                      />
                    </svg>
                    <p className="tablet:hidden inline-block text-black text-[9px] font-semibold font-poppins">
                      Effortless Screening - Our technology quickly identifies
                      the best-fit candidates, saving you time and effort
                    </p>
                  </span>
                  <div className="flex-row tablet:space-x-[18px] laptop:space-x-[39px] items-center hidden tablet:flex">
                    <img
                      src={Group160}
                      alt="hedera"
                      className=" tablet:w-[66px] tablet:h-[66px] laptop:w-[125px] laptop:h-[125px]"
                    />
                    <p className="text-black tablet:text-xs tablet:font-semibold laptop:text-xl laptop:font-bold font-poppins">
                      Effortless Screening - Our technology quickly identifies
                      the best-fit candidates, saving you time and effort
                    </p>
                  </div>
                </div>
                <div className="flex flex-col tablet:flex-row space-y-[17px] tablet:space-y-0 tablet:space-x-[20px] laptop:space-x-10 items-center">
                  <div className="flex flex-row  tablet:flex-col space-x-[11px] tablet:space-x-0 tablet:space-y-[12px] laptop:space-y-[13px]  font-poppins items-center justify-start tablet:w-[205.817px] w-full">
                    <img
                      src={Group159}
                      alt="hedera"
                      className="tablet:hidden inline-block w-[37px] h-[37px]"
                    />
                    <span className="text-black text-xs tablet:text-base laptop:text-2xl font-bold">
                      Complex CV creating
                    </span>
                    <p className="hidden tablet:inline-block text-black tablet:text-xs laptop:text-lg font-normal tablet:w-[205.82px] laptop:w-[232px]">
                      CVs Made Easy. We Simplify the Process of Creating and
                      Editing Resumes
                    </p>
                  </div>
                  <span className="flex flex-row items-center tablet:justify-center space-x-[18px] tablet:space-x-0">
                    <p className="tablet:hidden inline-block text-black text-[9px] font-normal">
                      CVs Made Easy. We Simplify the Process of Creating and
                      Editing Resumes
                    </p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="104"
                      height="24"
                      viewBox="0 0 104 24"
                      fill="none"
                      className="hidden laptop:inline-block"
                    >
                      <path
                        d="M2 10.5C1.17157 10.5 0.5 11.1716 0.5 12C0.5 12.8284 1.17157 13.5 2 13.5V10.5ZM103.061 13.0607C103.646 12.4749 103.646 11.5251 103.061 10.9393L93.5147 1.3934C92.9289 0.807611 91.9792 0.807611 91.3934 1.3934C90.8076 1.97919 90.8076 2.92893 91.3934 3.51472L99.8787 12L91.3934 20.4853C90.8076 21.0711 90.8076 22.0208 91.3934 22.6066C91.9792 23.1924 92.9289 23.1924 93.5147 22.6066L103.061 13.0607ZM2 13.5H102V10.5H2V13.5Z"
                        fill="black"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="34"
                      height="16"
                      viewBox="0 0 34 16"
                      fill="none"
                      className="hidden tablet:inline-block laptop:hidden"
                    >
                      <path
                        d="M1 7C0.447715 7 4.82823e-08 7.44772 0 8C-4.82823e-08 8.55228 0.447715 9 1 9L1 7ZM33.7071 8.70711C34.0976 8.31659 34.0976 7.68342 33.7071 7.2929L27.3431 0.928934C26.9526 0.53841 26.3195 0.53841 25.9289 0.928934C25.5384 1.31946 25.5384 1.95262 25.9289 2.34315L31.5858 8L25.9289 13.6569C25.5384 14.0474 25.5384 14.6805 25.9289 15.0711C26.3195 15.4616 26.9526 15.4616 27.3431 15.0711L33.7071 8.70711ZM1 9L33 9L33 7L1 7L1 9Z"
                        fill="black"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="12"
                      viewBox="0 0 24 12"
                      fill="none"
                      className="inline-block tablet:hidden"
                    >
                      <path
                        d="M1 5.25C0.585787 5.25 0.25 5.58579 0.25 6C0.25 6.41421 0.585786 6.75 1 6.75L1 5.25ZM23.5303 6.53033C23.8232 6.23744 23.8232 5.76257 23.5303 5.46967L18.7574 0.696701C18.4645 0.403808 17.9896 0.403808 17.6967 0.696701C17.4038 0.989595 17.4038 1.46447 17.6967 1.75736L21.9393 6L17.6967 10.2426C17.4038 10.5355 17.4038 11.0104 17.6967 11.3033C17.9896 11.5962 18.4645 11.5962 18.7574 11.3033L23.5303 6.53033ZM1 6.75L23 6.75L23 5.25L1 5.25L1 6.75Z"
                        fill="black"
                      />
                    </svg>
                    <p className="tablet:hidden inline-block text-black text-[9px] font-semibold font-poppins">
                      User-Friendly Resumes : We provide intuitive tools to
                      simplify CV creation and updates based on voice recording
                    </p>
                  </span>
                  <div className="flex-row tablet:space-x-[18px] laptop:space-x-[39px] items-center hidden tablet:flex">
                    <img
                      src={Group159}
                      alt="hedera"
                      className=" tablet:w-[66px] tablet:h-[66px] laptop:w-[125px] laptop:h-[125px]"
                    />
                    <p className="text-black tablet:text-xs tablet:font-semibold laptop:text-xl laptop:font-bold font-poppins">
                      User-Friendly Resumes : We provide intuitive tools to
                      simplify CV creation and updates based on voice recording
                    </p>
                  </div>
                </div>
                <div className="flex flex-col tablet:flex-row space-y-[17px] tablet:space-y-0 tablet:space-x-[20px] laptop:space-x-10 items-center">
                  <div className="flex flex-row  tablet:flex-col space-x-[11px] tablet:space-x-0 tablet:space-y-[12px] laptop:space-y-[13px]  font-poppins items-center justify-start tablet:w-[205.817px] w-full">
                    <img
                      src={workDistribution}
                      alt="hedera"
                      className="rounded-full tablet:hidden inline-block w-[37px] h-[37px]"
                    />
                    <span className="text-black text-xs tablet:text-base laptop:text-2xl font-bold">
                      Student-Industry Gap
                    </span>
                    <p className="hidden tablet:inline-block text-black tablet:text-xs laptop:text-lg font-normal tablet:w-[205.82px] laptop:w-[232px]">
                      Connecting Education to Industry. We Bridge the Gap for
                      Students Seeking Real-World Opportunities
                    </p>
                  </div>
                  <span className="flex flex-row items-center tablet:justify-center space-x-[18px] tablet:space-x-0">
                    <p className="tablet:hidden inline-block text-black text-[9px] font-normal">
                      Connecting Education to Industry. We Bridge the Gap for
                      Students Seeking Real-World Opportunities
                    </p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="104"
                      height="24"
                      viewBox="0 0 104 24"
                      fill="none"
                      className="hidden laptop:inline-block"
                    >
                      <path
                        d="M2 10.5C1.17157 10.5 0.5 11.1716 0.5 12C0.5 12.8284 1.17157 13.5 2 13.5V10.5ZM103.061 13.0607C103.646 12.4749 103.646 11.5251 103.061 10.9393L93.5147 1.3934C92.9289 0.807611 91.9792 0.807611 91.3934 1.3934C90.8076 1.97919 90.8076 2.92893 91.3934 3.51472L99.8787 12L91.3934 20.4853C90.8076 21.0711 90.8076 22.0208 91.3934 22.6066C91.9792 23.1924 92.9289 23.1924 93.5147 22.6066L103.061 13.0607ZM2 13.5H102V10.5H2V13.5Z"
                        fill="black"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="34"
                      height="16"
                      viewBox="0 0 34 16"
                      fill="none"
                      className="hidden tablet:inline-block laptop:hidden"
                    >
                      <path
                        d="M1 7C0.447715 7 4.82823e-08 7.44772 0 8C-4.82823e-08 8.55228 0.447715 9 1 9L1 7ZM33.7071 8.70711C34.0976 8.31659 34.0976 7.68342 33.7071 7.2929L27.3431 0.928934C26.9526 0.53841 26.3195 0.53841 25.9289 0.928934C25.5384 1.31946 25.5384 1.95262 25.9289 2.34315L31.5858 8L25.9289 13.6569C25.5384 14.0474 25.5384 14.6805 25.9289 15.0711C26.3195 15.4616 26.9526 15.4616 27.3431 15.0711L33.7071 8.70711ZM1 9L33 9L33 7L1 7L1 9Z"
                        fill="black"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="12"
                      viewBox="0 0 24 12"
                      fill="none"
                      className="inline-block tablet:hidden"
                    >
                      <path
                        d="M1 5.25C0.585787 5.25 0.25 5.58579 0.25 6C0.25 6.41421 0.585786 6.75 1 6.75L1 5.25ZM23.5303 6.53033C23.8232 6.23744 23.8232 5.76257 23.5303 5.46967L18.7574 0.696701C18.4645 0.403808 17.9896 0.403808 17.6967 0.696701C17.4038 0.989595 17.4038 1.46447 17.6967 1.75736L21.9393 6L17.6967 10.2426C17.4038 10.5355 17.4038 11.0104 17.6967 11.3033C17.9896 11.5962 18.4645 11.5962 18.7574 11.3033L23.5303 6.53033ZM1 6.75L23 6.75L23 5.25L1 5.25L1 6.75Z"
                        fill="black"
                      />
                    </svg>
                    <p className="tablet:hidden inline-block text-black text-[9px] font-semibold font-poppins">
                      Seamless Transitions : We bridge the gap between education
                      and industry for smoother student-to-workforce transitions
                    </p>
                  </span>
                  <div className="flex-row tablet:space-x-[18px] laptop:space-x-[39px] items-center hidden tablet:flex">
                    <img
                      src={workDistribution}
                      alt="hedera"
                      className="rounded-full  tablet:w-[66px] tablet:h-[66px] laptop:w-[125px] laptop:h-[125px]"
                    />
                    <p className="text-black tablet:text-xs tablet:font-semibold laptop:text-xl laptop:font-bold font-poppins">
                      Seamless Transitions : We bridge the gap between education
                      and industry for smoother student-to-workforce transitions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[422px] relative laptop:h-[601px] bg-[#6610F2] laptop:mt-[150px] w-full px-[29px] tablet:px-[32px] laptop:px-[102px] pt-[28px] pb-[95px] laptop:py-[72px] flex flex-col laptop:flex-row space-y-[28px] laptop:space-y-0 laptop:space-x-[62px]">
            <div className="font-darkergrotesque text-white text-xl tablet:text-[32px] laptop:text-5xl font-extrabold leading-[35px]  tablet:leading-[35px] laptop:leading-[57px] basis-2/6">
              We are working on our POC now
            </div>
            <div className="basis-4/6 font-poppins text-white text-[10px] tablet:text-sm laptop:text-xl font-semibold laptop:pt-[23px]">
              <ul className="list-disc list-outside list-image-[rl('/src/assets/png/Ellipse12.png')] space-y-[15px] laptop:space-y-9">
                <li className="">
                  {/* <div className="w-4 h-4 bg-white rounded-full"></div> */}
                  Fine-tuning our innovative solutions to ensure they meet the
                  highest standards of efficiency and user-friendliness
                </li>
                <li className="">
                  {/* <div className="w-4 h-4 bg-white rounded-full"></div> */}
                  Our dedicated team is rigorously testing and refining our
                  platform, striving to deliver a seamless experience for both
                  job seekers and employers
                </li>
                <li className="">
                  {/* <div className="w-4 h-4 bg-white rounded-full"></div> */}
                  While we prepare for our official launch, we're excited to
                  invite you to be part of our journey, providing valuable
                  feedback and insights to help us shape the future of job
                  searching and recruitment
                </li>
              </ul>
            </div>
            <div className="hidden laptop:flex basis-2/6  items-center justify-center">
              <a
                href="/#invest"
                className="w-[264px] h-[264px] hover:bg-[#f5f5f5] bg-white rounded-full flex flex-row items-center justify-center space-x-[17px]"
              >
                <i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="30"
                    viewBox="0 0 24 30"
                    fill="none"
                  >
                    <path
                      d="M2 15V28.5H22V15H15"
                      stroke="#0500FF"
                      stroke-width="3"
                    />
                    <path
                      d="M8.5 22.5V10L16.5 2"
                      stroke="#0500FF"
                      stroke-width="3"
                    />
                    <path d="M17 2H10" stroke="#0500FF" stroke-width="3" />
                    <path d="M16 9L16 1" stroke="#0500FF" stroke-width="3" />
                  </svg>
                </i>
                <span className="text-[#0500FF] text-[32px] font-bold font-poppins">
                  Invest
                </span>
              </a>
            </div>
            <div className="laptop:hidden absolute -bottom-[63px] left-0 right-0 mx-auto basis-2/6 flex items-center justify-center">
              <a
                href="/#invest"
                className="w-[124px] h-[126px] tablet:w-[135px] tablet:h-[137px] shadow hover:bg-[#f5f5f5] bg-white rounded-full flex flex-row items-center justify-center space-x-2 laptop:space-x-[17px]"
              >
                <i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="18"
                    viewBox="0 0 14 18"
                    fill="none"
                  >
                    <path
                      d="M1.49707 8.51562V16.1751H12.8445V8.51562H8.87289"
                      stroke="#0500FF"
                      stroke-width="2"
                    />
                    <path
                      d="M5.18555 12.7717V5.67959L9.72451 1.14062"
                      stroke="#0500FF"
                      stroke-width="2"
                    />
                    <path
                      d="M10.0077 1.14062H6.03613"
                      stroke="#0500FF"
                      stroke-width="2"
                    />
                    <path
                      d="M9.43945 5.11221L9.43945 0.573242"
                      stroke="#0500FF"
                      stroke-width="2"
                    />
                  </svg>
                </i>
                <span className="text-[#0500FF] text-xs tablet:text-base font-bold font-poppins">
                  Invest
                </span>
              </a>
            </div>
          </div>
          <div className=" h-[1288px] w-full  pt-[103px] tablet:pt-[80px] pb-[45px] laptop:py-[111px] px-[29px] laptop:px-[100px] flex flex-col tablet:space-y-[70px] space-y-[100px]">
            <div className="flex flex-col laptop:flex-row space-y-[28px] laptop:space-y-0 space-x-0 laptop:space-x-[146px]">
              <div className="font-darkergrotesque text-black text-xl tablet:text-4xl font-extrabold laptop:text-5xl  laptop:font-extrabold ">
                FAQ’s
              </div>
              <div className="flex flex-col space-y-4 laptop:space-y-9">
                <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
                  <AccordionHeader
                    onClick={() => handleOpen(1)}
                    className="font-poppins text-black laptop:text-2xl text-xs tablet:text-base font-bold"
                  >
                    How does Jobold's voice-recorded CV feature work?
                  </AccordionHeader>
                  <AccordionBody className="font-poppins text-black laptop:text-xl text-[10px] tablet:text-xs laptop:font-semibold font-medium">
                    Jobold's voice-recorded CVs allow you to add a personal
                    touch to your resume. You can record a brief audio
                    introduction, highlighting your skills and experiences. This
                    feature helps you stand out and lets employers hear your
                    personality
                  </AccordionBody>
                </Accordion>
                <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
                  <AccordionHeader
                    onClick={() => handleOpen(2)}
                    className="font-poppins text-black laptop:text-2xl text-xs tablet:text-base font-bold"
                  >
                    How accurate is Jobold's AI matching system?
                  </AccordionHeader>
                  <AccordionBody className="font-poppins text-black laptop:text-xl text-[10px] tablet:text-xs laptop:font-semibold font-medium">
                    Our AI technology is highly accurate in matching job seekers
                    with job opportunities. It analyzes both CV content and job
                    requirements to make precise recommendations. We
                    continuously improve our algorithms to ensure the best
                    results.
                  </AccordionBody>
                </Accordion>
                <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
                  <AccordionHeader
                    onClick={() => handleOpen(3)}
                    className="font-poppins text-black laptop:text-2xl text-xs tablet:text-base font-bold"
                  >
                    Can I use Jobold if I'm not a student?
                  </AccordionHeader>
                  <AccordionBody className="font-poppins text-black laptop:text-xl text-[10px] tablet:text-xs laptop:font-semibold font-medium">
                    Absolutely! While Jobold offers valuable opportunities for
                    students, it's a platform designed for all job seekers and
                    employers. Whether you're a recent graduate, a seasoned
                    professional, or a business looking to hire, Jobold has
                    solutions for you.
                  </AccordionBody>
                </Accordion>
                <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
                  <AccordionHeader
                    onClick={() => handleOpen(4)}
                    className="font-poppins text-black laptop:text-2xl text-xs tablet:text-base font-bold"
                  >
                    Is Jobold's platform mobile-friendly?
                  </AccordionHeader>
                  <AccordionBody className="font-poppins text-black laptop:text-xl text-[10px] tablet:text-xs laptop:font-semibold font-medium">
                    Yes, Jobold is optimized for mobile devices. You can access
                    our platform on smartphones and tablets, making it
                    convenient for job seekers and employers on the go.
                  </AccordionBody>
                </Accordion>
              </div>
            </div>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
              <div className="flex flex-col space-y-[40px] laptop:space-y-[71px]">
                <div
                  id="invest"
                  className="font-darkergrotesque text-black text-xl tablet:text-4xl laptop:text-5xl font-extrabold"
                >
                  Contact Us
                </div>

                <div className="flex flex-col space-x-0 space-y-[17px] laptop:space-y-0 laptop:flex-row laptop:space-x-[37px]">
                  <div className="flex flex-col space-y-[32px] basis-1/2">
                    <div className="flex flex-col space-y-[7px]">
                      <span
                        className="font-poppins text-black text-[10px] tabet:text-sm laptop:text-base font-semibold"
                        htmlFor="name"
                      >
                        Name
                      </span>
                      <input
                        className="w-[262px] h-[30px] tablet:w-[537px] tablet:h-10 pl-2 placeholder-poppins placeholder:text-black/[.5] placeholder:text-[14px] placeholder:font-normal laptop:w-[601px] laptop:h-[62px] bg-gray-100 border-b-[.5px] border-black focus:outline-none text-xl"
                        id="name"
                        name="name"
                        type="text"
                        placeholder=""
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="flex flex-col space-y-[7px]">
                      <span
                        className="font-poppins text-black text-[10px] tabet:text-sm laptop:text-base font-semibold"
                        htmlFor="email"
                      >
                        Email
                      </span>
                      <input
                        className="w-[262px] h-[30px] tablet:w-[537px] tablet:h-10 pl-2 placeholder-poppins placeholder:text-black/[.5] placeholder:text-[14px] placeholder:font-normal laptop:w-[601px] laptop:h-[62px] bg-gray-100 border-b-[.5px] border-black focus:outline-none text-xl"
                        id="email"
                        type="email"
                        placeholder=""
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="hidden laptop:flex flex-row space-x-[10px]">
                      <List className="flex-row">
                        <ListItem className="p-0 rounded-none">
                          <label
                            htmlFor="horizontal-list-react"
                            className="flex flex-row justify-start items-center radio-group w-[193px] h-[62px] bg-[#D9D9D9] cursor-pointer pl-4"
                          >
                            <ListItemPrefix className="mr-3">
                              <Radio
                                name="horizontal-list"
                                id="horizontal-list-react"
                                ripple={false}
                                onChange={handleInputChange1}
                                value="Investor"
                                className="hover:before:opacity-0"
                                containerProps={{
                                  className: "p-0",
                                }}
                              />
                            </ListItemPrefix>
                            <Typography
                              color="blue-gray"
                              className="font-poppins text-black text-base font-semibold"
                            >
                              Investor
                            </Typography>
                          </label>
                        </ListItem>
                        <ListItem className="p-0 rounded-none">
                          <label
                            htmlFor="horizontal-list-vue"
                            className="flex flex-row justify-start items-center radio-group w-[193px] h-[62px] bg-[#D9D9D9] cursor-pointer pl-4"
                          >
                            <ListItemPrefix className="mr-3">
                              <Radio
                                name="horizontal-list"
                                id="horizontal-list-vue"
                                ripple={false}
                                onChange={handleInputChange1}
                                value="Candidate"
                                className="hover:before:opacity-0"
                                containerProps={{
                                  className: "p-0",
                                }}
                              />
                            </ListItemPrefix>
                            <Typography
                              color="blue-gray"
                              className="font-poppins text-black text-base font-semibold"
                            >
                              Candidate
                            </Typography>
                          </label>
                        </ListItem>
                        <ListItem className="p-0 rounded-none">
                          <label
                            htmlFor="horizontal-list-svelte"
                            className="flex flex-row justify-start items-center radio-group w-[193px] h-[62px] bg-[#D9D9D9] cursor-pointer pl-4"
                          >
                            <ListItemPrefix className="mr-3">
                              <Radio
                                name="horizontal-list"
                                id="horizontal-list-svelte"
                                ripple={false}
                                onChange={handleInputChange1}
                                value="Company"
                                className="hover:before:opacity-0"
                                containerProps={{
                                  className: "p-0",
                                }}
                              />
                            </ListItemPrefix>
                            <Typography
                              color="blue-gray"
                              className="font-poppins text-black text-base font-semibold"
                            >
                              Company
                            </Typography>
                          </label>
                        </ListItem>
                      </List>
                    </div>
                  </div>
                  <div className="flex flex-col  basis-1/2 space-y-[7px]">
                    <span
                      className="font-poppins text-black text-[10px] tabet:text-sm laptop:text-base font-semibold"
                      htmlFor="message"
                    >
                      Message
                    </span>
                    <div className="flex flex-col space-y-[17px] laptop:space-y-[37px]">
                      <textarea
                        className="text-xl pl-2 pt-2 border-b-[.5px] border-black focus:outline-none max-w-[262px] max-h-[59px] min-w-[262px] min-h-[59px] tablet:min-w-[537px] tablet:min-h-10 tablet:max-w-[537px] tablet:max-h-10 laptop:max-w-[601px] laptop:min-w-[601px] laptop:max-h-[187px] laptop:min-h-[187px] bg-[#EDF0F3]"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        id="message"
                        name="message"
                      />
                      <div className="laptop:hidden w-[262px] justify-center tablet:w-[537px] laptop:w-[601px] flex flex-row space-x-[5px]">
                        <List className="flex-row p-0">
                          <ListItem className="p-0 rounded-none">
                            <label
                              htmlFor="horizontal-list-react"
                              className="flex flex-row justify-start items-center radio-group w-[84px] h-[30px] tablet:w-[173px] tablet:h-[41px] bg-[#D9D9D9] cursor-pointer pl-1 laptop:pl-4 tablet:pl-2"
                            >
                              <ListItemPrefix className="mr-1.5 tablet:mr-2 laptop:mr-3">
                                <Radio
                                  name="horizontal-list"
                                  id="horizontal-list-react"
                                  ripple={false}
                                  onChange={handleInputChange1}
                                  value="Investor"
                                  className="w-1.5 h-1.5 hover:before:opacity-0"
                                  containerProps={{
                                    className: "p-0",
                                  }}
                                />
                              </ListItemPrefix>
                              <Typography
                                color="blue-gray"
                                className="font-poppins text-black tablet:text-sm text-[10px] laptop:text-base font-semibold"
                              >
                                Investor
                              </Typography>
                            </label>
                          </ListItem>
                          <ListItem className="p-0 rounded-none">
                            <label
                              htmlFor="horizontal-list-vue"
                              className="flex flex-row justify-start items-center radio-group w-[84px] h-[30px] tablet:w-[173px] tablet:h-[41px] bg-[#D9D9D9] cursor-pointer pl-1 laptop:pl-4 tablet:pl-2"
                            >
                              <ListItemPrefix className="mr-1.5 tablet:mr-2 laptop:mr-3">
                                <Radio
                                  name="horizontal-list"
                                  id="horizontal-list-vue"
                                  ripple={false}
                                  onChange={handleInputChange1}
                                  value="Candidate"
                                  className="w-1.5 h-1.5 hover:before:opacity-0"
                                  containerProps={{
                                    className: "p-0",
                                  }}
                                />
                              </ListItemPrefix>
                              <Typography
                                color="blue-gray"
                                className="font-poppins text-black tablet:text-sm text-[10px] laptop:text-base font-semibold"
                              >
                                Candidate
                              </Typography>
                            </label>
                          </ListItem>
                          <ListItem className="p-0 rounded-none">
                            <label
                              htmlFor="horizontal-list-svelte"
                              className="flex flex-row justify-start items-center radio-group w-[84px] h-[30px] tablet:w-[173px] tablet:h-[41px] bg-[#D9D9D9] cursor-pointer pl-1 laptop:pl-4 tablet:pl-2"
                            >
                              <ListItemPrefix className="mr-1.5 tablet:mr-2 laptop:mr-3">
                                <Radio
                                  name="horizontal-list"
                                  id="horizontal-list-svelte"
                                  ripple={false}
                                  onChange={handleInputChange1}
                                  value="Company"
                                  className="w-1.5 h-1.5 hover:before:opacity-0"
                                  containerProps={{
                                    className: "p-0",
                                  }}
                                />
                              </ListItemPrefix>
                              <Typography
                                color="blue-gray"
                                className="font-poppins text-black tablet:text-sm text-[10px] laptop:text-base font-semibold"
                              >
                                Company
                              </Typography>
                            </label>
                          </ListItem>
                        </List>
                      </div>
                      <div className="w-[262px] tablet:w-[537px] laptop:min-w-[601px] flex flex-row space-x-[5px] laptop:space-x-2">
                        <label className="w-[112px] tablet:w-[175px] laptop:w-[169px] h-[34px] tablet:h-[55px] laptop:h-[62px] cursor-pointer bg-transparent focus:outline-none hover:bg-gray-300 flex items-center justify-center">
                          {selectedFile != "" ? (
                            <FileSelected fileName={selectedFile} />
                          ) : (
                            <FileNotSelected />
                          )}
                          <input
                            type="file"
                            id="attachment"
                            name="attachment"
                            onChange={handleFileChange}
                            className="hidden"
                          />
                        </label>
                        <button
                          type="submit"
                          className="w-[145px] h-[34px] tablet:w-[362px] tablet:h-[55px] laptop:w-[424px] laptop:h-[62px] bg-[#6610F2] font-poppins text-white text-xs tablet:text-xl laptop:text-2xl font-semibold"
                        >
                          Send
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="bg-cover bg-footer-bg flex flex-col justify-center items-center space-y-2 tablet:space-y-[36px] laptop:space-y-[71px]  min-h-[180px] tablet:min-h-[396px] laptop:min-h-[478px]">
            <div className="font-darkergrotesque text-white text-xl tablet:text-[40px] laptop:text-[80px] font-bold">
              Together we can make it through
            </div>
            <button
              onClick={handleDownload}
              className=" hover:bg-[#f0f0f0] w-[209px] h-[33px] tablet:w-[285px] tablet:h-[45px] laptop:w-[424px] laptop:h-20 bg-white rounded-[10px] laptop:rounded-[20px] font-poppins text-[#6610F2] text-[10px] tablet:text-sm laptop:text-[32px] font-bold"
            >
              {/* className=" hover:bg-[#f0f0f0] border hover:border hover:border-[#6610F2] w-[424px] h-20 bg-white rounded-[20px] font-poppins text-[#6610F2] text-[32px] font-bold" */}
              Get Pitch Deck
            </button>
          </div>
          <div className="min-h-[46px] tablet:min-h-[86px] laptop:min-h-[139px] bg-[#EDF0F3] w-full flex flex-row items-center justify-center space-x-[26px] tablet:space-x-[84px] laptop:space-x-[195px]">
            <img
              src={logoImg01}
              alt="Jobold, All rights reserved 2023"
              className="inline-block w-20 h-[21px] tablet:w-[123px] tablet:h-[33px] laptop:w-48 laptop:h-[51px]"
            />
            <div className="flex flex-row space-x-[10px] tablet:space-x-[46px] laptop:space-x-[54px] font-poppins text-black text-[8px] tablet:text-xs laptop:text-2xl font-semibold">
              <div>contact@jobold.com</div>
              <div>+212 680-583280</div>
            </div>
            <div className="hidden laptop:block text-center text-black text-sm font-normal font-poppins">
              Jobold, All rights reserved 2023
            </div>
          </div>
          {/* <div className="flex flex-col w-full relative">
            <div className=" bg-[#418DFD] w-full z-10 shadow rounded-[20px] h-[126px] py-[37px] flex flex-row space-x-[30px] items-center justify-center">
              <div className="text-white text-[36px] font-normal font-spacegrotesk">
                Get Your free trial Now
              </div>
              <button className="text-black text-[20px] font-normal font-poppins w-[168px] h-12 bg-green-400 rounded-[33px]">
                Try Now
              </button>
            </div>

            <div className="h-[654px] bg-[#6610F2] w-full absolute top-[91px] pl-[76px] pt-[131px] pr-[53px] pb-[46px]">
              <div className="flex flex-row h-full">
                <div className="flex flex-col h-full basis-2/5 justify-between">
                  <div className="flex flex-col space-y-[36px]">
                    <img
                      src={logoImg02}
                      alt="jobold"
                      className="inline-block w-[282px]"
                    />
                    <div className="text-white text-[16px] font-medium font-poppins pr-[50px]">
                      AI-powered matching algorithm: uses natural language
                      processing and machine learning to match candidates to
                      jobs based on their qualifications and job requirements.
                    </div>
                  </div>
                  <div className="flex flex-col text-white text-[20px] font-normal font-poppins">
                    <span>Contact@jobold.co </span>
                    <span>(+212) 621 325 654 </span>
                  </div>
                </div>
                <div className="flex flex-col basis-3/5 h-full justify-between">
                  <div className="flex flex-row space-x-[116px]">
                    <div className="flex flex-col">
                      <span className="border-b h-[44px] w-[147px] border-white text-white text-[20px] font-normal font-poppins mb-[21px]">
                        Company
                      </span>

                      <Link
                        to="/"
                        className="font-poppins text-white text-[16px] font-medium mb-[17px]"
                      >
                        Home
                      </Link>
                      <Link
                        to="#"
                        className="font-poppins text-white text-[16px] font-medium mb-[17px]"
                      >
                        Road map
                      </Link>
                      <Link
                        to="#"
                        className="font-poppins text-white text-[16px] font-medium mb-[17px]"
                      >
                        Partner with Us
                      </Link>
                      <Link
                        to="#"
                        className="font-poppins text-white text-[16px] font-medium mb-[17px]"
                      >
                        Career
                      </Link>
                      <Link
                        to="#"
                        className="font-poppins text-white text-[16px] font-medium mb-[17px]"
                      >
                        Blog
                      </Link>
                    </div>
                    <div className="flex flex-col">
                      <span className="border-b h-[44px] w-[147px] border-white text-white text-[20px] font-normal font-poppins mb-[21px]">
                        Support
                      </span>

                      <Link
                        to="#"
                        className="font-poppins text-white text-[16px] font-medium mb-[17px]"
                      >
                        Policy
                      </Link>
                      <Link
                        to="#"
                        className="font-poppins text-white text-[16px] font-medium mb-[17px]"
                      >
                        Terms
                      </Link>
                      <Link
                        to="#"
                        className="font-poppins text-white text-[16px] font-medium mb-[17px]"
                      >
                        Cookies
                      </Link>
                      <Link
                        to="#"
                        className="font-poppins text-white text-[16px] font-medium mb-[17px]"
                      >
                        Contact
                      </Link>
                    </div>
                    <div className="flex flex-col">
                      <span className="border-b h-[44px] w-[147px] border-white text-white text-[20px] font-normal font-poppins mb-[21px]">
                        Connect
                      </span>

                      <Link
                        to="#"
                        className="font-poppins text-white text-[16px] font-medium mb-[17px]"
                      >
                        LinkedIn
                      </Link>
                      <Link
                        to="#"
                        className="font-poppins text-white text-[16px] font-medium mb-[17px]"
                      >
                        Twitter
                      </Link>
                    </div>
                  </div>
                  <div className="text-white text-[12px] font-normal font-poppins text-right">
                    Alrights reserved by Jobold.co
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      )}
    </>
  );
};

export default PitshLandingPage;
