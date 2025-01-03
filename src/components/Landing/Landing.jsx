import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Register from "../Register";
import AfterRegister from "../AfterRegister";
const urlParams = new URLSearchParams(window.location.search);
const source = urlParams.get("source");

const Landing = () => {
  const [oauth, setOauth] = useState(false);
  const [firstStep, setFirstStep] = useState(true);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [profilType, setProfilType] = useState("");
  const [existEmail, setExistEmail] = useState(false);
  const navigate = useNavigate();
  // console.log("profilType : " + profilType);
  // console.log("email : " + email);
  // console.log("password : " + password);
  // console.log("country : " + country);
  // console.log("city : " + city);
  const setValue = (e) => {
    switch (e.target.id) {
      case "fullName":
        setFullName(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        if (existEmail === true) {
          setExistEmail(false);
        }
        break;
      case "city":
        setCity(e.target.value);
        break;
      case "country":
        setCountry(e.target.value);
        break;
      case "profilType":
        setProfilType(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      default:
      // console.log("Error");
    }
  };
  const profiltypes = [
    "none",
    "Job Seeker",
    "Business Owner",
    "Employed Professional",
    "Student/Graduate",
  ];
  //signup function to create our user
  const signUp = () => {
    const user = {
      fullName: fullName,
      email: email,
      password: password,
      city: city,
      country: country,
      profilType: profilType,
    };
    axios
      .post("https://localhost:5000/user/signup", user)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user_id", res.data.user_id);
        if (res.data.profiltype === profiltypes[1]) {
          navigate("/joobSeeker/dashboard");
        } else if (res.data.profiltype === profiltypes[2]) {
          navigate("/recruiter/dashboard");
        } else if (res.data.profiltype === profiltypes[3]) {
          navigate("/employed/dashboard");
        } else {
          navigate("/student/dashboard");
        }
        navigate("/dashboard");
      })
      .catch((err) => {
        if (err.response && err.response.status === 420) {
          setFirstStep(true);
          setExistEmail(true);
        }
      });
  };

  if (source === "google") {
    const user = {
      email: urlParams.get("email"),
      fullName: urlParams.get("fullName"),
      googleId: urlParams.get("googleId"),
      accessToken: urlParams.get("accessToken"),
    };

    setEmail(user.email);
    setFullName(user.fullName);
    setPassword(user.accessToken);
  }

  return (
    <>
      {firstStep && !source ? (
        <Register
          setOauth={setOauth}
          oauth={oauth}
          setFirstStep={setFirstStep}
          setValue={setValue}
          fullName={fullName}
          email={email}
          password={password}
          existEmail={existEmail}
        />
      ) : (
        <AfterRegister
          source={source}
          urlParams={urlParams}
          setValue={setValue}
          country={country}
          city={city}
          profilType={profilType}
          signUp={signUp}
        />
      )}
    </>
  );
};

export default Landing;
