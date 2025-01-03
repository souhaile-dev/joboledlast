import React, { useState } from "react";
import NavBar from "./NavBar";

const offer = {
  id: 1,
  company_name: "Marketpoke",
  created_at: "17 juin 2023",
  offer_title: "Senior Graphic Designer",
  compatibility: 78,
  desc: `<div style={{width: 577, height: 466}}><span style="color: 'black', fontSize: 12, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word'">MarketPoke, a dynamic and innovative company, is seeking a talented Graphic Designer to join our creative team. As a Graphic Designer at MarketPoke, you will be responsible for creating visually appealing and engaging designs across various digital and print mediums. Your creativity and attention to detail will play a vital role in shaping our brand identity and delivering impactful visual assets. Collaborating with cross-functional teams, you will translate concepts and ideas into compelling designs that resonate with our target audience. The ideal candidate should have a strong portfolio showcasing proficiency in graphic design tools and a keen eye for aesthetics. If you are passionate about creating visually stunning designs and contributing to the success of a growing company, we would love to hear from you.<br/>Responsibilities:<br/></span><span style="color: 'black', fontSize: 12, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word'">Develop creative and visually appealing designs for digital and print collateral, including marketing materials, social media graphics, presentations, and more.<br/>Collaborate with marketing and content teams to understand project requirements and ensure the design aligns with the brand's guidelines and objectives.<br/>Create and maintain a consistent visual identity across different platforms and channels.<br/>Incorporate feedback and revisions to refine designs and meet project goals.<br/>Stay updated with industry trends and best practices in graphic design to bring fresh ideas and innovative approaches to projects.<br/>Manage multiple design projects simultaneously and meet deadlines effectively.<br/></span><span style="color: 'black', fontSize: 12, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word'">Requirements:<br/></span><span style="color: 'black', fontSize: 12, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word'">Proven experience as a Graphic Designer or a related role, with a strong portfolio showcasing creative design work.<br/>Proficiency in graphic design tools such as Adobe Creative Suite (Photoshop, Illustrator, InDesign) or other similar software.<br/>Solid understanding of design principles, typography, color theory, and layout techniques.<br/>Ability to translate ideas and concepts into visually appealing designs that communicate </span></div>`,
  eployment_type: ["Full Time", "Senior Level", "contract"],
  education: [
    "High School Diploma or Equivalent",
    "Associate Degree",
    "Specialized Diploma or Coursework",
    "Professional Certification",
  ],
  avatar: "https://via.placeholder.com/150",
  salary_range: "$40,000 - $55,000",
};
const OffersApplyView = () => {
  return (
    <>
      <NavBar />
      <div className="w-full h-[644px] pl-2 pt-5 pr-[34px] pb-[37px]">
        <div className="bg-white rounded-[20px] w-full h-full  pl-[35px] pt-[32px] pr-[25px] pb-5">
          <div className="w-full h-full flex flex-col space-y-[49px]">
            <div className="flex flex-row justify-between pr-[9px]">
              <div className="flex flex-row space-x-[24px]">
                <img
                  className="w-[64px] h-[64px] rounded-full"
                  src={offer.avatar}
                  alt="Avatar"
                />
                <div className="flex flex-col ">
                  <div className="text-xs font-normal font-poppins">
                    {offer.company_name} - Created at {offer.created_at}
                  </div>
                  <div className="text-4xl font-normal font-spacegrotesk">
                    {offer.offer_title}{" "}
                    <span className="text-[#6610F2]">
                      {offer.compatibility} %
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-row items-center justify-center space-x-[14px]">
                <button className="w-[104px] h-[40px] bg-[#D9D9D9] rounded-[34px] font-montserrat font-bold text-black text-base">
                  Save
                </button>
                <button className="w-[104px] h-[40px] bg-[#30E981] rounded-[34px] font-montserrat font-bold text-white text-base">
                  Apply
                </button>
              </div>
            </div>
            <div className=" h-full flex flex-row space-x-[50px] overflow-y-scroll overflow-x-hidden  scrollbar scrollbar-thumb-rounded scrollbar-thumb-gray-400 scrollbar-track-white  scrollbar-w-[7px]">
              <div className="h-full flex flex-col basis-3/5 font-poppins space-y-[10px]">
                <div className=" text-base font-medium">Job Description</div>
                <div
                  className="text-xs font-normal "
                  dangerouslySetInnerHTML={{ __html: offer.desc }}
                />
              </div>
              <div className="flex flex-col basis-2/5 space-y-[40px]">
                <div className="flex flex-col space-y-[10px]">
                  <div className="text-base font-medium font-poppins">
                    Employment Type
                  </div>
                  <div className="flex flex-wrap justify-start items-start ">
                    {offer.eployment_type.map((item, index) => (
                      <span
                        key={index}
                        className="mx-[5px] mb-[10px] font-poppins px-7 py-1 text-xs font-normal bg-gray-100 rounded-[22px]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col space-y-[22px]">
                  <div className="text-base font-medium font-poppins">
                    Education Requirements
                  </div>
                  <div className="flex flex-wrap justify-start items-start ">
                    {offer.education.map((item, index) => (
                      <span
                        key={index}
                        className="mx-[5px] mb-[10px] font-poppins px-7 py-1 text-xs font-normal bg-gray-100 rounded-[22px]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col space-y-[20px]">
                  <div className="text-base font-medium font-poppins">
                    Salary Range
                  </div>
                  <span className="font-poppins text-xs font-normal">
                    {offer.salary_range} per year
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OffersApplyView;
