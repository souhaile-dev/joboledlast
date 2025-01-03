import React from "react";
import { Component } from "./Component";
import "./tailwind.css"
import SideMenu from "../dashboard/SideMenu";
import E42 from "src/assets/svg/Ellipse 42.svg";
import I from "src/assets/svg/Group 97.svg";
import V from "src/assets/svg/Vector.svg";
import V1 from "src/assets/svg/Vector (1).svg";
import P1 from "src/assets/svg/Page-1.svg";
import V2 from "src/assets/svg/Vector (2).svg";
import R38 from "src/assets/png/Rectangle 38.png";
import I3 from "src/assets/png/jobr-01.png";
import I4 from "src/assets/png/jobr-02.png";
import P from "src/assets/svg/Page-1 (2).svg";
import E45 from "src/assets/svg/Ellipse 45.svg";
import Lo from "src/assets/logo.svg";
import L8 from "src/assets/svg/Layer 8.svg";
import V3 from "src/assets/svg/Vector (3).svg";
import E86 from "src/assets/svg/Ellipse 86.svg"
import V4 from "src/assets/svg/Vector (4).svg";
import V5 from "src/assets/svg/Vector (5).svg";
import V7 from "src/assets/svg/Vector 7.svg";
import L49 from "src/assets/svg/Line 49.svg";



export const CandidateProfile = () => {
    return (
        <div className="bg-[#edf0f3] flex flex-row justify-center w-full">
            <div className="bg-[#edf0f3] w-[1280px] h-[2620px] relative">
                <div className="absolute w-[319px] h-[374px] top-[131px] left-[927px] bg-white rounded-[20px] shadow-[0px_6px_6px_#0000001a]">
                    <div className="absolute w-[251px] h-[67px] top-[143px] left-[34px]">
                        <div className="absolute top-0 left-0 [font-family:'Space_Grotesk-Regular',Helvetica] font-normal text-[#000000] text-[36px] text-center tracking-[0] leading-[normal]">
                            Jasmin Robert
                        </div>
                        <div className="absolute top-[43px] left-[47px] font-body-text font-[number:var(--body-text-font-weight)] text-[#000000] text-[length:var(--body-text-font-size)] text-center tracking-[var(--body-text-letter-spacing)] leading-[var(--body-text-line-height)] [font-style:var(--body-text-font-style)]">
                            Software Developer
                        </div>
                    </div>
                    <div className="top-[24px] left-[230px] bg-[#418DFD] inline-flex items-start gap-[10px] px-[14px] py-px absolute rounded-[18px] overflow-hidden">
                        <div className="relative w-fit mt-[-1.00px] font-captions font-[number:var(--captions-font-weight)] text-white text-[length:var(--captions-font-size)] tracking-[var(--captions-letter-spacing)] leading-[var(--captions-line-height)] [font-style:var(--captions-font-style)]">
                            Senior
                        </div>
                    </div>
                    <img className="absolute w-[100px] h-[100px] top-[24px] left-[110px]" alt="Ellipse" src={E42} />

                    <Component
                      className="!absolute !left-[127px] !bg-[#2fe881] !w-[158px] !top-[311px]"
                      divClassName="!left-[22px] !w-[114px]"
                      text="Contact"
                    />
                       
                    
                    <div className="absolute top-[264px] left-[98px] font-captions font-[number:var(--captions-font-weight)] text-[#000000] text-[length:var(--captions-font-size)] tracking-[var(--captions-letter-spacing)] leading-[var(--captions-line-height)] [font-style:var(--captions-font-style)]">
                        Marrakech, Morocco
                    </div>
                    <div className="absolute w-[36px] h-[36px] top-[310px] left-[81px] bg-[#d9d9d9] rounded-[18px]">
                        <img className="absolute w-[14px] h-[15px] top-[10px] left-[11px]" alt="Page" src={P1} />
                    </div>
                    <div className="absolute w-[36px] h-[36px] top-[310px] left-[35px] bg-[#d9d9d9] rounded-[18px]">
                        <img className="absolute w-[12px] h-[15px] top-[10px] left-[12px]" alt="Vector" src={V2} />
                    </div>
                    <img className="absolute w-[24px] h-[24px] top-[235px] left-[195px]" alt="Vector" src={V} />
                    <img className="absolute w-[24px] h-[24px] top-[235px] left-[148px]" alt="Vector" src={V1} />
                    <div className="absolute w-[24px] h-[24px] top-[235px] left-[101px] bg-[#000000] rounded-[12px]">
                        <img className="absolute w-[16px] h-[16px] top-[4px] left-[4px]" alt="Vector" src={I} />
                    </div>
                </div>
                <div className="absolute w-[616px] h-[2303px] top-[131px] left-[291px] bg-white rounded-[20px] shadow-[0px_6px_6px_#0000001a]">
                    <div className="absolute top-[37px] left-[30px] [font-family:'Space_Grotesk-Regular',Helvetica] font-bold text-black text-[32px] tracking-[0] leading-[normal]">
                        About
                    </div>
                    <div className="absolute top-[207px] left-[30px] [font-family:'Space_Grotesk-Regular',Helvetica] font-bold text-black text-[32px] tracking-[0] leading-[normal]">
                        Experiences
                    </div>
                    <div className="absolute top-[901px] left-[30px] [font-family:'Space_Grotesk-Regular',Helvetica] font-bold text-black text-[32px] tracking-[0] leading-[normal]">
                        Education
                    </div>
                    <div className="absolute top-[1357px] left-[30px] [font-family:'Space_Grotesk-Regular',Helvetica] font-bold text-black text-[32px] tracking-[0] leading-[normal]">
                        Released Projects
                    </div>
                    <div className="absolute top-[1837px] left-[30px] [font-family:'Space_Grotesk-Regular',Helvetica] font-bold text-black text-[32px] tracking-[0] leading-[normal]">
                        Certifications
                    </div>
                    <p className="absolute w-[550px] top-[104px] left-[30px] font-captions font-[number:var(--captions-font-weight)] text-[#000000] text-[length:var(--captions-font-size)] tracking-[var(--captions-letter-spacing)] leading-[var(--captions-line-height)] [font-style:var(--captions-font-style)]">
                        Experienced Software Developer with a passion for creating innovative and efficient solutions. Proficient in
                        multiple programming languages and frameworks, I possess a strong understanding of software development
                        principles and methodologies.
                    </p>
                    <div className="absolute top-[487px] left-[133px] font-captions font-[number:var(--captions-font-weight)] text-[#000000] text-[length:var(--captions-font-size)] tracking-[var(--captions-letter-spacing)] leading-[var(--captions-line-height)] [font-style:var(--captions-font-style)]">
                        MarketPoke - Marrakech
                    </div>
                    <div className="absolute top-[308px] left-[133px] font-captions font-[number:var(--captions-font-weight)] text-[#000000] text-[length:var(--captions-font-size)] tracking-[var(--captions-letter-spacing)] leading-[var(--captions-line-height)] [font-style:var(--captions-font-style)]">
                        Tesla - Casablanca
                    </div>
                    <div className="absolute top-[697px] left-[133px] font-captions font-[number:var(--captions-font-weight)] text-[#000000] text-[length:var(--captions-font-size)] tracking-[var(--captions-letter-spacing)] leading-[var(--captions-line-height)] [font-style:var(--captions-font-style)]">
                        Adidas - Rabat
                    </div>
                    <p className="absolute top-[980px] left-[418px] font-captions font-bold text-[#000000] text-[length:var(--captions-font-size)] text-right tracking-[var(--captions-letter-spacing)] leading-[var(--captions-line-height)] [font-style:var(--captions-font-style)]">
                        Tazi high school - Rabat
                    </p>
                    <div className="absolute top-[1079px] left-[494px] font-captions font-bold text-[#000000] text-[length:var(--captions-font-size)] tracking-[var(--captions-letter-spacing)] leading-[var(--captions-line-height)] [font-style:var(--captions-font-style)]">
                        UH1 - Settat
                    </div>
                    <div className="absolute top-[1178px] left-[487px] font-captions font-bold text-[#000000] text-[length:var(--captions-font-size)] text-right tracking-[var(--captions-letter-spacing)] leading-[var(--captions-line-height)] [font-style:var(--captions-font-style)]">
                        EMSI - Rabat
                    </div>
                    <div className="absolute top-[464px] left-[133px] [font-family:'Space_Grotesk-Medium',Helvetica] font-bold text-[#000000] text-[15px] tracking-[0] leading-[normal]">
                        Software Developer
                    </div>
                    <div className="left-[133px] absolute top-[285px] [font-family:'Space_Grotesk-Medium',Helvetica] font-bold text-[#000000] text-[15px] tracking-[0] leading-[normal]">
                        Junior Software Developer
                    </div>
                    <p className="left-[412px] text-right absolute top-[285px] [font-family:'Space_Grotesk-Medium',Helvetica] font-bold text-[#000000] text-[15px] tracking-[0] leading-[normal]">
                        May 2016 - Juin 2018
                    </p>
                    <p className="absolute top-[464px] left-[365px] [font-family:'Space_Grotesk-Medium',Helvetica] font-bold text-[#000000] text-[15px] text-right tracking-[0] leading-[normal]">
                        December 2018 - April 2020
                    </p>
                    <div className="absolute top-[674px] left-[422px] [font-family:'Space_Grotesk-Medium',Helvetica] font-bold text-[#000000] text-[15px] text-right tracking-[0] leading-[normal]">
                        Juin 2020 - Present
                    </div>
                    <div className="absolute top-[979px] left-[53px] [font-family:'Space_Grotesk-Medium',Helvetica] font-bold text-[#000000] text-[15px] text-right tracking-[0] leading-[normal]">
                        2011
                    </div>
                    <div className="top-[1078px] left-[50px] [font-family:'Space_Grotesk-Medium',Helvetica] font-bold text-[#000000] text-[15px] text-right absolute tracking-[0] leading-[normal]">
                        2013
                    </div>
                    <div className="top-[1177px] left-[50px] [font-family:'Space_Grotesk-Medium',Helvetica] font-bold text-[#000000] text-[15px] text-right absolute tracking-[0] leading-[normal]">
                        2015
                    </div>
                    <div className="top-[1435px] left-[50px] [font-family:'Space_Grotesk-Medium',Helvetica] font-bold text-[#000000] text-[15px] text-right absolute tracking-[0] leading-[normal]">
                        2018
                    </div>
                    <div className="top-[1535px] left-[50px] [font-family:'Space_Grotesk-Medium',Helvetica] font-bold text-[#000000] text-[15px] text-right absolute tracking-[0] leading-[normal]">
                        2019
                    </div>
                    <div className="top-[1672px] left-[47px] [font-family:'Space_Grotesk-Medium',Helvetica] font-bold text-[#000000] text-[15px] text-right absolute tracking-[0] leading-[normal]">
                        2020
                    </div>
                    <div className="top-[1915px] left-[47px] [font-family:'Space_Grotesk-Medium',Helvetica] font-bold text-[#000000] text-[15px] text-right absolute tracking-[0] leading-[normal]">
                        2020
                    </div>
                    <div className="top-[2018px] left-[47px] [font-family:'Space_Grotesk-Medium',Helvetica] font-bold text-[#000000] text-[15px] text-right absolute tracking-[0] leading-[normal]">
                        2020
                    </div>
                    <div className="top-[2121px] left-[47px] [font-family:'Space_Grotesk-Medium',Helvetica] font-bold text-[#000000] text-[15px] text-right absolute tracking-[0] leading-[normal]">
                        2020
                    </div>
                    <div className="absolute top-[674px] left-[133px] [font-family:'Space_Grotesk-Medium',Helvetica] font-bold text-[#000000] text-[15px] tracking-[0] leading-[normal]">
                        Senior Software Developer
                    </div>
                    <div className="absolute top-[979px] left-[100px] [font-family:'Space_Grotesk-Medium',Helvetica] font-bold text-[#000000] text-[15px] tracking-[0] leading-[normal]">
                        High School Degree
                    </div>
                    <p className="absolute top-[1078px] left-[100px] [font-family:'Space_Grotesk-Medium',Helvetica] font-bold text-[#000000] text-[15px] tracking-[0] leading-[normal]">
                        Licence Degree in Computer Science
                    </p>
                    <p className="absolute top-[1177px] left-[100px] [font-family:'Space_Grotesk-Medium',Helvetica] font-bold text-[#000000] text-[15px] tracking-[0] leading-[normal]">
                        Master Degree in Software Engineering
                    </p>
                    <div className="absolute top-[1435px] left-[100px] [font-family:'Space_Grotesk-Medium',Helvetica] font-bold text-[#000000] text-[15px] tracking-[0] leading-[normal]">
                        E-commerce Website
                    </div>
                    <div className="absolute top-[1535px] left-[100px] [font-family:'Space_Grotesk-Medium',Helvetica] font-bold text-[#000000] text-[15px] tracking-[0] leading-[normal]">
                        Social Networking Mobile Application
                    </div>
                    <div className="absolute top-[1672px] left-[100px] [font-family:'Space_Grotesk-Medium',Helvetica] font-bold text-[#000000] text-[15px] tracking-[0] leading-[normal]">
                        Data Analytics Dashboard
                    </div>
                    <p className="absolute top-[1915px] left-[100px] [font-family:'Space_Grotesk-Medium',Helvetica] font-bold text-[#000000] text-[15px] tracking-[0] leading-[normal]">
                        AWS Certified Developer - Associate
                    </p>
                    <div className="absolute top-[2018px] left-[100px] [font-family:'Space_Grotesk-Medium',Helvetica] font-bold text-[#000000] text-[15px] tracking-[0] leading-[normal]">
                        Microsoft Certified
                    </div>
                    <p className="absolute top-[2121px] left-[100px] [font-family:'Space_Grotesk-Medium',Helvetica] font-bold text-[#000000] text-[15px] tracking-[0] leading-[normal]">
                        Google Certified Professional Cloud Developer
                    </p>
                    <div className="absolute w-[64px] h-[64px] top-[275px] left-[50px] rounded-[32px]">
                        <img
                            className="absolute w-[45px] h-[44px] top-[10px] left-[10px] object-cover"
                            alt="Rectangle"
                            src={R38}
                        />
                        <div className="absolute w-[64px] h-[64px] top-0 left-0 rounded-[32px] border border-solid border-[#000000]" />
                    </div>
                    <div className="absolute w-[64px] h-[64px] top-[664px] left-[50px] rounded-[32px]">
                        <img className="absolute w-[44px] h-[44px] top-[5px] left-[10px]" alt="Mask group" src={I4} />
                        <div className="absolute w-[64px] h-[64px] top-0 left-0 rounded-[32px] border border-solid border-[#000000]" />
                    </div>
                    <div className="absolute w-[64px] h-[64px] top-[454px] left-[50px] rounded-[32px]">
                        <img className="absolute w-[44px] h-[44px] top-[10px] left-[10px]" alt="Mask group" src={I3} />
                        <div className="absolute w-[64px] h-[64px] top-0 left-0 rounded-[32px] border border-solid border-[#000000]" />
                    </div>
                    <p className="absolute w-[430px] top-[336px] left-[133px] font-captions font-[number:var(--captions-font-weight)] text-[#000000] text-[length:var(--captions-font-size)] tracking-[var(--captions-letter-spacing)] leading-[var(--captions-line-height)] [font-style:var(--captions-font-style)]">
                        As a junior developer, you begin by gaining foundational knowledge and skills in programming languages,
                        development frameworks, and software development best practices. You work under the guidance of senior
                        developers, contributing to coding tasks, bug fixing, and basic software development activities.
                    </p>
                    <p className="absolute w-[430px] top-[515px] left-[133px] font-captions font-[number:var(--captions-font-weight)] text-[#000000] text-[length:var(--captions-font-size)] tracking-[var(--captions-letter-spacing)] leading-[var(--captions-line-height)] [font-style:var(--captions-font-style)]">
                        With experience and continued learning, you advance to a software developer role. Here, you take on more
                        complex programming tasks, participate in designing and implementing software solutions, and collaborate
                        with cross-functional teams to develop and deliver high-quality software applications. You may also start
                        specializing in specific areas, such as web development, mobile app development, or backend systems.
                    </p>
                    <p className="absolute w-[430px] top-[725px] left-[133px] font-captions font-[number:var(--captions-font-weight)] text-[#000000] text-[length:var(--captions-font-size)] tracking-[var(--captions-letter-spacing)] leading-[var(--captions-line-height)] [font-style:var(--captions-font-style)]">
                        With experience and continued learning, you advance to a software developer role. Here, you take on more
                        complex programming tasks, participate in designing and implementing software solutions, and collaborate
                        with cross-functional teams to develop and deliver high-quality software applications. You may also start
                        specializing in specific areas, such as web development, mobile app development, or backend systems.
                    </p>
                    <p className="absolute w-[447px] top-[1005px] left-[100px] font-captions font-[number:var(--captions-font-weight)] text-[#000000] text-[length:var(--captions-font-size)] tracking-[var(--captions-letter-spacing)] leading-[var(--captions-line-height)] [font-style:var(--captions-font-style)]">
                        Begin by earning a bachelor&#39;s degree in physical and chemical studies. This program equips you with the
                        foundational knowledge and teaching methodologies necessary for a career in education.
                    </p>
                    <p className="absolute w-[447px] top-[1104px] left-[100px] font-captions font-[number:var(--captions-font-weight)] text-[#000000] text-[length:var(--captions-font-size)] tracking-[var(--captions-letter-spacing)] leading-[var(--captions-line-height)] [font-style:var(--captions-font-style)]">
                        Begin by earning a bachelor&#39;s degree in physical and chemical studies. This program equips you with the
                        foundational knowledge and teaching methodologies necessary for a career in education.
                    </p>
                    <p className="absolute w-[447px] top-[1203px] left-[100px] font-captions font-[number:var(--captions-font-weight)] text-[#000000] text-[length:var(--captions-font-size)] tracking-[var(--captions-letter-spacing)] leading-[var(--captions-line-height)] [font-style:var(--captions-font-style)]">
                        Pursue a Master&#39;s degree in Computer Science or Software Engineering to deepen your knowledge and
                        specialize in a specific area of interest. The program typically includes advanced coursework in software
                        design, software testing, software architecture, artificial intelligence, data science, and other
                        specialized topics. You may also have the opportunity to conduct research and complete a thesis or capstone
                        project.
                    </p>
                    <p className="absolute w-[447px] top-[1461px] left-[100px] font-captions font-[number:var(--captions-font-weight)] text-[#000000] text-[length:var(--captions-font-size)] tracking-[var(--captions-letter-spacing)] leading-[var(--captions-line-height)] [font-style:var(--captions-font-style)]">
                        Developed a full-stack e-commerce website from scratch, including user registration, product catalog,
                        shopping cart functionality, secure payment processing, and order management.
                    </p>
                    <p className="absolute w-[447px] top-[1561px] left-[100px] font-captions font-[number:var(--captions-font-weight)] text-[#000000] text-[length:var(--captions-font-size)] tracking-[var(--captions-letter-spacing)] leading-[var(--captions-line-height)] [font-style:var(--captions-font-style)]">
                        Designed and built a mobile application for a social networking platform. The app allowed users to create
                        profiles, connect with friends, share posts and media, and interact with other users through comments and
                        likes. The application was released on both iOS and Android platforms and garnered positive user reviews.
                    </p>
                    <p className="absolute w-[447px] top-[1698px] left-[100px] font-captions font-[number:var(--captions-font-weight)] text-[#000000] text-[length:var(--captions-font-size)] tracking-[var(--captions-letter-spacing)] leading-[var(--captions-line-height)] [font-style:var(--captions-font-style)]">
                        Developed a data analytics dashboard for a company to visualize and analyze key performance metrics. The
                        dashboard integrated with various data sources, performed data aggregation and transformation, and provided
                        interactive visualizations and insights to help stakeholders make data-driven decisions.
                    </p>
                    <p className="absolute w-[433px] top-[1941px] left-[100px] font-captions font-[number:var(--captions-font-weight)] text-[#000000] text-[length:var(--captions-font-size)] tracking-[var(--captions-letter-spacing)] leading-[var(--captions-line-height)] [font-style:var(--captions-font-style)]">
                        This certification validates your knowledge and skills in designing, deploying, and maintaining applications
                        on the Amazon Web Services (AWS) platform.
                    </p>
                    <p className="absolute w-[433px] top-[2044px] left-[100px] font-captions font-[number:var(--captions-font-weight)] text-[#000000] text-[length:var(--captions-font-size)] tracking-[var(--captions-letter-spacing)] leading-[var(--captions-line-height)] [font-style:var(--captions-font-style)]">
                        Azure Developer Associate: This certification demonstrates your proficiency in developing and implementing
                        Azure cloud solutions using various programming languages and development tools.
                    </p>
                    <p className="absolute w-[433px] top-[2147px] left-[100px] font-captions font-[number:var(--captions-font-weight)] text-[#000000] text-[length:var(--captions-font-size)] tracking-[var(--captions-letter-spacing)] leading-[var(--captions-line-height)] [font-style:var(--captions-font-style)]">
                        This certification verifies your ability to design, develop, and deploy applications on Google Cloud
                        Platform (GCP) using GCP technologies and services.
                    </p>
                    <div className="absolute top-[1436px] left-[533px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-[#6610f2] text-[12px] text-right tracking-[0] leading-[normal]">
                        View
                    </div>
                    <div className="top-[1537px] absolute left-[533px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-[#6610f2] text-[12px] text-right tracking-[0] leading-[normal]">
                        View
                    </div>
                    <div className="top-[1678px] absolute left-[533px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-[#6610f2] text-[12px] text-right tracking-[0] leading-[normal]">
                        View
                    </div>
                    <img className="absolute w-[10px] h-[10px] top-[1683px] left-[516px]" alt="Page" src={P} />
                    <img className="absolute w-[10px] h-[10px] top-[1542px] left-[516px]" alt="Page" src={P} />
                    <img className="absolute w-[10px] h-[10px] top-[1441px] left-[516px]" alt="Page" src={P} />
                    <div className="absolute top-[1916px] left-[464px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-[#6610f2] text-[12px] tracking-[0] leading-[normal]">
                        Show credential
                    </div>
                    <div className="top-[2019px] absolute left-[464px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-[#6610f2] text-[12px] tracking-[0] leading-[normal]">
                        Show credential
                    </div>
                    <div className="top-[2122px] absolute left-[464px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-[#6610f2] text-[12px] tracking-[0] leading-[normal]">
                        Show credential
                    </div>
                    <img className="absolute w-[10px] h-[10px] top-[1921px] left-[447px]" alt="Page" src={P} />
                    <img className="absolute w-[10px] h-[10px] top-[2024px] left-[447px]" alt="Page" src={P} />
                    <img className="absolute w-[10px] h-[10px] top-[2127px] left-[447px]" alt="Page" src={P} />
                    <div className="absolute top-[308px] left-[282px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-[#000000] text-[12px] tracking-[0] leading-[normal]">
                        Full time
                    </div>
                    <div className="absolute top-[487px] left-[310px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-[#000000] text-[12px] tracking-[0] leading-[normal]">
                        Remote
                    </div>
                    <div className="absolute top-[697px] left-[254px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-[#000000] text-[12px] tracking-[0] leading-[normal]">
                        Part time
                    </div>
                </div>
                <img className="absolute w-[56px] h-[56px] top-[33px] left-[1065px]" alt="Ellipse" src={E45} />
                <div className="absolute w-[117px] h-[43px] top-[39px] left-[1129px]">
                    <div className="absolute top-0 left-0 font-subheadings font-[number:var(--subheadings-font-weight)] text-[#000000] text-[length:var(--subheadings-font-size)] text-center tracking-[var(--subheadings-letter-spacing)] leading-[var(--subheadings-line-height)] [font-style:var(--subheadings-font-style)]">
                        Sed Barreth
                    </div>
                    <div className="absolute top-[25px] left-0 [font-family:'Poppins-Regular',Helvetica] font-normal text-[#000000] text-[12px] text-center tracking-[0] leading-[normal]">
                        CEO
                    </div>
                </div>
                
                <SideMenu />
                <div className="absolute w-[23px] h-[26px] top-[45px] left-[944px]">
                    <img className="absolute w-[20px] h-[20px] top-[6px] left-0" alt="Layer" src={L8} />
                    <div className="absolute w-[14px] h-[14px] top-px left-[9px] bg-[#f05a58] rounded-[7px]" />
                    <div className="top-[2px] left-[14px] [font-family:'Poppins-Bold',Helvetica] font-bold text-[#ffffff] text-[10px] text-center absolute tracking-[0] leading-[normal]">
                        7
                    </div>
                </div>
                <div className="absolute w-[22px] h-[26px] top-[45px] left-[1002px]">
                    <img className="absolute w-[15px] h-[20px] top-[6px] left-0" alt="Vector" src={V3} />
                    <div className="absolute w-[14px] h-[14px] top-px left-[8px] bg-[#f05a58] rounded-[7px]" />
                     <div className="top-[2px] left-[10px] [font-family:'Poppins-Bold',Helvetica] font-bold text-[#ffffff] text-[10px] text-center absolute tracking-[0] leading-[normal]">
                        12
                    </div>
                   
                </div>
                <img className="absolute w-[6px] h-[9px] top-[108px] left-[322px]" alt="Vector" src={V7} />
                <div className="absolute w-[40px] h-[24px] top-[98px] left-[336px]">
                    <div className="absolute top-0 left-0 font-body-text font-bold text-main-color text-[#6610f2] tracking-[var(--body-text-letter-spacing)] leading-[var(--body-text-line-height)] [font-style:var(--body-text-font-style)]">
                        Back
                    </div>
                    <img className="w-[40px] top-[21px] absolute h-px left-0 object-cover" alt="Line" src={L49} />
                </div>
                  <div className="absolute w-[319px] h-[265px] top-[525px] left-[927px] bg-white rounded-[20px] shadow-[0px_6px_6px_#0000001a]">
                    <div className="absolute top-[22px] left-[20px] [font-family:'Space_Grotesk-Medium',Helvetica] font-bold text-[#000000] text-[15px] tracking-[0] leading-[normal]">
                        Condidates files
                    </div>
                    <div className="absolute w-[81px] h-[18px] top-[24px] left-[218px]">
                    <div className="absolute top-0 left-0 [font-family:'Poppins-Bold',Helvetica] font-bold text-[#6610f2] text-[12px] tracking-[0] leading-[normal]">
                        Download all
                        </div>
                        <img className="w-[81px] top-[16px] absolute h-px left-0 object-cover" alt="Line" src={L49} />
                    </div>
                    <div className="absolute w-[48px] h-[48px] top-[63px] left-[30px] bg-[#418DFD] rounded-[24px]">
                        <img className="absolute w-[16px] h-[20px] top-[14px] left-[16px]" alt="Vector" src={V5} />
                    </div>
                    <div className="absolute w-[48px] h-[48px] top-[131px] left-[30px] bg-[#418DFD] rounded-[24px]">
                        <img className="absolute w-[16px] h-[20px] top-[14px] left-[16px]" alt="Vector" src={V5} />
                    </div>
                    <div className="absolute w-[48px] h-[48px] top-[199px] left-[30px] bg-[#418DFD] rounded-[24px]">
                        <img className="absolute w-[16px] h-[20px] top-[14px] left-[16px]" alt="Vector" src={V5} />
                    </div>
                    <div className="absolute top-[76px] left-[89px] font-captions font-[number:var(--captions-font-weight)] text-[#000000] text-[length:var(--captions-font-size)] tracking-[var(--captions-letter-spacing)] leading-[var(--captions-line-height)] [font-style:var(--captions-font-style)]">
                        Resume.pdf
                    </div>
                    <div className="absolute top-[144px] left-[89px] font-captions font-[number:var(--captions-font-weight)] text-[#000000] text-[length:var(--captions-font-size)] tracking-[var(--captions-letter-spacing)] leading-[var(--captions-line-height)] [font-style:var(--captions-font-style)]">
                        Cover lettre.pdf
                    </div>
                    <div className="absolute top-[212px] left-[89px] font-captions font-[number:var(--captions-font-weight)] text-[#000000] text-[length:var(--captions-font-size)] tracking-[var(--captions-letter-spacing)] leading-[var(--captions-line-height)] [font-style:var(--captions-font-style)]">
                        Bio.pdf
                    </div>
                    <img className="absolute w-[14px] h-[14px] top-[80px] left-[285px]" alt="Vector" src={V4} />
                    <img className="absolute w-[14px] h-[14px] top-[148px] left-[285px]" alt="Vector" src={V4} />
                    <img className="absolute w-[14px] h-[14px] top-[216px] left-[285px]" alt="Vector" src={V4} />
                </div>
                <div className="absolute w-[319px] h-[317px] top-[1024px] left-[927px] bg-white rounded-[20px] shadow-[0px_6px_6px_#0000001a]">
                    <div className="absolute top-[22px] left-[20px]  [font-family:'Space_Grotesk-Medium',Helvetica] font-bold text-[#000000] text-[15px] tracking-[0] leading-[normal]">
                        Skills
                    </div>
                    <div className="top-[62px] left-[21px] bg-[#418DFD] inline-flex items-start gap-[10px] px-[14px] py-px absolute rounded-[18px] overflow-hidden">
                        <div className="relative w-fit mt-[-1.00px] font-captions font-[number:var(--captions-font-weight)] text-white text-[length:var(--captions-font-size)] tracking-[var(--captions-letter-spacing)] leading-[var(--captions-line-height)] [font-style:var(--captions-font-style)]">
                            Python
                        </div>
                    </div>
                    <div className="top-[185px] left-[20px] bg-[#EDF0F3] inline-flex items-start gap-[10px] px-[14px] py-px absolute rounded-[18px] overflow-hidden">
                        <div className="relative w-fit mt-[-1.00px] font-captions font-[number:var(--captions-font-weight)] text-black text-[length:var(--captions-font-size)] tracking-[var(--captions-letter-spacing)] leading-[var(--captions-line-height)] [font-style:var(--captions-font-style)]">
                            Problem-solving
                        </div>
                    </div>
                    <div className="top-[272px] left-[21px] bg-[#EDF0F3] inline-flex items-start gap-[10px] px-[14px] py-px absolute rounded-[18px] overflow-hidden">
                        <div className="relative w-fit mt-[-1.00px] font-captions font-[number:var(--captions-font-weight)] text-black text-[length:var(--captions-font-size)] tracking-[var(--captions-letter-spacing)] leading-[var(--captions-line-height)] [font-style:var(--captions-font-style)]">
                            Time management
                        </div>
                    </div>
                    <div className="top-[243px] left-[21px] bg-[#EDF0F3] inline-flex items-start gap-[10px] px-[14px] py-px absolute rounded-[18px] overflow-hidden">
                        <div className="relative w-fit mt-[-1.00px] font-captions font-[number:var(--captions-font-weight)] text-black text-[length:var(--captions-font-size)] tracking-[var(--captions-letter-spacing)] leading-[var(--captions-line-height)] [font-style:var(--captions-font-style)]">
                            Leadership
                        </div>
                    </div>
                    <div className="top-[243px] left-[125px] bg-[#EDF0F3] inline-flex items-start gap-[10px] px-[14px] py-px absolute rounded-[18px] overflow-hidden">
                        <div className="relative w-fit mt-[-1.00px] font-captions font-[number:var(--captions-font-weight)] text-black text-[length:var(--captions-font-size)] tracking-[var(--captions-letter-spacing)] leading-[var(--captions-line-height)] [font-style:var(--captions-font-style)]">
                            Decision-making
                        </div>
                    </div>
                    <div className="top-[185px] left-[157px] bg-[#EDF0F3] inline-flex items-start gap-[10px] px-[14px] py-px absolute rounded-[18px] overflow-hidden">
                        <div className="relative w-fit mt-[-1.00px] font-captions font-[number:var(--captions-font-weight)] text-black text-[length:var(--captions-font-size)] tracking-[var(--captions-letter-spacing)] leading-[var(--captions-line-height)] [font-style:var(--captions-font-style)]">
                            Analytical thinking
                        </div>
                    </div>
                    <div className="top-[214px] left-[20px] bg-[#EDF0F3] inline-flex items-start gap-[10px] px-[14px] py-px absolute rounded-[18px] overflow-hidden">
                        <div className="relative w-fit mt-[-1.00px] font-captions font-[number:var(--captions-font-weight)] text-black text-[length:var(--captions-font-size)] tracking-[var(--captions-letter-spacing)] leading-[var(--captions-line-height)] [font-style:var(--captions-font-style)]">
                            Creativity
                        </div>
                    </div>
                    <div className="top-[214px] left-[116px] bg-[#EDF0F3] inline-flex items-start gap-[10px] px-[14px] py-px absolute rounded-[18px] overflow-hidden">
                        <div className="relative w-fit mt-[-1.00px] font-captions font-[number:var(--captions-font-weight)] text-black text-[length:var(--captions-font-size)] tracking-[var(--captions-letter-spacing)] leading-[var(--captions-line-height)] [font-style:var(--captions-font-style)]">
                            Communication
                        </div>
                    </div>
                    <div className="top-[62px] left-[101px] bg-[#418DFD] inline-flex items-start gap-[10px] px-[14px] py-px absolute rounded-[18px] overflow-hidden">
                        <div className="relative w-fit mt-[-1.00px] font-captions font-[number:var(--captions-font-weight)] text-white text-[length:var(--captions-font-size)] tracking-[var(--captions-letter-spacing)] leading-[var(--captions-line-height)] [font-style:var(--captions-font-style)]">
                            Java
                        </div>
                    </div>
                    <div className="top-[62px] left-[169px] bg-[#418DFD] inline-flex items-start gap-[10px] px-[14px] py-px absolute rounded-[18px] overflow-hidden">
                        <div className="relative w-fit mt-[-1.00px] font-captions font-[number:var(--captions-font-weight)] text-white text-[length:var(--captions-font-size)] tracking-[var(--captions-letter-spacing)] leading-[var(--captions-line-height)] [font-style:var(--captions-font-style)]">
                            JavaScript
                        </div>
                    </div>
                    <div className="top-[120px] left-[21px] bg-[#418DFD] inline-flex items-start gap-[10px] px-[14px] py-px absolute rounded-[18px] overflow-hidden">
                        <div className="relative w-fit mt-[-1.00px] font-captions font-[number:var(--captions-font-weight)] text-white text-[length:var(--captions-font-size)] tracking-[var(--captions-letter-spacing)] leading-[var(--captions-line-height)] [font-style:var(--captions-font-style)]">
                            OOP
                        </div>
                    </div>
                    <div className="top-[120px] left-[85px] bg-[#418DFD] inline-flex items-start gap-[10px] px-[14px] py-px absolute rounded-[18px] overflow-hidden">
                        <div className="relative w-fit mt-[-1.00px] font-captions font-[number:var(--captions-font-weight)] text-white text-[length:var(--captions-font-size)] tracking-[var(--captions-letter-spacing)] leading-[var(--captions-line-height)] [font-style:var(--captions-font-style)]">
                            SQL
                        </div>
                    </div>
                    <div className="top-[120px] left-[145px] bg-[#418DFD] inline-flex items-start gap-[10px] px-[14px] py-px absolute rounded-[18px] overflow-hidden">
                        <div className="relative w-fit mt-[-1.00px] font-captions font-[number:var(--captions-font-weight)] text-white text-[length:var(--captions-font-size)] tracking-[var(--captions-letter-spacing)] leading-[var(--captions-line-height)] [font-style:var(--captions-font-style)]">
                            MongoDB
                        </div>
                    </div>
                    <div className="top-[120px] left-[241px] bg-[#418DFD] inline-flex items-start gap-[10px] px-[14px] py-px absolute rounded-[18px] overflow-hidden">
                        <div className="relative w-fit mt-[-1.00px] font-captions font-[number:var(--captions-font-weight)] text-white text-[length:var(--captions-font-size)] tracking-[var(--captions-letter-spacing)] leading-[var(--captions-line-height)] [font-style:var(--captions-font-style)]">
                            Git
                        </div>
                    </div>
                    <div className="top-[91px] left-[20px] bg-[#418DFD] inline-flex items-start gap-[10px] px-[14px] py-px absolute rounded-[18px] overflow-hidden">
                        <div className="relative w-fit mt-[-1.00px] font-captions font-[number:var(--captions-font-weight)] text-white text-[length:var(--captions-font-size)] tracking-[var(--captions-letter-spacing)] leading-[var(--captions-line-height)] [font-style:var(--captions-font-style)]">
                            Agile
                        </div>
                    </div>
                    <div className="top-[91px] left-[88px] bg-[#418DFD] inline-flex items-start gap-[10px] px-[14px] py-px absolute rounded-[18px] overflow-hidden">
                        <div className="relative w-fit mt-[-1.00px] font-captions font-[number:var(--captions-font-weight)] text-white text-[length:var(--captions-font-size)] tracking-[var(--captions-letter-spacing)] leading-[var(--captions-line-height)] [font-style:var(--captions-font-style)]">
                            Scrum
                        </div>
                    </div>
                    <div className="top-[91px] left-[165px] bg-[#418DFD] inline-flex items-start gap-[10px] px-[14px] py-px absolute rounded-[18px] overflow-hidden">
                        <div className="relative w-fit mt-[-1.00px] font-captions font-[number:var(--captions-font-weight)] text-white text-[length:var(--captions-font-size)] tracking-[var(--captions-letter-spacing)] leading-[var(--captions-line-height)] [font-style:var(--captions-font-style)]">
                            API integration
                        </div>
                    </div>
                    <div className="top-[149px] left-[21px] bg-[#418DFD] inline-flex items-start gap-[10px] px-[14px] py-px absolute rounded-[18px] overflow-hidden">
                        <div className="relative w-fit mt-[-1.00px] font-captions font-[number:var(--captions-font-weight)] text-white text-[length:var(--captions-font-size)] tracking-[var(--captions-letter-spacing)] leading-[var(--captions-line-height)] [font-style:var(--captions-font-style)]">
                            React
                        </div>
                    </div>
                    <div className="top-[149px] left-[94px] bg-[#418DFD] inline-flex items-start gap-[10px] px-[14px] py-px absolute rounded-[18px] overflow-hidden">
                        <div className="relative w-fit mt-[-1.00px] font-captions font-[number:var(--captions-font-weight)] text-white text-[length:var(--captions-font-size)] tracking-[var(--captions-letter-spacing)] leading-[var(--captions-line-height)] [font-style:var(--captions-font-style)]">
                            Node.js
                        </div>
                    </div>
                </div>
                <div className="absolute w-[319px] h-[145px] top-[1361px] left-[927px] bg-white rounded-[20px] shadow-[0px_6px_6px_#0000001a]">
                    <div className="absolute top-[22px] left-[20px] [font-family:'Space_Grotesk-Medium',Helvetica] font-bold text-[#000000] text-[15px] tracking-[0] leading-[normal]">
                        Interests
                    </div>
                    <div className="top-[68px] left-[21px] bg-white-grey inline-flex items-start gap-[10px] px-[14px] py-px absolute rounded-[18px] overflow-hidden">
                        <div className="relative w-fit mt-[-1.00px] font-captions font-[number:var(--captions-font-weight)] text-black text-[length:var(--captions-font-size)] tracking-[var(--captions-letter-spacing)] leading-[var(--captions-line-height)] [font-style:var(--captions-font-style)]">
                            Music
                        </div>
                    </div>
                    <div className="top-[68px] left-[94px] bg-white-grey inline-flex items-start gap-[10px] px-[14px] py-px absolute rounded-[18px] overflow-hidden">
                        <div className="relative w-fit mt-[-1.00px] font-captions font-[number:var(--captions-font-weight)] text-black text-[length:var(--captions-font-size)] tracking-[var(--captions-letter-spacing)] leading-[var(--captions-line-height)] [font-style:var(--captions-font-style)]">
                            Cinema
                        </div>
                    </div>
                    <div className="top-[68px] left-[180px] bg-white-grey inline-flex items-start gap-[10px] px-[14px] py-px absolute rounded-[18px] overflow-hidden">
                        <div className="relative w-fit mt-[-1.00px] font-captions font-[number:var(--captions-font-weight)] text-black text-[length:var(--captions-font-size)] tracking-[var(--captions-letter-spacing)] leading-[var(--captions-line-height)] [font-style:var(--captions-font-style)]">
                            Foot ball
                        </div>
                    </div>
                    <div className="top-[100px] left-[21px] bg-white-grey inline-flex items-start gap-[10px] px-[14px] py-px absolute rounded-[18px] overflow-hidden">
                        <div className="relative w-fit mt-[-1.00px] font-captions font-[number:var(--captions-font-weight)] text-black text-[length:var(--captions-font-size)] tracking-[var(--captions-letter-spacing)] leading-[var(--captions-line-height)] [font-style:var(--captions-font-style)]">
                            Reading
                        </div>
                    </div>
                    <div className="top-[100px] left-[109px] bg-white-grey inline-flex items-start gap-[10px] px-[14px] py-px absolute rounded-[18px] overflow-hidden">
                        <div className="relative w-fit mt-[-1.00px] font-captions font-[number:var(--captions-font-weight)] text-black text-[length:var(--captions-font-size)] tracking-[var(--captions-letter-spacing)] leading-[var(--captions-line-height)] [font-style:var(--captions-font-style)]">
                            Research
                        </div>
                    </div>
                    <div className="top-[100px] left-[204px] bg-white-grey inline-flex items-start gap-[10px] px-[14px] py-px absolute rounded-[18px] overflow-hidden">
                        <div className="relative w-fit mt-[-1.00px] font-captions font-[number:var(--captions-font-weight)] text-black text-[length:var(--captions-font-size)] tracking-[var(--captions-letter-spacing)] leading-[var(--captions-line-height)] [font-style:var(--captions-font-style)]">
                            Travel
                        </div>
                    </div>
                </div>
                <div className="absolute w-[319px] h-[194px] top-[810px] left-[927px] bg-white rounded-[20px] shadow-[0px_6px_6px_#0000001a]">
                    <div className="absolute top-[22px] left-[20px] [font-family:'Space_Grotesk-Medium',Helvetica] font-bold text-[#000000] text-[15px] tracking-[0] leading-[normal]">
                        Languages
                    </div>
                    <div className="absolute top-[64px] left-[103px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-main-color text-[12px] tracking-[0] leading-[normal]">
                        Native
                    </div>
                    <div className="absolute top-[64px] left-[20px] font-captions font-[number:var(--captions-font-weight)] text-black text-[length:var(--captions-font-size)] tracking-[var(--captions-letter-spacing)] leading-[var(--captions-line-height)] [font-style:var(--captions-font-style)]">
                        English
                    </div>
                    <div className="absolute top-[93px] left-[103px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-main-color text-[12px] tracking-[0] leading-[normal]">
                        Advanced
                    </div>
                    <div className="absolute top-[93px] left-[20px] font-captions font-[number:var(--captions-font-weight)] text-black text-[length:var(--captions-font-size)] tracking-[var(--captions-letter-spacing)] leading-[var(--captions-line-height)] [font-style:var(--captions-font-style)]">
                        Frensh
                    </div>
                    <div className="absolute top-[122px] left-[103px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-main-color text-[12px] tracking-[0] leading-[normal]">
                        Intermediate
                    </div>
                    <div className="top-[122px] absolute left-[20px] font-captions font-[number:var(--captions-font-weight)] text-black text-[length:var(--captions-font-size)] tracking-[var(--captions-letter-spacing)] leading-[var(--captions-line-height)] [font-style:var(--captions-font-style)]">
                        Arabic
                    </div>
                    <div className="absolute top-[151px] left-[103px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-main-color text-[12px] tracking-[0] leading-[normal]">
                        Beginner
                    </div>
                    <div className="top-[151px] absolute left-[20px] font-captions font-[number:var(--captions-font-weight)] text-black text-[length:var(--captions-font-size)] tracking-[var(--captions-letter-spacing)] leading-[var(--captions-line-height)] [font-style:var(--captions-font-style)]">
                        Spanish
                    </div>
                    <div className="absolute w-[6px] h-[6px] top-[72px] left-[204px] bg-[#6610F2] rounded-[3px]" />
                    <div className="absolute w-[6px] h-[6px] top-[72px] left-[215px] bg-[#6610F2] rounded-[3px]" />
                    <div className="absolute w-[6px] h-[6px] top-[72px] left-[226px] bg-[#6610F2] rounded-[3px]" />
                    <div className="absolute w-[6px] h-[6px] top-[72px] left-[237px] bg-[#6610F2] rounded-[3px]" />
                    <div className="absolute w-[6px] h-[6px] top-[72px] left-[248px] bg-[#6610F2] rounded-[3px]" />
                    <div className="absolute w-[6px] h-[6px] top-[72px] left-[259px] bg-[#6610F2] rounded-[3px]" />
                    <div className="absolute w-[6px] h-[6px] top-[72px] left-[270px] bg-[#6610F2] rounded-[3px]" />
                    <div className="absolute w-[6px] h-[6px] top-[101px] left-[204px] bg-[#6610F2] rounded-[3px]" />
                    <div className="absolute w-[6px] h-[6px] top-[101px] left-[215px] bg-[#6610F2] rounded-[3px]" />
                    <div className="absolute w-[6px] h-[6px] top-[101px] left-[226px] bg-[#6610F2] rounded-[3px]" />
                    <div className="absolute w-[6px] h-[6px] top-[101px] left-[237px] bg-[#6610F2] rounded-[3px]" />
                    <div className="absolute w-[6px] h-[6px] top-[101px] left-[248px] bg-[#6610F2] rounded-[3px]" />
                    <div className="absolute w-[6px] h-[6px] top-[130px] left-[204px] bg-[#6610F2] rounded-[3px]" />
                    <div className="absolute w-[6px] h-[6px] top-[130px] left-[215px] bg-[#6610F2] rounded-[3px]" />
                    <div className="absolute w-[6px] h-[6px] top-[130px] left-[226px] bg-[#6610F2] rounded-[3px]" />
                    <div className="absolute w-[6px] h-[6px] top-[159px] left-[204px] bg-[#6610F2] rounded-[3px]" />
                    <div className="absolute w-[6px] h-[6px] top-[159px] left-[215px] bg-[#6610F2] rounded-[3px]" />
                </div>
                <div className="absolute top-[41px] left-[371px] font-styled-headlines font-[number:var(--styled-headlines-font-weight)] text-[#000000] text-[length:var(--styled-headlines-font-size)] tracking-[var(--styled-headlines-letter-spacing)] leading-[var(--styled-headlines-line-height)] [font-style:var(--styled-headlines-font-style)]">
                    Candidate Profile
                </div>
            </div>
        </div>
    );
};
export default CandidateProfile;