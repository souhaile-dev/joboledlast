import React, { useEffect, useState } from "react";
import logImg from "../assets/LogIn.jpg";
import logoImg from "../assets/logo.svg";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import OAuth from "./OAuth";
import Register from "./Register";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
  //initialize the profil types
  const profiltypes = [
    "none",
    "Job Seeker",
    "Business Owner",
    "Employed Professional",
    "Student/Graduate",
  ];
  //set login information
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [invalidPassword, setInvalidPassword] = useState(false);

  //for form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      email: email,
      password: password,
    };
    axios
      .post("https://localhost:5000/user/login", user)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user_id", res.data.user_id);
        localStorage.setItem("profilType", res.data.profiltype);
        // console.log(res.data.profiltype);
        if (res.data.profiltype === profiltypes[1]) {
          navigate("/joobSeeker/dashboard");
        } else if (res.data.profiltype === profiltypes[2]) {
          navigate("/recruiter/dashboard");
        } else if (res.data.profiltype === profiltypes[3]) {
          navigate("/employed/dashboard");
        } else {
          navigate("/student/dashboard");
        }
      })
      .catch((err) => {
        if (err.response && err.response.status === 401) {
          setInvalidEmail(true);
          setInvalidPassword(true);
        }
      });
  };

  // useEffect(() => {
  //   setInvalidEmail(email < 1);
  //   setInvalidPassword(password < 10);
  // }, [email, password]);

  //show and hide password
  const [visibility, setVisibility] = useState(false);

  //toggle login / register
  const [showRegister, setShowRegister] = useState(false);
  //navigate to change the path
  const navigate = useNavigate();

  const handleClickRegister = () => {
    navigate("/register");
    setShowRegister(true);
  };
  const toggleVisibility = () => {
    setVisibility(!visibility);
  };

  return (
    <div>
      {showRegister && <Register />}
      {!showRegister && (
        <div className="flex flex-row bg-black">
          {/* First column  / disapeared on mobile */}
          <div className="w-2/3 bg-gray-100 flex h-[832px] overflow-hidden flex-col items-center">
            <div className="w-full text-center m-14 text-4xl font-normal font-goretzk">
              <p className="inline-block mr-5 align-text-bottom ">
                Welcome to{" "}
              </p>

              <Link to="/" className="">
                <img
                  src={logoImg}
                  alt="jobold"
                  className="inline-block w-[142px]"
                />
              </Link>
              {/* <img
                src={logoImg}
                alt="jobold"
                className="inline-block w-[142px]"
              /> */}
            </div>
            <img
              src={logImg}
              alt="presentation"
              className="w-[501px] rounded-full mx-20"
            />
            <div className="m-14">
              <p className="font-goretzk text-4xl">
                Where finding the perfect <br /> Talent is made{" "}
                <p className="font-bold font-goretzk inline">easy </p>{" "}
                <p className="inline">&</p>
                <p className="font-bold font-goretzk inline"> fun</p>
                <p className="inline">!</p>
              </p>
            </div>
          </div>

          {/* Second column */}
          <div className="w-1/3 bg-white flex items-center justify-center">
            <form className="w-4/5" onSubmit={handleSubmit}>
              <div className="mb-4">
                <div className="flex flex-row">
                  <button
                    disabled
                    className="w-1/2 h-7.5 font-poppins w-34 py-4 text-base font-semibold text-black border-b-black border-b"
                  >
                    LogIn
                  </button>
                  <button
                    onClick={handleClickRegister}
                    className="w-1/2 h-7.5 font-poppins w-34 py-4 text-base font-semibold text-black"
                  >
                    Register
                  </button>
                </div>
                <hr></hr>
                <br />
                <br />
                <input
                  className="placeholder-poppins placeholder:text-black/[.5] placeholder:text-[14px] placeholder:font-normal w-full h-12 border-b-[.5px] border-black/[.5] focus:outline-none text-xl"
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setInvalidEmail(false);
                  }}
                  placeholder="Email"
                />
              </div>
              <div className="mb-6 relative">
                <input
                  className="placeholder-poppins placeholder:text-black/[.5] placeholder:text-[14px] placeholder:font-normal w-full h-12 border-b-[.5px] border-black/[.5] focus:outline-none text-xl"
                  id="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setInvalidPassword(false);
                  }}
                  type={visibility === false ? "password" : "text"}
                  placeholder="Password"
                />
                <div className="text-base cursor-pointer hover:text-black/[.7] absolute top-5 right-3 text-black/[.5]">
                  {visibility === false ? (
                    <AiOutlineEye onClick={toggleVisibility} />
                  ) : (
                    <AiOutlineEyeInvisible onClick={toggleVisibility} />
                  )}
                </div>
              </div>
              <div className="flex items-center justify-between mt-14 mb-0.5">
                <button
                  className="w-full font-montserrat h-10 bg-[#418DFD] text-base hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-3xl focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Log In
                </button>
              </div>
              {(invalidEmail || invalidPassword) && (
                <div
                  style={{
                    color: "#dc3545",
                    fontSize: ".875em",
                    marginTop: ".25rem",
                  }}
                >
                  Invalid email or password
                </div>
              )}
              <div className="text-center">
                <a
                  href="#$"
                  className="font-goretzk text-black/[.7] underline font-normal text-xs"
                >
                  Forgot your password?
                </a>
              </div>

              {/* OAuth */}
              <OAuth />
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
