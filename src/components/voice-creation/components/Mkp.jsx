import React, { useState, useEffect } from 'react';

const Mkp = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'http://127.0.0.1:5000/get'
        
          );
        const jsonData = await response.json();
        setData(jsonData);
        
        // Log all the attributes
        Object.keys(jsonData).forEach((key) => {
          console.log(`${key}:`, jsonData["key"]);
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {data && (
        <div>
            <div className="flex space-x-5 text-sm py-5 px-8 ">
      <div className="text-black text-xl font-normal font-['Poppins']" >
      {data.Name}
        <p className="text-black text-xs font-normal font-['Poppins']">{data.Job_Title}</p>
         </div>
      <div className=" py-5 text-black text-xs font-normal font-['Poppins']">
       <p>Phone:{data.Phone}</p> 
       <p>Adresse : {data.Adresse} </p>
      </div>
     </div>
          <h2>Name: {data.Name}</h2>
          <p>Job Title: {data.Job_Title}</p>
          <p>Phone: {data.Phone}</p>
          <p>Email: {data.Email}</p>
          <p>Address: {data.Adresse}</p>
          <p>Birthday: {data.Birthday}</p>
          <p>Bio: {data.Bio}</p>
          <p>Skills - Soft Skills: {data.Skills?.soft_skills}</p>
          <p>Skills - Hard Skills: {data.Skills?.hard_skills}</p>
          <p>Languages: {data.Languages?.map(lang => `${lang.language} - ${lang.level}`).join(', ')}</p>
          {data.Education && (
            <div>
              <h3>Education:</h3>
              {data.Education.map((edu, index) => (
                <div key={index}>
                  <p>Diploma Name: {edu.diploma_name}</p>
                  <p>Duration: {edu.duration}</p>
                  <p>Description: {edu.description}</p>
                </div>
              ))}
            </div>
          )}
          {/* Similarly, handle other sections like Experience, Projects, and Interests */}
        </div>
      )}
      {!data && <p>Loading...</p>}
    </div>
  );
};

export default Mkp;
