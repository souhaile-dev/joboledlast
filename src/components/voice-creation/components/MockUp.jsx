import React, { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { updateExperience } from "../../../reducers/voiceCreationSlice";

const MockUp = (props) => {
  const personalInfo = useSelector((state) => state.personalInfo);
  const education = useSelector((state) => state.education);
  const experience = useSelector((state) => state.experience);
  const skills = useSelector((state) => state.skills);
  const languages = useSelector((state) => state.languages);
  const projects = useSelector((state) => state.projects);
  const dispatch = useDispatch();

  // Define a function to update the experience state and dispatch the action
  const updateExperienceData = (newExperienceData) => {
    dispatch(updateExperience(newExperienceData));
  };
  const handleUpdateExperience = () => {
    // Create a new experience data object (for example)
    const newExperience = {
      position: "Software Engineer",
      company: "Acme Inc.",
      startDate: "2020-01-012",
      endDate: "2022-12-31",
      responsibilities: [
        "Developing web applications",
        "Testing and debugging",
      ],
    };

    // Call the updateExperienceData function to dispatch the action
    updateExperienceData(newExperience);
    // console.log(personalInfo);
    // console.log(education);
    // console.log(experience);
    // console.log(skills);
    // console.log(languages);
    // console.log(projects);
  };
  // const personalInfo = useSelector((state) => state.resume.personalInfo);
  return (
    <>
      <div className="bg-white h-[792px] w-[475px] rounded-[20px] shadow p-5">
        {personalInfo.firstName && personalInfo.lastName ? (
          <div class="animate-pulse flex space-x-4 ">
            <div class="rounded-full bg-gray-300 h-10 w-10"></div>
            <div class="flex-1 space-y-6 py-1">
              <div class="h-2 bg-gray-300 rounded"></div>
              <div class="space-y-3">
                <div class="grid grid-cols-3 gap-4">
                  <div class="h-2 bg-gray-300 rounded col-span-2"></div>
                  <div class="h-2 bg-gray-300 rounded col-span-1"></div>
                </div>
                <div className="h-2 bg-gray-300 rounded"></div>
              </div>
            </div>
          </div>
        ) : (
          <h1 className="text-3xl font-semibold mb-4">
            {personalInfo.firstName} {personalInfo.lastName}
          </h1>
        )}
        {personalInfo.email && (
          <p className="text-gray-600 mb-2">{personalInfo.email}</p>
        )}
        {personalInfo.phone && (
          <p className="text-gray-600 mb-4">{personalInfo.phone}</p>
        )}
        {personalInfo.address && (
          <p className="text-gray-600 mb-4">{personalInfo.address}</p>
        )}
        {education.education.length > 0 && (
          <>
            <h2 className="text-2xl font-semibold mt-6 mb-4">Education</h2>
            {education.education.map((edu, index) => (
              <div key={index} className="mb-4">
                <h3 className="text-lg font-semibold">{edu.degree}</h3>
                <p className="text-gray-600">{edu.school}</p>
                <p className="text-gray-600">{edu.graduationYear}</p>
              </div>
            ))}
          </>
        )}
        {/* <button onClick={handleUpdateExperience}>Update Experience</button>{" "} */}
        {/* 
        <p>Position: {experienceData.experience.position}</p>
        <p>Company: {experienceData.experience.company}</p> */}
        {/* <h1 className="bg-deep-orange-400">{personalInfo}</h1> */}
        {experience.experience.length > 0 ? (
          <div className="animate-pulse flex space-x-4 mt-2">
            <div className="rounded-full bg-gray-300 h-10 w-10"></div>
            <div className="flex-1 space-y-6 py-1">
              <div className="h-2 bg-gray-300 rounded"></div>
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-2 bg-gray-300 rounded col-span-2"></div>
                  <div className="h-2 bg-gray-300 rounded col-span-1"></div>
                </div>
                <div className="h-2 bg-gray-300 rounded"></div>
              </div>
            </div>
          </div>
        ) : (
          <>
            <h2 className="text-2xl font-semibold mt-6 mb-4">Experience</h2>
            {experience.experience.map((exp, index) => (
              <div key={index} className="mb-4">
                <h3 className="text-lg font-semibold">{exp.position}</h3>
                <p className="text-gray-600">{exp.company}</p>
                <p className="text-gray-600">
                  {exp.startDate} - {exp.endDate}
                </p>
                <ul>
                  {exp.responsibilities.map((responsibility, idx) => (
                    <li key={idx}>{responsibility}</li>
                  ))}
                </ul>
              </div>
            ))}
          </>
        )}
        {skills.skills.length > 0 ? (
          <div className="animate-pulse flex space-x-4 mt-2">
            <div className="rounded-full bg-gray-300 h-10 w-10"></div>
            <div className="flex-1 space-y-6 py-1">
              <div className="h-2 bg-gray-300 rounded"></div>
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-2 bg-gray-300 rounded col-span-2"></div>
                  <div className="h-2 bg-gray-300 rounded col-span-1"></div>
                </div>
                <div className="h-2 bg-gray-300 rounded"></div>
              </div>
            </div>
          </div>
        ) : (
          <>
            <h2 className="text-2xl font-semibold mt-6 mb-4">Skills</h2>
            {skills.skills.map((skill, index) => (
              <div key={index} className="mb-4">
                <h3 className="text-lg font-semibold">{skill.category}</h3>
                <ul>
                  {skill.list.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </>
        )}
        {languages.languages.length > 0 ? (
          <div className="animate-pulse flex space-x-4 mt-5">
            <div className="rounded-full bg-gray-300 h-10 w-10"></div>
            <div className="flex-1 space-y-6 py-1">
              <div className="h-2 bg-gray-300 rounded"></div>
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-2 bg-gray-300 rounded col-span-2"></div>
                  <div className="h-2 bg-gray-300 rounded col-span-1"></div>
                </div>
                <div className="h-2 bg-gray-300 rounded"></div>
              </div>
            </div>
          </div>
        ) : (
          <>
            <h2 className="text-2xl font-semibold mt-6 mb-4">Languages</h2>
            {languages.languages.map((language, index) => (
              <div key={index} className="mb-4">
                <h3 className="text-lg font-semibold">{language.language}</h3>
                {language.proficiency && (
                  <p className="text-gray-600">{language.proficiency}</p>
                )}
              </div>
            ))}
          </>
        )}
        {projects.projects.length > 0 ? (
          <div className="animate-pulse flex space-x-4 mt-8">
            <div className="flex-1 space-y-6 py-1">
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-2 bg-gray-300 rounded col-span-2"></div>
                  <div className="h-2 bg-gray-300 rounded col-span-1"></div>
                  <div className="h-2 bg-gray-300 rounded col-span-2"></div>
                  <div className="h-2 bg-gray-300 rounded col-span-1"></div>
                  <div className="h-2 bg-gray-300 rounded col-span-2"></div>
                  <div className="h-2 bg-gray-300 rounded col-span-1"></div>
                </div>
                <div className="h-2 bg-gray-300 rounded"></div>
              </div>
            </div>
          </div>
        ) : (
          <>
            <h2 className="text-2xl font-semibold mt-6 mb-4">Projects</h2>
            {projects.projects.map((project, index) => (
              <div key={index} className="mb-4">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
                {project.technologies.length > 0 && (
                  <p className="text-gray-600">
                    Technologies: {project.technologies.join(", ")}
                  </p>
                )}
              </div>
            ))}
          </>
        )}
        <div className="animate-pulse flex space-x-4">
          <div className="rounded-full bg-gray-300 h-10 w-10"></div>
          <div className="flex-1 space-y-6 py-1">
            <div className="h-2 bg-gray-300 rounded"></div>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-gray-300 rounded col-span-2"></div>
                <div className="h-2 bg-gray-300 rounded col-span-1"></div>
              </div>
              <div className="h-2 bg-gray-300 rounded"></div>
            </div>
          </div>
        </div>
        <div className="animate-pulse flex space-x-4">
          <div className="rounded-full bg-gray-300 h-10 w-10"></div>
          <div className="flex-1 space-y-6 py-1">
            <div className="h-2 bg-gray-300 rounded"></div>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-gray-300 rounded col-span-2"></div>
                <div className="h-2 bg-gray-300 rounded col-span-1"></div>
              </div>
              <div className="h-2 bg-gray-300 rounded"></div>
            </div>
          </div>
        </div>
        <div className="animate-pulse flex space-x-4">
          <div className="rounded-full bg-gray-300 h-10 w-10"></div>
          <div className="flex-1 space-y-6 py-1">
            <div className="h-2 bg-gray-300 rounded"></div>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-gray-300 rounded col-span-2"></div>
                <div className="h-2 bg-gray-300 rounded col-span-1"></div>
              </div>
              <div className="h-2 bg-gray-300 rounded"></div>
            </div>
          </div>
        </div>
        <div class="animate-pulse flex space-x-4">
          <div class="rounded-full bg-gray-300 h-10 w-10"></div>
          <div class="flex-1 space-y-6 py-1">
            <div class="h-2 bg-gray-300 rounded"></div>
            <div class="space-y-3">
              <div class="grid grid-cols-3 gap-4">
                <div class="h-2 bg-gray-300 rounded col-span-2"></div>
                <div class="h-2 bg-gray-300 rounded col-span-1"></div>
              </div>
              <div class="h-2 bg-gray-300 rounded"></div>
            </div>
          </div>
        </div>
        <div class="animate-pulse flex space-x-4">
          <div class="rounded-full bg-gray-300 h-10 w-10"></div>
          <div class="flex-1 space-y-6 py-1">
            <div class="h-2 bg-gray-300 rounded"></div>
            <div class="space-y-3">
              <div class="grid grid-cols-3 gap-4"></div>
              <div class="h-2 bg-gray-300 rounded">
                <div className="w-full border-b-2 flex"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MockUp;
