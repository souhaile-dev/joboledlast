import React from "react";
import NavBar from "./NavBar";
// import TeamsModal from "../ui/TeamsModal";
const teamMmbrs = {
  "1": {
    fullName: "Jim Carlsen",
    avatar: "https://via.placeholder.com/150",
    role: "Software Developer",
    email: "email@example.com",
    phoneNbr: "+212 123345678",
  },
  "2": {
    fullName: "Jim Carlsen",
    avatar: "https://via.placeholder.com/150",
    role: "Software Developer",
    email: "email@example.com",
    phoneNbr: "+212 123345678",
  },
  "3": {
    fullName: "Jim Carlsen",
    avatar: "https://via.placeholder.com/150",
    role: "Software Developer",
    email: "email@example.com",
    phoneNbr: "+212 123345678",
  },
  "4": {
    fullName: "Jim Carlsen",
    avatar: "https://via.placeholder.com/150",
    role: "Software Developer",
    email: "email@example.com",
    phoneNbr: "+212 123345678",
  },
  "5": {
    fullName: "Jim Carlsen",
    avatar: "https://via.placeholder.com/150",
    role: "Software Developer",
    email: "email@example.com",
    phoneNbr: "+212 123345678",
  },
  "6": {
    fullName: "Jim Carlsen",
    avatar: "https://via.placeholder.com/150",
    role: "Software Developer",
    email: "email@example.com",
    phoneNbr: "+212 123345678",
  },
};
// let showThis = [];
const Team = () => {
  // const [showThis, setShowThis] = useState([]);

  // const addItems = (item) => {
  //   setShowThis((prevList) => [...prevList, item]);
  // };
  return (
    <div className="bg-white">
      <NavBar hasSearch={false} navTitle="Team" />
      <div className="h-full w-full flex flex-col content-center justify-center align-middle">
        <div className=" mb-[13px] w-full flex flex-wrap justify-center">
          {/* <TeamsModal /> */}
          {Object.keys(teamMmbrs).map((key) => (
            <div
              key={key}
              className="relative bg-[#EDF0F3] w-[268px] h-[230px] rounded-[20px] py-[14px] px-[16px] m-3 flex flex-col space-y-[34px]"
            >
              {/* {addItems({ key: key, val: false })} */}
              <div className=" flex flex-row justify-between">
                <div className="flex items-center justify-center font-normal font-poppins">
                  <img
                    className="w-12 h-12 rounded-full mr-4"
                    src={teamMmbrs[key].avatar}
                    alt="Avatar"
                  />
                  <div>
                    <h2 className="text-xl">{teamMmbrs[key].fullName}</h2>
                    <p className="text-xs">{teamMmbrs[key].role}</p>
                  </div>
                  {/* <Link to="/login">About</Link> */}
                </div>
                <button className="flex align-top w-3">
                  {/* onClick={() => (showThis[key] = true)} */}
                  <i>
                    <svg
                      className="inline-block"
                      width="5"
                      height="19"
                      viewBox="0 0 5 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="2.49961" cy="1.9" r="1.9" fill="black" />
                      <circle cx="2.49961" cy="9.5001" r="1.9" fill="black" />
                      <circle cx="2.49961" cy="17.1002" r="1.9" fill="black" />
                    </svg>
                  </i>
                </button>
              </div>
              <div className="flex flex-row justify-around">
                <div className="flex flex-col justify-center space-y-3">
                  <i className="w-[20px] h-[20px] mx-auto">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.4582 10.9603C17.2382 10.9603 17.0082 10.8903 16.7882 10.8403C16.3427 10.7421 15.9048 10.6118 15.4782 10.4503C15.0143 10.2815 14.5043 10.2903 14.0465 10.4749C13.5886 10.6595 13.2153 11.007 12.9982 11.4503L12.7782 11.9003C11.8042 11.3585 10.9092 10.6855 10.1182 9.90032C9.33294 9.10933 8.65999 8.21431 8.11817 7.24032L8.53817 6.96032C8.98153 6.74323 9.32895 6.36985 9.51356 5.91201C9.69817 5.45417 9.70694 4.94423 9.53817 4.48032C9.37939 4.05274 9.2491 3.61512 9.14817 3.17032C9.09817 2.95032 9.05817 2.72032 9.02817 2.49032C8.90673 1.78594 8.53779 1.14806 7.98779 0.691557C7.43779 0.235054 6.74286 -0.0100738 6.02817 0.000317303H3.02817C2.5972 -0.00372924 2.17042 0.0851307 1.77688 0.260848C1.38334 0.436565 1.03228 0.695013 0.747598 1.0186C0.462918 1.34219 0.251302 1.72331 0.127155 2.13603C0.00300869 2.54875 -0.0307535 2.98338 0.0281672 3.41032C0.560905 7.5997 2.4742 11.4922 5.46582 14.473C8.45744 17.4537 12.3569 19.3528 16.5482 19.8703H16.9282C17.6656 19.8714 18.3776 19.6008 18.9282 19.1103C19.2445 18.8274 19.4973 18.4805 19.6696 18.0926C19.842 17.7048 19.9301 17.2848 19.9282 16.8603V13.8603C19.9159 13.1657 19.663 12.4969 19.2125 11.968C18.762 11.4391 18.142 11.0829 17.4582 10.9603ZM17.9582 16.9603C17.958 17.1023 17.9276 17.2426 17.8689 17.3719C17.8103 17.5013 17.7248 17.6166 17.6182 17.7103C17.5068 17.8073 17.3761 17.8797 17.2348 17.9228C17.0935 17.9659 16.9447 17.9787 16.7982 17.9603C13.0531 17.4801 9.5744 15.7668 6.91088 13.0906C4.24736 10.4144 2.55058 6.92765 2.08817 3.18032C2.07225 3.03384 2.0862 2.88565 2.12917 2.74471C2.17214 2.60377 2.24324 2.473 2.33817 2.36032C2.43188 2.25365 2.54723 2.16816 2.67655 2.10953C2.80586 2.05091 2.94618 2.0205 3.08817 2.02032H6.08817C6.32071 2.01514 6.54779 2.0912 6.73031 2.23539C6.91283 2.37958 7.03938 2.58289 7.08817 2.81032C7.12817 3.08365 7.17817 3.35365 7.23817 3.62032C7.35369 4.14746 7.50743 4.6655 7.69817 5.17032L6.29817 5.82032C6.17846 5.87524 6.07079 5.95326 5.98132 6.04991C5.89186 6.14656 5.82237 6.25993 5.77684 6.38351C5.73131 6.50709 5.71064 6.63845 5.71601 6.77004C5.72139 6.90163 5.75271 7.03086 5.80817 7.15032C7.24737 10.2331 9.72541 12.7111 12.8082 14.1503C13.0516 14.2503 13.3247 14.2503 13.5682 14.1503C13.6929 14.1057 13.8075 14.0368 13.9053 13.9475C14.0032 13.8582 14.0823 13.7504 14.1382 13.6303L14.7582 12.2303C15.2751 12.4152 15.8028 12.5688 16.3382 12.6903C16.6048 12.7503 16.8748 12.8003 17.1482 12.8403C17.3756 12.8891 17.5789 13.0157 17.7231 13.1982C17.8673 13.3807 17.9433 13.6078 17.9382 13.8403L17.9582 16.9603Z"
                        fill="black"
                      />
                    </svg>
                  </i>
                  <span className="font-normal font-poppins text-xs text-black/70">
                    Call
                  </span>
                </div>
                <div className="flex flex-col justify-center space-y-3">
                  <i className="w-[20px] h-[20px] mx-auto">
                    <svg
                      width="21"
                      height="21"
                      viewBox="0 0 21 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.0244 11.022C10.5767 11.022 11.0244 10.5743 11.0244 10.022C11.0244 9.46969 10.5767 9.02197 10.0244 9.02197C9.47213 9.02197 9.02441 9.46969 9.02441 10.022C9.02441 10.5743 9.47213 11.022 10.0244 11.022Z"
                        fill="black"
                      />
                      <path
                        d="M14.0244 11.022C14.5767 11.022 15.0244 10.5743 15.0244 10.022C15.0244 9.46969 14.5767 9.02197 14.0244 9.02197C13.4721 9.02197 13.0244 9.46969 13.0244 10.022C13.0244 10.5743 13.4721 11.022 14.0244 11.022Z"
                        fill="black"
                      />
                      <path
                        d="M6.02441 11.022C6.5767 11.022 7.02441 10.5743 7.02441 10.022C7.02441 9.46969 6.5767 9.02197 6.02441 9.02197C5.47213 9.02197 5.02441 9.46969 5.02441 10.022C5.02441 10.5743 5.47213 11.022 6.02441 11.022Z"
                        fill="black"
                      />
                      <path
                        d="M17.094 2.952C15.4533 1.3005 13.2877 0.273208 10.9707 0.0472367C8.65365 -0.178734 6.33039 0.410773 4.40143 1.71413C2.47247 3.01748 1.05868 4.953 0.403808 7.18701C-0.251063 9.42101 -0.105981 11.8135 0.814044 13.952C0.909934 14.1508 0.941397 14.3745 0.904044 14.592L0.024044 18.822C-0.00985986 18.9842 -0.00293664 19.1522 0.0441915 19.3111C0.0913197 19.4699 0.177176 19.6146 0.294044 19.732C0.389848 19.8271 0.503918 19.9018 0.629378 19.9517C0.754838 20.0015 0.88909 20.0254 1.02404 20.022H1.22404L5.50404 19.162C5.72157 19.1358 5.94216 19.1669 6.14404 19.252C8.28254 20.172 10.675 20.3171 12.909 19.6622C15.143 19.0074 17.0786 17.5936 18.3819 15.6646C19.6853 13.7356 20.2748 11.4124 20.0488 9.09537C19.8228 6.77836 18.7955 4.61278 17.144 2.972L17.094 2.952ZM17.924 11.312C17.7285 12.506 17.2647 13.6401 16.5676 14.6289C15.8704 15.6177 14.9581 16.4356 13.8992 17.0209C12.8403 17.6061 11.6624 17.9436 10.4543 18.0079C9.24609 18.0722 8.03907 17.8616 6.92404 17.392C6.52859 17.2238 6.10378 17.1354 5.67404 17.132C5.48632 17.1333 5.29903 17.15 5.11404 17.182L2.29404 17.752L2.86404 14.932C2.97757 14.3213 2.90439 13.6905 2.65404 13.122C2.18444 12.007 1.97385 10.7999 2.03814 9.59177C2.10242 8.3836 2.43991 7.20574 3.02519 6.14685C3.61047 5.08795 4.4283 4.17559 5.41714 3.47844C6.40598 2.7813 7.54006 2.31751 8.73404 2.122C9.98732 1.91631 11.2716 2.01197 12.4805 2.40106C13.6895 2.79014 14.7885 3.46148 15.6865 4.35953C16.5846 5.25758 17.2559 6.35655 17.645 7.56552C18.0341 8.77449 18.1297 10.0587 17.924 11.312Z"
                        fill="black"
                      />
                    </svg>
                  </i>
                  <span className="font-normal font-poppins text-xs text-black/70">
                    Message
                  </span>
                </div>
                <div className="flex flex-col justify-center space-y-3">
                  <i className="w-[20px] h-[20px] mx-auto">
                    <svg
                      width="21"
                      height="21"
                      viewBox="0 0 21 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.0459 7.04541H13.955"
                        stroke="black"
                        strokeWidth="2"
                        stroke-linecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7.0459 10.5H13.955"
                        stroke="black"
                        strokeWidth="2"
                        stroke-linecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7.0459 13.9546H10.5004"
                        stroke="black"
                        strokeWidth="2"
                        stroke-linecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M13.5968 20H1.86364C1.63459 20 1.41492 19.909 1.25295 19.747C1.09099 19.5851 1 19.3654 1 19.1364V1.86364C1 1.63459 1.09099 1.41492 1.25295 1.25295C1.41492 1.09099 1.63459 1 1.86364 1H19.1364C19.3654 1 19.5851 1.09099 19.747 1.25295C19.909 1.41492 20 1.63459 20 1.86364V13.5968C20 13.7102 19.9777 13.8225 19.9343 13.9273C19.8909 14.0321 19.8272 14.1273 19.747 14.2075L14.2075 19.747C14.1273 19.8272 14.0321 19.8909 13.9273 19.9343C13.8225 19.9777 13.7102 20 13.5968 20Z"
                        stroke="black"
                        strokeWidth="2"
                        stroke-linecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M19.9214 13.9536H13.9541V19.9213"
                        stroke="black"
                        strokeWidth="2"
                        stroke-linecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </i>
                  <span className="font-normal font-poppins text-xs text-black/70">
                    Note
                  </span>
                </div>
              </div>

              <div className="flex flex-col justify-center content-center text-center">
                <span className="text-xs font-poppins font-normal">
                  {teamMmbrs[key].email}
                </span>
                <span className="text-xs font-poppins font-normal">
                  {teamMmbrs[key].phoneNbr}
                </span>
              </div>
              {/* {showThis[key] && (
                <div className="absolute top-0 left-0 w-full h-full rounded-[20px] z-10 bg-[#030303]/40 flex flex-col content-center justify-center align-middle">
                  <button class="  bg-blue-500 text-white p-2 rounded hover:bg-blue-800 m-2">
                    Button
                  </button>
                  <button class="  bg-blue-500 text-white p-2 rounded hover:bg-blue-800 m-2">
                    Button
                  </button>
                </div>
              )} */}
            </div>
          ))}
        </div>
        <div className="flex justify-center w-full my-[52px]">
          <button className="btn-06 color-it inline-flex items-center">
            <i className="flex justify-center pb-1 basis-3/12">
              <svg
                className="inline-block"
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.85034 6.8496L11.5686 6.85335C11.7097 6.85335 11.8451 6.79728 11.9449 6.69749C12.0447 6.59769 12.1008 6.46233 12.1008 6.32119C12.1008 6.18005 12.0447 6.04469 11.9449 5.94489C11.8451 5.84509 11.7097 5.78903 11.5686 5.78903L6.85034 5.79278L6.85409 1.07452C6.85409 0.933382 6.79802 0.798024 6.69822 0.698224C6.59842 0.598425 6.46307 0.542358 6.32193 0.542358C6.18079 0.542358 6.04543 0.598425 5.94563 0.698224C5.84583 0.798024 5.78977 0.933382 5.78977 1.07452L5.79351 5.79278L1.07526 5.78903C1.00529 5.78874 0.935965 5.80231 0.87127 5.82895C0.806576 5.85559 0.747797 5.89478 0.698324 5.94425C0.648851 5.99373 0.609663 6.05251 0.583021 6.1172C0.556379 6.1819 0.54281 6.25122 0.543097 6.32119C0.54281 6.39115 0.556378 6.46048 0.58302 6.52518C0.609662 6.58987 0.648851 6.64865 0.698324 6.69812C0.747797 6.7476 0.806576 6.78679 0.87127 6.81343C0.935964 6.84007 1.00529 6.85364 1.07526 6.85335L5.79351 6.8496L5.78977 11.5679C5.78948 11.6378 5.80305 11.7072 5.82969 11.7718C5.85633 11.8365 5.89552 11.8953 5.94499 11.9448C5.99447 11.9943 6.05325 12.0335 6.11794 12.0601C6.18263 12.0867 6.25196 12.1003 6.32193 12.1C6.39189 12.1003 6.46122 12.0867 6.52592 12.0601C6.59061 12.0335 6.64939 11.9943 6.69886 11.9448C6.74834 11.8953 6.78753 11.8365 6.81417 11.7718C6.84081 11.7072 6.85438 11.6378 6.85409 11.5679L6.85034 6.8496Z"
                  stroke="white"
                />
              </svg>
            </i>
            <span className="font-poppins text-white text-left basis-9/12">
              Add new member
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Team;
