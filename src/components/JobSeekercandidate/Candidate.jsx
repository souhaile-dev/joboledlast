import React, { useState } from "react";
import NavBar from "../../components/dashboard/NavBar";
import cnd1 from "src/assets/svg/cnd1.svg";
import cnd2 from "src/assets/svg/cnd2.svg";
import cnd3 from "src/assets/svg/cnd3.svg";
import cnd4 from "src/assets/svg/cnd4.svg";
import cnd5 from "src/assets/svg/cnd5.svg";
import { Link, useLocation } from "react-router-dom";

const savedProf = [
  {
    id: 1,
    fullName: "Marlane Tirkin",
    avatar: cnd1,
    role: "Construction Foreman",
    experience: 5,
    matching: 66,
  },
  {
    id: 2,
    fullName: "Lambert Kitching",
    avatar: cnd2,
    role: "Construction Manager",
    experience: 15,
    matching: 65,
  },
  {
    id: 3,
    fullName: "Debi Deboick",
    avatar: cnd3,
    role: "Surveyor",
    experience: 2,
    matching: 54,
  },
  {
    id: 4,
    fullName: "Kristien Bouchier",
    avatar: cnd4,
    role: "Engineer",
    experience: 5,
    matching: 40,
  },
  {
    id: 5,
    fullName: "Alejandro Mamwell",
    avatar: cnd5,
    role: "Architect",
    experience: 20,
    matching: 59,
  },
  {
    id: 6,
    fullName: "Lou Ferenczi",
    avatar: cnd1,
    role: "Supervisor",
    experience: 4,
    matching: 17,
  },
  {
    id: 7,
    fullName: "Staford Farmar",
    avatar: cnd2,
    role: "Supervisor",
    experience: 6,
    matching: 39,
  },
  {
    id: 8,
    fullName: "Katerine Wims",
    avatar: cnd3,
    role: "Surveyor",
    experience: 16,
    matching: 49,
  },
  {
    id: 9,
    fullName: "Cass Shalders",
    avatar: cnd4,
    role: "Construction Worker",
    experience: 11,
    matching: 43,
  },
  {
    id: 10,
    fullName: "Angelico Bodsworth",
    avatar: cnd5,
    role: "Estimator",
    experience: 16,
    matching: 53,
  },
  {
    id: 11,
    fullName: "Valina Pedican",
    avatar: cnd1,
    role: "Subcontractor",
    experience: 17,
    matching: 71,
  },
  {
    id: 12,
    fullName: "Lorri Bothie",
    avatar: cnd2,
    role: "Construction Foreman",
    experience: 19,
    matching: 43,
  },
  {
    id: 13,
    fullName: "Ethelda Bruinemann",
    avatar: cnd3,
    role: "Estimator",
    experience: 14,
    matching: 75,
  },
  {
    id: 14,
    fullName: "Jan Hedaux",
    avatar: cnd4,
    role: "Supervisor",
    experience: 1,
    matching: 69,
  },
  {
    id: 15,
    fullName: "Gypsy Looker",
    avatar: cnd5,
    role: "Construction Manager",
    experience: 14,
    matching: 17,
  },
  {
    id: 16,
    fullName: "lora Mony",
    avatar: cnd1,
    role: "Construction ",
    experience: 4,
    matching: 29,
  },
  {
    id: 17,
    fullName: "Mikhor Nikey",
    avatar: cnd2,
    role: "Construction Manager",
    experience: 15,
    matching: 91,
  },
  {
    id: 18,
    fullName: "Sony dal",
    avatar: cnd3,
    role: " Manager",
    experience: 9,
    matching: 60,
  },
  {
    id: 19,
    fullName: "Marseil Loor",
    avatar: cnd4,
    role: "engineer",
    experience: 5,
    matching: 17,
  },
  {
    id: 20,
    fullName: "Solami Looker",
    avatar: cnd5,
    role: "doctor",
    experience: 1,
    matching: 10,
  },
  {
    id: 21,
    fullName: "Gypsy Looker",
    avatar: cnd1,
    role: "Construction Manager",
    experience: 14,
    matching: 17,
  },
  {
    id: 22,
    fullName: "Georney Soy",
    avatar: cnd2,
    role: " Manager",
    experience: 3,
    matching: 51,
  },
  

];
const Candidate = () => {
  const [searchInputVal, setIsearchInputVal] = useState("");
  // const [currentRecords, setCurrentRecords] = useState([""]);
  const handleSearchInputChange = (event) => {
    setIsearchInputVal(event.target.value);
    return;
  };
  const [activeButton, setActiveButton] = useState('application');

const handleButtonClick = (button) => {
  setActiveButton(button);
};

  // let filteredData;
  const handleSearchButtonClick = () => {
    if (searchInputVal != "") {
      // filteredData = savedProf.filter((item) => {
      //   return item.fullName
      //     .toLowerCase()
      //     .includes(searchInputVal.toLowerCase());
      // });

      setCurrentPage(1);
    }
  };
  const [activeItem, setActiveItem] = useState('active');

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  const itemClass = (item) => {
    return item === activeItem ? 'text-[#6610F2]' : 'text-black';
  };
  // To hold the actual data
  // const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(true);

  // setData(savedProf);
  // setLoading(false);

  let totalResumes = savedProf.length;

  // User is currently on this page
  const [currentPage, setCurrentPage] = useState(1);

  // Nbr of Records to be displayed on each page
  const [recordsPerPage] = useState(5);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

  // Records to be displayed on the current page
  const currentRecords = savedProf
    .filter((item) =>
      item.fullName.toLowerCase().includes(searchInputVal.toLowerCase())
    )
    .slice(indexOfFirstRecord, indexOfLastRecord);
  // savedProf.slice(indexOfFirstRecord, indexOfLastRecord);

  const nPages = Math.ceil(totalResumes / recordsPerPage);

  // const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

  const nextPage = () => {
    if (currentPage !== nPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  const prevPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  return (
    <div className="bg-white h-[832px] w-full overflow-y-scroll ">
      <NavBar hasSearch={false} navTitle="Candidtae" />
      <div className="flex flex-col justify-between space-y-[29px]">
        <div className="flex flex-col w-full">
          <div className="w-full px-[34px] mb-[13px] flex flex-row drop-shadow-[0_4px_7px_rgba(0,0,0,0.15)]">
            <div className="relative pl-2 basis-9/12 mb-16 flex items-center space-x-96">
            <div className="text-black text-base font-medium font-['Poppins']">Company</div>
            <div className="text-black text-base font-medium font-['Poppins']">Job title</div>
              {/* <input
                onChange={handleSearchInputChange}
                type="text"
                value={searchInputVal}
                placeholder="Search by keywords"
                className="placeholder-poppins placeholder:text-black/[.7] placeholder:text-[16px] placeholder:font-medium py-2 w-full h-[66px] pl-[59px] pr-4 rounded-l-[50px] bg-[#EDF0F3] border-gray-300 focus:outline-none"
              /> */}
             
            </div>
            <div className="absolute inset-y-0 left-2 top-10 flex items-center space-x-44">
              
              <select className="w-[269px] h-[50px] bg-gray-100 rounded-[30px] mx-3 px-4">
                <option value="">MarketPok</option>
                </select>
                <select className="w-[269px] h-[50px] bg-gray-100 rounded-[30px] mx-3 px-4">
                <option value="">Company Manager</option>
                </select>
                <div className="inline-flex">
      <button
        className={`${
          activeButton === 'application' ? 'bg-[#6610F2]' : 'bg-gray-100'
        }  w-[155.50px] h-[50px] rounded-tl-[30px] rounded-bl-[30px] text-gray-800 font-bold py-2 px-4 rounded-l`}
        onClick={() => handleButtonClick('application')}
      >
        Application
      </button>
      <button
        className={`${
          activeButton === 'matches' ? 'bg-[#6610F2]' : 'bg-gray-100'
        } w-[151px] h-[50px] rounded-[30px] text-gray-800 font-bold py-2 px-4 rounded-l`}
        onClick={() => handleButtonClick('matches')}
      >
        Matches
      </button> 
      
    </div> 
   
          
              </div>
            
          </div>
          
          {/* <div className="flex flex-row justify-between pl-[67px] pr-6">
            <span className="font-poppins font-normal text-xs">
              {totalResumes} Resume
            </span>

            <button className="flex flex-row w-32">
              
             
            </button>
          </div> */}
        </div>
        <div className="bg-white h-[50px] w-full flex justify-around items-center px-1 underline">
      <div
        className={`text-sm font-bold font-[Poppins] ${itemClass('active')}`}
        onClick={() => handleItemClick('active')}
      >
        <Link to="#">Active(3)</Link>
      </div>
      <div
        className={`text-sm font-normal font-[Poppins] ${itemClass('suspended')}`}
        onClick={() => handleItemClick('suspended')}
      >
        <Link to="#">Suspended(2)</Link>
      </div>
      <div
        className={`text-sm font-normal font-[Poppins] ${itemClass('ended')}`}
        onClick={() => handleItemClick('ended')}
      >
        <Link to="#">Ended(7)</Link>
      </div>
      <div
        className={`text-sm font-normal font-[Poppins] ${itemClass('draft')}`}
        onClick={() => handleItemClick('draft')}
      >
        <Link to="#">Draft(2)</Link>
      </div>
      <div className="flex items-center">
    <div className="text-black text-opacity-70 text-base font-medium font-[Poppins]">
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
<g opacity="0.7">
<path d="M17.7043 16.29L14.3054 12.9C15.402 11.5025 15.9971 9.77666 15.9948 8C15.9948 6.41775 15.5258 4.87103 14.647 3.55544C13.7683 2.23985 12.5192 1.21447 11.0579 0.608967C9.59657 0.00346625 7.98855 -0.15496 6.43721 0.153721C4.88586 0.462403 3.46085 1.22433 2.34239 2.34315C1.22393 3.46197 0.462254 4.88743 0.153672 6.43928C-0.15491 7.99113 0.00346513 9.59966 0.608771 11.0615C1.21408 12.5233 2.23913 13.7727 3.5543 14.6518C4.86947 15.5308 6.41569 16 7.99743 16C9.77351 16.0022 11.4988 15.407 12.8958 14.31L16.2848 17.71C16.3777 17.8037 16.4883 17.8781 16.6101 17.9289C16.7319 17.9797 16.8626 18.0058 16.9945 18.0058C17.1265 18.0058 17.2572 17.9797 17.379 17.9289C17.5008 17.8781 17.6114 17.8037 17.7043 17.71C17.798 17.617 17.8724 17.5064 17.9231 17.3846C17.9739 17.2627 18 17.132 18 17C18 16.868 17.9739 16.7373 17.9231 16.6154C17.8724 16.4936 17.798 16.383 17.7043 16.29ZM1.99936 8C1.99936 6.81332 2.35114 5.65328 3.01022 4.66658C3.66929 3.67989 4.60606 2.91085 5.70207 2.45673C6.79807 2.0026 8.00408 1.88378 9.16759 2.11529C10.3311 2.3468 11.3999 2.91825 12.2387 3.75736C13.0775 4.59648 13.6488 5.66558 13.8802 6.82946C14.1117 7.99335 13.9929 9.19975 13.5389 10.2961C13.0849 11.3925 12.3162 12.3295 11.3298 12.9888C10.3434 13.6481 9.18373 14 7.99743 14C6.40664 14 4.88101 13.3679 3.75615 12.2426C2.6313 11.1174 1.99936 9.5913 1.99936 8Z" fill="#030303"/>
</g>
</svg>
    </div>
    <input
      className="ml-2 px-2 text-black text-opacity-70 text-base font-medium font-[Poppins] outline-none"
      type="text"
      placeholder="Search by keywords"
    />
  
  </div>
  
    </div>
    <div className="float-right ml-auto flex items-center">
  <span className="text-xs underline text-[#6610F2] font-poppins font-normal">
    Export Resume
  </span>
  <i className="ml-2">
  <svg
                  className="inline-block"
                  width="12"
                  height="14"
                  viewBox="0 0 12 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.95 9.534C11.9162 9.44917 11.8688 9.37104 11.8099 9.303L9.80938 7.203C9.68381 7.07119 9.5135 6.99714 9.33592 6.99714C9.15834 6.99714 8.98803 7.07119 8.86246 7.203C8.73689 7.33481 8.66634 7.51359 8.66634 7.7C8.66634 7.88641 8.73689 8.06519 8.86246 8.197L9.72936 9.1H6.00166C5.8248 9.1 5.65519 9.17375 5.53013 9.30503C5.40507 9.4363 5.33481 9.61435 5.33481 9.8C5.33481 9.98565 5.40507 10.1637 5.53013 10.295C5.65519 10.4263 5.8248 10.5 6.00166 10.5H9.72936L8.86246 11.403C8.79995 11.4681 8.75034 11.5455 8.71649 11.6308C8.68263 11.7161 8.6652 11.8076 8.6652 11.9C8.6652 11.9924 8.68263 12.0839 8.71649 12.1692C8.75034 12.2545 8.79995 12.3319 8.86246 12.397C8.92445 12.4626 8.9982 12.5147 9.07946 12.5502C9.16073 12.5858 9.24789 12.6041 9.33592 12.6041C9.42395 12.6041 9.51111 12.5858 9.59237 12.5502C9.67364 12.5147 9.74739 12.4626 9.80938 12.397L11.8099 10.297C11.8717 10.2313 11.9194 10.1525 11.95 10.066C12.0167 9.89558 12.0167 9.70442 11.95 9.534ZM7.33537 12.6H2.00055C1.82369 12.6 1.65408 12.5263 1.52902 12.395C1.40396 12.2637 1.3337 12.0857 1.3337 11.9V2.1C1.3337 1.91435 1.40396 1.7363 1.52902 1.60503C1.65408 1.47375 1.82369 1.4 2.00055 1.4H5.33481V3.5C5.33481 4.05695 5.54558 4.5911 5.92076 4.98492C6.29594 5.37875 6.80479 5.6 7.33537 5.6H10.0028C10.1344 5.59931 10.2629 5.55773 10.3721 5.48049C10.4813 5.40326 10.5662 5.29383 10.6163 5.166C10.6673 5.03852 10.6813 4.89802 10.6564 4.76223C10.6314 4.62644 10.5688 4.50144 10.4762 4.403L6.47513 0.203C6.42 0.148551 6.35697 0.103657 6.28841 0.0699999H6.22839L6.04167 0H2.00055C1.46997 0 0.961125 0.221249 0.585949 0.615076C0.210772 1.0089 0 1.54305 0 2.1V11.9C0 12.457 0.210772 12.9911 0.585949 13.3849C0.961125 13.7788 1.46997 14 2.00055 14H7.33537C7.51223 14 7.68184 13.9263 7.8069 13.795C7.93196 13.6637 8.00222 13.4857 8.00222 13.3C8.00222 13.1143 7.93196 12.9363 7.8069 12.805C7.68184 12.6737 7.51223 12.6 7.33537 12.6ZM6.66851 2.387L8.39566 4.2H7.33537C7.15851 4.2 6.98889 4.12625 6.86383 3.99497C6.73877 3.8637 6.66851 3.68565 6.66851 3.5V2.387Z"
                    fill="#6610F2"
                  />
                </svg>
  </i>
</div>



        <div className="w-full px-[34px] h-[500px]">
          {currentRecords.map((item) => (
            <div
              key={item.id}
              className="h-[95px] my-[10px] pr-[23px] pl-[13px] flex flex-row items-center justify-between space-x-[20px] bg-[#EDF0F3] rounded-[66px]"
            >
              <div className="flex flex-row space-x-[11px] items-center">
                <img
                  className="w-[74px] h-[74px] rounded-full mr-4"
                  src={item.avatar}
                  alt="Avatar"
                />
                <div>
                  <h2 className="text-xl">{item.fullName}</h2>
                  <p className="text-xs">{item.role}</p>
                </div>
              </div>
              <div className="">
                <span className="font-poppins font-normal text-xs">
                  {item.experience} years of experience
                </span>
              </div>

              <div className="flex flex-row items-center justify-center space-x-[11px]">
                <i>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.0895 5.10854C13.7283 3.9184 13.0648 2.84215 12.1639 1.98466C11.263 1.12717 10.1553 0.517685 8.94874 0.215596C7.74222 -0.0864917 6.47801 -0.0708799 5.27931 0.26091C4.08062 0.592701 2.98831 1.22935 2.10883 2.10883C1.22935 2.98831 0.592701 4.08062 0.26091 5.27931C-0.0708799 6.47801 -0.0864917 7.74222 0.215596 8.94874C0.517685 10.1553 1.12717 11.263 1.98466 12.1639C2.84215 13.0648 3.9184 13.7283 5.10854 14.0895C5.46983 15.2797 6.13327 16.3559 7.03419 17.2134C7.93512 18.0709 9.04282 18.6804 10.2493 18.9825C11.4559 19.2846 12.7201 19.269 13.9188 18.9372C15.1175 18.6054 16.2098 17.9687 17.0893 17.0893C17.9687 16.2098 18.6054 15.1175 18.9372 13.9188C19.269 12.7201 19.2846 11.4559 18.9825 10.2493C18.6804 9.04282 18.0709 7.93512 17.2134 7.03419C16.3559 6.13327 15.2797 5.46983 14.0895 5.10854ZM1.79854 7.19954C1.80141 5.98397 2.21433 4.80492 2.97049 3.85316C3.72665 2.9014 4.78182 2.23261 5.96527 1.95499C7.14872 1.67738 8.39122 1.80718 9.49174 2.3234C10.5923 2.83961 11.4864 3.71205 12.0295 4.79954H11.9985C10.089 4.79954 8.25764 5.55811 6.90737 6.90837C5.55711 8.25864 4.79854 10.09 4.79854 11.9995V12.0305C3.89861 11.5841 3.14107 10.8954 2.6111 10.0419C2.08112 9.1885 1.79973 8.20415 1.79854 7.19954ZM12.5985 7.19954C12.5984 7.9566 12.4391 8.70517 12.1309 9.39667C11.8228 10.0882 11.3727 10.7071 10.8098 11.2134C10.2469 11.7197 9.58391 12.102 8.86375 12.3354C8.14359 12.5689 7.38239 12.6483 6.62954 12.5685C6.54469 11.7678 6.63998 10.9582 6.90844 10.1991C7.1769 9.43996 7.61173 8.75047 8.1811 8.1811C8.75047 7.61173 9.43996 7.1769 10.1991 6.90844C10.9582 6.63998 11.7678 6.54469 12.5685 6.62954C12.5886 6.81888 12.5986 7.00915 12.5985 7.19954ZM11.9985 17.3995C10.9939 17.3984 10.0096 17.117 9.15615 16.587C8.30271 16.057 7.61403 15.2995 7.16754 14.3995H7.19854C8.14406 14.3995 9.08032 14.2133 9.95386 13.8515C10.8274 13.4896 11.6211 12.9593 12.2897 12.2907C12.9583 11.6221 13.4886 10.8284 13.8505 9.95486C14.2123 9.08132 14.3985 8.14506 14.3985 7.19954V7.16854C15.486 7.71167 16.3585 8.60583 16.8747 9.70635C17.3909 10.8069 17.5207 12.0494 17.2431 13.2328C16.9655 14.4163 16.2967 15.4714 15.3449 16.2276C14.3932 16.9838 13.2141 17.3967 11.9985 17.3995Z"
                      fill="#6610F2"
                    />
                  </svg>
                </i>
                <span className="text-[#6610F2] font-poppins font-medium text-base">
                  {item.matching} % Match
                </span>
              </div>
              <div className="text-black text-sm font-normal font-['Poppins']">Reject</div>
              <div className="flex flex-row items-center justify-center space-x-[11px]">
                <button className="w-[138px] h-[43px] bg-blue-500 rounded-[34px] font-montserrat font-bold text-black text-base">
                  View 
                </button>
                {/* <button className="w-[139px] h-[34px] bg-[#30E981] rounded-[34px] font-montserrat font-bold text-white text-base">
                  Message
                </button> */}
              </div>
            </div>
          ))}
        </div>
        <div className="w-full px-[34px] flex justify-center items-center h-[70px] bg-white">
          <div className="flex flex-row items-center space-x-[16px]">
            <button
              className={` ${
                currentPage == "1" ? "opacity-50 cursor-default" : ""
              }`}
              onClick={prevPage}
            >
              <i>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="9" cy="9" r="9" fill="#418DFD" />
                  <path d="M11 5L7 9L11 13" stroke="#EDF0F3" strokeWidth="2" />
                </svg>
              </i>
            </button>
            <span className="font-poppins text-xs font-normal">
              {currentPage} of {nPages}
            </span>
            <button
              className={` ${
                nPages == currentPage ? "opacity-50 cursor-default" : ""
              }`}
              onClick={nextPage}
            >
              <i>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="9"
                    cy="9"
                    r="9"
                    transform="rotate(-180 9 9)"
                    fill="#418DFD"
                  />
                  <path d="M7 13L11 9L7 5" stroke="#EDF0F3" strokeWidth="2" />
                </svg>
              </i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Candidate;
