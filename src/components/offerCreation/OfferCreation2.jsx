import React from 'react';
import fichier from "../../assets/png/Fichier.png"
import ProfileImage from 'src/assets/img/Profile.svg';
import './style2.css';


export const OfferCreation2 = () => {
  return (
    <div className="offer-creation">
      <div className="div">
        <div className="overlap-group">
          <div className="text-wrapper">Dashboard</div>
          <svg className="vector" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
<path d="M5.88889 1H3.22222C2.63285 1 2.06762 1.23413 1.65087 1.65087C1.23413 2.06762 1 2.63285 1 3.22222C1 3.81159 1.23413 4.37682 1.65087 4.79357C2.06762 5.21032 2.63285 5.44444 3.22222 5.44444H5.88889C6.47826 5.44444 7.04349 5.21032 7.46024 4.79357C7.87699 4.37682 8.11111 3.81159 8.11111 3.22222C8.11111 2.63285 7.87699 2.06762 7.46024 1.65087C7.04349 1.23413 6.47826 1 5.88889 1ZM5.88889 4.55556H3.22222C2.8686 4.55556 2.52946 4.41508 2.27941 4.16503C2.02936 3.91498 1.88889 3.57584 1.88889 3.22222C1.88889 2.8686 2.02936 2.52946 2.27941 2.27941C2.52946 2.02936 2.8686 1.88889 3.22222 1.88889H5.88889C6.24251 1.88889 6.58165 2.02936 6.8317 2.27941C7.08175 2.52946 7.22222 2.8686 7.22222 3.22222C7.22222 3.57584 7.08175 3.91498 6.8317 4.16503C6.58165 4.41508 6.24251 4.55556 5.88889 4.55556ZM5.88889 7.22222H3.22222C2.63285 7.22222 2.06762 7.45635 1.65087 7.8731C1.23413 8.28984 1 8.85507 1 9.44444V14.7778C1 15.3671 1.23413 15.9324 1.65087 16.3491C2.06762 16.7659 2.63285 17 3.22222 17H5.88889C6.47826 17 7.04349 16.7659 7.46024 16.3491C7.87699 15.9324 8.11111 15.3671 8.11111 14.7778V9.44444C8.11111 8.85507 7.87699 8.28984 7.46024 7.8731C7.04349 7.45635 6.47826 7.22222 5.88889 7.22222ZM7.22222 14.7778C7.22222 15.1314 7.08175 15.4705 6.8317 15.7206C6.58165 15.9706 6.24251 16.1111 5.88889 16.1111H3.22222C2.8686 16.1111 2.52946 15.9706 2.27941 15.7206C2.02936 15.4705 1.88889 15.1314 1.88889 14.7778V9.44444C1.88889 9.09082 2.02936 8.75168 2.27941 8.50164C2.52946 8.25159 2.8686 8.11111 3.22222 8.11111H5.88889C6.24251 8.11111 6.58165 8.25159 6.8317 8.50164C7.08175 8.75168 7.22222 9.09082 7.22222 9.44444V14.7778ZM14.7778 12.5556H12.1111C11.5217 12.5556 10.9565 12.7897 10.5398 13.2064C10.123 13.6232 9.88889 14.1884 9.88889 14.7778C9.88889 15.3671 10.123 15.9324 10.5398 16.3491C10.9565 16.7659 11.5217 17 12.1111 17H14.7778C15.3671 17 15.9324 16.7659 16.3491 16.3491C16.7659 15.9324 17 15.3671 17 14.7778C17 14.1884 16.7659 13.6232 16.3491 13.2064C15.9324 12.7897 15.3671 12.5556 14.7778 12.5556ZM14.7778 16.1111H12.1111C11.7575 16.1111 11.4184 15.9706 11.1683 15.7206C10.9183 15.4705 10.7778 15.1314 10.7778 14.7778C10.7778 14.4242 10.9183 14.085 11.1683 13.835C11.4184 13.5849 11.7575 13.4444 12.1111 13.4444H14.7778C15.1314 13.4444 15.4705 13.5849 15.7206 13.835C15.9706 14.085 16.1111 14.4242 16.1111 14.7778C16.1111 15.1314 15.9706 15.4705 15.7206 15.7206C15.4705 15.9706 15.1314 16.1111 14.7778 16.1111ZM14.7778 1H12.1111C11.5217 1 10.9565 1.23413 10.5398 1.65087C10.123 2.06762 9.88889 2.63285 9.88889 3.22222V8.55556C9.88889 9.14493 10.123 9.71016 10.5398 10.1269C10.9565 10.5437 11.5217 10.7778 12.1111 10.7778H14.7778C15.3671 10.7778 15.9324 10.5437 16.3491 10.1269C16.7659 9.71016 17 9.14493 17 8.55556V3.22222C17 2.63285 16.7659 2.06762 16.3491 1.65087C15.9324 1.23413 15.3671 1 14.7778 1ZM16.1111 8.55556C16.1111 8.90918 15.9706 9.24832 15.7206 9.49836C15.4705 9.74841 15.1314 9.88889 14.7778 9.88889H12.1111C11.7575 9.88889 11.4184 9.74841 11.1683 9.49836C10.9183 9.24832 10.7778 8.90918 10.7778 8.55556V3.22222C10.7778 2.8686 10.9183 2.52946 11.1683 2.27941C11.4184 2.02936 11.7575 1.88889 12.1111 1.88889H14.7778C15.1314 1.88889 15.4705 2.02936 15.7206 2.27941C15.9706 2.52946 16.1111 2.8686 16.1111 3.22222V8.55556Z" fill="black" stroke="black" stroke-width="0.5"/>
</svg>
        </div>
        <div className="overlap">
          <div className="text-wrapper-2 text-black text-[32px] font-normal font-['Montserrat']">Create Job Position</div>
          <div className="div-wrapper w-[481px] h-[252px] bg-gray-100 rounded-[20px]">
            <p className="p">
              Please provide a detailed description of the job responsibilities, requirements, and qualifications here.
            </p>
          </div>
          <img className="line" alt="Line" src="line-1.svg" />
          <img className="img" alt="Line" src="line-2.svg" />
          <img className="line-2" alt="Line" src="line-3.svg" />
          <p className="text-wrapper-3">Please enter the position title for your job offer</p>
          <div className="text-wrapper-4 w-[116px] h-[17px] text-black text-base font-medium font-['Poppins']">Job Title</div>
          <div className="text-wrapper-5 w-[116px] h-[17px] text-black text-base font-medium font-['Poppins']">Salary Range</div>
          <div className="text-wrapper-6 w-[235px] h-[17px] text-black text-base font-medium font-['Poppins']">Education Requirements</div>
          <div className="text-wrapper-7 text-black text-xl font-normal font-['Poppins']">Company</div>
          <div className="text-wrapper-8 w-[116px] h-[17px] text-black text-base font-medium font-['Poppins']">Job Description</div>
          <div className="frame px-7 py-2">
          <button className="text-wrapper-9 w-[109px] h-[29px] bg-[#6610F2] text-center text-white text-base font-bold font-['Poppins'] rounded-[20px]" divClassName="component-instance" text="Publish">Full Time</button>
            
          </div>
          <div className="frame-2">
            <button className="text-wrapper-10 text-black text-xs font-normal font-['Poppins'] w-[127px] h-[26px] px-7 py-1 bg-gray-100 rounded-[22px]">Senior Level</button>
          </div>
          <div className="frame-3">
            <button className="text-wrapper-10 text-black text-xs font-normal font-['Poppins'] w-[127px] h-[26px] px-7 py-1 bg-gray-100 rounded-[22px]">Remote</button>
          </div>
          <div className="frame-4">
            <button className="text-wrapper-10 text-black text-xs font-normal font-['Poppins'] w-[127px] h-[26px] px-7 py-1 bg-gray-100 rounded-[22px]">Internship</button>
          </div>
          <div className="frame-5">
            <button className="text-wrapper-10 text-black text-xs font-normal font-['Poppins'] w-[127px] h-[26px] px-7 py-1 bg-gray-100 rounded-[22px]">Entry Level</button>
          </div>
          <div className="frame-6">
            <button className="text-wrapper-10 text-black text-xs font-normal font-['Poppins'] w-[127px] h-[26px] px-7 py-1 bg-gray-100 rounded-[22px]">Contract</button>
          </div>
          <div className="text-wrapper-11 ">From</div>
          <div className="text-wrapper-12">To</div>
          <div className="overlap-2">
            
            <select className=" w-[300px] h-[50px]  bg-gray-100 rounded-[30px] opacity-70 text-black text-sm font-normal font-['Poppins']">
  <option value="masters " className='ml-[20px]'>Master's Degree</option>
  {/* Add more options as needed */}
</select>
          </div>
          <div className="overlap-3">
            
            <select className=" w-[300px] h-[50px] mt-[32px] bg-gray-100 rounded-[30px] opacity-70 text-black text-sm font-normal font-['Poppins']">
  <option value="masters " className='ml-[20px]'>Marketpok</option>
  {/* Add more options as needed */}
</select>
          </div>
        
          <button className="component-3 w-[150px] h-9 bg-[#6610F2] text-center text-white text-base font-bold font-['Montserrat'] rounded-[20px]" divClassName="component-instance" text="Publish">Publish</button>
          <button
            className="component-3-instance w-[186px] h-9 bg-gray-100 rounded-[20px]"
            divClassName="design-component-instance-node"
            text="Save As a Draft"
          >Save As Draft</button>
          <div className="text-wrapper-14 text-black text-base font-medium font-['Poppins']">Employment Type</div>
          <p className="text-wrapper-15 ">Please specify the salary range or compensation package for this position:</p>
          <p className="text-wrapper-16">
            Please specify the educational background or degree required for the position.
          </p>
          <p className="text-wrapper-17">
            If you have multiple companies associated with your account, Select the relevant company for this job offer:
          </p>
        </div>
        <img className=" ellipse w-14 h-14 rounded-full" src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp" />
        <div className="overlap-4">
          <div className="text-wrapper-18">Sed Barreth</div>
          <div className="text-wrapper-19">CEO</div>
        </div>
        <div className="w-[562px] h-14 left-[291px] top-[38px] absolute bg-white rounded-[10px] flex items-center">
             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19" fill="none">
    <path d="M19.4323 16.29L15.8157 12.9C16.9826 11.5025 17.6157 9.77666 17.6134 8C17.6134 6.41775 17.1143 4.87103 16.1792 3.55544C15.2441 2.23985 13.9151 1.21447 12.3601 0.608967C10.8052 0.00346625 9.09412 -0.15496 7.44338 0.153721C5.79264 0.462403 4.27634 1.22433 3.08622 2.34315C1.8961 3.46197 1.08562 4.88743 0.757267 6.43928C0.428915 7.99113 0.597437 9.59966 1.24152 11.0615C1.88561 12.5233 2.97633 13.7727 4.37576 14.6518C5.77519 15.5308 7.42048 16 9.10356 16C10.9934 16.0022 12.8292 15.407 14.3158 14.31L17.9218 17.71C18.0207 17.8037 18.1384 17.8781 18.268 17.9289C18.3976 17.9797 18.5367 18.0058 18.6771 18.0058C18.8175 18.0058 18.9565 17.9797 19.0862 17.9289C19.2158 17.8781 19.3334 17.8037 19.4323 17.71C19.532 17.617 19.6112 17.5064 19.6652 17.3846C19.7192 17.2627 19.747 17.132 19.747 17C19.747 16.868 19.7192 16.7373 19.6652 16.6154C19.6112 16.4936 19.532 16.383 19.4323 16.29ZM2.7212 8C2.7212 6.81332 3.09552 5.65328 3.79683 4.66658C4.49813 3.67989 5.49491 2.91085 6.66114 2.45673C7.82736 2.0026 9.11064 1.88378 10.3487 2.11529C11.5867 2.3468 12.724 2.91825 13.6166 3.75736C14.5092 4.59648 15.117 5.66558 15.3633 6.82946C15.6095 7.99335 15.4831 9.19975 15.0001 10.2961C14.517 11.3925 13.699 12.3295 12.6494 12.9888C11.5998 13.6481 10.3659 14 9.10356 14C7.41085 14 5.78748 13.3679 4.59055 12.2426C3.39363 11.1174 2.7212 9.5913 2.7212 8Z" fill="black" fill-opacity="0.5"/>
  </svg>
  <input
    type="text"
    className="w-48 h-8 text-center text-black text-opacity-50 text-sm font-normal font-['Poppins'] rounded pl-2"
    placeholder="General Search..."
  />
            
             </div>
        <div className="text-wrapper-21">Menu</div>
        <img className="fichier" alt="Fichier" src={fichier} />
        <div className="text-wrapper-22">Settings</div>
        <div className="text-wrapper-23">Team</div>
        <div className="text-wrapper-24">Saved Profiles</div>
        <div className="text-wrapper-25">Schudule</div>
        <div className="text-wrapper-26">Log Out</div>
        {/* <svg  className="profile" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
        <g clip-path="url(#clip0_397_1440)">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.49952 7.49999C5.83677 7.49999 4.48527 6.15449 4.48527 4.49999C4.48527 2.84549 5.83677 1.49999 7.49952 1.49999C9.16227 1.49999 10.5138 2.84549 10.5138 4.49999C10.5138 6.15449 9.16227 7.49999 7.49952 7.49999ZM10.3315 8.00472C10.9512 7.51128 11.4291 6.86246 11.7166 6.12432C12.004 5.38617 12.0908 4.58502 11.968 3.80245C11.6703 1.8352 10.0263 0.260983 8.04102 0.0314826C5.30202 -0.285767 2.97852 1.83674 2.97852 4.49999C2.97852 5.91749 3.63852 7.18047 4.66752 8.00472C2.13852 8.95047 0.292018 11.1712 0.00251812 14.1682C-0.00760391 14.2733 0.00432114 14.3795 0.0375256 14.4797C0.0707301 14.5799 0.124486 14.6721 0.195357 14.7504C0.266227 14.8287 0.352652 14.8913 0.449107 14.9343C0.545562 14.9772 0.649926 14.9996 0.755522 15C0.940618 15.0015 1.11959 14.9338 1.25736 14.8102C1.39513 14.6866 1.48177 14.5159 1.50027 14.3317C1.80252 10.9845 4.37727 8.99999 7.49952 8.99999C10.6218 8.99999 13.1965 10.9845 13.4988 14.3317C13.5173 14.5159 13.6039 14.6866 13.7417 14.8102C13.8794 14.9338 14.0584 15.0015 14.2435 15C14.6905 15 15.0385 14.6115 14.9958 14.1682C14.707 11.1712 12.8605 8.95047 10.3308 8.00472" fill="black"/>
        </g>
        <defs>
        <clipPath id="clip0_397_1440">
        <rect width="15" height="15" fill="white"/>
        </clipPath>
        </defs>
        </svg> */}
          <img className="profile" src={ProfileImage} alt="Profile" />

        <svg className="layer-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M7 6C7.26522 6 7.51957 5.89464 7.70711 5.70711C7.89464 5.51957 8 5.26522 8 5C8 4.73478 7.89464 4.48043 7.70711 4.29289C7.51957 4.10536 7.26522 4 7 4H5C4.73478 4 4.48043 4.10536 4.29289 4.29289C4.10536 4.48043 4 4.73478 4 5V19C4 19.2652 4.10536 19.5196 4.29289 19.7071C4.48043 19.8946 4.73478 20 5 20H7C7.26522 20 7.51957 19.8946 7.70711 19.7071C7.89464 19.5196 8 19.2652 8 19C8 18.7348 7.89464 18.4804 7.70711 18.2929C7.51957 18.1054 7.26522 18 7 18H6V6H7ZM20.82 11.42L18 7.42C17.8471 7.20441 17.615 7.05814 17.3545 7.01317C17.0941 6.9682 16.8264 7.02818 16.61 7.18C16.5018 7.25579 16.4098 7.35224 16.3391 7.46381C16.2684 7.57537 16.2206 7.69982 16.1982 7.82998C16.1759 7.96015 16.1796 8.09344 16.2091 8.22217C16.2386 8.3509 16.2933 8.47252 16.37 8.58L18.09 11H10C9.73478 11 9.48043 11.1054 9.29289 11.2929C9.10536 11.4804 9 11.7348 9 12C9 12.2652 9.10536 12.5196 9.29289 12.7071C9.48043 12.8946 9.73478 13 10 13H18L16.2 15.4C16.1212 15.5051 16.0639 15.6246 16.0313 15.7518C15.9987 15.879 15.9915 16.0114 16.01 16.1414C16.0286 16.2714 16.0726 16.3965 16.1395 16.5095C16.2064 16.6225 16.2949 16.7212 16.4 16.8C16.5731 16.9298 16.7836 17 17 17C17.1552 17 17.3084 16.9639 17.4472 16.8944C17.5861 16.825 17.7069 16.7242 17.8 16.6L20.8 12.6C20.9281 12.4309 20.999 12.2254 21.0026 12.0133C21.0062 11.8011 20.9423 11.5934 20.82 11.42Z" fill="black"/>
</svg>
<svg className="group" xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.5281 6.34554L17.9057 5.26545C17.3791 4.35153 16.2121 4.03624 15.297 4.56064C14.8613 4.81727 14.3415 4.89008 13.8521 4.76301C13.3628 4.63594 12.944 4.31944 12.6883 3.8833C12.5237 3.60607 12.4353 3.29032 12.432 2.96796C12.4468 2.45115 12.2518 1.95033 11.8915 1.57959C11.5311 1.20886 11.036 0.999787 10.5189 1H9.26493C8.7584 1 8.27275 1.20184 7.91544 1.56087C7.55812 1.9199 7.35861 2.40652 7.36105 2.91304C7.34603 3.95885 6.49392 4.79874 5.448 4.79863C5.12565 4.79528 4.80989 4.70687 4.53267 4.54233C3.6175 4.01794 2.45055 4.33322 1.92397 5.24714L1.25578 6.34554C0.729846 7.25832 1.04084 8.42453 1.95143 8.95423C2.54334 9.29596 2.90797 9.92752 2.90797 10.611C2.90797 11.2945 2.54334 11.926 1.95143 12.2677C1.04199 12.7939 0.730663 13.9573 1.25578 14.8673L1.88736 15.9565C2.13408 16.4017 2.54804 16.7302 3.03763 16.8694C3.52722 17.0085 4.05208 16.9468 4.49606 16.6979C4.93252 16.4433 5.45262 16.3735 5.94078 16.5041C6.42893 16.6348 6.84467 16.955 7.0956 17.3936C7.26013 17.6708 7.34854 17.9866 7.35189 18.3089C7.35189 19.3655 8.20839 20.222 9.26493 20.222H10.5189C11.5719 20.222 12.4269 19.371 12.432 18.3181C12.4295 17.81 12.6303 17.3219 12.9896 16.9626C13.3489 16.6034 13.8369 16.4026 14.345 16.405C14.6666 16.4136 14.9811 16.5017 15.2604 16.6613C16.1731 17.1873 17.3393 16.8763 17.8691 15.9657L18.5281 14.8673C18.7832 14.4294 18.8532 13.9079 18.7226 13.4183C18.5921 12.9287 18.2717 12.5113 17.8324 12.2586C17.3932 12.0059 17.0728 11.5885 16.9422 11.0989C16.8117 10.6092 16.8817 10.0877 17.1368 9.64989C17.3027 9.36026 17.5428 9.12012 17.8324 8.95423C18.7376 8.42482 19.0478 7.26542 18.5281 6.35469V6.34554Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.89674 13.2466C11.3526 13.2466 12.5327 12.0664 12.5327 10.6106C12.5327 9.15479 11.3526 7.97461 9.89674 7.97461C8.44092 7.97461 7.26074 9.15479 7.26074 10.6106C7.26074 12.0664 8.44092 13.2466 9.89674 13.2466Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        <div className="overlap-6">
        <button className="w-[216px] h-[50px] bg-green-400 rounded-[34px] ">Add new Job</button>
          <svg className="vector-3" xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none">
<path d="M18 6.94C17.9896 6.84813 17.9695 6.75763 17.94 6.67V6.58C17.8919 6.47718 17.8278 6.38267 17.75 6.3L11.75 0.3C11.6673 0.222216 11.5728 0.158081 11.47 0.11C11.4402 0.10576 11.4099 0.10576 11.38 0.11C11.2784 0.0517412 11.1662 0.0143442 11.05 0H7C6.20435 0 5.44129 0.316071 4.87868 0.87868C4.31607 1.44129 4 2.20435 4 3V4H3C2.20435 4 1.44129 4.31607 0.87868 4.87868C0.316071 5.44129 0 6.20435 0 7V17C0 17.7956 0.316071 18.5587 0.87868 19.1213C1.44129 19.6839 2.20435 20 3 20H11C11.7956 20 12.5587 19.6839 13.1213 19.1213C13.6839 18.5587 14 17.7956 14 17V16H15C15.7956 16 16.5587 15.6839 17.1213 15.1213C17.6839 14.5587 18 13.7956 18 13V7C18 7 18 7 18 6.94ZM12 3.41L14.59 6H13C12.7348 6 12.4804 5.89464 12.2929 5.70711C12.1054 5.51957 12 5.26522 12 5V3.41ZM12 17C12 17.2652 11.8946 17.5196 11.7071 17.7071C11.5196 17.8946 11.2652 18 11 18H3C2.73478 18 2.48043 17.8946 2.29289 17.7071C2.10536 17.5196 2 17.2652 2 17V7C2 6.73478 2.10536 6.48043 2.29289 6.29289C2.48043 6.10536 2.73478 6 3 6H4V13C4 13.7956 4.31607 14.5587 4.87868 15.1213C5.44129 15.6839 6.20435 16 7 16H12V17ZM16 13C16 13.2652 15.8946 13.5196 15.7071 13.7071C15.5196 13.8946 15.2652 14 15 14H7C6.73478 14 6.48043 13.8946 6.29289 13.7071C6.10536 13.5196 6 13.2652 6 13V3C6 2.73478 6.10536 2.48043 6.29289 2.29289C6.48043 2.10536 6.73478 2 7 2H10V5C10 5.79565 10.3161 6.55871 10.8787 7.12132C11.4413 7.68393 12.2044 8 13 8H16V13Z" fill="white"/>
</svg>
        </div>
        <div className="overlap-7">
        <svg className="layer-3" xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
<path d="M10.0244 11.0225C10.5767 11.0225 11.0244 10.5747 11.0244 10.0225C11.0244 9.47018 10.5767 9.02246 10.0244 9.02246C9.47213 9.02246 9.02441 9.47018 9.02441 10.0225C9.02441 10.5747 9.47213 11.0225 10.0244 11.0225Z" fill="black"/>
<path d="M14.0244 11.0225C14.5767 11.0225 15.0244 10.5747 15.0244 10.0225C15.0244 9.47018 14.5767 9.02246 14.0244 9.02246C13.4721 9.02246 13.0244 9.47018 13.0244 10.0225C13.0244 10.5747 13.4721 11.0225 14.0244 11.0225Z" fill="black"/>
<path d="M6.02441 11.0225C6.5767 11.0225 7.02441 10.5747 7.02441 10.0225C7.02441 9.47018 6.5767 9.02246 6.02441 9.02246C5.47213 9.02246 5.02441 9.47018 5.02441 10.0225C5.02441 10.5747 5.47213 11.0225 6.02441 11.0225Z" fill="black"/>
<path d="M17.094 2.952C15.4533 1.3005 13.2877 0.273208 10.9707 0.0472367C8.65365 -0.178734 6.33039 0.410773 4.40143 1.71413C2.47247 3.01748 1.05868 4.953 0.403808 7.18701C-0.251063 9.42101 -0.105981 11.8135 0.814044 13.952C0.909934 14.1508 0.941397 14.3745 0.904044 14.592L0.024044 18.822C-0.00985986 18.9842 -0.00293664 19.1522 0.0441915 19.3111C0.0913197 19.4699 0.177176 19.6146 0.294044 19.732C0.389848 19.8271 0.503918 19.9018 0.629378 19.9517C0.754838 20.0015 0.88909 20.0254 1.02404 20.022H1.22404L5.50404 19.162C5.72157 19.1358 5.94216 19.1669 6.14404 19.252C8.28254 20.172 10.675 20.3171 12.909 19.6622C15.143 19.0074 17.0786 17.5936 18.3819 15.6646C19.6853 13.7356 20.2748 11.4124 20.0488 9.09537C19.8228 6.77836 18.7955 4.61278 17.144 2.972L17.094 2.952ZM17.924 11.312C17.7285 12.506 17.2647 13.6401 16.5676 14.6289C15.8704 15.6177 14.9581 16.4356 13.8992 17.0209C12.8403 17.6061 11.6624 17.9436 10.4543 18.0079C9.24609 18.0722 8.03907 17.8616 6.92404 17.392C6.52859 17.2238 6.10378 17.1354 5.67404 17.132C5.48632 17.1333 5.29903 17.15 5.11404 17.182L2.29404 17.752L2.86404 14.932C2.97757 14.3213 2.90439 13.6905 2.65404 13.122C2.18444 12.007 1.97385 10.7999 2.03814 9.59177C2.10242 8.3836 2.43991 7.20574 3.02519 6.14685C3.61047 5.08795 4.4283 4.17559 5.41714 3.47844C6.40598 2.7813 7.54006 2.31751 8.73404 2.122C9.98732 1.91631 11.2716 2.01197 12.4805 2.40106C13.6895 2.79014 14.7885 3.46148 15.6865 4.35953C16.5846 5.25758 17.2559 6.35655 17.645 7.56552C18.0341 8.77449 18.1297 10.0587 17.924 11.312Z" fill="black"/>
</svg>
          <div className="ellipse-2" />
          <div className="text-wrapper-28">7</div>
        </div>
        <div className="overlap-8">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" viewBox="0 0 16 20" fill="none">
<path d="M14.8765 14.79L13.5865 13.5V8.5C13.5865 5.43 11.9465 2.86 9.08648 2.18V1.5C9.08648 0.67 8.41648 0 7.58648 0C6.75648 0 6.08648 0.67 6.08648 1.5V2.18C3.21648 2.86 1.58648 5.42 1.58648 8.5V13.5L0.296477 14.79C-0.333523 15.42 0.106477 16.5 0.996477 16.5H14.1665C15.0665 16.5 15.5065 15.42 14.8765 14.79ZM11.5865 14.5H3.58648V8.5C3.58648 6.02 5.09648 4 7.58648 4C10.0765 4 11.5865 6.02 11.5865 8.5V14.5ZM7.58648 19.5C8.68648 19.5 9.58648 18.6 9.58648 17.5H5.58648C5.58648 18.6 6.47648 19.5 7.58648 19.5Z" fill="black"/>
</svg>
          <div className="ellipse-3" />
          <div className="text-wrapper-29">12</div>
        </div>
    
        <svg className="vector-6" xmlns="http://www.w3.org/2000/svg" width="12" height="15" viewBox="0 0 12 15" fill="none">
<path d="M10.2857 0H1.71429C0.771429 0 0.00857162 0.75 0.00857162 1.66667L0 15L6 12.5L12 15V1.66667C12 0.75 11.2286 0 10.2857 0ZM10.2857 12.5L6 10.6833L1.71429 12.5V2.5C1.71429 2.04167 2.1 1.66667 2.57143 1.66667H9.42857C9.9 1.66667 10.2857 2.04167 10.2857 2.5V12.5Z" fill="black"/>
</svg>
<svg className="page" xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16" fill="none">
<path d="M11.6667 2.33301H2.33333C1.59695 2.33301 1 2.92996 1 3.66634V12.9997C1 13.7361 1.59695 14.333 2.33333 14.333H11.6667C12.403 14.333 13 13.7361 13 12.9997V3.66634C13 2.92996 12.403 2.33301 11.6667 2.33301Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.66699 1V3.66667" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.33301 1V3.66667" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1 6.33301H13" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        <div className="text-wrapper-30">Billing</div>
        <svg className="group-2" xmlns="http://www.w3.org/2000/svg" width="17" height="23" viewBox="0 0 17 23" fill="none">
<path d="M12.7757 3.00586H3.75739C3.55807 3.00586 3.36692 3.08504 3.22598 3.22598C3.08504 3.36692 3.00586 3.55807 3.00586 3.75739C3.00586 3.95671 3.08504 4.14786 3.22598 4.2888C3.36692 4.42974 3.55807 4.50892 3.75739 4.50892H12.7757C12.9751 4.50892 13.1662 4.42974 13.3072 4.2888C13.4481 4.14786 13.5273 3.95671 13.5273 3.75739C13.5273 3.55807 13.4481 3.36692 13.3072 3.22598C13.1662 3.08504 12.9751 3.00586 12.7757 3.00586ZM12.7757 6.01198H3.75739C3.55807 6.01198 3.36692 6.09116 3.22598 6.2321C3.08504 6.37304 3.00586 6.56419 3.00586 6.76351C3.00586 6.96283 3.08504 7.15398 3.22598 7.29492C3.36692 7.43586 3.55807 7.51504 3.75739 7.51504H12.7757C12.9751 7.51504 13.1662 7.43586 13.3072 7.29492C13.4481 7.15398 13.5273 6.96283 13.5273 6.76351C13.5273 6.56419 13.4481 6.37304 13.3072 6.2321C13.1662 6.09116 12.9751 6.01198 12.7757 6.01198Z" fill="black"/>
<path d="M0.75153 22.5459C0.934206 22.5456 1.11053 22.4788 1.24754 22.358L3.69753 21.1556L5.59138 22.4181C5.71409 22.4989 5.8578 22.542 6.00472 22.542C6.15165 22.542 6.29536 22.4989 6.41807 22.4181L8.26683 21.2157L10.1081 22.4181C10.2308 22.4989 10.3745 22.542 10.5214 22.542C10.6683 22.542 10.812 22.4989 10.9348 22.4181L12.8286 21.1556L15.2786 22.358C15.3869 22.4557 15.5212 22.5198 15.6653 22.5425C15.8094 22.5652 15.957 22.5454 16.09 22.4857C16.2231 22.4259 16.3359 22.3288 16.4147 22.206C16.4934 22.0832 16.5348 21.9402 16.5337 21.7944V6.01224C16.5337 5.81292 16.4545 5.62177 16.3135 5.48083C16.1726 5.33989 15.9814 5.26071 15.7821 5.26071C15.5828 5.26071 15.3917 5.33989 15.2507 5.48083C15.1098 5.62177 15.0306 5.81292 15.0306 6.01224V20.5619L13.1067 19.6149C12.9879 19.5568 12.8558 19.531 12.7238 19.5403C12.5919 19.5495 12.4647 19.5934 12.3552 19.6675L10.5214 20.8925L8.68769 19.6901C8.56578 19.6108 8.4235 19.5687 8.2781 19.5687C8.1327 19.5687 7.99043 19.6108 7.86852 19.6901L6.01224 20.8925L4.17099 19.6675C4.06143 19.5934 3.93425 19.5495 3.80229 19.5403C3.67034 19.531 3.53828 19.5568 3.41946 19.6149L1.50306 20.5619V1.50306H15.0306V3.00612C15.0306 3.20544 15.1098 3.39659 15.2507 3.53753C15.3917 3.67847 15.5828 3.75765 15.7821 3.75765C15.9814 3.75765 16.1726 3.67847 16.3135 3.53753C16.4545 3.39659 16.5337 3.20544 16.5337 3.00612V0.75153C16.5337 0.552212 16.4545 0.361057 16.3135 0.220118C16.1726 0.0791788 15.9814 0 15.7821 0H0.75153C0.552212 0 0.361057 0.0791788 0.220118 0.220118C0.079179 0.361057 0 0.552212 0 0.75153V21.7944C0 21.9937 0.079179 22.1848 0.220118 22.3258C0.361057 22.4667 0.552212 22.5459 0.75153 22.5459Z" fill="black"/>
</svg>
        <div className="text-wrapper-31 text-black text-xl font-normal font-['Poppins'] ">Company</div>
        <div className="text-wrapper-32 text-black text-xl font-normal font-['Poppins']">Jobs</div>
        <svg className='vector-7' xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
<path d="M12.9975 8.90029L12.9986 8.90028L12.9997 8.90029H13.0003V9.00029C13.0766 8.99936 13.1523 9.01373 13.2229 9.04255C13.2935 9.07137 13.3576 9.11406 13.4115 9.16808C13.4653 9.2221 13.5078 9.28637 13.5363 9.35708C13.5649 9.42778 13.5789 9.5035 13.5777 9.57973L12.9975 8.90029ZM12.9975 8.90029C12.9091 8.90126 12.8217 8.91963 12.7405 8.95438C12.6592 8.98913 12.5856 9.03956 12.5238 9.10279L12.5953 9.17266C12.5428 9.22649 12.5013 9.29015 12.4734 9.36C12.4455 9.42985 12.4316 9.50452 12.4326 9.57973H12.3326V9.58035V10.1202C12.0176 10.1949 11.7171 10.3211 11.4432 10.4935L11.0623 10.1128C11.0621 10.1126 11.062 10.1125 11.0618 10.1123C10.908 9.95492 10.7279 9.89023 10.553 9.8999L10.5585 9.99975M12.9975 8.90029L13.6777 9.58048V10.1201C13.9922 10.1945 14.2922 10.3201 14.5658 10.4919L14.9496 10.1083C14.9498 10.1082 14.9499 10.108 14.9501 10.1078C15.0737 9.9809 15.2426 9.90796 15.4198 9.90491L15.4206 9.90489C15.5984 9.90327 15.7697 9.97195 15.8971 10.096C15.9615 10.1584 16.0128 10.2331 16.0479 10.3156C16.0829 10.3983 16.101 10.4871 16.101 10.5769C16.101 10.6667 16.0829 10.7555 16.0479 10.8382C16.0129 10.9206 15.9618 10.9951 15.8975 11.0574C15.8973 11.0576 15.8971 11.0578 15.8969 11.058L15.5145 11.4402C15.6875 11.7157 15.8137 12.018 15.8878 12.3347H16.4283C16.6064 12.3347 16.7773 12.4054 16.9032 12.5313C17.0292 12.6573 17.1 12.828 17.1 13.0061C17.1 13.1842 17.0292 13.355 16.9032 13.4809C16.7773 13.6069 16.6064 13.6776 16.4283 13.6776H15.8852C15.8105 13.9909 15.6849 14.2898 15.5134 14.5625L15.8993 14.9487C15.9644 15.0101 16.0165 15.0838 16.0527 15.1656C16.0891 15.2479 16.1086 15.3367 16.11 15.4266C16.1114 15.5166 16.0947 15.6059 16.0608 15.6893C16.027 15.7727 15.9768 15.8484 15.9131 15.912C15.8495 15.9756 15.7737 16.0258 15.6902 16.0595C15.6068 16.0933 15.5174 16.1099 15.4274 16.1084C15.3374 16.107 15.2487 16.0874 15.1664 16.051C15.0846 16.0148 15.0108 15.9627 14.9495 15.8976L14.5618 15.5101C14.2888 15.6813 13.9896 15.8065 13.676 15.8807V16.4199C13.6789 16.64 13.5972 16.8128 13.4671 16.9296C13.3389 17.0447 13.1697 17.1 13.0041 17.1C12.8384 17.1 12.6693 17.0447 12.5411 16.9295C12.4111 16.8128 12.3295 16.64 12.3326 16.4199V15.879C12.0185 15.8045 11.7188 15.6789 11.4455 15.5072L11.0601 15.8919C11.06 15.8921 11.0598 15.8923 11.0596 15.8925C10.906 16.0503 10.7261 16.1147 10.5516 16.1055C10.3795 16.0963 10.2208 16.016 10.1036 15.8989C9.98646 15.7818 9.90599 15.6232 9.89678 15.4511C9.88745 15.2766 9.95195 15.0967 10.1098 14.943C10.11 14.9429 10.1101 14.9427 10.1103 14.9425L10.4965 14.5565C10.3291 14.2887 10.2014 13.9927 10.1266 13.6764H9.5844C9.36423 13.6795 9.19138 13.5979 9.07457 13.468C8.95935 13.3399 8.904 13.1708 8.904 13.0052C8.904 12.8396 8.95935 12.6705 9.07455 12.5423C9.19134 12.4123 9.36417 12.3307 9.58435 12.3336H10.1243C10.1983 12.0191 10.3237 11.7191 10.4953 11.4453L10.1126 11.0623C10.1124 11.0622 10.1122 11.062 10.1121 11.0618C9.87217 10.8282 9.85291 10.5399 9.96184 10.3095C10.0677 10.0856 10.2962 9.91346 10.5532 9.89989L10.5585 9.99975M10.5585 9.99975C10.7031 9.99175 10.8558 10.0443 10.9907 10.1826L10.1823 10.9906C9.76667 10.5866 10.1257 10.0226 10.5585 9.99975ZM7.86057 0.9C5.91759 0.9 4.33029 2.4865 4.33029 4.42869C4.33029 6.37089 5.91759 7.95739 7.86057 7.95739C9.80356 7.95739 11.3909 6.37089 11.3909 4.42869C11.3909 2.4865 9.80356 0.9 7.86057 0.9ZM7.86057 2.2429C9.07515 2.2429 10.0474 3.21533 10.0474 4.42869C10.0474 5.64261 9.07517 6.61449 7.86057 6.61449C6.64598 6.61449 5.67372 5.64261 5.67372 4.42869C5.67372 3.21533 6.646 2.2429 7.86057 2.2429ZM6.14543 8.90029C3.2494 8.90029 0.9 11.2485 0.9 14.1433V15.2862C0.9 15.4643 0.970781 15.6351 1.09676 15.761C1.22273 15.8869 1.39358 15.9577 1.57171 15.9577H7.77367C7.95181 15.9577 8.12266 15.8869 8.24863 15.761C8.37461 15.6351 8.44539 15.4643 8.44539 15.2862C8.44539 15.1081 8.37461 14.9373 8.24863 14.8114C8.12266 14.6855 7.95181 14.6148 7.77367 14.6148H2.24343V14.1433C2.24343 11.9728 3.97379 10.2432 6.14543 10.2432H8.44143C8.61957 10.2432 8.79042 10.1725 8.91639 10.0465C9.04237 9.92062 9.11315 9.74983 9.11315 9.57173C9.11315 9.39364 9.04237 9.22285 8.91639 9.09693C8.79042 8.97102 8.61957 8.90029 8.44143 8.90029H6.14543ZM13.006 11.3861C13.9045 11.3861 14.6211 12.102 14.6211 13.0004C14.6211 13.8983 13.9044 14.6148 13.006 14.6148C12.107 14.6148 11.3909 13.8984 11.3909 13.0004C11.3909 12.102 12.107 11.3861 13.006 11.3861Z" fill="black" stroke="black" stroke-width="0.2"/>
</svg>
        
        <svg className='group-3' xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 2.90891C0 2.71603 0.0766231 2.53104 0.213013 2.39465C0.349403 2.25826 0.534388 2.18164 0.727273 2.18164H15.2727C15.4656 2.18164 15.6506 2.25826 15.787 2.39465C15.9234 2.53104 16 2.71603 16 2.90891V7.99982C16 8.17705 15.9352 8.34817 15.8179 8.48101C15.7006 8.61386 15.5388 8.6993 15.3629 8.72128L9.54473 9.44855L9.36436 8.00564L14.5455 7.35837V3.63619H1.45455V7.35764L6.63564 8.00491L6.45527 9.44855L0.637091 8.72128C0.461228 8.6993 0.299442 8.61386 0.182129 8.48101C0.0648155 8.34817 5.00187e-05 8.17705 0 7.99982V2.90891Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.81809 6.90909C5.81809 6.71621 5.89472 6.53122 6.03111 6.39483C6.1675 6.25844 6.35248 6.18182 6.54537 6.18182H9.45446C9.64734 6.18182 9.83233 6.25844 9.96872 6.39483C10.1051 6.53122 10.1817 6.71621 10.1817 6.90909V10.5455C10.1817 10.7383 10.1051 10.9233 9.96872 11.0597C9.83233 11.1961 9.64734 11.2727 9.45446 11.2727H6.54537C6.35248 11.2727 6.1675 11.1961 6.03111 11.0597C5.89472 10.9233 5.81809 10.7383 5.81809 10.5455V6.90909ZM7.27264 7.63636V9.81818H8.72718V7.63636H7.27264ZM5.09082 1.81818C5.09082 1.33597 5.28238 0.873508 5.62335 0.532533C5.96433 0.191558 6.42679 0 6.909 0H9.09082C9.57303 0 10.0355 0.191558 10.3765 0.532533C10.7174 0.873508 10.909 1.33597 10.909 1.81818V2.90909H9.45446V1.81818C9.45446 1.72174 9.41615 1.62925 9.34795 1.56105C9.27976 1.49286 9.18726 1.45455 9.09082 1.45455H6.909C6.81256 1.45455 6.72007 1.49286 6.65187 1.56105C6.58368 1.62925 6.54537 1.72174 6.54537 1.81818V2.90909H5.09082V1.81818Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.727539 13.8178V8.36328H2.18208V13.0906H13.8184V8.36328H15.273V13.8178C15.273 14.0107 15.1964 14.1957 15.06 14.3321C14.9236 14.4685 14.7386 14.5451 14.5457 14.5451H1.45481C1.26193 14.5451 1.07694 14.4685 0.940552 14.3321C0.804162 14.1957 0.727539 14.0107 0.727539 13.8178Z" fill="black"/>
</svg>
      </div>
    </div>
  );
};