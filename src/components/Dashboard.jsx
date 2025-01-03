import React, { useState } from "react";
import NavBar from "./dashboard/NavBar";

const recommendedProf = {
  "1": {
    fullName: "Jim Carlsen",
    avatar: "https://via.placeholder.com/150",
    role: "Software Developer",
    experience: 5,
    matching: 75,
    saved: true,
  },
  "2": {
    fullName: "Jada Williams",
    avatar: "https://via.placeholder.com/150",
    role: "Software Developer",
    experience: 14,
    matching: 71,
    saved: false,
  },
  "3": {
    fullName: "Jasmin Robbert",
    avatar: "https://via.placeholder.com/150",
    role: "Software Developer",
    experience: 2,
    matching: 65,
    saved: false,
  },
  "4": {
    fullName: "Jasmin Robbert",
    avatar: "https://via.placeholder.com/150",
    role: "Software Developer",
    experience: 2,
    matching: 65,
    saved: true,
  },
  "5": {
    fullName: "Jasmin Robbert",
    avatar: "https://via.placeholder.com/150",
    role: "Software Developer",
    experience: 2,
    matching: 65,
    saved: false,
  },
  "6": {
    fullName: "Jasmin Robbert",
    avatar: "https://via.placeholder.com/150",
    role: "Software Developer",
    experience: 2,
    matching: 65,
    saved: false,
  },
  "7": {
    fullName: "Jasmin Robbert",
    avatar: "https://via.placeholder.com/150",
    role: "Software Developer",
    experience: 2,
    matching: 65,
    saved: false,
  },
};
const Dashboard = () => {
  const [recProf, setRecProf] = useState(recommendedProf);

  const handleSaveProfileButton = (index) => {
    console.log("clicked");
  };
  const handleRemoveProfileButton = (index) => {
    console.log("clicked");
  };
  // const toggleSaved = (key) => {
  //   console.log("clicked");
  //   // recommendedProf[key].saved = !recommendedProf[key].saved;
  // };
  return (
    <div>
      <NavBar />
      <div className=" px-2 grid grid-cols-12 grid-rows-6 pb-[33px] gap-[36px]">
        <div className="bg-white row-span-4 col-span-8 rounded-[20px] grid gap-y-3 grid-rows-6 py-8 pl-8 pr-6">
          <div className="row-span-1 flex flex-row ">
            <h1 className="text-4xl font-normal font-spacegrotesk basis-10/12">
              Recommended Profiles
            </h1>
            <div className="inline-flex items-center basis-2/12">
              <span className="text-sm font-poppins font-normal basis-9/12">
                See More
              </span>
              <i className="flex justify-center basis-3/12">
                <svg
                  className="inline-block"
                  width="15"
                  height="16"
                  viewBox="0 0 15 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9V7ZM14.5071 8.70711C14.8976 8.31658 14.8976 7.68342 14.5071 7.29289L8.14315 0.928932C7.75262 0.538408 7.11946 0.538408 6.72893 0.928932C6.33841 1.31946 6.33841 1.95262 6.72893 2.34315L12.3858 8L6.72893 13.6569C6.33841 14.0474 6.33841 14.6805 6.72893 15.0711C7.11946 15.4616 7.75262 15.4616 8.14315 15.0711L14.5071 8.70711ZM1 9H13.8V7H1V9Z"
                    fill="black"
                  />
                </svg>
              </i>
            </div>
          </div>
          <div className=" row-span-5 flex flex-col h-[268px] pr-2 space-y-[23px] mt-[25px] scrollbar scrollbar-thumb-rounded scrollbar-thumb-[#6610F2] scrollbar-track-white overflow-y-scroll scrollbar-w-[5px]">
            {Object.keys(recProf).map((key) => (
              <div
                key={key}
                className="h-[74px] w-full flex flex-row items-center justify-between space-x-[20px]"
              >
                {/* <div className="flex flex-row items-end font-normal font-poppins"> */}

                <div className="flex flex-row space-x-[11px] items-center">
                  <img
                    className="w-[74px] h-[74px] rounded-full mr-4"
                    src="https://via.placeholder.com/150"
                    alt="Avatar"
                  />
                  <div>
                    <h2 className="text-xl">{recommendedProf[key].fullName}</h2>
                    <p className="text-xs">{recommendedProf[key].role}</p>
                  </div>
                </div>
                {/* </div> */}
                <div className="">
                  <span className="font-poppins font-normal text-xs">
                    {recommendedProf[key].experience} years of experience
                  </span>
                </div>
                <div className="flex flex-row h-full justify-between items-center space-x-[14px]">
                  <i className="items-center">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.0895 5.10854C13.7283 3.9184 13.0648 2.84215 12.1639 1.98466C11.263 1.12717 10.1553 0.517685 8.94874 0.215596C7.74222 -0.0864917 6.47801 -0.0708799 5.27931 0.26091C4.08062 0.592701 2.98831 1.22935 2.10883 2.10883C1.22935 2.98831 0.592701 4.08062 0.26091 5.27931C-0.0708799 6.47801 -0.0864917 7.74222 0.215596 8.94874C0.517685 10.1553 1.12717 11.263 1.98466 12.1639C2.84215 13.0648 3.9184 13.7283 5.10854 14.0895C5.46983 15.2797 6.13327 16.3559 7.03419 17.2134C7.93512 18.0709 9.04282 18.6804 10.2493 18.9825C11.4559 19.2846 12.7201 19.269 13.9188 18.9372C15.1175 18.6054 16.2098 17.9687 17.0893 17.0893C17.9687 16.2098 18.6054 15.1175 18.9372 13.9188C19.269 12.7201 19.2846 11.4559 18.9825 10.2493C18.6804 9.04282 18.0709 7.93512 17.2134 7.03419C16.3559 6.13327 15.2797 5.46983 14.0895 5.10854ZM1.79854 7.19954C1.80141 5.98397 2.21433 4.80492 2.97049 3.85316C3.72665 2.9014 4.78182 2.23261 5.96527 1.95499C7.14872 1.67738 8.39122 1.80718 9.49174 2.3234C10.5923 2.83961 11.4864 3.71205 12.0295 4.79954H11.9985C10.089 4.79954 8.25764 5.55811 6.90737 6.90837C5.55711 8.25864 4.79854 10.09 4.79854 11.9995V12.0305C3.89861 11.5841 3.14107 10.8954 2.6111 10.0419C2.08112 9.1885 1.79973 8.20415 1.79854 7.19954ZM12.5985 7.19954C12.5984 7.9566 12.4391 8.70517 12.1309 9.39667C11.8228 10.0882 11.3727 10.7071 10.8098 11.2134C10.2469 11.7197 9.58391 12.102 8.86375 12.3354C8.14359 12.5689 7.38239 12.6483 6.62954 12.5685C6.54469 11.7678 6.63998 10.9582 6.90844 10.1991C7.1769 9.43996 7.61173 8.75047 8.1811 8.1811C8.75047 7.61173 9.43996 7.1769 10.1991 6.90844C10.9582 6.63998 11.7678 6.54469 12.5685 6.62954C12.5886 6.81888 12.5986 7.00915 12.5985 7.19954ZM11.9985 17.3995C10.9939 17.3984 10.0096 17.117 9.15615 16.587C8.30271 16.057 7.61403 15.2995 7.16754 14.3995H7.19854C8.14406 14.3995 9.08032 14.2133 9.95386 13.8515C10.8274 13.4896 11.6211 12.9593 12.2897 12.2907C12.9583 11.6221 13.4886 10.8284 13.8505 9.95486C14.2123 9.08132 14.3985 8.14506 14.3985 7.19954V7.16854C15.486 7.71167 16.3585 8.60583 16.8747 9.70635C17.3909 10.8069 17.5207 12.0494 17.2431 13.2328C16.9655 14.4163 16.2967 15.4714 15.3449 16.2276C14.3932 16.9838 13.2141 17.3967 11.9985 17.3995Z"
                        fill="#6610F2"
                      />
                    </svg>
                  </i>
                  <span className="text-[#6610F2] font-poppins font-medium text-base">
                    {recommendedProf[key].matching} % Match
                  </span>
                  {recommendedProf[key].saved && (
                    <button onClick={handleSaveProfileButton(key)}>
                      {/* <button onClick={toggleSaved(key)}> */}
                      <i className="flex items-start">
                        <svg
                          className="inline-block"
                          width="12"
                          height="15"
                          viewBox="0 0 12 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M1.71429 0H10.2857C11.2286 0 12 0.75 12 1.66667V15L6 12.5L0 15L0.00857162 1.66667C0.00857162 0.75 0.771429 0 1.71429 0Z"
                            fill="#6610F2"
                          />
                        </svg>
                      </i>
                    </button>
                  )}
                  {!recommendedProf[key].saved && (
                    <button onClick={handleRemoveProfileButton(key)}>
                      {/* <button onClick={toggleSaved(key)}> */}
                      <i className="flex items-start">
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
                    </button>
                  )}
                  <button>
                    <i className="flex items-start">
                      <svg
                        className="inline-block"
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.82092 7.4992L14.7229 1.60597C14.8993 1.42954 14.9984 1.19026 14.9984 0.940755C14.9984 0.691251 14.8993 0.451966 14.7229 0.275541C14.5465 0.099115 14.3072 0 14.0577 0C13.8083 0 13.569 0.099115 13.3926 0.275541L7.5 6.17814L1.6074 0.275541C1.43099 0.099115 1.19173 2.2152e-07 0.942253 2.23379e-07C0.692776 2.25238e-07 0.453517 0.099115 0.27711 0.275541C0.100703 0.451966 0.001599 0.691251 0.001599 0.940755C0.001599 1.19026 0.100703 1.42954 0.27711 1.60597L6.17908 7.4992L0.27711 13.3924C0.189303 13.4795 0.119609 13.5832 0.0720482 13.6973C0.0244871 13.8115 0 13.934 0 14.0576C0 14.1813 0.0244871 14.3038 0.0720482 14.418C0.119609 14.5321 0.189303 14.6358 0.27711 14.7229C0.3642 14.8107 0.467813 14.8804 0.581973 14.9279C0.696134 14.9755 0.818582 15 0.942253 15C1.06592 15 1.18837 14.9755 1.30253 14.9279C1.41669 14.8804 1.52031 14.8107 1.6074 14.7229L7.5 8.82026L13.3926 14.7229C13.4797 14.8107 13.5833 14.8804 13.6975 14.9279C13.8116 14.9755 13.9341 15 14.0577 15C14.1814 15 14.3039 14.9755 14.418 14.9279C14.5322 14.8804 14.6358 14.8107 14.7229 14.7229C14.8107 14.6358 14.8804 14.5321 14.928 14.418C14.9755 14.3038 15 14.1813 15 14.0576C15 13.934 14.9755 13.8115 14.928 13.6973C14.8804 13.5832 14.8107 13.4795 14.7229 13.3924L8.82092 7.4992Z"
                          fill="black"
                        />
                      </svg>
                    </i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white row-span-4 col-span-4 rounded-[20px]">
          <div className="row-span-1 flex flex-row py-[28px] px-[36px]">
            <h1 className="text-4xl font-normal font-spacegrotesk basis-6/12">
              Jobs
            </h1>
            <div className="inline-flex items-center basis-6/12">
              <span className="text-sm font-poppins font-normal basis-9/12">
                See More
              </span>
              <i className="flex justify-center basis-3/12">
                <svg
                  className="inline-block"
                  width="15"
                  height="16"
                  viewBox="0 0 15 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9V7ZM14.5071 8.70711C14.8976 8.31658 14.8976 7.68342 14.5071 7.29289L8.14315 0.928932C7.75262 0.538408 7.11946 0.538408 6.72893 0.928932C6.33841 1.31946 6.33841 1.95262 6.72893 2.34315L12.3858 8L6.72893 13.6569C6.33841 14.0474 6.33841 14.6805 6.72893 15.0711C7.11946 15.4616 7.75262 15.4616 8.14315 15.0711L14.5071 8.70711ZM1 9H13.8V7H1V9Z"
                    fill="black"
                  />
                </svg>
              </i>
            </div>
          </div>
          <div className="row-span-3 flex flex-col pb-[28px] px-[20px] font-normal">
            <div className="w-full h-[134px] mb-[10px] bg-[#EDF0F3] rounded-[10px] py-[12px] px-[16px] flex flex-col">
              <h1 className="font-poppins text-[14px] font-normal mb-[13px]">
                Data scientist
              </h1>
              <div className="flex flex-row content-center justify-center">
                <div className="w-[95px] h-[72px] bg-[#418DFD] mr-[11px] rounded-[6px] flex flex-col pt-[0px] pl-[10px]">
                  <div className="text-[36px] h-[46px] font-spacegrotesk">
                    34
                  </div>
                  <span className="text-[14px] font-poppins">CV’s</span>
                </div>
                <div className="w-[95px] h-[72px] bg-[#30E981] mr-[11px] rounded-[6px] flex flex-col pt-[0px] pl-[10px]">
                  <div className="text-[36px] h-[46px] font-spacegrotesk">
                    12
                  </div>
                  <span className="text-[14px] font-poppins">New CV’s</span>
                </div>
              </div>
            </div>
            <div className="w-full h-[134px] mb-[10px] bg-[#EDF0F3] rounded-[10px] py-[12px] px-[16px] flex flex-col">
              <h1 className="font-poppins text-[14px] font-normal mb-[13px]">
                Community Manager
              </h1>
              <div className="flex flex-row content-center justify-center">
                <div className="w-[95px] h-[72px] bg-[#418DFD] mr-[11px] rounded-[6px] flex flex-col pt-[0px] pl-[10px]">
                  <div className="text-[36px] h-[46px] font-spacegrotesk">
                    42
                  </div>
                  <span className="text-[14px] font-poppins">CV’s</span>
                </div>
                <div className="w-[95px] h-[72px] bg-[#30E981] mr-[11px] rounded-[6px] flex flex-col pt-[0px] pl-[10px]">
                  <div className="text-[36px] h-[46px] font-spacegrotesk">
                    31
                  </div>
                  <span className="text-[14px] font-poppins">New CV’s</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white row-span-2 col-span-12 rounded-[20px]  py-[29px] px-[36px]">
          <div className="row-span-1 flex flex-row justify-between">
            <h1 className="text-4xl font-normal font-spacegrotesk ">Notes</h1>
            <div className="inline-flex items-center ">
              <i className="flex justify-center basis-12/12">
                <svg
                  className="inline-block"
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.541 11.5401L19.8815 11.5462C20.131 11.5462 20.3703 11.4471 20.5467 11.2707C20.7231 11.0943 20.8222 10.855 20.8223 10.6055C20.8223 10.356 20.7232 10.1167 20.5468 9.94033C20.3704 9.76392 20.1311 9.66482 19.8816 9.66484L11.5411 9.67191L11.5482 1.33144C11.5482 1.08195 11.4491 0.842681 11.2727 0.666274C11.0963 0.489867 10.857 0.39077 10.6076 0.390783C10.3581 0.390796 10.1188 0.489919 9.94236 0.666345C9.76594 0.84277 9.66681 1.08205 9.6668 1.33154L9.67298 9.67201L1.33251 9.66583C1.20883 9.66533 1.08628 9.68932 0.971917 9.73642C0.857555 9.78352 0.753647 9.8528 0.666188 9.94026C0.57873 10.0277 0.509452 10.1316 0.462351 10.246C0.41525 10.3603 0.391258 10.4829 0.391758 10.6066C0.391244 10.7303 0.415223 10.8528 0.462312 10.9672C0.509401 11.0815 0.578668 11.1854 0.666117 11.2729C0.753566 11.3603 0.857466 11.4296 0.971824 11.4767C1.08618 11.5238 1.20874 11.5477 1.33241 11.5472L9.67288 11.5402L9.66581 19.8806C9.6653 20.0043 9.68928 20.1269 9.73637 20.2412C9.78345 20.3556 9.85272 20.4595 9.94017 20.5469C10.0276 20.6344 10.1315 20.7036 10.2459 20.7507C10.3602 20.7978 10.4828 20.8218 10.6065 20.8213C10.7301 20.8218 10.8527 20.7978 10.9671 20.7507C11.0814 20.7036 11.1853 20.6343 11.2728 20.5469C11.3602 20.4594 11.4295 20.3555 11.4766 20.2411C11.5237 20.1268 11.5477 20.0042 11.5472 19.8805L11.541 11.5401Z"
                    fill="black"
                  />
                </svg>
              </i>
            </div>
          </div>
          <div className="row-span-1 flex flex-row space-x-[32px] p-[17px]">
            {/* <div className="basis-2/12 text-[12px] font-normal p-[14px] bg-[#30E981] rounded-[10px]">
                ,
              </div>
              <div className="basis-3/12 text-[12px] font-normal p-[14px]  bg-[#418DFD] rounded-[10px]">
                ,
              </div>
              <div className="basis-4/12 text-[12px] font-normal p-[14px] bg-[#FE764B] rounded-[10px]">
                ,
              </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
