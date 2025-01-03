import React, { useState } from "react";
import NavBar from "./NavBar";
import { AiOutlineGlobal } from "react-icons/ai";
import jb from "src/assets/svg/jb.svg";
const profile = {
  id: 1,
  company_name: "Marketpoke",
  type: "Product Agency",
  avatar: jb,
  location: "Marrakech, Morocco",
  phone_number: "(+212) 6 68 63 67 34",
  email: "Contact@marketpoke.com",
  website: "www.marketpoke.com",
  desc: `Founded amidst the challenging times of 2020, Marketpoke proudly leverages our experience and expertise to handle pressure and achieve exceptional results. Our skilled team collaborates with visionary companies worldwide to enhance operational efficiency and differentiate brands in competitive markets. Using streamlined processes, our specialized researchers, strategists, designers, developers, and project managers craft thoughtful and unified brand experiences that translate research into effective solutions. At Marketpoke, we're passionate about helping our clients succeed through innovative and inspiring branding strategies.`,
  offers: [
    {
      id: 1,
      offer_title: "Community Manager",
      eployment_type: "Full time",
      desc: `<div style={{width: 189}}><span style="color: 'black', fontSize: 9, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word'">Au sein de notre Département Marketing, vous serez chargé de :<br/></span><span style="color: 'black', fontSize: 9, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word'">Administrer des sites web e-commerce<br/>Définir la stratégie sur les réseaux sociaux.<br/>Animer les campagnes média web.</span></div>`,
      compatibility: "78",
      created_at: "07-08-2023",
      saved: true,
    },
    {
      id: 2,
      offer_title: "Devops Engineer",
      eployment_type: "Part time",
      desc: `<div style={{width: 189}}><span style="color: 'black', fontSize: 9, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word'">Responsibilities:<br/></span><span style="color: 'black', fontSize: 9, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word'">Improvement of the structure-from-motion pipeline through iterative testing and development<br/>Statistical analysis of the performance, accuracy, and precision of the structure-from-motion pipeline</span></div>`,
      compatibility: "12",
      created_at: "01-07-2023",
      saved: false,
    },
    {
      id: 3,
      offer_title: "Junior Business Analyst",
      eployment_type: "Full time",
      desc: `<div style={{width: 189}}><span style="color: 'black', fontSize: 9, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word'">Responsibilities:<br/></span><span style="color: 'black', fontSize: 9, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word'">Improvement of the structure-from-motion pipeline through iterative testing and development<br/>Statistical analysis of the performance, accuracy, and precision of the structure-from-motion pipeline</span></div>`,
      compatibility: "30",
      created_at: "01-12-2022",
      saved: false,
    },
  ],
};
const CompanyProfile = () => {
  const getHoursDiff = (date) => {
    const now = new Date();
    const timeDiff = now.getTime() - date.getTime();
    const hoursDiff = Math.floor(timeDiff / (1000 * 3600));
    const options = { day: "2-digit", month: "2-digit", year: "numeric" };
    const formattedDate = date
      .toLocaleDateString("en-US", options)
      .split("/")
      .reverse()
      .join("-");
    return `${hoursDiff}`;
  };
  return (
    <>
      <NavBar />
      <div className="w-full h-[644px] pl-2 pt-5 pr-[34px] pb-[37px]">
        <div className="bg-white rounded-l-[20px] w-full h-full  pl-[35px]  pb-0">
          <div className="w-full h-full flex flex-row space-x-[56px]">
            <div className="flex flex-col  basis-3/5 space-y-[63px]  pt-[32px]">
              <div className="flex flex-row space-x-[24px] h-[64px] items-center">
                <img
                  className="w-[64px] h-[64px] rounded-full"
                  src={profile.avatar}
                  alt="Avatar"
                />
                <div className="flex flex-col ">
                  <div className="text-4xl font-normal font-spacegrotesk">
                    {profile.company_name}{" "}
                  </div>
                  <div className="text-xs font-normal font-poppins">
                    {profile.type}
                  </div>
                </div>

                <span className="w-[73px] mb-3 h-5 px-3.5 py-px bg-green-400 rounded-[18px] text-black text-xs font-normal font-poppins">
                  Startup
                </span>
              </div>
              <div className="font-poppins text-black text-xs font-normal">
                {profile.desc}
              </div>
              <div className="flex flex-col space-y-[20px] text-black text-base font-medium font-poppins">
                <div className="flex flex-row space-x-[20px] justify-start">
                  <i>
                    <svg
                      width="26"
                      height="26"
                      viewBox="0 0 26 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26Z"
                        fill="black"
                      />
                      <path
                        d="M13 5C9.68286 5 7 7.4114 7 10.3929C7 13.6055 10.7886 18.0354 12.3486 19.7226C12.6914 20.0924 13.3171 20.0924 13.66 19.7226C15.2114 18.0354 19 13.6055 19 10.3929C19 7.4114 16.3171 5 13 5ZM13 12.319C11.8171 12.319 10.8571 11.4561 10.8571 10.3929C10.8571 9.32974 11.8171 8.46687 13 8.46687C14.1829 8.46687 15.1429 9.32974 15.1429 10.3929C15.1429 11.4561 14.1829 12.319 13 12.319Z"
                        fill="white"
                      />
                    </svg>
                  </i>
                  <span>{profile.location}</span>
                </div>
                <div className="flex flex-row space-x-[20px] justify-start">
                  <i>
                    <svg
                      width="26"
                      height="26"
                      viewBox="0 0 26 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26Z"
                        fill="black"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M14.7494 15.7843C14.5717 15.8998 14.3492 15.9164 14.157 15.8285C13.7759 15.6121 13.081 15.0957 12.1171 14.1088C11.1532 13.1219 10.604 12.3629 10.3911 11.9777C10.3052 11.7808 10.3215 11.5531 10.4343 11.3711L10.9883 10.3776C11.1869 10.0252 11.2317 9.80222 11.0155 9.4596L9.59213 7.22842C9.18705 6.57267 8.9805 6.60218 8.63145 6.76612C6.81577 7.61203 6.10647 8.80877 8.68269 12.9744C9.37758 14.0974 11.5007 16.4744 13.3116 17.6777C17.1895 20.2565 18.4656 19.481 19.2229 17.6777C19.3831 17.3138 19.4535 17.1023 18.8435 16.6941L16.6403 15.2597C16.3057 15.04 16.1424 14.9826 15.7965 15.1875L14.7494 15.7843Z"
                        fill="white"
                      />
                    </svg>
                  </i>
                  <span>{profile.phone_number}</span>
                </div>
                <div className="flex flex-row space-x-[20px] justify-start">
                  <i>
                    <svg
                      width="26"
                      height="26"
                      viewBox="0 0 26 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26Z"
                        fill="black"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M21.4643 18.6739C21.2733 18.7861 21.0509 18.8504 20.8134 18.8504H5.18739C4.94991 18.8504 4.72746 18.7861 4.5365 18.6739L9.75039 13.46L11.0372 14.7469C11.5346 15.2442 12.1956 15.4921 13.0004 15.4921C13.8052 15.4921 14.4662 15.2442 14.9635 14.7469L16.2504 13.46L21.4643 18.6739ZM21.9239 18.2143L16.71 13.0004L21.9239 7.7865C22.0361 7.97746 22.1004 8.19991 22.1004 8.43739V17.5634C22.1004 17.8009 22.0361 18.0233 21.9239 18.2143ZM4.07688 18.2143C3.96471 18.0233 3.90039 17.8009 3.90039 17.5634V8.43739C3.90039 8.19991 3.96471 7.97746 4.07688 7.7865L9.29077 13.0004L4.07688 18.2143ZM21.4643 7.32688L14.5039 14.2872C14.1346 14.6566 13.64 14.8421 13.0004 14.8421C12.3608 14.8421 11.8662 14.6566 11.4969 14.2872L4.5365 7.32688C4.72746 7.21471 4.94991 7.15039 5.18739 7.15039H20.8134C21.0509 7.15039 21.2733 7.21471 21.4643 7.32688Z"
                        fill="white"
                      />
                    </svg>
                  </i>
                  <span>{profile.email}</span>
                </div>
                <div className="flex flex-row space-x-[20px] justify-start">
                  <i className="w-[26px] h-[26px] bg-black rounded-full flex items-center justify-center">
                    <AiOutlineGlobal className="text-white w-[17.5px] h-[17.5px]" />
                  </i>
                  <span>{profile.website}</span>
                </div>
              </div>
            </div>
            <div className="pt-[32px] h-full flex flex-col  basis-2/5 space-y-[25px] justify-start overflow-y-scroll overflow-x-hidden  scrollbar this-my-scrollbar scrollbar-thumb-[#6610F2] scrollbar-track-[#D9D9D9]  scrollbar-w-[13px] pb-[20px]">
              <div className="flex flex-col ">
                <div className="text-[32px] font-normal font-montserrat">
                  {/* {offer.offer_title}{" "} */}Current Offers
                </div>
                <div className="opacity-60 text-black text-xs font-normal font-poppins">
                  {/* {offer.company_name} */}5 Offers Created
                </div>
              </div>
              <div className="flex flex-col w-full items-center space-y-[20px]">
                {profile.offers.map((item) => (
                  <div
                    key={item.id}
                    className="w-[347px] h-[222px] bg-gray-100 rounded-[20px] pt-[21px] pr-[25px] pl-[28px] pb-[19px] flex flex-row space-x-[6px]"
                  >
                    <div className="flex flex-col justify-between basis-4/6">
                      <div className="flex flex-col space-y-[6px]">
                        <div className="font-medium text-[15px] font-spacegrotesk">
                          {item.offer_title}
                        </div>
                        <div className="text-sm font-bold font-poppins">
                          {item.eployment_type}
                        </div>
                        <div
                          className="font-normal text-[9px] font-poppins "
                          dangerouslySetInnerHTML={{ __html: item.desc }}
                        />
                      </div>
                      <div className="opacity-60 text-black text-xs font-normal">
                        {getHoursDiff(new Date(item.created_at))} hours ago
                      </div>
                    </div>
                    <div className="flex flex-col justify-between basis-2/6">
                      <div className=" flex flex-col">
                        <div className="text-violet-700 text-xs font-semibold font-poppins">
                          Compatibility
                        </div>
                        <div className="text-violet-700 text-5xl font-normal font-spacegrotesk">
                          {item.compatibility}%
                        </div>
                      </div>
                      <div className="flex flex-row space-x-[30px] font-poppins">
                        {item.saved && (
                          <button className="text-violet-700 text-xs font-semibold">
                            Saved
                          </button>
                        )}
                        {!item.saved && (
                          <button className="text-black text-xs font-semibold">
                            Save
                          </button>
                        )}
                        <button className="text-black text-xs font-semibold">
                          View
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyProfile;
