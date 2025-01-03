import React, { useState } from "react";
import regImg from "../assets/Register.jpg";
import logoImg from "../assets/logo.svg";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import OAuth from "./OAuth";
import Login from "./Login";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const Register = ({
  setFirstStep,
  setValue,
  existEmail,
  fullName,
  
  email,
  password,
  oauth,
  setOauth,
}) => {
  //use Navigate to control our path
  const navigate = useNavigate();
  //show and hide password
  const [visibility, setVisibility] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const handleClickLogin = () => {
    navigate("/login");
    setShowLogin(true);
  };

  const toggleVisibility = () => {
    setVisibility(!visibility);
  };

  //handleSubmit this function will be called after click over signup
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== "" && fullName !== "" && email !== "" && !existEmail) {
      setFirstStep(false);
    }
    if (oauth) {
      axios
        .get("https://localhost:5000/user/auth/google")
        .then((res) => {
          // Handle the response from the server if needed
          // console.log("callback");
        })
        .catch((err) => {
          // Handle any errors that occur during the request
          console.error("Failed to callbakck:", err);
        });
    }
  };
  return (
    <div>
      {showLogin && <Login />}
      {!showLogin && (
        <div className="flex flex-row">
          {/* First column  / disapeared on mobile */}
          <div className="w-2/3 bg-gray-100 flex h-[832px] overflow-hidden flex-col items-center">
            <div className="w-full text-center m-14 text-4xl align-middle font-normal font-goretzk">
              <p className="inline-block mr-5 align-text-bottom">Join </p>
              {/* <img
                src={logoImg}
                alt="jobold"
                className="inline-block w-[142px]"
              /> */}

              <Link to="/" className="">
                <img
                  src={logoImg}
                  alt="jobold"
                  className="inline-block w-[142px]"
                />
              </Link>
            </div>
            <img
              src={regImg}
              alt="presentation"
              className="w-[501px] rounded-full mx-20"
            />
            <div className="m-14">
              <p className="font-goretzk text-4xl">
                Where finding your dream job <br /> is made{" "}
                <p className="font-bold font-goretzk inline">easy </p>{" "}
                <p className="inline">and</p>
                <p className="font-bold font-goretzk inline"> enjoyable</p>
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
                    onClick={handleClickLogin}
                    className="w-1/2 h-7.5 font-poppins w-34 py-4 text-base font-semibold text-black"
                  >
                    LogIn
                  </button>
                  <button
                    disabled
                    className="w-1/2 h-7.5 font-poppins w-34 py-4 text-base font-semibold text-black border-b-black border-b"
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
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setValue(e)}
                />
              </div>
              <div className="mb-4">
                <input
                  className="placeholder-poppins placeholder:text-black/[.5] placeholder:text-[14px] placeholder:font-normal w-full h-12 border-b-[.5px] border-black/[.5] focus:outline-none text-xl"
                  id="fullName"
                  type="text"
                  placeholder="Full Name"
                  value={fullName}
                  onChange={(e) => {
                    // console.log(e.target.value);
                    setValue(e);
                  }}
                />
              </div>
              <div className="mb-6 relative">
                <input
                  className="placeholder-poppins placeholder:text-black/[.5] placeholder:text-[14px] placeholder:font-normal w-full h-12 border-b-[.5px] border-black/[.5] focus:outline-none text-xl"
                  id="password"
                  type={visibility === false ? "password" : "text"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setValue(e)}
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
                  Sign Up
                </button>
              </div>

              <div className="text-center mt-2 font-poppins text-black/[.7] font-normal text-xs">
                <p className="inline-block">
                  By signing up, you agree to the Jobold{" "}
                </p>{" "}
                <a
                  href="##"
                  className="underline inline-block hover:text-black/[.9]"
                >
                  User Agreement,
                </a>{" "}
                <a
                  href="##"
                  className="underline  inline-block hover:text-black/[.9]"
                >
                  Privacy Policy,
                </a>{" "}
                <p className="inline-block"> and </p>{" "}
                <a
                  href="##"
                  className="underline inline-block hover:text-black/[.9]"
                >
                  Cookie Policy.
                </a>
              </div>
              <OAuth setOauth={setOauth} oauth={oauth} />
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;
