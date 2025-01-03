import React, { useState } from "react";
import NavBar from "./NavBar";
import im from 'src/assets/png/jobr-04.png'

const task = { time: ["12:00pm", "1:00pm"], date: "Monday, May 29" };
const pourcent={purcent:"71"}

const Schedule = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isConfirm, setIsConfirm] = useState(false);
  const [isTask, setIsTask] = useState(false);
  const [title, setTitle] = useState("");
  const [selectedColor, setSelectedColor] = useState("1");

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  const toggleModal2 = () => {
    setIsConfirm(!isConfirm);
  };
  const toggleModalType = () => {
    setIsTask(!isTask);
  };
  return (
    <div className="bg-white">
      <NavBar hasSearch={false} navTitle="Schedule" />
      
      <div className="flex flex-col justify-between space-y-[20px]">
        <div className="flex flex-row w-full items-center h-[83px] px-[51px]">
          {/* Days navigations */}
          <button className="flex-none h-[44px] w-[44px]">
            <svg
              width="44"
              height="44"
              viewBox="0 0 44 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="22"
                cy="22"
                r="22"
                transform="rotate(-180 22 22)"
                fill="#D9D9D9"
              />
              <path d="M26 14L18 22L26 30" stroke="white" stroke-width="3" />
            </svg>
          </button>
          <div className="h-full grow"></div>
          <button className="flex-none h-[44px] w-[44px]">
            <svg
              width="44"
              height="44"
              viewBox="0 0 44 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="22" cy="22" r="22" fill="#D9D9D9" />
              <path d="M18 30L26 22L18 14" stroke="white" stroke-width="3" />
            </svg>
          </button>
        </div>
        <div className="w-full px-[34px] h-[500px]">
          <button className="btn-01" onClick={toggleModal}>
            Pop Up
          </button>
          <button className="btn-02" onClick={toggleModal2}>
            Pop Confirmation
          </button>
        </div>
      </div>
      {isConfirm && (
         <div className="fixed inset-0 w-[673px] h-[421px] mx-auto pt-11 mt-48  bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
         <div className=" animate-fadeIn  w-[522px] h-[549px] pt-[24px] pb-[28px] px-[30px] rounded-[20px] flex flex-col justify-between">
         {/* <div className="w-[673px] h-[421px] relative"> */}
         <div className="w-[673px] h-[421px] left-0 top-0 absolute bg-white rounded-[20px]" />
         <div className="w-[420px] left-[40px] top-[32px] absolute text-black text-[32px] font-normal font-['Montserrat']">Confirm your Application</div>
         <div className="w-[673px] h-[0px] left-0 top-[92px] absolute border border-black"></div>
         <div className="w-[596px] left-[40px] top-[119px] absolute text-black text-base font-medium font-['Poppins']">You are applying for </div>
         <div className="w-[260px] h-[31px] left-[127px] top-[171px] absolute text-black text-xl font-normal font-['Poppins']">Senior Graphic Designer</div>
         <div className="w-[79px] h-[19px] left-[127px] top-[202px] absolute text-black text-xs font-normal font-['Poppins']">Full Time</div>
         <img className="w-12 h-12 left-[49px] top-[169px] absolute" src={im} />
         <div className="w-[596px] left-[40px] top-[280px] absolute text-black text-xs font-normal font-['Poppins']">By Confirming your application, you are granting the recruiter access to all the information within your profile.</div>
         <div className="px-[25px] py-2.5 left-[517px] top-[349px] absolute bg-[#6610F2] rounded-[34px] justify-start items-start gap-2.5 inline-flex">
           <button className="text-white text-base font-bold font-['Montserrat']">Confirm</button>
         </div>
         <div className="px-[25px] py-2.5 left-[329px] top-[349px] absolute bg-[#D9D9D9] rounded-[34px] justify-start items-start gap-2.5 inline-flex">
           <button className="text-black text-base font-bold font-['Montserrat']">Recheck Offer</button>
         </div>
         <div className="w-16 h-16 left-[40px] top-[161px] absolute rounded-full border border-black" />
         <div className="left-[424px] top-[178px] absolute text-[#6610F2] text-base font-medium font-['Poppins']">Approximately {pourcent.purcent}% match.</div>
       </div>
       </div>

      )}
      {isOpen && (
        <div className="fixed inset-0 h-full w-full bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
          <div className=" animate-fadeIn bg-[#EDF0F3] w-[522px] h-[589px] pt-[24px] pb-[28px] px-[30px] rounded-[20px] flex flex-col justify-between">
            <div>
              <div className="flex flex-row justify-end">
                <button className="" onClick={toggleModal}>
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16 1L1 16M1 1L16 16"
                      stroke="black"
                      stroke-width="2"
                    />
                  </svg>
                </button>
              </div>

              <div className="flex flex-col items-center justify-center space-y-[19px]">
                <input
                  className="placeholder-poppins bg-[#EDF0F3] placeholder:text-black placeholder:text-xl placeholder:font-normal w-[409px] h-12 border-b-[.5px] border-black/[.5] focus:outline-none text-xl"
                  id="title"
                  type="text"
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                  placeholder="Add Title"
                />
                {/* {isTask && (
                <div className="text-base font-bold font-montserrat flex flex-row space-x-[14px]">
                  <button className="w-[197px] h-[39px] bg-violet-700 rounded-[30px] text-white">
                    Meeting
                  </button>
                  <button className="w-[198px] h-[39px] bg-white rounded-[30px] text-black ">
                    Task
                  </button>
                </div>
              )} */}

                {isTask ? (
                  <div className="text-base font-bold font-montserrat flex flex-row space-x-[14px]">
                    <button className="w-[197px] h-[39px] bg-[#6610F2] rounded-[30px] text-white">
                      Meeting
                    </button>
                    <button
                      onClick={toggleModalType}
                      className="w-[198px] h-[39px] bg-white rounded-[30px] text-black "
                    >
                      Task
                    </button>
                  </div>
                ) : (
                  <div className="text-base font-bold font-montserrat flex flex-row space-x-[14px]">
                    <button
                      onClick={toggleModalType}
                      className="w-[197px] h-[39px] bg-white rounded-[30px] text-black"
                    >
                      Meeting
                    </button>
                    <button className="w-[198px] h-[39px] bg-[#6610F2] rounded-[30px] text-white">
                      Task
                    </button>
                  </div>
                )}
                <div className="pt-[25px] flex flex-col space-y-[30px] w-full">
                  <div className="flex flex-row justify-start space-x-[17px]">
                    <span className="">
                      <svg
                        width="23"
                        height="23"
                        viewBox="0 0 23 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M11.0079 0C4.94394 0 0 4.93694 0 10.9999C0 17.0628 4.94494 22.0057 11.0079 22.0057C17.0708 22.0057 22.0057 17.0628 22.0057 10.9999C22.0057 4.93694 17.0708 0 11.0079 0ZM11.0079 1.99997C12.1902 1.998 13.3613 2.22945 14.454 2.68106C15.5467 3.13268 16.5395 3.79556 17.3754 4.63169C18.2114 5.46783 18.8741 6.46077 19.3254 7.55357C19.7768 8.64637 20.008 9.81752 20.0057 10.9999C20.0081 12.1825 19.7771 13.354 19.3258 14.4472C18.8746 15.5404 18.212 16.5338 17.3761 17.3704C16.5402 18.2071 15.5474 18.8705 14.4546 19.3227C13.3618 19.775 12.1905 20.0071 11.0079 20.0057C9.82469 20.0072 8.65285 19.7753 7.55944 19.3232C6.46603 18.8712 5.47253 18.2079 4.6358 17.3713C3.79908 16.5348 3.13558 15.5414 2.68329 14.4481C2.23099 13.3548 1.99879 12.183 1.99997 10.9999C1.99997 6.01792 6.02592 1.99997 11.0079 1.99997ZM10.9919 3.98595C10.8597 3.98725 10.7291 4.01473 10.6076 4.06682C10.4861 4.11891 10.3762 4.19457 10.2841 4.28942C10.192 4.38427 10.1197 4.49644 10.0712 4.61942C10.0228 4.74241 9.99922 4.87378 10.0019 5.00594V10.9999C10.0024 11.1315 10.0289 11.2616 10.0799 11.383C10.1309 11.5043 10.2053 11.6143 10.2989 11.7069L14.2988 15.7088C14.3913 15.804 14.5019 15.8798 14.624 15.9319C14.7462 15.9839 14.8775 16.0111 15.0102 16.0119C15.143 16.0126 15.2746 15.987 15.3973 15.9363C15.52 15.8857 15.6315 15.8111 15.7251 15.717C15.8187 15.6229 15.8926 15.511 15.9425 15.388C15.9925 15.265 16.0174 15.1333 16.0159 15.0005C16.0144 14.8677 15.9864 14.7366 15.9337 14.6148C15.881 14.4929 15.8045 14.3828 15.7088 14.2908L12.0038 10.5859V5.00594C12.0065 4.87193 11.9823 4.73874 11.9325 4.6143C11.8827 4.48986 11.8083 4.3767 11.7139 4.28155C11.6195 4.1864 11.507 4.1112 11.3829 4.06042C11.2589 4.00964 11.1259 3.98431 10.9919 3.98595Z"
                          fill="black"
                        />
                      </svg>
                    </span>
                    <div className="flex flex-row space-x-[45px]">
                      <span className="font-poppins text-black text-base font-medium">
                        {task.date}
                      </span>
                      <div className="font-poppins text-black">
                        <span className="text-xs font-normal">From </span>
                        <span className="text-base font-medium">
                          {task.time[0]}
                        </span>
                        <span className="text-xs font-normal ml-[10px]">
                          {" "}
                          To{" "}
                        </span>
                        <span className="text-base font-medium">
                          {task.time[1]}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row justify-start items-end space-x-[17px]">
                    <span className="h-16 flex items-center">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.9998 9C14.1221 8.99973 13.2599 9.23046 12.4998 9.669C12.3819 9.73243 12.2779 9.81889 12.1941 9.92324C12.1102 10.0276 12.0482 10.1477 12.0116 10.2765C11.9751 10.4053 11.9648 10.5401 11.9813 10.6729C11.9978 10.8057 12.0408 10.9339 12.1077 11.0498C12.1747 11.1657 12.2642 11.267 12.3711 11.3477C12.4779 11.4283 12.5999 11.4867 12.7297 11.5194C12.8595 11.552 12.9945 11.5583 13.1268 11.5378C13.2591 11.5173 13.3859 11.4704 13.4998 11.4C13.9559 11.1366 14.4735 10.998 15.0002 10.9981C15.527 10.9982 16.0445 11.1369 16.5006 11.4005C16.9567 11.664 17.3354 12.043 17.5985 12.4993C17.8617 12.9557 18.0001 13.4732 17.9998 14V15H15.9998C15.7345 15 15.4802 15.1054 15.2926 15.2929C15.1051 15.4804 14.9998 15.7348 14.9998 16C14.9998 16.2652 15.1051 16.5196 15.2926 16.7071C15.4802 16.8946 15.7345 17 15.9998 17H18.9998C19.265 17 19.5193 16.8946 19.7069 16.7071C19.8944 16.5196 19.9998 16.2652 19.9998 16V14C19.9982 12.6744 19.4709 11.4036 18.5335 10.4662C17.5962 9.52888 16.3253 9.00159 14.9998 9ZM14.9998 8C15.7954 8 16.5585 7.68393 17.1211 7.12132C17.6837 6.55871 17.9998 5.79565 17.9998 5V4C17.9998 3.20435 17.6837 2.44129 17.1211 1.87868C16.5585 1.31607 15.7954 1 14.9998 1C14.2041 1 13.441 1.31607 12.8784 1.87868C12.3158 2.44129 11.9998 3.20435 11.9998 4V5C11.9998 5.79565 12.3158 6.55871 12.8784 7.12132C13.441 7.68393 14.2041 8 14.9998 8ZM13.9998 4C13.9998 3.73478 14.1051 3.48043 14.2926 3.29289C14.4802 3.10536 14.7345 3 14.9998 3C15.265 3 15.5193 3.10536 15.7069 3.29289C15.8944 3.48043 15.9998 3.73478 15.9998 4V5C15.9998 5.26522 15.8944 5.51957 15.7069 5.70711C15.5193 5.89464 15.265 6 14.9998 6C14.7345 6 14.4802 5.89464 14.2926 5.70711C14.1051 5.51957 13.9998 5.26522 13.9998 5V4Z"
                          fill="#030303"
                        />
                        <path
                          d="M7 10C5.14413 10.0021 3.36489 10.7403 2.05259 12.0526C0.740295 13.3649 0.00211736 15.1441 0 17V19C0 19.2652 0.105357 19.5196 0.292893 19.7071C0.48043 19.8946 0.734784 20 1 20H13C13.2652 20 13.5196 19.8946 13.7071 19.7071C13.8946 19.5196 14 19.2652 14 19V17C13.9979 15.1441 13.2597 13.3649 11.9474 12.0526C10.6351 10.7403 8.85587 10.0021 7 10ZM12 18H2V17C2 15.6739 2.52678 14.4021 3.46447 13.4645C4.40215 12.5268 5.67392 12 7 12C8.32608 12 9.59785 12.5268 10.5355 13.4645C11.4732 14.4021 12 15.6739 12 17V18ZM7 9C8.06087 9 9.07828 8.57857 9.82843 7.82843C10.5786 7.07828 11 6.06087 11 5V4C11 2.93913 10.5786 1.92172 9.82843 1.17157C9.07828 0.421427 8.06087 0 7 0C5.93913 0 4.92172 0.421427 4.17157 1.17157C3.42143 1.92172 3 2.93913 3 4V5C3 6.06087 3.42143 7.07828 4.17157 7.82843C4.92172 8.57857 5.93913 9 7 9ZM5 4C5 3.46957 5.21071 2.96086 5.58579 2.58579C5.96086 2.21071 6.46957 2 7 2C7.53043 2 8.03914 2.21071 8.41421 2.58579C8.78929 2.96086 9 3.46957 9 4V5C9 5.53043 8.78929 6.03914 8.41421 6.41421C8.03914 6.78929 7.53043 7 7 7C6.46957 7 5.96086 6.78929 5.58579 6.41421C5.21071 6.03914 5 5.53043 5 5V4Z"
                          fill="#030303"
                        />
                      </svg>
                    </span>
                    <div className=" h-16 flex items-start">
                      <input
                        className="placeholder-poppins bg-[#EDF0F3] placeholder:text-black placeholder:text-sm placeholder:font-normal w-[409px] h-12 border-b-[.5px] border-black/[.5] focus:outline-none text-xl"
                        id="title"
                        type="text"
                        placeholder={isTask ? "Add Guests" : "appointed to"}
                      />
                    </div>
                  </div>
                  <div className="flex flex-row justify-start space-x-[17px]">
                    <span className="">
                      <svg
                        width="21"
                        height="21"
                        viewBox="0 0 21 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.0459 7.0459H13.955"
                          stroke="black"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M7.0459 10.5H13.955"
                          stroke="black"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M7.0459 13.9541H10.5004"
                          stroke="black"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M13.5968 20H1.86364C1.63459 20 1.41492 19.909 1.25295 19.747C1.09099 19.5851 1 19.3654 1 19.1364V1.86364C1 1.63459 1.09099 1.41492 1.25295 1.25295C1.41492 1.09099 1.63459 1 1.86364 1H19.1364C19.3654 1 19.5851 1.09099 19.747 1.25295C19.909 1.41492 20 1.63459 20 1.86364V13.5968C20 13.7102 19.9777 13.8225 19.9343 13.9273C19.8909 14.0321 19.8272 14.1273 19.747 14.2075L14.2075 19.747C14.1273 19.8272 14.0321 19.8909 13.9273 19.9343C13.8225 19.9777 13.7102 20 13.5968 20Z"
                          stroke="black"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M19.9214 13.9541H13.9541V19.9218"
                          stroke="black"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </span>
                    <div className=" flex flex-col space-y-[12px]">
                      <span className="font-poppins text-black text-base font-medium">
                        Add Note
                      </span>
                      <textarea
                        id="message"
                        name="message"
                        rows="3"
                        class="block w-[410px] h-24 px-4 py-2 text-gray-700 bg-white border border-none rounded-[10px] resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      ></textarea>
                      <div className="flex flex-row space-x-[10px] justify-center">
                        <label className="cursor-pointer">
                          <input
                            type="radio"
                            id="taskColor"
                            class="peer sr-only"
                            name="taskcolor"
                            value="1"
                            checked={selectedColor === "1"}
                            onChange={handleColorChange}
                          />

                          <div
                            className={`w-[19px] h-[19px] bg-orange-400 rounded-full hover:border-3 hover:border-black ${
                              selectedColor === "1"
                                ? "border-3 border-black"
                                : ""
                            } `}
                          ></div>
                        </label>
                        <label className="cursor-pointer">
                          <input
                            type="radio"
                            id="taskColor"
                            class="peer sr-only"
                            name="taskcolor"
                            value="2"
                            checked={selectedColor === "2"}
                            onChange={handleColorChange}
                          />

                          <div
                            className={`w-[19px] h-[19px] bg-[#71CE9A] rounded-full hover:border-3 hover:border-black ${
                              selectedColor === "2"
                                ? "border-3 border-black"
                                : ""
                            } `}
                          ></div>
                        </label>
                        <label className="cursor-pointer">
                          <input
                            type="radio"
                            id="taskColor"
                            class="peer sr-only"
                            name="taskcolor"
                            value="3"
                            checked={selectedColor === "3"}
                            onChange={handleColorChange}
                          />

                          <div
                            className={`w-[19px] h-[19px] bg-[#418DFD] rounded-full hover:border-3 hover:border-black ${
                              selectedColor === "3"
                                ? "border-3 border-black"
                                : ""
                            } `}
                          ></div>
                        </label>
                        <label className="cursor-pointer">
                          <input
                            type="radio"
                            id="taskColor"
                            class="peer sr-only"
                            name="taskcolor"
                            value="4"
                            checked={selectedColor === "4"}
                            onChange={handleColorChange}
                          />

                          <div
                            className={`w-[19px] h-[19px] bg-[#F05A58] rounded-full hover:border-3 hover:border-black ${
                              selectedColor === "4"
                                ? "border-3 border-black"
                                : ""
                            } `}
                          ></div>
                        </label>
                        <label className="cursor-pointer">
                          <input
                            type="radio"
                            id="taskColor"
                            class="peer sr-only"
                            name="taskcolor"
                            value="5"
                            checked={selectedColor === "5"}
                            onChange={handleColorChange}
                          />

                          <div
                            className={`w-[19px] h-[19px] bg-[#6610F2] rounded-full hover:border-3 hover:border-black ${
                              selectedColor === "5"
                                ? "border-3 border-black"
                                : ""
                            } `}
                          ></div>
                        </label>
                        <label className="cursor-pointer">
                          <input
                            type="radio"
                            id="taskColor"
                            class="peer sr-only"
                            name="taskcolor"
                            value="6"
                            checked={selectedColor === "6"}
                            onChange={handleColorChange}
                          />

                          <div
                            className={`w-[19px] h-[19px] bg-yellow-500 rounded-full hover:border-3 hover:border-black ${
                              selectedColor === "6"
                                ? "border-3 border-black"
                                : ""
                            } `}
                          ></div>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pr-[14px] flex justify-end">
              <button className="w-[142px] h-9 bg-[#6610F2] rounded-[200px] text-white">
                save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Schedule;
