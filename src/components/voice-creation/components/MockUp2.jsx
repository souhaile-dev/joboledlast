import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MockUp2 = (props) => {
  const [experience, setExperience] = useState([]);
  const [education, setEducation] = useState([]);
  const [personal, setPersonal] = useState({});
  const [bio, setBio] = useState([{ bio: "" }]);
  const [skills, setSkills] = useState({});
  const [language, setLanguage] = useState([]);
  const [project, setProject] = useState([]);
  const [interests, setInterests] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5000/get');
        const jsonData = response.data;

        setExperience(jsonData.Experience || []);
        setEducation(jsonData.Education || []);
        setPersonal({
          firstName: jsonData.firstName,
          lastName: jsonData.lastName,
          email: jsonData.Email,
          phone: jsonData.Phone,
          address: jsonData.Address,
          job: jsonData.Job_Title
        });
        setBio([{ bio: jsonData.Bio }]);
        setSkills(jsonData.Skills);
        setLanguage(jsonData.Languages || []);
        setProject(jsonData.Projects || []);
        setInterests(jsonData.Interests);
      } catch (error) {
        console.error('Error fetching data:', error);

      
      }
    };

    fetchData();
   
  }, []);

 // ... (Previous code)

return (
  <div className="bg-white h-[792px] w-[475px] rounded-[20px] shadow p-5 scrollbar scrollbar-thumb-[#6610F2] scrollbar-w-[10px] scrollbar-track-gray-100 overflow-y-scroll overflow-x-hidden">
    {/* Personal Information */}
    <div className="flex flex-col items-start space-y-4">
      {/* <div className="text-black text-xl font-normal font-['Poppins']">Personal Information</div> */}
      <div>
      <div className="flex space-x-5 text-sm py-5 px-8 ">
      <div  className="text-black text-xl font-normal font-['Poppins']" >
        <p> {personal.firstName}</p>
        <p> {personal.lastName}</p>
        <p className="text-black text-xs font-normal font-['Poppins']">{personal.job}</p>
         </div>
      <div className=" py-5 text-black text-xs font-normal font-['Poppins']">
       <p>Phone:{personal.phone}</p> 
       <p>Adresse : {personal.address} </p>
        <p>Address: {personal.address}</p>
      </div>
     </div>
   
        {/* <p>Name: {personal.firstName} {personal.lastName}</p>
        <p>Email: {personal.email}</p>
        <p>Phone: {personal.phone}</p>
        <p>Address: {personal.address}</p> 
        <p>Job Title: {personal.job}</p> */}
      </div>
    </div>

    {/* Experience */}
    <div className="text-black text-xl font-normal font-['Poppins']">Experience</div>
    <div>
      {experience && Array.isArray(experience) && (
        experience.map((exp, index) => (
          <div key={index} className="px-8 py-5">
            <div className="text-black text-lg font-bold font-['Poppins']">{exp.position}</div>
            <p>{exp.company}, {exp.startDate}-{exp.endDate}</p>
            <p>{exp.responsibilities}</p>
          </div>
        ))
      )}
    </div>

    {/* Education */}
    <div className="text-black text-xl font-normal font-['Poppins']">Education</div>
    <div>
      {education && Array.isArray(education) && (
        education.map((edu, index) => (
          <div key={index} className="px-8 py-5">
            <div className="text-black text-lg font-bold font-['Poppins']">{edu.degree}</div>
            <p>{edu.school}{edu.graduationYear}</p>
            <p>{edu.description}</p>
          </div>
        ))
      )}
    </div>

    {/* Bio */}
   
    <div>
      {bio && Array.isArray(bio) && (
        bio.map((b, index) => (
          <div key={index} className="flex space-x-6 text-sm py-5 px-8">
<b className="text-black text-xl font-normal font-['Poppins']">Your Bio:</b>
<p className="w-[294px] h-[116px] text-black text-xs font-normal font-['Poppins']">{b.bio}</p>
      </div>
        ))
      )}
    </div>

    {/* Skills */}
    <div className="text-black text-xl font-normal font-['Poppins']">Skills</div>
    <div>
      <p>Soft Skills: {skills.soft_skills}</p>
      <p>Hard Skills: {skills.hard_skills}</p>
    </div>

    {/* Languages */}
    <div className="text-black text-xl font-normal font-['Poppins']">Languages</div>
    <div>
      {language && Array.isArray(language) && (
        language.map((lang, index) => (
          <div key={index} className="px-8 py-5">
            <p>{lang.language} - {lang.proficiency}</p>
          </div>
        ))
      )}
    </div>

    {/* Projects */}
    <div className="text-black text-xl font-normal font-['Poppins']">Projects</div>
    <div>
      {project && Array.isArray(project) && (
        project.map((proj, index) => (
          <div key={index} className="px-8 py-5">
            <p>{proj.title}</p>
            <p>{proj.description}</p>
            <p><strong>{proj.technologies}</strong></p>
          </div>
        ))
      )}
    </div>

    {/* Interests */}
    <div className="text-black text-xl font-normal font-['Poppins']">Interests</div>
    <div>
      <p>{interests}</p>
    </div>
  </div>
);
};

export default MockUp2;