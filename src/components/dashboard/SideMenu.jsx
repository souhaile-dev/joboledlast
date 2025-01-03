import React, { useState } from "react";
// import logoImg from "@root/assets/logo.svg";
import logoImg from "../../assets/logo.svg";
import { Link, useLocation } from "react-router-dom";

const menuContent = {
  recruter: [
    "Team",
    "Saved Profiles",
    "Company",
    "Jobs",
    "Add new Job",
    "Billing",
  ],
  seeker: ["Applications", "Saved Jobs", "Update your CV"],
};
let profileType = 0; // 0 is a recruter
const SideMenu = () => {
  const location = useLocation();
  const [isContentVisible, setIsContentVisible] = useState(true);

  const toggleContent = () => {
    setIsContentVisible(!isContentVisible);
  };
  // console.log(location.pathname);
  const [open, setOpen] = useState(true);
  return (
    <div className="w-[291px] scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-400 scrollbar-track-[#EDF0F3] bg-[#EDF0F3] h-screen overflow-y-scroll fixed   py-[36px] flex flex-col space-y-7 justify-start items-center">
      <div className="basis-1/12 w-[216px] ">
        <Link to="/">
          <img src={logoImg} alt="jobold" className="inline-block w-[192px]" />
        </Link>
      </div>
      <div className="basis-1/12 w-[216px] flex justify-between">
        <span className="font-poppins text-[16px] font-medium">Menu</span>
        <button onClick={toggleContent}>
          <i className="inline-block">
            <svg
              width="7"
              height="10"
              viewBox="0 0 7 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6 1L2 5L6 9" stroke="black" strokeWidth="2" />
            </svg>
          </i>
        </button>
      </div>
      {isContentVisible && (
        <div>
         <div className="basis-5/12 flex flex-col justify-center">
        <Link
          to="/dashboard"
          className={`btn-06 ${
            location.pathname == "/dashboard" ? "menu-el-focus" : ""
          } inline-flex items-center`}
        >
          {/* <Link
          to="/dashboard"
          className="btn-06 menu-el-focus inline-flex items-center"
        > */}
          <i className="flex justify-center pb-1 basis-3/12">
            <svg
              className="inline-block"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.5 1H3.5C2.83696 1 2.20107 1.26339 1.73223 1.73223C1.26339 2.20107 1 2.83696 1 3.5C1 4.16304 1.26339 4.79893 1.73223 5.26777C2.20107 5.73661 2.83696 6 3.5 6H6.5C7.16304 6 7.79893 5.73661 8.26777 5.26777C8.73661 4.79893 9 4.16304 9 3.5C9 2.83696 8.73661 2.20107 8.26777 1.73223C7.79893 1.26339 7.16304 1 6.5 1ZM6.5 5H3.5C3.10218 5 2.72064 4.84196 2.43934 4.56066C2.15804 4.27936 2 3.89782 2 3.5C2 3.10218 2.15804 2.72064 2.43934 2.43934C2.72064 2.15804 3.10218 2 3.5 2H6.5C6.89782 2 7.27936 2.15804 7.56066 2.43934C7.84196 2.72064 8 3.10218 8 3.5C8 3.89782 7.84196 4.27936 7.56066 4.56066C7.27936 4.84196 6.89782 5 6.5 5ZM6.5 8H3.5C2.83696 8 2.20107 8.26339 1.73223 8.73223C1.26339 9.20107 1 9.83696 1 10.5V16.5C1 17.163 1.26339 17.7989 1.73223 18.2678C2.20107 18.7366 2.83696 19 3.5 19H6.5C7.16304 19 7.79893 18.7366 8.26777 18.2678C8.73661 17.7989 9 17.163 9 16.5V10.5C9 9.83696 8.73661 9.20107 8.26777 8.73223C7.79893 8.26339 7.16304 8 6.5 8ZM8 16.5C8 16.8978 7.84196 17.2794 7.56066 17.5607C7.27936 17.842 6.89782 18 6.5 18H3.5C3.10218 18 2.72064 17.842 2.43934 17.5607C2.15804 17.2794 2 16.8978 2 16.5V10.5C2 10.1022 2.15804 9.72064 2.43934 9.43934C2.72064 9.15804 3.10218 9 3.5 9H6.5C6.89782 9 7.27936 9.15804 7.56066 9.43934C7.84196 9.72064 8 10.1022 8 10.5V16.5ZM16.5 14H13.5C12.837 14 12.2011 14.2634 11.7322 14.7322C11.2634 15.2011 11 15.837 11 16.5C11 17.163 11.2634 17.7989 11.7322 18.2678C12.2011 18.7366 12.837 19 13.5 19H16.5C17.163 19 17.7989 18.7366 18.2678 18.2678C18.7366 17.7989 19 17.163 19 16.5C19 15.837 18.7366 15.2011 18.2678 14.7322C17.7989 14.2634 17.163 14 16.5 14ZM16.5 18H13.5C13.1022 18 12.7206 17.842 12.4393 17.5607C12.158 17.2794 12 16.8978 12 16.5C12 16.1022 12.158 15.7206 12.4393 15.4393C12.7206 15.158 13.1022 15 13.5 15H16.5C16.8978 15 17.2794 15.158 17.5607 15.4393C17.842 15.7206 18 16.1022 18 16.5C18 16.8978 17.842 17.2794 17.5607 17.5607C17.2794 17.842 16.8978 18 16.5 18ZM16.5 1H13.5C12.837 1 12.2011 1.26339 11.7322 1.73223C11.2634 2.20107 11 2.83696 11 3.5V9.5C11 10.163 11.2634 10.7989 11.7322 11.2678C12.2011 11.7366 12.837 12 13.5 12H16.5C17.163 12 17.7989 11.7366 18.2678 11.2678C18.7366 10.7989 19 10.163 19 9.5V3.5C19 2.83696 18.7366 2.20107 18.2678 1.73223C17.7989 1.26339 17.163 1 16.5 1ZM18 9.5C18 9.89782 17.842 10.2794 17.5607 10.5607C17.2794 10.842 16.8978 11 16.5 11H13.5C13.1022 11 12.7206 10.842 12.4393 10.5607C12.158 10.2794 12 9.89782 12 9.5V3.5C12 3.10218 12.158 2.72064 12.4393 2.43934C12.7206 2.15804 13.1022 2 13.5 2H16.5C16.8978 2 17.2794 2.15804 17.5607 2.43934C17.842 2.72064 18 3.10218 18 3.5V9.5Z"
                fill="black"
                stroke="black"
                strokeWidth="0.5"
              />
            </svg>
          </i>
          <span className="font-poppins text-left basis-9/12">Dashboard</span>
        </Link>
        {profileType == 0 && (
          <Link
            to="/dashboard/team"
            className={`${
              location.pathname == "/dashboard/team" ? "menu-el-focus" : ""
            } btn-06 inline-flex items-center`}
          >
            <i className="flex justify-center pb-1 basis-3/12">
              <svg
                className="inline-block"
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_281_2794)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.49952 7.49999C5.83677 7.49999 4.48527 6.15449 4.48527 4.49999C4.48527 2.84549 5.83677 1.49999 7.49952 1.49999C9.16227 1.49999 10.5138 2.84549 10.5138 4.49999C10.5138 6.15449 9.16227 7.49999 7.49952 7.49999ZM10.3315 8.00472C10.9512 7.51128 11.4291 6.86246 11.7166 6.12432C12.004 5.38617 12.0908 4.58502 11.968 3.80245C11.6703 1.8352 10.0263 0.260983 8.04102 0.0314826C5.30202 -0.285767 2.97852 1.83674 2.97852 4.49999C2.97852 5.91749 3.63852 7.18047 4.66752 8.00472C2.13852 8.95047 0.292018 11.1712 0.00251812 14.1682C-0.00760391 14.2733 0.00432114 14.3795 0.0375256 14.4797C0.0707301 14.5799 0.124486 14.6721 0.195357 14.7504C0.266227 14.8287 0.352652 14.8913 0.449107 14.9343C0.545562 14.9772 0.649926 14.9996 0.755522 15C0.940618 15.0015 1.11959 14.9338 1.25736 14.8102C1.39513 14.6866 1.48177 14.5159 1.50027 14.3317C1.80252 10.9845 4.37727 8.99999 7.49952 8.99999C10.6218 8.99999 13.1965 10.9845 13.4988 14.3317C13.5173 14.5159 13.6039 14.6866 13.7417 14.8102C13.8794 14.9338 14.0584 15.0015 14.2435 15C14.6905 15 15.0385 14.6115 14.9958 14.1682C14.707 11.1712 12.8605 8.95047 10.3308 8.00472"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_281_2794">
                    <rect width="15" height="15" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </i>
            <span className="font-poppins text-left basis-9/12">Team</span>
          </Link>
        )}
        {profileType == 0 && (
          <Link
            to="/dashboard/saved-profiles"
            className={`${
              location.pathname == "/dashboard/saved-profiles"
                ? "menu-el-focus"
                : ""
            } btn-06 inline-flex items-center`}
          >
            <i className="flex justify-center pb-1 basis-3/12">
              <svg
                className="inline-block"
                width="12"
                height="15"
                viewBox="0 0 12 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.2857 0H1.71429C0.771429 0 0.00857162 0.75 0.00857162 1.66667L0 15L6 12.5L12 15V1.66667C12 0.75 11.2286 0 10.2857 0ZM10.2857 12.5L6 10.6833L1.71429 12.5V2.5C1.71429 2.04167 2.1 1.66667 2.57143 1.66667H9.42857C9.9 1.66667 10.2857 2.04167 10.2857 2.5V12.5Z"
                  fill="black"
                />
              </svg>
            </i>
            <span className="font-poppins text-left basis-9/12">
              Saved Profiles
            </span>
          </Link>
        )}
        {profileType == 1 && (
          <Link to="#" className="btn-06 inline-flex items-center">
            <i className="flex justify-center pb-1 basis-3/12">
              <svg
                className="inline-block"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14.4 2.28571C14.4 1.86514 14.0419 1.52381 13.6 1.52381H2.4C1.9581 1.52381 1.6 1.86514 1.6 2.28571V12.9524C1.6 13.373 1.9581 13.7143 2.4 13.7143H13.6C14.0419 13.7143 14.4 13.373 14.4 12.9524V2.28571ZM16 1.52381V13.7143C16 14.5562 15.2838 15.2381 14.4 15.2381H1.6C0.716189 15.2381 0 14.5562 0 13.7143V1.52381C0 0.681905 0.716189 0 1.6 0H14.4C15.2838 0 16 0.681905 16 1.52381ZM11.2168 5.34476C11.2907 5.41364 11.3497 5.49701 11.3901 5.58968C11.4304 5.68236 11.4512 5.78235 11.4512 5.88343C11.4512 5.9845 11.4304 6.08449 11.3901 6.17717C11.3497 6.26984 11.2907 6.35322 11.2168 6.4221L8.10667 9.38438C7.87613 9.59958 7.57251 9.71927 7.25714 9.71927C6.94177 9.71927 6.63816 9.59958 6.40762 9.38438L4.99352 8.0381C4.91965 7.96916 4.86074 7.88576 4.82046 7.7931C4.78019 7.70043 4.75942 7.60047 4.75942 7.49943C4.75942 7.39839 4.78019 7.29842 4.82046 7.20575C4.86074 7.11308 4.91965 7.0297 4.99352 6.96076C5.30591 6.66362 5.81257 6.66362 6.12495 6.96076L6.68952 7.49866C7.0019 7.79657 7.51009 7.79657 7.824 7.49866L10.0853 5.34476C10.2387 5.2011 10.4409 5.12116 10.6511 5.12116C10.8612 5.12116 11.0634 5.2011 11.2168 5.34476Z"
                  fill="black"
                />
              </svg>
            </i>
            <span className="font-poppins text-left basis-9/12">
              Applications
            </span>
          </Link>
        )}
        {profileType == 1 && (
          <Link to="#" className="btn-06 inline-flex items-center">
            <i className="flex justify-center pb-1 basis-3/12">
              <svg
                className="inline-block"
                width="12"
                height="15"
                viewBox="0 0 12 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.2857 0H1.71429C0.771429 0 0.00857162 0.75 0.00857162 1.66667L0 15L6 12.5L12 15V1.66667C12 0.75 11.2286 0 10.2857 0ZM10.2857 12.5L6 10.6833L1.71429 12.5V2.5C1.71429 2.04167 2.1 1.66667 2.57143 1.66667H9.42857C9.9 1.66667 10.2857 2.04167 10.2857 2.5V12.5Z"
                  fill="black"
                />
              </svg>
            </i>
            <span className="font-poppins text-left basis-9/12">
              Saved Jobs
            </span>
          </Link>
        )}
        {/* to="/dashboard/schedule" */}
        <Link
          to="/dashboard/schedule"
          className={`${
            location.pathname == "/dashboard/schedule" ? "menu-el-focus" : ""
          } btn-06 inline-flex items-center`}
        >
          <i className="flex justify-center pb-1 basis-3/12">
            <svg
              className="inline-block"
              width="14"
              height="16"
              viewBox="0 0 14 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.6667 2.33301H2.33333C1.59695 2.33301 1 2.92996 1 3.66634V12.9997C1 13.7361 1.59695 14.333 2.33333 14.333H11.6667C12.403 14.333 13 13.7361 13 12.9997V3.66634C13 2.92996 12.403 2.33301 11.6667 2.33301Z"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.66699 1V3.66667"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4.33301 1V3.66667"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M1 6.33301H13"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </i>
          <span className="font-poppins text-left basis-9/12">Schedule</span>
        </Link>
        {profileType == 0 && (
          <Link to="#" className="btn-06 inline-flex items-center">
            <i className="flex justify-center pb-1 basis-3/12">
              <svg
                className="inline-block"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.5585 9.99975L10.5532 9.89989C10.2962 9.91346 10.0677 10.0856 9.96184 10.3095C9.85291 10.5399 9.87217 10.8282 10.1121 11.0618C10.1122 11.062 10.1124 11.0622 10.1126 11.0623L10.4953 11.4453C10.3237 11.7191 10.1983 12.0191 10.1243 12.3336H9.58435C9.36417 12.3307 9.19134 12.4123 9.07455 12.5423C8.95935 12.6705 8.904 12.8396 8.904 13.0052C8.904 13.1708 8.95935 13.3399 9.07457 13.468C9.19139 13.598 9.36427 13.6795 9.58447 13.6764H10.1266C10.2014 13.9927 10.3291 14.2887 10.4965 14.5565L10.1103 14.9425C10.1102 14.9427 10.11 14.9428 10.1098 14.943C9.95197 15.0966 9.88745 15.2766 9.89678 15.4511C9.90599 15.6232 9.98646 15.7818 10.1036 15.8989C10.2208 16.016 10.3795 16.0963 10.5516 16.1055C10.7261 16.1147 10.906 16.0503 11.0596 15.8925C11.0598 15.8923 11.06 15.8921 11.0601 15.8919L11.4455 15.5072C11.7188 15.6789 12.0185 15.8045 12.3326 15.879V16.4198C12.3295 16.6399 12.4111 16.8128 12.5411 16.9295C12.6693 17.0447 12.8384 17.1 13.0041 17.1C13.1697 17.1 13.3389 17.0447 13.4671 16.9296C13.5972 16.8128 13.6789 16.64 13.676 16.4198V15.8807C13.9896 15.8065 14.2888 15.6813 14.5618 15.5101L14.9495 15.8976C15.0108 15.9627 15.0846 16.0148 15.1664 16.051C15.2487 16.0874 15.3374 16.107 15.4274 16.1084C15.5174 16.1099 15.6068 16.0933 15.6902 16.0595C15.7737 16.0258 15.8495 15.9756 15.9131 15.912C15.9768 15.8484 16.027 15.7727 16.0608 15.6893C16.0947 15.6059 16.1114 15.5166 16.11 15.4266C16.1086 15.3367 16.0891 15.2479 16.0527 15.1656C16.0165 15.0838 15.9644 15.0101 15.8993 14.9487L15.5134 14.5625C15.6849 14.2898 15.8105 13.9909 15.8852 13.6776H16.4283C16.6064 13.6776 16.7773 13.6069 16.9032 13.4809C17.0292 13.355 17.1 13.1842 17.1 13.0061C17.1 12.828 17.0292 12.6573 16.9032 12.5313C16.7773 12.4054 16.6064 12.3347 16.4283 12.3347H15.8878C15.8137 12.018 15.6875 11.7157 15.5145 11.4402L15.8969 11.058C15.8971 11.0578 15.8973 11.0576 15.8975 11.0574C15.9618 10.9951 16.0129 10.9206 16.0479 10.8382C16.0829 10.7555 16.101 10.6667 16.101 10.5769C16.101 10.4871 16.0829 10.3983 16.0479 10.3156C16.0128 10.2331 15.9615 10.1584 15.8971 10.096C15.7697 9.97195 15.5984 9.90327 15.4206 9.90489L15.4198 9.90491C15.2426 9.90796 15.0738 9.98089 14.9501 10.1078C14.9499 10.108 14.9498 10.1082 14.9496 10.1083L14.5658 10.4919C14.2922 10.3201 13.9922 10.1945 13.6777 10.1201V9.58048L12.4326 9.57973H12.3326V9.58036V10.1202C12.0176 10.1949 11.7171 10.3211 11.4432 10.4935L11.0623 10.1128C11.0621 10.1126 11.062 10.1125 11.0618 10.1123C10.908 9.95492 10.7279 9.89023 10.553 9.8999L10.5585 9.99975ZM10.5585 9.99975C10.7031 9.99175 10.8558 10.0443 10.9907 10.1826L10.1823 10.9906C9.76667 10.5866 10.1257 10.0226 10.5585 9.99975ZM12.9986 8.90028L12.9975 8.90029L13.5777 9.57973C13.5789 9.5035 13.5649 9.42778 13.5363 9.35708C13.5078 9.28637 13.4653 9.2221 13.4115 9.16808C13.3576 9.11406 13.2935 9.07137 13.2229 9.04255C13.1523 9.01373 13.0766 8.99936 13.0003 9.00029V8.90029H12.9997L12.9986 8.90028ZM7.86057 0.9C5.91759 0.9 4.33029 2.4865 4.33029 4.42869C4.33029 6.37089 5.91759 7.95739 7.86057 7.95739C9.80356 7.95739 11.3909 6.37089 11.3909 4.42869C11.3909 2.4865 9.80356 0.9 7.86057 0.9ZM7.86057 2.2429C9.07515 2.2429 10.0474 3.21533 10.0474 4.42869C10.0474 5.64261 9.07517 6.61449 7.86057 6.61449C6.64598 6.61449 5.67372 5.64261 5.67372 4.42869C5.67372 3.21533 6.646 2.2429 7.86057 2.2429ZM6.14543 8.90029C3.2494 8.90029 0.9 11.2485 0.9 14.1433V15.2862C0.9 15.4643 0.970781 15.6351 1.09676 15.761C1.22273 15.8869 1.39358 15.9577 1.57171 15.9577H7.77367C7.95181 15.9577 8.12266 15.8869 8.24863 15.761C8.37461 15.6351 8.44539 15.4643 8.44539 15.2862C8.44539 15.1081 8.37461 14.9373 8.24863 14.8114C8.12266 14.6855 7.95181 14.6148 7.77367 14.6148H2.24343V14.1433C2.24343 11.9728 3.97379 10.2432 6.14543 10.2432H8.44143C8.61957 10.2432 8.79042 10.1725 8.91639 10.0465C9.04237 9.92062 9.11315 9.74983 9.11315 9.57173C9.11315 9.39364 9.04237 9.22285 8.91639 9.09693C8.79042 8.97102 8.61957 8.90029 8.44143 8.90029H6.14543ZM13.006 11.3861C13.9045 11.3861 14.6211 12.102 14.6211 13.0004C14.6211 13.8983 13.9044 14.6148 13.006 14.6148C12.107 14.6148 11.3909 13.8984 11.3909 13.0004C11.3909 12.102 12.107 11.3861 13.006 11.3861Z"
                  fill="black"
                  stroke="black"
                  strokeWidth="0.2"
                />
              </svg>
            </i>
            <span className="font-poppins text-left basis-9/12">Company</span>
          </Link>
        )}
        {profileType == 0 && (
          <Link  to="/dashboard/jobs"
           className="btn-06 inline-flex items-center">
            <i className="flex justify-center pb-1 basis-3/12">
              <svg
                className="inline-block"
                width="16"
                height="15"
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0 2.90891C0 2.71603 0.0766231 2.53104 0.213013 2.39465C0.349403 2.25826 0.534388 2.18164 0.727273 2.18164H15.2727C15.4656 2.18164 15.6506 2.25826 15.787 2.39465C15.9234 2.53104 16 2.71603 16 2.90891V7.99982C16 8.17705 15.9352 8.34817 15.8179 8.48101C15.7006 8.61386 15.5388 8.6993 15.3629 8.72128L9.54473 9.44855L9.36436 8.00564L14.5455 7.35837V3.63619H1.45455V7.35764L6.63564 8.00491L6.45527 9.44855L0.637091 8.72128C0.461228 8.6993 0.299442 8.61386 0.182129 8.48101C0.0648155 8.34817 5.00187e-05 8.17705 0 7.99982V2.90891Z"
                  fill="black"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.81809 6.90909C5.81809 6.71621 5.89472 6.53122 6.03111 6.39483C6.1675 6.25844 6.35248 6.18182 6.54537 6.18182H9.45446C9.64734 6.18182 9.83233 6.25844 9.96872 6.39483C10.1051 6.53122 10.1817 6.71621 10.1817 6.90909V10.5455C10.1817 10.7383 10.1051 10.9233 9.96872 11.0597C9.83233 11.1961 9.64734 11.2727 9.45446 11.2727H6.54537C6.35248 11.2727 6.1675 11.1961 6.03111 11.0597C5.89472 10.9233 5.81809 10.7383 5.81809 10.5455V6.90909ZM7.27264 7.63636V9.81818H8.72718V7.63636H7.27264ZM5.09082 1.81818C5.09082 1.33597 5.28238 0.873508 5.62335 0.532533C5.96433 0.191558 6.42679 0 6.909 0H9.09082C9.57303 0 10.0355 0.191558 10.3765 0.532533C10.7174 0.873508 10.909 1.33597 10.909 1.81818V2.90909H9.45446V1.81818C9.45446 1.72174 9.41615 1.62925 9.34795 1.56105C9.27976 1.49286 9.18726 1.45455 9.09082 1.45455H6.909C6.81256 1.45455 6.72007 1.49286 6.65187 1.56105C6.58368 1.62925 6.54537 1.72174 6.54537 1.81818V2.90909H5.09082V1.81818Z"
                  fill="black"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.727539 13.8183V8.36377H2.18208V13.091H13.8184V8.36377H15.273V13.8183C15.273 14.0112 15.1964 14.1962 15.06 14.3326C14.9236 14.469 14.7386 14.5456 14.5457 14.5456H1.45481C1.26193 14.5456 1.07694 14.469 0.940552 14.3326C0.804162 14.1962 0.727539 14.0112 0.727539 13.8183Z"
                  fill="black"
                />
              </svg>
            </i>
            <span className="font-poppins text-left basis-9/12">Jobs</span>
          </Link>
        )}
      </div>
      <div className="basis-1/12">
        {profileType == 0 && (
          <Link  to="/dashboard/job" className="btn-06 color-it inline-flex items-center">
            <i className="flex justify-center pb-1 basis-3/12">
              <svg
                className="inline-block"
                width="18"
                height="20"
                viewBox="0 0 18 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 6.94C17.9896 6.84813 17.9695 6.75763 17.94 6.67V6.58C17.8919 6.47718 17.8278 6.38267 17.75 6.3L11.75 0.3C11.6673 0.222216 11.5728 0.158081 11.47 0.11C11.4402 0.10576 11.4099 0.10576 11.38 0.11C11.2784 0.0517412 11.1662 0.0143442 11.05 0H7C6.20435 0 5.44129 0.316071 4.87868 0.87868C4.31607 1.44129 4 2.20435 4 3V4H3C2.20435 4 1.44129 4.31607 0.87868 4.87868C0.316071 5.44129 0 6.20435 0 7V17C0 17.7956 0.316071 18.5587 0.87868 19.1213C1.44129 19.6839 2.20435 20 3 20H11C11.7956 20 12.5587 19.6839 13.1213 19.1213C13.6839 18.5587 14 17.7956 14 17V16H15C15.7956 16 16.5587 15.6839 17.1213 15.1213C17.6839 14.5587 18 13.7956 18 13V7C18 7 18 7 18 6.94ZM12 3.41L14.59 6H13C12.7348 6 12.4804 5.89464 12.2929 5.70711C12.1054 5.51957 12 5.26522 12 5V3.41ZM12 17C12 17.2652 11.8946 17.5196 11.7071 17.7071C11.5196 17.8946 11.2652 18 11 18H3C2.73478 18 2.48043 17.8946 2.29289 17.7071C2.10536 17.5196 2 17.2652 2 17V7C2 6.73478 2.10536 6.48043 2.29289 6.29289C2.48043 6.10536 2.73478 6 3 6H4V13C4 13.7956 4.31607 14.5587 4.87868 15.1213C5.44129 15.6839 6.20435 16 7 16H12V17ZM16 13C16 13.2652 15.8946 13.5196 15.7071 13.7071C15.5196 13.8946 15.2652 14 15 14H7C6.73478 14 6.48043 13.8946 6.29289 13.7071C6.10536 13.5196 6 13.2652 6 13V3C6 2.73478 6.10536 2.48043 6.29289 2.29289C6.48043 2.10536 6.73478 2 7 2H10V5C10 5.79565 10.3161 6.55871 10.8787 7.12132C11.4413 7.68393 12.2044 8 13 8H16V13Z"
                  fill="white"
                />
              </svg>
            </i>
            <span className="font-poppins text-white text-left basis-9/12">
              Add new Job
            </span>
          </Link>
        )}
        {profileType == 1 && (
          <Link to="#" className="btn-06 color-it inline-flex items-center">
            <i className="flex justify-center pb-1 basis-3/12">
              <svg
                className="inline-block"
                width="17"
                height="20"
                viewBox="0 0 17 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.28079 9.63403H11.2963C11.4517 9.63403 11.5627 9.52304 11.5627 9.36766C11.5627 8.1246 11.1409 7.70284 9.96448 7.2145C9.7869 7.12571 9.56492 7.1923 9.45393 7.36988L8.8324 8.36877C8.8102 8.41316 8.74361 8.39097 8.74361 8.34657L8.47724 7.48087C8.45504 7.43647 8.47724 7.39208 8.49944 7.36988L8.69922 7.1701C8.74361 7.12571 8.72141 7.05911 8.65482 7.05911H7.9667C7.9001 7.05911 7.87791 7.12571 7.9223 7.1701L8.12208 7.36988C8.14428 7.39208 8.16647 7.43647 8.14428 7.48087L7.85571 8.36877C7.83351 8.41316 7.78912 8.41317 7.76692 8.39097L7.14539 7.39208C7.0344 7.2145 6.81242 7.1479 6.63484 7.23669C5.45837 7.72504 5.03662 8.14679 5.03662 9.38986C5.01442 9.52304 5.14761 9.63403 5.28079 9.63403ZM8.29966 6.70395C9.83129 6.70395 10.6526 3.19674 8.29966 3.15234C5.94672 3.19674 6.76803 6.70395 8.29966 6.70395Z"
                  fill="white"
                />
                <path
                  d="M1.57367 20H11.8067C12.1397 20 12.4505 19.8668 12.6724 19.6226L15.8911 16.2264C16.0909 16.0044 16.2241 15.7159 16.2241 15.4051V1.19867C16.2241 0.532741 15.6913 0 15.0254 0H1.57367C0.907742 0 0.375 0.532741 0.375 1.19867V18.8013C0.375 19.4673 0.907742 20 1.57367 20ZM2.01762 2.08657C2.01762 1.86459 2.1952 1.66482 2.43937 1.66482H14.1597C14.3817 1.66482 14.5814 1.8424 14.5814 2.08657V14.7614C14.5814 14.9834 14.4039 15.1831 14.1597 15.1831H11.7401C11.5182 15.1831 11.3184 15.3607 11.3184 15.6049V17.9578C11.3184 18.1798 11.1408 18.3796 10.8966 18.3796H2.43937C2.2174 18.3796 2.01762 18.202 2.01762 17.9578V2.08657Z"
                  fill="white"
                />
                <path
                  d="M3.85993 12.0312H5.92431C6.03529 12.0312 6.12409 11.9424 6.12409 11.8314V11.3209C6.12409 11.2099 6.03529 11.1211 5.92431 11.1211H3.85993C3.74895 11.1211 3.66016 11.2099 3.66016 11.3209V11.8314C3.66016 11.9424 3.74895 12.0312 3.85993 12.0312ZM3.85993 14.1622H5.92431C6.03529 14.1622 6.12409 14.0734 6.12409 13.9624V13.4518C6.12409 13.3408 6.03529 13.2521 5.92431 13.2521H3.85993C3.74895 13.2521 3.66016 13.3408 3.66016 13.4518V13.9624C3.66016 14.0734 3.74895 14.1622 3.85993 14.1622ZM7.01199 12.0312H11.1407C11.2517 12.0312 11.3405 11.9424 11.3405 11.8314V11.3209C11.3405 11.2099 11.2517 11.1211 11.1407 11.1211H7.01199C6.901 11.1211 6.81221 11.2099 6.81221 11.3209V11.8314C6.81221 11.9424 6.901 12.0312 7.01199 12.0312ZM6.81221 13.4518V13.9624C6.81221 14.0734 6.901 14.1622 7.01199 14.1622H12.4948C12.6058 14.1622 12.6946 14.0734 12.6946 13.9624V13.4518C12.6946 13.3408 12.6058 13.2521 12.4948 13.2521H7.01199C6.901 13.2299 6.81221 13.3408 6.81221 13.4518ZM3.85993 16.2931H5.92431C6.03529 16.2931 6.12409 16.2043 6.12409 16.0933V15.5828C6.12409 15.4718 6.03529 15.383 5.92431 15.383H3.85993C3.74895 15.383 3.66016 15.4718 3.66016 15.5828V16.0933C3.66016 16.2043 3.74895 16.2931 3.85993 16.2931ZM10.4082 15.3608H7.01199C6.901 15.3608 6.81221 15.4496 6.81221 15.5606V16.0711C6.81221 16.1821 6.901 16.2709 7.01199 16.2709H10.4082C10.5192 16.2709 10.608 16.1821 10.608 16.0711V15.5606C10.6302 15.4496 10.5192 15.3608 10.4082 15.3608Z"
                  fill="white"
                />
              </svg>
            </i>
            <span className="font-poppins text-white text-left basis-9/12">
              Update your CV
            </span>
          </Link>
        )}
      </div>
      <div className="basis-3/12 flex flex-col justify-center">
        {profileType == 0 && (
          <Link to="#" className="btn-06 inline-flex items-center">
            <i className="flex justify-center pb-1 basis-3/12">
              <svg
                className="inline-block"
                width="17"
                height="23"
                viewBox="0 0 17 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.7757 3.00635H3.75739C3.55807 3.00635 3.36692 3.08553 3.22598 3.22647C3.08504 3.3674 3.00586 3.55856 3.00586 3.75788C3.00586 3.9572 3.08504 4.14835 3.22598 4.28929C3.36692 4.43023 3.55807 4.50941 3.75739 4.50941H12.7757C12.9751 4.50941 13.1662 4.43023 13.3072 4.28929C13.4481 4.14835 13.5273 3.9572 13.5273 3.75788C13.5273 3.55856 13.4481 3.3674 13.3072 3.22647C13.1662 3.08553 12.9751 3.00635 12.7757 3.00635ZM12.7757 6.01247H3.75739C3.55807 6.01247 3.36692 6.09165 3.22598 6.23259C3.08504 6.37352 3.00586 6.56468 3.00586 6.764C3.00586 6.96332 3.08504 7.15447 3.22598 7.29541C3.36692 7.43635 3.55807 7.51553 3.75739 7.51553H12.7757C12.9751 7.51553 13.1662 7.43635 13.3072 7.29541C13.4481 7.15447 13.5273 6.96332 13.5273 6.764C13.5273 6.56468 13.4481 6.37352 13.3072 6.23259C13.1662 6.09165 12.9751 6.01247 12.7757 6.01247Z"
                  fill="black"
                />
                <path
                  d="M0.75153 22.5459C0.934206 22.5456 1.11053 22.4788 1.24754 22.358L3.69753 21.1556L5.59138 22.4181C5.71409 22.4989 5.8578 22.542 6.00472 22.542C6.15165 22.542 6.29536 22.4989 6.41807 22.4181L8.26683 21.2157L10.1081 22.4181C10.2308 22.4989 10.3745 22.542 10.5214 22.542C10.6683 22.542 10.812 22.4989 10.9348 22.4181L12.8286 21.1556L15.2786 22.358C15.3869 22.4557 15.5212 22.5198 15.6653 22.5425C15.8094 22.5652 15.957 22.5454 16.09 22.4857C16.2231 22.4259 16.3359 22.3288 16.4147 22.206C16.4934 22.0832 16.5348 21.9402 16.5337 21.7944V6.01224C16.5337 5.81292 16.4545 5.62177 16.3135 5.48083C16.1726 5.33989 15.9814 5.26071 15.7821 5.26071C15.5828 5.26071 15.3917 5.33989 15.2507 5.48083C15.1098 5.62177 15.0306 5.81292 15.0306 6.01224V20.5619L13.1067 19.6149C12.9879 19.5568 12.8558 19.531 12.7238 19.5403C12.5919 19.5495 12.4647 19.5934 12.3552 19.6675L10.5214 20.8925L8.68769 19.6901C8.56578 19.6108 8.4235 19.5687 8.2781 19.5687C8.1327 19.5687 7.99043 19.6108 7.86852 19.6901L6.01224 20.8925L4.17099 19.6675C4.06143 19.5934 3.93425 19.5495 3.80229 19.5403C3.67034 19.531 3.53828 19.5568 3.41946 19.6149L1.50306 20.5619V1.50306H15.0306V3.00612C15.0306 3.20544 15.1098 3.39659 15.2507 3.53753C15.3917 3.67847 15.5828 3.75765 15.7821 3.75765C15.9814 3.75765 16.1726 3.67847 16.3135 3.53753C16.4545 3.39659 16.5337 3.20544 16.5337 3.00612V0.75153C16.5337 0.552212 16.4545 0.361057 16.3135 0.220118C16.1726 0.0791788 15.9814 0 15.7821 0H0.75153C0.552212 0 0.361057 0.0791788 0.220118 0.220118C0.079179 0.361057 0 0.552212 0 0.75153V21.7944C0 21.9937 0.079179 22.1848 0.220118 22.3258C0.361057 22.4667 0.552212 22.5459 0.75153 22.5459Z"
                  fill="black"
                />
              </svg>
            </i>
            <span className="font-poppins text-left basis-9/12">Billing</span>
          </Link>
        )}
        {/* to="/dashboard/settings" */}
        <Link
          to="/dashboard/settings"
          className={`${
            location.pathname == "/dashboard/settings" ? "menu-el-focus" : ""
          } btn-06 inline-flex items-center`}
        >
          <i className="flex justify-center pb-1 basis-3/12">
            <svg
              className="inline-block"
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.5281 6.34554L17.9057 5.26545C17.3791 4.35153 16.2121 4.03624 15.297 4.56064C14.8613 4.81727 14.3415 4.89008 13.8521 4.76301C13.3628 4.63594 12.944 4.31944 12.6883 3.8833C12.5237 3.60607 12.4353 3.29032 12.432 2.96796C12.4468 2.45115 12.2518 1.95033 11.8915 1.57959C11.5311 1.20886 11.036 0.999787 10.5189 1H9.26493C8.7584 1 8.27275 1.20184 7.91544 1.56087C7.55812 1.9199 7.35861 2.40652 7.36105 2.91304C7.34603 3.95885 6.49392 4.79874 5.448 4.79863C5.12565 4.79528 4.80989 4.70687 4.53267 4.54233C3.6175 4.01794 2.45055 4.33322 1.92397 5.24714L1.25578 6.34554C0.729846 7.25832 1.04084 8.42453 1.95143 8.95423C2.54334 9.29596 2.90797 9.92752 2.90797 10.611C2.90797 11.2945 2.54334 11.926 1.95143 12.2677C1.04199 12.7939 0.730663 13.9573 1.25578 14.8673L1.88736 15.9565C2.13408 16.4017 2.54804 16.7302 3.03763 16.8694C3.52722 17.0085 4.05208 16.9468 4.49606 16.6979C4.93252 16.4433 5.45262 16.3735 5.94078 16.5041C6.42893 16.6348 6.84467 16.955 7.0956 17.3936C7.26013 17.6708 7.34854 17.9866 7.35189 18.3089C7.35189 19.3655 8.20839 20.222 9.26493 20.222H10.5189C11.5719 20.222 12.4269 19.371 12.432 18.3181C12.4295 17.81 12.6303 17.3219 12.9896 16.9626C13.3489 16.6034 13.8369 16.4026 14.345 16.405C14.6666 16.4136 14.9811 16.5017 15.2604 16.6613C16.1731 17.1873 17.3393 16.8763 17.8691 15.9657L18.5281 14.8673C18.7832 14.4294 18.8532 13.9079 18.7226 13.4183C18.5921 12.9287 18.2717 12.5113 17.8324 12.2586C17.3932 12.0059 17.0728 11.5885 16.9422 11.0989C16.8117 10.6092 16.8817 10.0877 17.1368 9.64989C17.3027 9.36026 17.5428 9.12012 17.8324 8.95423C18.7376 8.42482 19.0478 7.26542 18.5281 6.35469V6.34554Z"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.89674 13.2471C11.3526 13.2471 12.5327 12.0669 12.5327 10.6111C12.5327 9.15528 11.3526 7.9751 9.89674 7.9751C8.44092 7.9751 7.26074 9.15528 7.26074 10.6111C7.26074 12.0669 8.44092 13.2471 9.89674 13.2471Z"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </i>
          <span className="font-poppins text-left basis-9/12">Settings</span>
        </Link>
        <Link to="#" className="btn-06 inline-flex items-center">
          <i className="flex justify-center pb-1 basis-3/12">
            <svg
              className="inline-block"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 6C7.26522 6 7.51957 5.89464 7.70711 5.70711C7.89464 5.51957 8 5.26522 8 5C8 4.73478 7.89464 4.48043 7.70711 4.29289C7.51957 4.10536 7.26522 4 7 4H5C4.73478 4 4.48043 4.10536 4.29289 4.29289C4.10536 4.48043 4 4.73478 4 5V19C4 19.2652 4.10536 19.5196 4.29289 19.7071C4.48043 19.8946 4.73478 20 5 20H7C7.26522 20 7.51957 19.8946 7.70711 19.7071C7.89464 19.5196 8 19.2652 8 19C8 18.7348 7.89464 18.4804 7.70711 18.2929C7.51957 18.1054 7.26522 18 7 18H6V6H7ZM20.82 11.42L18 7.42C17.8471 7.20441 17.615 7.05814 17.3545 7.01317C17.0941 6.9682 16.8264 7.02818 16.61 7.18C16.5018 7.25579 16.4098 7.35224 16.3391 7.46381C16.2684 7.57537 16.2206 7.69982 16.1982 7.82998C16.1759 7.96015 16.1796 8.09344 16.2091 8.22217C16.2386 8.3509 16.2933 8.47252 16.37 8.58L18.09 11H10C9.73478 11 9.48043 11.1054 9.29289 11.2929C9.10536 11.4804 9 11.7348 9 12C9 12.2652 9.10536 12.5196 9.29289 12.7071C9.48043 12.8946 9.73478 13 10 13H18L16.2 15.4C16.1212 15.5051 16.0639 15.6246 16.0313 15.7518C15.9987 15.879 15.9915 16.0114 16.01 16.1414C16.0286 16.2714 16.0726 16.3965 16.1395 16.5095C16.2064 16.6225 16.2949 16.7212 16.4 16.8C16.5731 16.9298 16.7836 17 17 17C17.1552 17 17.3084 16.9639 17.4472 16.8944C17.5861 16.825 17.7069 16.7242 17.8 16.6L20.8 12.6C20.9281 12.4309 20.999 12.2254 21.0026 12.0133C21.0062 11.8011 20.9423 11.5934 20.82 11.42Z"
                fill="black"
              />
            </svg>
          </i>
          <span className="font-poppins text-left basis-9/12">Log Out</span>
        </Link>
      </div>
        </div>
      )}
      
    </div>
  );
};

export default SideMenu;