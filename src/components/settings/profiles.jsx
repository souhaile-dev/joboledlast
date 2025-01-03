import { RadioGroup } from "@headlessui/react";
import { Checkbox } from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";
import log from 'src/assets/png/Fichier 2- 1.png'
import avt from 'src/assets/png/jobr-03.png'


export const Profiles = () => {
  return (
    <div className="w-[1400px] h-[3409px] mx-auto relative bg-gray-700">
  <div className="w-full h-[4012px] top-0 absolute bg-white" />
  {/* <div className="w-[115px] h-[832px] left-0 top-0 absolute bg-gray-100" /> */}
  <div className="w-[887px] h-[3890px] left-[393px] top-[122px] absolute bg-gray-100" />
  <div className="w-[820px] h-[653px] left-[424px] top-[2198px] absolute bg-white rounded-[20px]" />
  {/* <div className="w-[51px] h-[51px] left-[33px] top-[699px] absolute bg-white rounded-[49px]" /> */}
  {/* <div className="w-6 h-6 left-[47px] top-[763px] absolute"> 
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M7 6C7.26522 6 7.51957 5.89464 7.70711 5.70711C7.8946 4 5.51957 8 5.26522 8 5C8 4.73478 7.89464 4.48043 7.70711 4.29289C7.51957 4.10536 7.26522 4 7 4H5C4.73478 4 4.48043 4.10536 4.29289 4.29289C4.10536 4.48043 4 4.73478 4 5V19C4 19.2652 4.10536 19.5196 4.29289 19.7071C4.48043 19.8946 4.73478 20 5 20H7C7.26522 20 7.51957 19.8946 7.70711 19.7071C7.89464 19.5196 8 19.2652 8 19C8 18.7348 7.89464 18.4804 7.70711 18.2929C7.51957 18.1054 7.26522 18 7 18H6V6H7ZM20.82 11.42L18 7.42C17.8471 7.20441 17.615 7.05814 17.3545 7.01317C17.0941 6.9682 16.8264 7.02818 16.61 7.18C16.5018 7.25579 16.4098 7.35224 16.3391 7.46381C16.2684 7.57537 16.2206 7.69982 16.1982 7.82998C16.1759 7.96015 16.1796 8.09344 16.2091 8.22217C16.2386 8.3509 16.2933 8.47252 16.37 8.58L18.09 11H10C9.73478 11 9.48043 11.1054 9.29289 11.2929C9.10536 11.4804 9 11.7348 9 12C9 12.2652 9.10536 12.5196 9.29289 12.7071C9.48043 12.8946 9.73478 13 10 13H18L16.2 15.4C16.1212 15.5051 16.0639 15.6246 16.0313 15.7518C15.9987 15.879 15.9915 16.0114 16.01 16.1414C16.0286 16.2714 16.0726 16.3965 16.1395 16.5095C16.2064 16.6225 16.2949 16.7212 16.4 16.8C16.5731 16.9298 16.7836 17 17 17C17.1552 17 17.3084 16.9639 17.4472 16.8944C17.5861 16.825 17.7069 16.7242 17.8 16.6L20.8 12.6C20.9281 12.4309 20.999 12.2254 21.0026 12.0133C21.0062 11.8011 20.9423 11.5934 20.82 11.42Z" fill="black"/>
</svg>

  </div>
  <div className="w-[17.79px] h-[19.22px] left-[50px] top-[715px] absolute">
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.5281 6.34554L17.9057 5.26545C17.3791 4.35153 16.2121 4.03624 15.297 4.56064C14.8613 4.81727 14.3415 4.89008 13.8521 4.76301C13.3628 4.63594 12.944 4.31944 12.6883 3.8833C12.5237 3.60607 12.4353 3.29032 12.432 2.96796C12.4468 2.45115 12.2518 1.95033 11.8915 1.57959C11.5311 1.20886 11.036 0.999787 10.5189 1H9.26493C8.7584 1 8.27275 1.20184 7.91544 1.56087C7.55812 1.9199 7.35861 2.40652 7.36105 2.91304C7.34603 3.95885 6.49392 4.79874 5.448 4.79863C5.12565 4.79528 4.80989 4.70687 4.53267 4.54233C3.6175 4.01794 2.45055 4.33322 1.92397 5.24714L1.25578 6.34554C0.729846 7.25832 1.04084 8.42453 1.95143 8.95423C2.54334 9.29596 2.90797 9.92752 2.90797 10.611C2.90797 11.2945 2.54334 11.926 1.95143 12.2677C1.04199 12.7939 0.730663 13.9573 1.25578 14.8673L1.88736 15.9565C2.13408 16.4017 2.54804 16.7302 3.03763 16.8694C3.52722 17.0085 4.05208 16.9468 4.49606 16.6979C4.93252 16.4433 5.45262 16.3735 5.94078 16.5041C6.42893 16.6348 6.84467 16.955 7.0956 17.3936C7.26013 17.6708 7.34854 17.9866 7.35189 18.3089C7.35189 19.3655 8.20839 20.222 9.26493 20.222H10.5189C11.5719 20.222 12.4269 19.371 12.432 18.3181C12.4295 17.81 12.6303 17.3219 12.9896 16.9626C13.3489 16.6034 13.8369 16.4026 14.345 16.405C14.6666 16.4136 14.9811 16.5017 15.2604 16.6613C16.1731 17.1873 17.3393 16.8763 17.8691 15.9657L18.5281 14.8673C18.7832 14.4294 18.8532 13.9079 18.7226 13.4183C18.5921 12.9287 18.2717 12.5113 17.8324 12.2586C17.3932 12.0059 17.0728 11.5885 16.9422 11.0989C16.8117 10.6092 16.8817 10.0877 17.1368 9.64989C17.3027 9.36026 17.5428 9.12012 17.8324 8.95423C18.7376 8.42482 19.0478 7.26542 18.5281 6.35469V6.34554Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.89577 13.2471C11.3516 13.2471 12.5318 12.0669 12.5318 10.6111C12.5318 9.15528 11.3516 7.9751 9.89577 7.9751C8.43994 7.9751 7.25977 9.15528 7.25977 10.6111C7.25977 12.0669 8.43994 13.2471 9.89577 13.2471Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
  </div>
  <div className="w-[51px] h-[51px] left-[34px] top-[557px] absolute bg-blue-500 rounded-[49px]">
  <svg className="mt-4 ml-4" xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none">
<path d="M18 6.94C17.9896 6.84813 17.9695 6.75763 17.94 6.67V6.58C17.8919 6.47718 17.8278 6.38267 17.75 6.3L11.75 0.3C11.6673 0.222216 11.5728 0.158081 11.47 0.11C11.4402 0.10576 11.4099 0.10576 11.38 0.11C11.2784 0.0517412 11.1662 0.0143442 11.05 0H7C6.20435 0 5.44129 0.316071 4.87868 0.87868C4.31607 1.44129 4 2.20435 4 3V4H3C2.20435 4 1.44129 4.31607 0.87868 4.87868C0.316071 5.44129 0 6.20435 0 7V17C0 17.7956 0.316071 18.5587 0.87868 19.1213C1.44129 19.6839 2.20435 20 3 20H11C11.7956 20 12.5587 19.6839 13.1213 19.1213C13.6839 18.5587 14 17.7956 14 17V16H15C15.7956 16 16.5587 15.6839 17.1213 15.1213C17.6839 14.5587 18 13.7956 18 13V7C18 7 18 7 18 6.94ZM12 3.41L14.59 6H13C12.7348 6 12.4804 5.89464 12.2929 5.70711C12.1054 5.51957 12 5.26522 12 5V3.41ZM12 17C12 17.2652 11.8946 17.5196 11.7071 17.7071C11.5196 17.8946 11.2652 18 11 18H3C2.73478 18 2.48043 17.8946 2.29289 17.7071C2.10536 17.5196 2 17.2652 2 17V7C2 6.73478 2.10536 6.48043 2.29289 6.29289C2.48043 6.10536 2.73478 6 3 6H4V13C4 13.7956 4.31607 14.5587 4.87868 15.1213C5.44129 15.6839 6.20435 16 7 16H12V17ZM16 13C16 13.2652 15.8946 13.5196 15.7071 13.7071C15.5196 13.8946 15.2652 14 15 14H7C6.73478 14 6.48043 13.8946 6.29289 13.7071C6.10536 13.5196 6 13.2652 6 13V3C6 2.73478 6.10536 2.48043 6.29289 2.29289C6.48043 2.10536 6.73478 2 7 2H10V5C10 5.79565 10.3161 6.55871 10.8787 7.12132C11.4413 7.68393 12.2044 8 13 8H16V13Z" fill="white"/>
</svg>
    </div>

  <div className="w-[15.58px] h-[17.31px] left-[49.91px] top-[170.02px] absolute">
  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="25" viewBox="0 0 26 25" fill="none">
<path d="M8.33333 1H4.33333C3.44928 1 2.60143 1.33656 1.97631 1.93563C1.35119 2.53471 1 3.34723 1 4.19444C1 5.04166 1.35119 5.85418 1.97631 6.45326C2.60143 7.05233 3.44928 7.38889 4.33333 7.38889H8.33333C9.21739 7.38889 10.0652 7.05233 10.6904 6.45326C11.3155 5.85418 11.6667 5.04166 11.6667 4.19444C11.6667 3.34723 11.3155 2.53471 10.6904 1.93563C10.0652 1.33656 9.21739 1 8.33333 1ZM8.33333 6.11111H4.33333C3.8029 6.11111 3.29419 5.90918 2.91912 5.54973C2.54405 5.19029 2.33333 4.70278 2.33333 4.19444C2.33333 3.68611 2.54405 3.1986 2.91912 2.83916C3.29419 2.47971 3.8029 2.27778 4.33333 2.27778H8.33333C8.86377 2.27778 9.37247 2.47971 9.74755 2.83916C10.1226 3.1986 10.3333 3.68611 10.3333 4.19444C10.3333 4.70278 10.1226 5.19029 9.74755 5.54973C9.37247 5.90918 8.86377 6.11111 8.33333 6.11111ZM8.33333 9.94444H4.33333C3.44928 9.94444 2.60143 10.281 1.97631 10.8801C1.35119 11.4791 1 12.2917 1 13.1389V20.8056C1 21.6528 1.35119 22.4653 1.97631 23.0644C2.60143 23.6634 3.44928 24 4.33333 24H8.33333C9.21739 24 10.0652 23.6634 10.6904 23.0644C11.3155 22.4653 11.6667 21.6528 11.6667 20.8056V13.1389C11.6667 12.2917 11.3155 11.4791 10.6904 10.8801C10.0652 10.281 9.21739 9.94444 8.33333 9.94444ZM10.3333 20.8056C10.3333 21.3139 10.1226 21.8014 9.74755 22.1608C9.37247 22.5203 8.86377 22.7222 8.33333 22.7222H4.33333C3.8029 22.7222 3.29419 22.5203 2.91912 22.1608C2.54405 21.8014 2.33333 21.3139 2.33333 20.8056V13.1389C2.33333 12.6306 2.54405 12.143 2.91912 11.7836C3.29419 11.4242 3.8029 11.2222 4.33333 11.2222H8.33333C8.86377 11.2222 9.37247 11.4242 9.74755 11.7836C10.1226 12.143 10.3333 12.6306 10.3333 13.1389V20.8056ZM21.6667 17.6111H17.6667C16.7826 17.6111 15.9348 17.9477 15.3096 18.5467C14.6845 19.1458 14.3333 19.9583 14.3333 20.8056C14.3333 21.6528 14.6845 22.4653 15.3096 23.0644C15.9348 23.6634 16.7826 24 17.6667 24H21.6667C22.5507 24 23.3986 23.6634 24.0237 23.0644C24.6488 22.4653 25 21.6528 25 20.8056C25 19.9583 24.6488 19.1458 24.0237 18.5467C23.3986 17.9477 22.5507 17.6111 21.6667 17.6111ZM21.6667 22.7222H17.6667C17.1362 22.7222 16.6275 22.5203 16.2525 22.1608C15.8774 21.8014 15.6667 21.3139 15.6667 20.8056C15.6667 20.2972 15.8774 19.8097 16.2525 19.4503C16.6275 19.0908 17.1362 18.8889 17.6667 18.8889H21.6667C22.1971 18.8889 22.7058 19.0908 23.0809 19.4503C23.456 19.8097 23.6667 20.2972 23.6667 20.8056C23.6667 21.3139 23.456 21.8014 23.0809 22.1608C22.7058 22.5203 22.1971 22.7222 21.6667 22.7222ZM21.6667 1H17.6667C16.7826 1 15.9348 1.33656 15.3096 1.93563C14.6845 2.53471 14.3333 3.34723 14.3333 4.19444V11.8611C14.3333 12.7083 14.6845 13.5209 15.3096 14.1199C15.9348 14.719 16.7826 15.0556 17.6667 15.0556H21.6667C22.5507 15.0556 23.3986 14.719 24.0237 14.1199C24.6488 13.5209 25 12.7083 25 11.8611V4.19444C25 3.34723 24.6488 2.53471 24.0237 1.93563C23.3986 1.33656 22.5507 1 21.6667 1ZM23.6667 11.8611C23.6667 12.3694 23.456 12.857 23.0809 13.2164C22.7058 13.5758 22.1971 13.7778 21.6667 13.7778H17.6667C17.1362 13.7778 16.6275 13.5758 16.2525 13.2164C15.8774 12.857 15.6667 12.3694 15.6667 11.8611V4.19444C15.6667 3.68611 15.8774 3.1986 16.2525 2.83916C16.6275 2.47971 17.1362 2.27778 17.6667 2.27778H21.6667C22.1971 2.27778 22.7058 2.47971 23.0809 2.83916C23.456 3.1986 23.6667 3.68611 23.6667 4.19444V11.8611Z" fill="black" stroke="black" stroke-width="0.5"/>
</svg>
  </div>

  <div className="w-[15.58px] h-[17.31px] left-[49.91px] top-[270.02px] absolute">
  <svg xmlns="http://www.w3.org/2000/svg" width="19" height="20" viewBox="0 0 19 20" fill="none">
<g clip-path="url(#clip0_397_725)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.50063 9.99998C7.39448 9.99998 5.68258 8.20599 5.68258 5.99998C5.68258 3.79398 7.39448 1.99998 9.50063 1.99998C11.6068 1.99998 13.3187 3.79398 13.3187 5.99998C13.3187 8.20599 11.6068 9.99998 9.50063 9.99998ZM13.0878 10.673C13.8728 10.015 14.4781 9.14995 14.8422 8.16576C15.2063 7.18156 15.3162 6.11336 15.1607 5.06993C14.7836 2.44693 12.7012 0.347977 10.1865 0.0419769C6.71713 -0.381023 3.77403 2.44898 3.77403 5.99998C3.77403 7.88998 4.61003 9.57396 5.91343 10.673C2.71003 11.934 0.371127 14.895 0.0044266 18.891C-0.00839464 19.0311 0.00671042 19.1726 0.0487694 19.3063C0.0908284 19.4399 0.15892 19.5628 0.248689 19.6672C0.338458 19.7716 0.447929 19.855 0.570105 19.9123C0.692282 19.9696 0.824476 19.9995 0.958232 20C1.19269 20.002 1.41939 19.9118 1.5939 19.7469C1.76841 19.5821 1.87814 19.3546 1.90158 19.109C2.28443 14.646 5.54578 12 9.50063 12C13.4555 12 16.7168 14.646 17.0997 19.109C17.1231 19.3546 17.2329 19.5821 17.4074 19.7469C17.5819 19.9118 17.8086 20.002 18.043 20C18.6092 20 19.05 19.482 18.9959 18.891C18.6301 14.895 16.2912 11.934 13.0869 10.673" fill="black"/>
</g>
<defs>
<clipPath id="clip0_397_725">
<rect width="19" height="20" fill="white"/>
</clipPath>
</defs>
</svg>
  </div>

  <div className="w-[15.58px] h-[17.31px] left-[49.91px] top-[370.02px] absolute">
  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="20" viewBox="0 0 15 20" fill="none">
<path d="M12.8571 0H2.14286C0.964286 0 0.0107145 1 0.0107145 2.22222L0 20L7.5 16.6667L15 20V2.22222C15 1 14.0357 0 12.8571 0ZM12.8571 16.6667L7.5 14.2444L2.14286 16.6667V3.33333C2.14286 2.72222 2.625 2.22222 3.21429 2.22222H11.7857C12.375 2.22222 12.8571 2.72222 12.8571 3.33333V16.6667Z" fill="black"/>
</svg>
  </div>

  <div className="w-[15.58px] h-[17.31px] left-[49.91px] top-[450.02px] absolute">
  <svg xmlns="http://www.w3.org/2000/svg" width="19" height="20" viewBox="0 0 19 20" fill="none">
<path d="M15.7604 2.75391H3.64315C2.68712 2.75391 1.91211 3.52892 1.91211 4.48494V16.6022C1.91211 17.5582 2.68712 18.3333 3.64315 18.3333H15.7604C16.7164 18.3333 17.4915 17.5582 17.4915 16.6022V4.48494C17.4915 3.52892 16.7164 2.75391 15.7604 2.75391Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.1641 1.02295V4.48503" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.23828 1.02295V4.48503" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1.91211 7.94727H17.4915" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
  </div>

  <div className="left-[155px] top-[42px] absolute text-black text-4xl font-normal font-['Space Grotesk']">Settings</div>
  <div className="w-[16.53px] h-[22.55px] left-[50.73px] top-[664px] absolute">
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="23" viewBox="0 0 18 23" fill="none">
<path d="M13.5101 3.00635H4.49176C4.29245 3.00635 4.10129 3.08553 3.96035 3.22647C3.81941 3.3674 3.74023 3.55856 3.74023 3.75788C3.74023 3.9572 3.81941 4.14835 3.96035 4.28929C4.10129 4.43023 4.29245 4.50941 4.49176 4.50941H13.5101C13.7094 4.50941 13.9006 4.43023 14.0415 4.28929C14.1825 4.14835 14.2617 3.9572 14.2617 3.75788C14.2617 3.55856 14.1825 3.3674 14.0415 3.22647C13.9006 3.08553 13.7094 3.00635 13.5101 3.00635ZM13.5101 6.01247H4.49176C4.29245 6.01247 4.10129 6.09165 3.96035 6.23259C3.81941 6.37352 3.74023 6.56468 3.74023 6.764C3.74023 6.96332 3.81941 7.15447 3.96035 7.29541C4.10129 7.43635 4.29245 7.51553 4.49176 7.51553H13.5101C13.7094 7.51553 13.9006 7.43635 14.0415 7.29541C14.1825 7.15447 14.2617 6.96332 14.2617 6.764C14.2617 6.56468 14.1825 6.37352 14.0415 6.23259C13.9006 6.09165 13.7094 6.01247 13.5101 6.01247Z" fill="black"/>
<path d="M1.4859 22.5459C1.66858 22.5456 1.84491 22.4788 1.98191 22.358L4.4319 21.1556L6.32576 22.4181C6.44847 22.4989 6.59217 22.542 6.7391 22.542C6.88603 22.542 7.02973 22.4989 7.15244 22.4181L9.0012 21.2157L10.8425 22.4181C10.9652 22.4989 11.1089 22.542 11.2558 22.542C11.4027 22.542 11.5464 22.4989 11.6691 22.4181L13.563 21.1556L16.013 22.358C16.1213 22.4557 16.2556 22.5198 16.3997 22.5425C16.5438 22.5652 16.6914 22.5454 16.8244 22.4857C16.9575 22.4259 17.0703 22.3288 17.149 22.206C17.2278 22.0832 17.2691 21.9402 17.268 21.7944V6.01224C17.268 5.81292 17.1889 5.62177 17.0479 5.48083C16.907 5.33989 16.7158 5.26071 16.5165 5.26071C16.3172 5.26071 16.126 5.33989 15.9851 5.48083C15.8442 5.62177 15.765 5.81292 15.765 6.01224V20.5619L13.8411 19.6149C13.7222 19.5568 13.5902 19.531 13.4582 19.5403C13.3263 19.5495 13.1991 19.5934 13.0895 19.6675L11.2558 20.8925L9.42206 19.6901C9.30015 19.6108 9.15788 19.5687 9.01248 19.5687C8.86708 19.5687 8.7248 19.6108 8.60289 19.6901L6.74661 20.8925L4.90537 19.6675C4.79581 19.5934 4.66863 19.5495 4.53667 19.5403C4.40471 19.531 4.27265 19.5568 4.15384 19.6149L2.23743 20.5619V1.50306H15.765V3.00612C15.765 3.20544 15.8442 3.39659 15.9851 3.53753C16.126 3.67847 16.3172 3.75765 16.5165 3.75765C16.7158 3.75765 16.907 3.67847 17.0479 3.53753C17.1889 3.39659 17.268 3.20544 17.268 3.00612V0.75153C17.268 0.552212 17.1889 0.361057 17.0479 0.220118C16.907 0.0791788 16.7158 0 16.5165 0H1.4859C1.28659 0 1.09543 0.0791788 0.954493 0.220118C0.813554 0.361057 0.734375 0.552212 0.734375 0.75153V21.7944C0.734375 21.9937 0.813554 22.1848 0.954493 22.3258C1.09543 22.4667 1.28659 22.5459 1.4859 22.5459Z" fill="black"/>
</svg>
  </div> */}
  <div className="left-[155px] top-[42px] absolute text-black text-4xl font-normal font-['Space Grotesk']">Settings</div>
  <div className="w-[228px] left-[155px] top-[155px] absolute text-black text-xl font-normal font-['Poppins']">Personal Settings</div>
  <div className="w-[228px] left-[155px] top-[363px] absolute text-black text-xl font-normal font-['Poppins']">General Settings</div>
  <div className="w-[346px] left-[424px] top-[190px] absolute text-black text-xs font-normal font-['Poppins']">Update your personal details, photo, & Industry here</div>
  <div className="w-[398px] left-[424px] top-[2150px] absolute text-black text-xs font-normal font-['Poppins']">Manage your company profile and add additional companies.</div>
  <div className="w-[573px] left-[424px] top-[3040px] absolute text-black text-xs font-normal font-['Poppins']">Manage your company's billing and payments conveniently from one place to ensure smooth and hassle-free financial transactions.</div>
  <div className="w-[346px] left-[424px] top-[932px] absolute text-black text-xs font-normal font-['Poppins']">Create a new password that is at least 8 characters long.</div>
  <div className="w-[640px] left-[424px] top-[1552px] absolute text-black text-xs font-normal font-['Poppins']">Customize your location, language, and time zone preferences to enhance your personalized experience.</div>
  {/* <img className="w-[52px] h-[52px] left-[32px] top-[36px] absolute" src={log} /> */}
  <div className="w-[1164px] h-[0px] left-[116px] top-[122px] absolute border border-black"></div>
  <div className="w-[534px] h-[559px] left-[424px] top-[238px] absolute bg-white rounded-[20px]" />
  <div className="w-[820px] h-[437px] left-[424px] top-[980px] absolute bg-white rounded-[20px]" />
  <div className="w-[472px] h-[415px] left-[424px] top-[1600px] absolute bg-white rounded-[20px]" />
  <div className="w-[400px] h-[187px] left-[844px] top-[3106px] absolute bg-white rounded-[20px]" />
  <div className="w-[400px] h-[187px] left-[424px] top-[3106px] absolute bg-white rounded-[20px]" />
  <div className="w-80 h-[188px] left-[924px] top-[1600px] absolute bg-white rounded-[20px]" />
  <div className="w-[263px] h-[307px] left-[986px] top-[238px] absolute bg-white rounded-[20px]" />
  <div className="w-[469px] h-[252px] left-[456px] top-[509px] absolute bg-gray-100 rounded-[20px]">
  <textarea
    className="w-full h-full border-none outline-none bg-transparent text-black ml-2 mt-4 text-sm font-normal font-Poppins"
    placeholder="Write your Intraduction..."
  />
    </div>
  <div className="w-[469px] h-[251px] left-[456px] top-[2546px] absolute bg-gray-100 rounded-[20px] p-4">
  <textarea
    className="w-full h-full border-none outline-none bg-transparent text-black text-sm font-normal font-Poppins"
    placeholder="Write your description..."
  />
</div>

  <div className="w-56 h-[135px] left-[1006px] top-[313px] absolute bg-gray-100 rounded-[20px]" />
  <div className="w-[353px] left-[424px] top-[145px] absolute text-[black] text-[32px] font-normal font-['Space Grotesk']">Personal Details</div>
  <div className="w-[420px] left-[424px] top-[2105px] absolute text-black text-[32px] font-normal font-['Space Grotesk']">Company Management</div>
  <div className="w-[420px] left-[424px] top-[2995px] absolute text-black text-[32px] font-normal font-['Space Grotesk']">Billing & Payments</div>
  <div className="w-[353px] left-[424px] top-[887px] absolute text-black text-[32px] font-normal font-['Space Grotesk']">Password Edit</div>
  <div className="w-[420px] h-[31px] left-[424px] top-[1507px] absolute text-black text-[32px] font-normal font-['Space Grotesk']">General preferences<br/></div>
  <div className="w-[196px] left-[1006px] top-[263px] absolute text-black text-xl font-normal font-['Poppins']">Your Photo</div>
  <div className="w-[186px] h-9 left-[1054px] top-[46px] absolute">
    <div className="w-[186px] h-9 left-0 top-0 absolute bg-[#6610F2] rounded-[20px]" />
    <button className="w-[133.69px] h-5 left-[26.16px] top-[7px] absolute text-center text-white text-base font-bold font-['Montserrat']">Save</button>
  </div>
  <div className="w-32 h-9 left-[906px] top-[46px] absolute">
    <div className="w-32 h-9 left-0 top-0 absolute bg-gray-100 rounded-[20px]" />
    <button className="w-[92px] h-5 left-[18px] top-[7px] absolute text-center text-black text-base font-bold font-['Montserrat']">Discard</button>
  </div>
  <div className="w-[211px] h-[0px] left-[456px] top-[335px] absolute opacity-50 border border-black"></div>
  <div className="w-[211px] h-[0px] left-[714px] top-[335px] absolute opacity-50 border border-black"></div>
  <div className="w-[211px] h-[0px] left-[456px] top-[433px] absolute opacity-50 border border-black"></div>
  <div className="w-[211px] h-[0px] left-[714px] top-[433px] absolute opacity-50 border border-black"></div>
  <input className="w-40 h-[17px] left-[456px] top-[311px] absolute opacity-50 text-black text-sm font-normal font-['Poppins']" placeholder="Enter first name"></input>
  <div className="w-[116px] h-[17px] left-[456px] top-[274px] absolute text-black text-base font-medium font-['Poppins']">Full Name</div>
  <div className="w-[116px] h-[17px] left-[957px] top-[2392px] absolute text-black text-base font-medium font-['Poppins']">Company size</div>
  <div className="w-[164px] h-[17px] left-[957px] top-[2580px] absolute text-black text-base font-medium font-['Poppins']">Social Media Links</div>
  <div className="w-[145px] h-[17px] left-[155px] top-[205px] absolute text-[#6610F2] text-base font-medium font-['Poppins']">Personal Details</div>
  <div className="w-[216px] h-[17px] left-[155px] top-[413px] absolute text-black text-opacity-50 text-base font-medium font-['Poppins']">Company Management</div>
  <div className="w-[145px] h-[17px] left-[155px] top-[243px] absolute text-black text-opacity-50 text-base font-medium font-['Poppins']">Password Edit</div>
  <div className="w-[179px] h-[17px] left-[155px] top-[451px] absolute text-black text-opacity-50 text-base font-medium font-['Poppins']">Billing and Payments</div>
  <div className="w-[183px] h-[17px] left-[155px] top-[281px] absolute text-black text-opacity-50 text-base font-medium font-['Poppins']">General Preferences</div>
  <div className="w-[191px] h-[17px] left-[456px] top-[370px] absolute text-black text-base font-medium font-['Poppins']">Email & Phone</div>
  <div className="w-7 h-[17px] left-[456px] top-[468px] absolute text-black text-base font-medium font-['Poppins']">Bio</div>
  <div className="w-[162px] h-[17px] left-[494px] top-[472px] absolute opacity-50 text-black text-xs font-normal font-['Poppins']">Enter a short Introduction</div>
  <input className="w-[152px] h-[17px] left-[714px] top-[311px] absolute opacity-50 text-black text-sm font-normal font-['Poppins']" placeholder="Enter last name"></input>
  <input type="email" className=" border-0 w-[141px] h-[17px] left-[456px] top-[407px] absolute opacity-50 text-black text-sm font-normal font-['Poppins']" placeholder="Enter email"/>
  <input className="w-[191px] h-[17px] left-[714px] top-[407px] absolute opacity-50 text-black text-sm font-normal font-['Poppins']" placeholder="Enter phone number"></input>
  <div className="w-[263px] h-[222px] left-[986px] top-[575px] absolute bg-white rounded-[20px]" />
  <div className="w-[196px] left-[1006px] top-[600px] absolute text-black text-xl font-normal font-['Poppins']">Industry</div>
  <div className="w-56 h-[46px] left-[1006px] top-[475px] absolute text-black text-xs font-normal font-['Poppins'] leading-[15px]">We recommend using a high-quality headshot that presents you in a professional and positive light.</div>
  <div className="w-[150px] h-[45px] left-[1040px] top-[372px] absolute text-center text-black text-base font-medium font-['Poppins']">Click to Upload or Drag & Drop</div>
  <div className="w-[28.88px] h-[23.63px] left-[1100.56px] top-[344px] absolute">
  </div>
 
  <input className="w-56 h-10 left-[1006px] top-[650px] absolute text-center bg-gray-100 rounded-[30px]" placeholder="
Financial Services" />
  <input className="w-[370px] h-10 left-[456px] top-[1052px] absolute bg-gray-100 rounded-[30px]" />
  <input className="w-[370px] h-10 left-[456px] top-[1170px] absolute bg-gray-100 rounded-[30px]" />
  <input className="w-[370px] h-10 left-[456px] top-[1288px] absolute bg-gray-100 rounded-[30px]" />
  {/* <div className="w-[172px] h-[18px] left-[1025px] top-[660px] absolute text-black text-sm font-normal font-['Poppins']">Financial Services</div> */}
  <input type="radio" className="w-[22px] h-[22px] left-[456px] top-[1361px] absolute rounded-full border-6 border-[#6610F2]" />
  <div className="w-[100px] h-[0px] left-[456px] top-[1114px] absolute border border-black"></div>
  <input className="w-[394px] h-[50px] left-[456px] top-[1708px] absolute bg-gray-100 rounded-[30px]" />
  <input className="w-[394px] h-[50px] left-[456px] top-[1837px] absolute bg-gray-100 rounded-[30px]" />
  <select
        className="w-[269px] h-[50px] left-[944px] top-[1705px] absolute bg-gray-100 rounded-[30px]"
        style={{
          opacity: '0.7',
          color: 'black',
          fontSize: '1rem',
          fontFamily: 'Poppins',
        }}
      >
        <option value="English">(English)</option>
        
        {/* Add more options for different GMT zones if needed */}
      </select>
  <div className="left-[482px] top-[1722px] absolute opacity-70 text-black text-sm font-normal font-['Poppins']">Morocco</div>
  <div className="left-[482px] top-[1851px] absolute opacity-70 text-black text-sm font-normal font-['Poppins']">Casablanca, Casablanca-Settat</div>
  
  <div className="w-80 h-[199px] left-[924px] top-[1816px] absolute bg-white rounded-[20px]" />
  <div className="w-[196px] left-[944px] top-[1841px] absolute text-black text-xl font-normal font-['Poppins']">Time Zone</div>
   <select
        className="w-[269px] h-[50px] left-[944px] top-[1924px] absolute bg-gray-100 rounded-[30px]"
        style={{
          opacity: '0.7',
          color: 'black',
          fontSize: '1rem',
          fontFamily: 'Poppins',
        }}
      >
        <option value="GMT+1">(GMT+1)</option>
        {/* Add more options for different GMT zones if needed */}
      </select>
  <img className="w-[41px] h-10 left-[968px] top-[2290px] absolute" src={avt} />
  <div className="w-16 h-16 left-[957px] top-[2278px] absolute rounded-full border border-black" />
  <div className="left-[1036px] top-[2282px] absolute text-black text-base font-medium font-['Poppins']">Edit company avatar</div>
  <div className="left-[1036px] top-[2319px] absolute text-rose-500 text-sm font-normal font-['Poppins']">Delete</div>
  <div className="left-[1104px] top-[2319px] absolute text-violet-700 text-sm font-normal font-['Poppins']">Update</div>
  <input className="w-[211px] h-[0px] left-[456px] text-black top-[2302px] absolute opacity-50 border border-black"></input>
  <input className="w-[211px] h-[0px] left-[702px] top-[2302px] absolute opacity-50 border border-black"></input>
  <input className="w-[211px] h-[0px] left-[995px] top-[2665px] absolute opacity-50 border border-black"></input>
  <input className="w-[211px] h-[0px] left-[995px] top-[2709px] absolute opacity-50 border border-black"></input>
  <div className="w-[211px] h-[0px] left-[995px] top-[2753px] absolute opacity-50 border border-black"></div>
  <div className="w-[211px] h-[0px] left-[995px] top-[2797px] absolute opacity-50 border border-black"></div>
  <div className="w-[211px] h-[0px] left-[456px] top-[2366px] absolute opacity-50 border border-black"></div>
  <div className="w-[211px] h-[0px] left-[456px] top-[2430px] absolute opacity-50 border border-black"></div>
  <div className="w-[211px] h-[0px] left-[702px] top-[2366px] absolute opacity-50 border border-black"></div>
  <div className="w-[211px] h-[0px] left-[702px] top-[2430px] absolute opacity-50 border border-black"></div>
  <input className="w-40 h-[17px] left-[456px] top-[2278px] absolute opacity-50 text-black text-sm font-normal font-['Poppins']"placeholder="Company Name"></input>
  <input className="w-40 h-[17px] left-[702px] top-[2278px] absolute opacity-50 text-black text-sm font-normal font-['Poppins']"placeholder="Website"></input>
  <div className="w-40 h-[17px] left-[995px] top-[2641px] absolute opacity-50 text-black text-sm font-normal font-['Poppins']">Facebook</div>
  <div className="w-40 h-[17px] left-[995px] top-[2685px] absolute opacity-50 text-black text-sm font-normal font-['Poppins']">LinkedIn</div>
  <div className="w-40 h-[17px] left-[995px] top-[2729px] absolute opacity-50 text-black text-sm font-normal font-['Poppins']">Twitter</div>
  <div className="w-40 h-[17px] left-[995px] top-[2773px] absolute opacity-50 text-black text-sm font-normal font-['Poppins']">Instagram</div>
  <input className="w-40 h-[17px] left-[456px] top-[2342px] absolute opacity-50 text-black text-sm font-normal font-['Poppins']"placeholder="Industry"></input>
  <input type="email" className="w-40 h-[17px] left-[456px] top-[2406px] absolute opacity-50 text-black text-sm font-normal font-['Poppins']"placeholder="Email"></input>
  <input className="w-40 h-[17px] left-[702px] top-[2342px] absolute opacity-50 text-black text-sm font-normal font-['Poppins']" placeholder="Headquarter Location"></input>
  <input className="w-40 h-[17px] left-[702px] top-[2406px] absolute opacity-50 text-black text-sm font-normal font-['Poppins']"placeholder="Phone number"></input>
  <div className="px-[26px] py-[3px] left-[957px] top-[2429px] absolute bg-[#6610F2] rounded-[23px] border border-[#6610F2] justify-start items-start gap-2.5 inline-flex">
    <button className="text-white text-sm font-normal font-['Poppins']">Small</button>
  </div>
  <div className="px-[26px] py-[3px] left-[1063px] top-[2429px] absolute rounded-[23px] border border-black justify-start items-start gap-2.5 inline-flex">
    <button className="text-black text-sm font-normal font-['Poppins']">Startup</button>
  </div>
  <div className="px-[26px] py-[3px] left-[957px] top-[2466px] absolute rounded-[23px] border border-black justify-start items-start gap-2.5 inline-flex">
    <button className="text-black text-sm font-normal font-['Poppins']">Micro</button>
  </div>
  <div className="px-[26px] py-[3px] left-[1063px] top-[2466px] absolute rounded-[23px] border border-black justify-start items-start gap-2.5 inline-flex">
    <button className="text-black text-sm font-normal font-['Poppins']">Medium</button>
  </div>
  <div className="px-[26px] py-[3px] left-[957px] top-[2503px] absolute rounded-[23px] border border-black justify-start items-start gap-2.5 inline-flex">
    <button className="text-black text-sm font-normal font-['Poppins']">Large</button>
  </div>
  <div className="left-[456px] top-[2508px] absolute text-black text-xs font-normal font-['Poppins']">Please provide a brief description of your company.</div>
  <div className="w-5 h-5 left-[440px] top-[2885px] absolute">
    <Checkbox className="w-6 h-6 left-0 top-0 absolute bg-black rounded-[3px]" />
  </div>
  <div className="w-[187px] h-[0px] left-[480px] top-[2905px] absolute border border-black"></div>
  <div className="w-[205px] h-[0px] left-[480px] top-[3347px] absolute border border-black"></div>
  <div className="left-[454px] top-[3126px] absolute text-black text-base font-medium font-['Poppins']">Basic plan</div>
  <div className="left-[874px] top-[3126px] absolute text-black text-base font-medium font-['Poppins']">Payment Method</div>
  <div className="w-[76px] h-[21px] left-[550px] top-[3127px] absolute bg-green-400 rounded-[18px]" />
  <div className="left-[564px] top-[3129px] absolute text-black text-xs font-normal font-['Poppins']">Monthly</div>
  <div className="left-[682px] top-[3257px] absolute text-violet-700 text-sm font-normal font-['Poppins']">Upgrade Plan</div>
  <div className="left-[702px] top-[3174px] absolute text-black text-xs font-normal font-['Poppins']">Per Month</div>
  <div className="left-[950px] top-[3200px] absolute text-black text-xs font-semibold font-['Poppins']">Number : </div>
  <div className="left-[1016px] top-[3200px] absolute text-black text-xs font-normal font-['Poppins']">2364 **** **** 5645</div>
  <div className="left-[950px] top-[3221px] absolute text-black text-xs font-semibold font-['Poppins']">Expiry date : </div>
  <div className="left-[1034px] top-[3221px] absolute text-black text-xs font-normal font-['Poppins']">17 / 24</div>
  <div className="left-[973px] top-[3242px] absolute text-black text-xs font-normal font-['Poppins']">mail@companyname.com</div>
  <div className="w-[94px] left-[700px] top-[3121px] absolute text-black text-5xl font-normal font-['Space Grotesk']">50$</div>
  <div className="w-[400px] h-[0px] left-[424px] top-[3242px] absolute border border-black"></div>
  <div className="w-[340px] h-[78px] left-[874px] top-[3191px] absolute rounded-[10px] border border-black" />
  <div className="w-14 h-[31px] left-[884px] top-[3214px] absolute">
    <div className="w-[41px] h-[13.30px] left-[7px] top-[9px] absolute">
    </div>
    <div className="w-14 h-[31px] left-0 top-0 absolute rounded-[5px] border border-black" />
  </div>
  <div className="w-[30px] h-[30px] left-[1174px] top-[3215px] absolute bg-gray-100 rounded-[5px]" />
  <div className="w-[12.16px] h-[8.67px] left-[950px] top-[3247px] absolute">
  </div>
  <div className="w-5 h-5 left-[440px] top-[3327px] absolute">
    <Checkbox className="w-6 h-6 left-0 top-0 absolute bg-black rounded-[3px]" />
  </div>
  <div className="w-[221px] left-[1006px] top-[720px] absolute text-black text-xs font-normal font-['Poppins']">Please select your industry to help us tailor our services to your specific needs.</div>
  <div className="left-[456px] top-[1014px] absolute text-black text-base font-medium font-['Poppins']">Type your current password*</div>
  <div className="left-[456px] top-[1132px] absolute text-black text-base font-medium font-['Poppins']">Type your new password*</div>
  <div className="left-[456px] top-[1250px] absolute text-black text-base font-medium font-['Poppins']">Retype your new password</div>
  <div className="w-72 h-[18px] left-[489px] top-[1364px] absolute text-black text-xs font-normal font-['Poppins']">Require all devices to sign in with new password<br/></div>
  <Link className="left-[456px] top-[1096px] absolute text-black text-xs font-normal font-['Poppins']">Forgot password</Link>
  <div className="left-[456px] top-[1636px] absolute text-black text-xl font-normal font-['Poppins']">Location</div>
  <div className="left-[957px] top-[2234px] absolute text-black text-base font-medium font-['Poppins']">Company Avatar</div>
  <div className="left-[456px] top-[2234px] absolute text-black text-base font-medium font-['Poppins']">Company Informations</div>
  <div className="left-[456px] top-[2480px] absolute text-black text-base font-medium font-['Poppins']">Description</div>
  <Link className="left-[480px] top-[2881px] absolute text-black text-base font-medium font-['Poppins']">Add another Company</Link>
  <Link className="left-[480px] top-[3323px] absolute text-black text-base font-medium font-['Poppins']">Export your billing history</Link>
  <div className="left-[944px] top-[1636px] absolute text-black text-xl font-normal font-['Poppins']">Language</div>
  <div className="left-[456px] top-[1670px] absolute text-black text-xs font-normal font-['Poppins']">Country/Region</div>
  <div className="left-[944px] top-[1670px] absolute text-black text-xs font-normal font-['Poppins']">Select the language you use on Jobold</div>
  <div className="left-[456px] top-[1799px] absolute text-black text-xs font-normal font-['Poppins']">City</div>
  <div className="left-[944px] top-[1875px] absolute text-black text-xs font-normal font-['Poppins']">Set your time zone</div>
  <div className="w-[228px] h-[54px] left-[454px] top-[3153px] absolute text-black text-xs font-normal font-['Poppins']">Essential features and resources for early-stage businesses on their path to growth and success.</div>
  <div className="w-[353px] h-[19px] left-[874px] top-[3153px] absolute text-black text-xs font-normal font-['Poppins']">Easily manage your payment options for your plan.</div>
</div>
  );
};
