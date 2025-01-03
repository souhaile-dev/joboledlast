import React, { Component } from 'react'
import { Link, useLocation } from "react-router-dom";
import Job2 from './Job2';
import log from 'src/assets/png/ttp-04.png'

export default class Suspended extends Component {
  render() {
    return (
        <div className="w-[1280px] h-[1024px] relative bg-gray-100">
        <div className="w-[989px] h-full left-[21px] top-0 absolute bg-white" />
        <div className="w-3.5 h-3.5 left-[653px] top-[50px] absolute bg-red-500 rounded-full">
        </div>
        <svg className='left-[643px] top-[54px] absolute' xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
<path d="M10.0244 11.022C10.5767 11.022 11.0244 10.5743 11.0244 10.022C11.0244 9.46969 10.5767 9.02197 10.0244 9.02197C9.47213 9.02197 9.02441 9.46969 9.02441 10.022C9.02441 10.5743 9.47213 11.022 10.0244 11.022Z" fill="black"/>
<path d="M14.0244 11.022C14.5767 11.022 15.0244 10.5743 15.0244 10.022C15.0244 9.46969 14.5767 9.02197 14.0244 9.02197C13.4721 9.02197 13.0244 9.46969 13.0244 10.022C13.0244 10.5743 13.4721 11.022 14.0244 11.022Z" fill="black"/>
<path d="M6.02441 11.022C6.5767 11.022 7.02441 10.5743 7.02441 10.022C7.02441 9.46969 6.5767 9.02197 6.02441 9.02197C5.47213 9.02197 5.02441 9.46969 5.02441 10.022C5.02441 10.5743 5.47213 11.022 6.02441 11.022Z" fill="black"/>
<path d="M17.094 2.952C15.4533 1.3005 13.2877 0.273208 10.9707 0.0472367C8.65365 -0.178734 6.33039 0.410773 4.40143 1.71413C2.47247 3.01748 1.05868 4.953 0.403808 7.18701C-0.251063 9.42101 -0.105981 11.8135 0.814044 13.952C0.909934 14.1508 0.941397 14.3745 0.904044 14.592L0.024044 18.822C-0.00985986 18.9842 -0.00293664 19.1522 0.0441915 19.3111C0.0913197 19.4699 0.177176 19.6146 0.294044 19.732C0.389848 19.8271 0.503918 19.9018 0.629378 19.9517C0.754838 20.0015 0.88909 20.0254 1.02404 20.022H1.22404L5.50404 19.162C5.72157 19.1358 5.94216 19.1669 6.14404 19.252C8.28254 20.172 10.675 20.3171 12.909 19.6622C15.143 19.0074 17.0786 17.5936 18.3819 15.6646C19.6853 13.7356 20.2748 11.4124 20.0488 9.09537C19.8228 6.77836 18.7955 4.61278 17.144 2.972L17.094 2.952ZM17.924 11.312C17.7285 12.506 17.2647 13.6401 16.5676 14.6289C15.8704 15.6177 14.9581 16.4356 13.8992 17.0209C12.8403 17.6061 11.6624 17.9436 10.4543 18.0079C9.24609 18.0722 8.03907 17.8616 6.92404 17.392C6.52859 17.2238 6.10378 17.1354 5.67404 17.132C5.48632 17.1333 5.29903 17.15 5.11404 17.182L2.29404 17.752L2.86404 14.932C2.97757 14.3213 2.90439 13.6905 2.65404 13.122C2.18444 12.007 1.97385 10.7999 2.03814 9.59177C2.10242 8.3836 2.43991 7.20574 3.02519 6.14685C3.61047 5.08795 4.4283 4.17559 5.41714 3.47844C6.40598 2.7813 7.54006 2.31751 8.73404 2.122C9.98732 1.91631 11.2716 2.01197 12.4805 2.40106C13.6895 2.79014 14.7885 3.46148 15.6865 4.35953C16.5846 5.25758 17.2559 6.35655 17.645 7.56552C18.0341 8.77449 18.1297 10.0587 17.924 11.312Z" fill="black"/>
</svg>
        <div className="w-3.5 h-3.5 left-[710px] top-[50px] absolute bg-red-500 rounded-full" />
        <svg className='left-[706px] top-[54px] absolute' xmlns="http://www.w3.org/2000/svg" width="16" height="20" viewBox="0 0 16 20" fill="none">
<path d="M14.8765 14.79L13.5865 13.5V8.5C13.5865 5.43 11.9465 2.86 9.08648 2.18V1.5C9.08648 0.67 8.41648 0 7.58648 0C6.75648 0 6.08648 0.67 6.08648 1.5V2.18C3.21648 2.86 1.58648 5.42 1.58648 8.5V13.5L0.296477 14.79C-0.333523 15.42 0.106477 16.5 0.996477 16.5H14.1665C15.0665 16.5 15.5065 15.42 14.8765 14.79ZM11.5865 14.5H3.58648V8.5C3.58648 6.02 5.09648 4 7.58648 4C10.0765 4 11.5865 6.02 11.5865 8.5V14.5ZM7.58648 19.5C8.68648 19.5 9.58648 18.6 9.58648 17.5H5.58648C5.58648 18.6 6.47648 19.5 7.58648 19.5Z" fill="black"/>
</svg>
        <div className="left-[657px] top-[50px] absolute text-center text-white text-[10px] font-bold font-['Poppins']">7</div>
        <div className="left-[712px] top-[50px] absolute text-center text-white text-[10px] font-bold font-['Poppins']">12</div>
        
        <img className="w-14 h-14 left-[765px] top-[37px] absolute rounded-full" src={log} />

        <div className="left-[829px] top-[44px] absolute text-center text-black text-xl font-normal font-['Poppins']">Sed Barreth</div>
        <div className="left-[829px] top-[69px] absolute text-center text-black text-xs font-normal font-['Poppins']">CEO</div>
  
        {/* <div className="w-[920px] h-[222px] left-[326px] top-[211px] absolute bg-gray-100 rounded-[20px]" /> */}
        {/* <div className="w-[920px] h-[222px] left-[326px] top-[453px] absolute bg-gray-100 rounded-[20px]" /> */}
        {/* <div className="w-[920px] h-[185px] left-[326px] top-[687px] absolute bg-gray-100 rounded-tl-[20px] rounded-tr-[20px]" />
         */}
        <div className="w-44 left-[356px] top-[473px] absolute text-black text-xl font-normal font-['Poppins']"></div>
        <div className="w-44 left-[356px] top-[707px] absolute text-black text-xl font-normal font-['Poppins']">Devops Engineer</div>
        
        {/* <div className="w-[98px] left-[434px] top-[512px] absolute opacity-60 text-black text-xs font-normal font-['Poppins']">22 hours ago</div> */}
       
       
        {/* <div className="w-[68px] left-[356px] top-[509px] absolute text-black text-sm font-bold font-['Poppins']">Part time</div> */}
        
        <div className="w-[905px] p-4 left-[56px] text-right-[30px] top-[190px] absolute bg-gray-100 rounded-[20px]">
        <div className="w-[220px] ml-2  absolute text-black text-xl font-normal font-['Poppins']">Community Manager</div>
        <div className="left-[258px] absolute mt-2  text-black text-xs font-normal font-['Poppins']">Market Poke</div> <br />
        <div className="w-[63px] ml-2 mt-1 absolute text-black text-sm font-bold font-['Poppins']">Full time</div>
        <div className="w-[94px] left-[99px]  top-[46px] absolute opacity-60 text-black text-xs font-normal font-['Poppins']">13 hours ago</div> <br />
  <span className="text-black text-[12px] ml-1 top-4 font-normal font-['Poppins']">
    Au sein de notre Département Marketing, vous serez chargé de :
  </span> <br />
  <span className="text-black ml-2 text-[12px]  top-4 font-normal font-['Poppins']">
    . Administrer des sites web e-commerce <br />
    <span className="text-black ml-2 text-[12px]  top-4 font-normal font-['Poppins']">
    . Définir la stratégie sur les réseaux sociaux.<br/></span>
    <span className="text-black ml-2 text-[12px]  top-4 font-normal font-['Poppins']">
    . Animer les campagnes média web.<br/></span>
    <span className="text-black ml-2 text-[12px]  top-4 font-normal font-['Poppins']">
    . Improvement of the structure-from-motion pipeline through iterative testing and development<br/></span>
    <span className="text-black ml-2 text-[12px]  top-4 font-normal font-['Poppins']">
    . Statistical analysis of the performance, accuracy, and precision of the structure-from-motion pipeline<br/></span>
    <span className="text-black ml-2 text-[12px]  top-4 font-normal font-['Poppins']">
    . Improvement of the structure-from-motion pipeline through iterative testing and development<br/></span>
    <span className="text-black ml-2 text-[12px]  top-4 font-normal font-['Poppins']">
    . Statistical analysis of the performance, accuracy, and precision of the structure-from-motion pipeline...</span>
    <span className="text-black ml-2 text-[12px]  top-4 font-normal font-['Poppins']"></span>
  </span>
</div>
        {/* <div className="w-[521px] left-[356px] top-[547px] absolute bg-gray-100 rounded-[20px]">
            <span className="text-black text-[9px] font-normal font-['Poppins']"><br/></span>
            <span className="text-black text-[9px] font-normal font-['Poppins']"><br/>
           <br/>
           e<br/><br/>
           <br/>
           <br/>
            
            </span>
        </div> */}
        <div className="w-[905px] p-4 left-[56px] text-right-[30px] top-[473px] absolute bg-gray-100 rounded-[20px]">
        <div className="w-[220px] ml-2  absolute text-black text-xl font-normal font-['Poppins']">Devops Engineer</div>
        <div className="left-[258px] absolute mt-2  text-black text-xs font-normal font-['Poppins']">Adidas</div> <br />
        <div className="w-[68px] ml-2 mt-1 absolute text-black text-sm font-bold font-['Poppins']">Part time</div>
        <div className="w-[94px] left-[99px]  top-[46px] absolute opacity-60 text-black text-xs font-normal font-['Poppins']">22 hours ago</div> <br />
  <span className="text-black text-[12px] ml-2 top-4 font-normal font-['Poppins']">
  Responsibilities :
  </span> <br />
  <span className="text-black ml-3 text-[12px]  top-4 font-normal font-['Poppins']">
    . Improvement of the structure-from-motion pipeline through iterative testing and development <br />
    <span className="text-black ml-3 text-[12px]  top-4 font-normal font-['Poppins']">
    .  Statistical analysis of the performance, accuracy, and precision of the structure-from-motion pipeline<br/></span>
    <span className="text-black ml-3 text-[12px]  top-4 font-normal font-['Poppins']">
    .  Administrer des sites web e-commerce<br/></span>
    <span className="text-black ml-3 text-[12px]  top-4 font-normal font-['Poppins']">
    . Définir la stratégie sur les réseaux sociaux.<br/></span>
    <span className="text-black ml-3 text-[12px]  top-4 font-normal font-['Poppins']">
    .  Animer les campagnes média web.<br/></span>
    <span className="text-black ml-3 text-[12px]  top-4 font-normal font-['Poppins']">
    
    .  Improvement of the structure-from-motion pipeline through iterative testing and development</span>
 <br />
    <span className="text-black ml-3 text-[12px]  top-4 font-normal font-['Poppins']">
    .  Statistical analysis of the performance, accuracy, and precision of the structure-from-motion pipeline
    </span>
  </span>
</div>
        {/* <div className="w-[521px] h-[84px] left-[356px] top-[781px] absolute">
            <span className="text-black text-[9px] font-normal font-['Poppins']">Responsibilities:<br/>
            </span>
            <span className="text-black text-[9px] font-normal font-['Poppins']"><br/>
            Statistical analysis of the performance, accuracy, and precision of the structure-from-motion pipeline<br/>
            Administrer des sites web e-commerce<br/>Définir la stratégie sur les réseaux sociaux.<br/>
            Animer les campagnes média web.<br/></span>
            </div> */}

<div className="w-[905px] p-4 left-[56px] text-right-[30px] top-[781px] absolute bg-gray-100 rounded-[20px]">
        <div className="w-[220px] ml-2  absolute text-black text-xl font-normal font-['Poppins']">Devops Engineer</div>
        <div className="left-[258px] absolute mt-2  text-black text-xs font-normal font-['Poppins']">MarketPoke</div> <br />
        <div className="w-[68px] ml-2 mt-1 absolute text-black text-sm font-bold font-['Poppins']">Part time</div>
        <div className="w-[94px] left-[99px]  top-[46px] absolute opacity-60 text-black text-xs font-normal font-['Poppins']">7 days ago</div> <br />
  <span className="text-black text-[12px] ml-2 top-4 font-normal font-['Poppins']">
  Responsibilities :
  </span> <br />
  <span className="text-black ml-3 text-[12px]  top-4 font-normal font-['Poppins']">
    . Improvement of the structure-from-motion pipeline through iterative testing and development <br />
    <span className="text-black ml-3 text-[12px]  top-4 font-normal font-['Poppins']">
    .  Statistical analysis of the performance, accuracy, and precision of the structure-from-motion pipeline<br/></span>
    <span className="text-black ml-3 text-[12px]  top-4 font-normal font-['Poppins']">
    .  Administrer des sites web e-commerce<br/></span>
    <span className="text-black ml-3 text-[12px]  top-4 font-normal font-['Poppins']">
    . Définir la stratégie sur les réseaux sociaux.<br/></span>
    <span className="text-black ml-3 text-[12px]  top-4 font-normal font-['Poppins']">
    .  Animer les campagnes média web.<br/></span>
   
  </span>
</div>
      
        {/* <div className="left-[543px] top-[482px] absolute text-black text-xs font-normal font-['Poppins']">Adidas</div> */}
        {/* <div className="left-[544px] top-[716px] absolute text-black text-xs font-normal font-['Poppins']">Market Poke</div> */}
        
        {/* <div className='flex-1'>
  <button className="w-[139px] h-[43px] left-[800px] top-[370px] absolute">
    <div className="w-[139px] h-[43px] left-0 top-0 absolute bg-blue-500 rounded-[34px]" />
    <div className="left-[49px] top-[10px] absolute text-white text-base font-bold font-['Montserrat']">View</div>

     <svg className='' xmlns="http://www.w3.org/2000/svg" width="14" height="20" viewBox="0 0 14 20" fill="none">
    <path opacity="0.7" d="M5.44444 20H0.777778C0.571498 20 0.373668 19.9157 0.227806 19.7657C0.0819444 19.6157 0 19.4122 0 19.2V0.8C0 0.587827 0.0819444 0.384344 0.227806 0.234315C0.373668 0.0842854 0.571498 0 0.777778 0H5.44444C5.65072 0 5.84855 0.0842854 5.99442 0.234315C6.14028 0.384344 6.22222 0.587827 6.22222 0.8V19.2C6.22222 19.4122 6.14028 19.6157 5.99442 19.7657C5.84855 19.9157 5.65072 20 5.44444 20ZM1.55556 18.4H4.66667V1.6H1.55556V18.4ZM13.2222 20H8.55556C8.34928 20 8.15145 19.9157 8.00558 19.7657C7.85972 19.6157 7.77778 19.4122 7.77778 19.2V0.8C7.77778 0.587827 7.85972 0.384344 8.00558 0.234315C8.15145 0.0842854 8.34928 0 8.55556 0H13.2222C13.4285 0 13.6263 0.0842854 13.7722 0.234315C13.9181 0.384344 14 0.587827 14 0.8V19.2C14 19.4122 13.9181 19.6157 13.7722 19.7657C13.6263 19.9157 13.4285 20 13.2222 20ZM9.33333 18.4H12.4444V1.6H9.33333V18.4Z" fill="black"/>
  </svg>
  </button>
  
 
</div> */}
<div className='flex-1'>
      <div className="button-container flex items-center">
        <button className="  bg-blue-500 rounded-[34px] text-white text-base font-bold font-montserrat mr-4 w-[139px] h-[43px] left-[800px] top-[370px] absolute">View</button>
        <svg className='h-[43px] left-[780px] top-[370px] absolute' xmlns="http://www.w3.org/2000/svg" width="19" height="23" viewBox="0 0 23 23" fill="none">
<g opacity="0.7">
<path d="M21.2182 4.87624L17.622 1.19526C17.1526 0.743995 16.5375 0.485067 15.8938 0.467728C15.2501 0.450388 14.6226 0.675848 14.1307 1.10122L2.31803 13.192C1.89378 13.63 1.62962 14.2039 1.5699 14.8176L1.00552 20.4197C0.987836 20.6164 1.01278 20.8148 1.07857 21.0006C1.14436 21.1863 1.24938 21.3549 1.38615 21.4944C1.50879 21.6189 1.65423 21.7174 1.81415 21.7843C1.97406 21.8511 2.1453 21.885 2.31803 21.884H2.43616L7.90934 21.3735C8.5089 21.3124 9.06965 21.042 9.49749 20.6078L21.3101 8.51693C21.7686 8.02116 22.0164 7.35958 21.9992 6.67715C21.9819 5.99473 21.7011 5.34712 21.2182 4.87624ZM7.67309 18.6867L3.73555 19.0628L4.08993 15.0325L11.5056 7.53622L15.0494 11.1635L7.67309 18.6867ZM16.7557 9.36328L13.2382 5.7629L15.7976 3.07605L19.3807 6.7436L16.7557 9.36328Z" fill="black" stroke="#EDF0F3" stroke-width="0.5"/>
</g>
</svg>
        
        {/* Replace with the path for the second icon */}
        <svg className='h-[43px] left-[750px] top-[370px] absolute' xmlns="http://www.w3.org/2000/svg" width="15" height="22" viewBox="0 0 17 22" fill="none">
<path opacity="0.7" d="M15.8191 7.85834L15.462 18.5833C15.4316 19.5018 15.0417 20.3724 14.3751 21.0103C13.7084 21.6482 12.8176 22.0032 11.8915 22H5.10759C4.18214 22.0033 3.29177 21.6488 2.62524 21.0116C1.95871 20.3744 1.56842 19.5047 1.5371 18.5868L1.18005 7.85834C1.17223 7.6234 1.25879 7.395 1.42066 7.22339C1.58254 7.05178 1.80648 6.95102 2.04321 6.94326C2.27995 6.93551 2.5101 7.02141 2.68302 7.18205C2.85594 7.3427 2.95748 7.56494 2.96529 7.79988L3.32234 18.5275C3.34012 18.9854 3.53603 19.4187 3.86892 19.7364C4.20181 20.054 4.64578 20.2313 5.10759 20.2309H11.8915C12.3539 20.2313 12.7984 20.0535 13.1314 19.7351C13.4644 19.4167 13.6599 18.9825 13.6768 18.5239L14.0338 7.79988C14.0416 7.56494 14.1432 7.3427 14.3161 7.18205C14.489 7.02141 14.7192 6.93551 14.9559 6.94326C15.1926 6.95102 15.4166 7.05178 15.5784 7.22339C15.7403 7.395 15.8269 7.6234 15.8191 7.85834ZM17 4.28927C17 4.52421 16.906 4.74953 16.7386 4.91566C16.5712 5.08179 16.3441 5.17512 16.1074 5.17512H0.892623C0.655884 5.17512 0.428842 5.08179 0.261443 4.91566C0.0940437 4.74953 0 4.52421 0 4.28927C0 4.05433 0.0940437 3.82901 0.261443 3.66288C0.428842 3.49676 0.655884 3.40343 0.892623 3.40343H3.65975C3.94258 3.40418 4.21557 3.30048 4.42561 3.11251C4.63564 2.92454 4.76769 2.66574 4.79606 2.38648C4.86193 1.73138 5.1712 1.12409 5.6636 0.682914C6.156 0.241742 6.79626 -0.00170376 7.45965 8.97617e-06H9.53946C10.2028 -0.00170376 10.8431 0.241742 11.3355 0.682914C11.8279 1.12409 12.1372 1.73138 12.203 2.38648C12.2314 2.66574 12.3635 2.92454 12.5735 3.11251C12.7835 3.30048 13.0565 3.40418 13.3394 3.40343H16.1065C16.3432 3.40343 16.5703 3.49676 16.7377 3.66288C16.9051 3.82901 16.9991 4.05433 16.9991 4.28927H17ZM6.34565 3.40343H10.6552C10.5379 3.13744 10.4612 2.85561 10.4276 2.56719C10.4055 2.34883 10.3025 2.1464 10.1386 1.99911C9.97466 1.85181 9.76148 1.77014 9.54035 1.76993H7.46054C7.23941 1.77014 7.02623 1.85181 6.86231 1.99911C6.69838 2.1464 6.59539 2.34883 6.57327 2.56719C6.53938 2.85565 6.46326 3.13749 6.34565 3.40343ZM7.24453 16.8249V9.2819C7.24453 9.04696 7.15048 8.82164 6.98308 8.65551C6.81568 8.48938 6.58864 8.39605 6.3519 8.39605C6.11516 8.39605 5.88812 8.48938 5.72072 8.65551C5.55332 8.82164 5.45928 9.04696 5.45928 9.2819V16.8284C5.45928 17.0634 5.55332 17.2887 5.72072 17.4548C5.88812 17.6209 6.11516 17.7143 6.3519 17.7143C6.58864 17.7143 6.81568 17.6209 6.98308 17.4548C7.15048 17.2887 7.24453 17.0634 7.24453 16.8284V16.8249ZM11.5416 16.8249V9.2819C11.5416 9.04696 11.4476 8.82164 11.2802 8.65551C11.1128 8.48938 10.8857 8.39605 10.649 8.39605C10.4123 8.39605 10.1852 8.48938 10.0178 8.65551C9.85041 8.82164 9.75637 9.04696 9.75637 9.2819V16.8284C9.75637 17.0634 9.85041 17.2887 10.0178 17.4548C10.1852 17.6209 10.4123 17.7143 10.649 17.7143C10.8857 17.7143 11.1128 17.6209 11.2802 17.4548C11.4476 17.2887 11.5416 17.0634 11.5416 16.8284V16.8249Z" fill="black"/>
</svg>
       
          {/* Replace with the path for the third icon */}
        <svg className='h-[43px] left-[730px] top-[370px] absolute' xmlns="http://www.w3.org/2000/svg" width="12" height="20" viewBox="0 0 14 20" fill="none">
    <path opacity="0.7" d="M5.44444 20H0.777778C0.571498 20 0.373668 19.9157 0.227806 19.7657C0.0819444 19.6157 0 19.4122 0 19.2V0.8C0 0.587827 0.0819444 0.384344 0.227806 0.234315C0.373668 0.0842854 0.571498 0 0.777778 0H5.44444C5.65072 0 5.84855 0.0842854 5.99442 0.234315C6.14028 0.384344 6.22222 0.587827 6.22222 0.8V19.2C6.22222 19.4122 6.14028 19.6157 5.99442 19.7657C5.84855 19.9157 5.65072 20 5.44444 20ZM1.55556 18.4H4.66667V1.6H1.55556V18.4ZM13.2222 20H8.55556C8.34928 20 8.15145 19.9157 8.00558 19.7657C7.85972 19.6157 7.77778 19.4122 7.77778 19.2V0.8C7.77778 0.587827 7.85972 0.384344 8.00558 0.234315C8.15145 0.0842854 8.34928 0 8.55556 0H13.2222C13.4285 0 13.6263 0.0842854 13.7722 0.234315C13.9181 0.384344 14 0.587827 14 0.8V19.2C14 19.4122 13.9181 19.6157 13.7722 19.7657C13.6263 19.9157 13.4285 20 13.2222 20ZM9.33333 18.4H12.4444V1.6H9.33333V18.4Z" fill="black"/>
  </svg>
      </div>
    </div>

<div className='flex-1'>
      <div className="button-container flex items-center">
        <button className="  bg-blue-500 rounded-[34px] text-white text-base font-bold font-montserrat mr-4 w-[139px] h-[43px] left-[801px] top-[612px] absolute">View</button>
        
        <svg className='h-[43px] left-[780px] top-[612px] absolute' xmlns="http://www.w3.org/2000/svg" width="19" height="23" viewBox="0 0 23 23" fill="none">
<g opacity="0.7">
<path d="M21.2182 4.87624L17.622 1.19526C17.1526 0.743995 16.5375 0.485067 15.8938 0.467728C15.2501 0.450388 14.6226 0.675848 14.1307 1.10122L2.31803 13.192C1.89378 13.63 1.62962 14.2039 1.5699 14.8176L1.00552 20.4197C0.987836 20.6164 1.01278 20.8148 1.07857 21.0006C1.14436 21.1863 1.24938 21.3549 1.38615 21.4944C1.50879 21.6189 1.65423 21.7174 1.81415 21.7843C1.97406 21.8511 2.1453 21.885 2.31803 21.884H2.43616L7.90934 21.3735C8.5089 21.3124 9.06965 21.042 9.49749 20.6078L21.3101 8.51693C21.7686 8.02116 22.0164 7.35958 21.9992 6.67715C21.9819 5.99473 21.7011 5.34712 21.2182 4.87624ZM7.67309 18.6867L3.73555 19.0628L4.08993 15.0325L11.5056 7.53622L15.0494 11.1635L7.67309 18.6867ZM16.7557 9.36328L13.2382 5.7629L15.7976 3.07605L19.3807 6.7436L16.7557 9.36328Z" fill="black" stroke="#EDF0F3" stroke-width="0.5"/>
</g>
</svg>
        
        {/* Replace with the path for the second icon */}
        <svg className='h-[43px] left-[750px] top-[612px] absolute' xmlns="http://www.w3.org/2000/svg" width="15" height="22" viewBox="0 0 17 22" fill="none">
<path opacity="0.7" d="M15.8191 7.85834L15.462 18.5833C15.4316 19.5018 15.0417 20.3724 14.3751 21.0103C13.7084 21.6482 12.8176 22.0032 11.8915 22H5.10759C4.18214 22.0033 3.29177 21.6488 2.62524 21.0116C1.95871 20.3744 1.56842 19.5047 1.5371 18.5868L1.18005 7.85834C1.17223 7.6234 1.25879 7.395 1.42066 7.22339C1.58254 7.05178 1.80648 6.95102 2.04321 6.94326C2.27995 6.93551 2.5101 7.02141 2.68302 7.18205C2.85594 7.3427 2.95748 7.56494 2.96529 7.79988L3.32234 18.5275C3.34012 18.9854 3.53603 19.4187 3.86892 19.7364C4.20181 20.054 4.64578 20.2313 5.10759 20.2309H11.8915C12.3539 20.2313 12.7984 20.0535 13.1314 19.7351C13.4644 19.4167 13.6599 18.9825 13.6768 18.5239L14.0338 7.79988C14.0416 7.56494 14.1432 7.3427 14.3161 7.18205C14.489 7.02141 14.7192 6.93551 14.9559 6.94326C15.1926 6.95102 15.4166 7.05178 15.5784 7.22339C15.7403 7.395 15.8269 7.6234 15.8191 7.85834ZM17 4.28927C17 4.52421 16.906 4.74953 16.7386 4.91566C16.5712 5.08179 16.3441 5.17512 16.1074 5.17512H0.892623C0.655884 5.17512 0.428842 5.08179 0.261443 4.91566C0.0940437 4.74953 0 4.52421 0 4.28927C0 4.05433 0.0940437 3.82901 0.261443 3.66288C0.428842 3.49676 0.655884 3.40343 0.892623 3.40343H3.65975C3.94258 3.40418 4.21557 3.30048 4.42561 3.11251C4.63564 2.92454 4.76769 2.66574 4.79606 2.38648C4.86193 1.73138 5.1712 1.12409 5.6636 0.682914C6.156 0.241742 6.79626 -0.00170376 7.45965 8.97617e-06H9.53946C10.2028 -0.00170376 10.8431 0.241742 11.3355 0.682914C11.8279 1.12409 12.1372 1.73138 12.203 2.38648C12.2314 2.66574 12.3635 2.92454 12.5735 3.11251C12.7835 3.30048 13.0565 3.40418 13.3394 3.40343H16.1065C16.3432 3.40343 16.5703 3.49676 16.7377 3.66288C16.9051 3.82901 16.9991 4.05433 16.9991 4.28927H17ZM6.34565 3.40343H10.6552C10.5379 3.13744 10.4612 2.85561 10.4276 2.56719C10.4055 2.34883 10.3025 2.1464 10.1386 1.99911C9.97466 1.85181 9.76148 1.77014 9.54035 1.76993H7.46054C7.23941 1.77014 7.02623 1.85181 6.86231 1.99911C6.69838 2.1464 6.59539 2.34883 6.57327 2.56719C6.53938 2.85565 6.46326 3.13749 6.34565 3.40343ZM7.24453 16.8249V9.2819C7.24453 9.04696 7.15048 8.82164 6.98308 8.65551C6.81568 8.48938 6.58864 8.39605 6.3519 8.39605C6.11516 8.39605 5.88812 8.48938 5.72072 8.65551C5.55332 8.82164 5.45928 9.04696 5.45928 9.2819V16.8284C5.45928 17.0634 5.55332 17.2887 5.72072 17.4548C5.88812 17.6209 6.11516 17.7143 6.3519 17.7143C6.58864 17.7143 6.81568 17.6209 6.98308 17.4548C7.15048 17.2887 7.24453 17.0634 7.24453 16.8284V16.8249ZM11.5416 16.8249V9.2819C11.5416 9.04696 11.4476 8.82164 11.2802 8.65551C11.1128 8.48938 10.8857 8.39605 10.649 8.39605C10.4123 8.39605 10.1852 8.48938 10.0178 8.65551C9.85041 8.82164 9.75637 9.04696 9.75637 9.2819V16.8284C9.75637 17.0634 9.85041 17.2887 10.0178 17.4548C10.1852 17.6209 10.4123 17.7143 10.649 17.7143C10.8857 17.7143 11.1128 17.6209 11.2802 17.4548C11.4476 17.2887 11.5416 17.0634 11.5416 16.8284V16.8249Z" fill="black"/>
</svg>

       
          {/* Replace with the path for the third icon */}
       
  <svg className='h-[43px] left-[725px] top-[612px] absolute'xmlns="http://www.w3.org/2000/svg" width="19" height="22" viewBox="0 0 19 22" fill="none">
<path opacity="0.7" fill-rule="evenodd" clip-rule="evenodd" d="M12.169 9.05828C11.9842 9.24309 11.7335 9.34691 11.4721 9.34691C11.2108 9.34691 10.9601 9.24309 10.7753 9.05828L7.31699 5.59995C7.30809 5.59169 7.29933 5.58324 7.29071 5.57462C7.1059 5.38981 7.00207 5.13916 7.00207 4.8778C7.00207 4.61644 7.1059 4.36578 7.29071 4.18097L7.29118 4.1805L10.7748 0.696843C10.9596 0.512034 11.2103 0.408209 11.4717 0.408209C11.733 0.408209 11.9837 0.512034 12.1685 0.696844C12.3533 0.881653 12.4571 1.13231 12.4571 1.39367C12.4571 1.65503 12.3533 1.90569 12.1685 2.09049L10.5348 3.72423C12.0304 3.88084 13.4657 4.41575 14.7029 5.28327C16.1205 6.27721 17.2161 7.6643 17.8548 9.2735C18.4934 10.8827 18.6471 12.6436 18.2969 14.3391C17.9467 16.0346 17.108 17.5906 15.884 18.8151C14.6604 20.0383 13.1057 20.8769 11.4114 21.2276C9.71716 21.5783 7.9573 21.4257 6.34863 20.7888C4.73995 20.1518 3.3527 19.0583 2.35775 17.6428C1.36279 16.2273 0.803583 14.5517 0.748993 12.8224C0.744875 12.6929 0.766301 12.5639 0.812048 12.4426C0.857795 12.3214 0.926967 12.2104 1.01561 12.116C1.10426 12.0215 1.21065 11.9454 1.3287 11.8921C1.44675 11.8387 1.57416 11.8091 1.70364 11.805C1.83313 11.8009 1.96216 11.8223 2.08336 11.8681C2.20456 11.9138 2.31557 11.983 2.41004 12.0716C2.50451 12.1603 2.5806 12.2667 2.63396 12.3847C2.68731 12.5028 2.71689 12.6302 2.72101 12.7596C2.76811 14.5147 3.4893 16.1841 4.73484 17.4214C5.53107 18.2165 6.5097 18.8047 7.5854 19.1347C8.66111 19.4648 9.80122 19.5267 10.9063 19.3151C12.0115 19.1035 13.0481 18.6248 13.9257 17.9206C14.8034 17.2165 15.4955 16.3084 15.9417 15.2754C16.3879 14.2425 16.5746 13.116 16.4856 11.9944C16.3966 10.8727 16.0346 9.7898 15.4311 8.84013C14.8275 7.89046 14.0009 7.10284 13.0232 6.54594C12.1463 6.04649 11.1719 5.74621 10.1689 5.66454L12.169 7.66462C12.3538 7.84943 12.4576 8.10009 12.4576 8.36145C12.4576 8.62281 12.3538 8.87347 12.169 9.05828Z" fill="black"/>
</svg>
      </div>
    </div>

        {/* <button className="w-[139px] h-[43px] left-[771px] top-[612px] absolute">
          <div className="w-[139px] h-[43px] left-0 top-0 absolute bg-blue-500 rounded-[34px]" />
          <div className="left-[49px] top-[10px] absolute text-white text-base font-bold font-['Montserrat']">View</div>
        </button> */}
        {/* <button className="w-[139px] h-[43px] left-[783px] top-[946px] absolute">
          <div className="w-[139px] h-[43px] left-0 top-0 absolute bg-blue-500 rounded-[34px]" />
          <div className="left-[49px] top-[10px] absolute text-white text-base font-bold font-['Montserrat']">View</div>
        </button> */}
        <div className='flex-1'>
      <div className="button-container flex items-center">
        <button className="  bg-blue-500 rounded-[34px] text-white text-base font-bold font-montserrat mr-4 w-[139px] h-[43px] left-[801px] top-[946px] absolute">View</button>
        
        <svg className='h-[43px] left-[780px] top-[946px] absolute' xmlns="http://www.w3.org/2000/svg" width="19" height="23" viewBox="0 0 23 23" fill="none">
<g opacity="0.7">
<path d="M21.2182 4.87624L17.622 1.19526C17.1526 0.743995 16.5375 0.485067 15.8938 0.467728C15.2501 0.450388 14.6226 0.675848 14.1307 1.10122L2.31803 13.192C1.89378 13.63 1.62962 14.2039 1.5699 14.8176L1.00552 20.4197C0.987836 20.6164 1.01278 20.8148 1.07857 21.0006C1.14436 21.1863 1.24938 21.3549 1.38615 21.4944C1.50879 21.6189 1.65423 21.7174 1.81415 21.7843C1.97406 21.8511 2.1453 21.885 2.31803 21.884H2.43616L7.90934 21.3735C8.5089 21.3124 9.06965 21.042 9.49749 20.6078L21.3101 8.51693C21.7686 8.02116 22.0164 7.35958 21.9992 6.67715C21.9819 5.99473 21.7011 5.34712 21.2182 4.87624ZM7.67309 18.6867L3.73555 19.0628L4.08993 15.0325L11.5056 7.53622L15.0494 11.1635L7.67309 18.6867ZM16.7557 9.36328L13.2382 5.7629L15.7976 3.07605L19.3807 6.7436L16.7557 9.36328Z" fill="black" stroke="#EDF0F3" stroke-width="0.5"/>
</g>
</svg>
        
        {/* Replace with the path for the second icon */}
        
        <svg className='h-[43px] left-[750px] top-[946px] absolute' xmlns="http://www.w3.org/2000/svg" width="15" height="22" viewBox="0 0 17 22" fill="none">
<path opacity="0.7" d="M15.8191 7.85834L15.462 18.5833C15.4316 19.5018 15.0417 20.3724 14.3751 21.0103C13.7084 21.6482 12.8176 22.0032 11.8915 22H5.10759C4.18214 22.0033 3.29177 21.6488 2.62524 21.0116C1.95871 20.3744 1.56842 19.5047 1.5371 18.5868L1.18005 7.85834C1.17223 7.6234 1.25879 7.395 1.42066 7.22339C1.58254 7.05178 1.80648 6.95102 2.04321 6.94326C2.27995 6.93551 2.5101 7.02141 2.68302 7.18205C2.85594 7.3427 2.95748 7.56494 2.96529 7.79988L3.32234 18.5275C3.34012 18.9854 3.53603 19.4187 3.86892 19.7364C4.20181 20.054 4.64578 20.2313 5.10759 20.2309H11.8915C12.3539 20.2313 12.7984 20.0535 13.1314 19.7351C13.4644 19.4167 13.6599 18.9825 13.6768 18.5239L14.0338 7.79988C14.0416 7.56494 14.1432 7.3427 14.3161 7.18205C14.489 7.02141 14.7192 6.93551 14.9559 6.94326C15.1926 6.95102 15.4166 7.05178 15.5784 7.22339C15.7403 7.395 15.8269 7.6234 15.8191 7.85834ZM17 4.28927C17 4.52421 16.906 4.74953 16.7386 4.91566C16.5712 5.08179 16.3441 5.17512 16.1074 5.17512H0.892623C0.655884 5.17512 0.428842 5.08179 0.261443 4.91566C0.0940437 4.74953 0 4.52421 0 4.28927C0 4.05433 0.0940437 3.82901 0.261443 3.66288C0.428842 3.49676 0.655884 3.40343 0.892623 3.40343H3.65975C3.94258 3.40418 4.21557 3.30048 4.42561 3.11251C4.63564 2.92454 4.76769 2.66574 4.79606 2.38648C4.86193 1.73138 5.1712 1.12409 5.6636 0.682914C6.156 0.241742 6.79626 -0.00170376 7.45965 8.97617e-06H9.53946C10.2028 -0.00170376 10.8431 0.241742 11.3355 0.682914C11.8279 1.12409 12.1372 1.73138 12.203 2.38648C12.2314 2.66574 12.3635 2.92454 12.5735 3.11251C12.7835 3.30048 13.0565 3.40418 13.3394 3.40343H16.1065C16.3432 3.40343 16.5703 3.49676 16.7377 3.66288C16.9051 3.82901 16.9991 4.05433 16.9991 4.28927H17ZM6.34565 3.40343H10.6552C10.5379 3.13744 10.4612 2.85561 10.4276 2.56719C10.4055 2.34883 10.3025 2.1464 10.1386 1.99911C9.97466 1.85181 9.76148 1.77014 9.54035 1.76993H7.46054C7.23941 1.77014 7.02623 1.85181 6.86231 1.99911C6.69838 2.1464 6.59539 2.34883 6.57327 2.56719C6.53938 2.85565 6.46326 3.13749 6.34565 3.40343ZM7.24453 16.8249V9.2819C7.24453 9.04696 7.15048 8.82164 6.98308 8.65551C6.81568 8.48938 6.58864 8.39605 6.3519 8.39605C6.11516 8.39605 5.88812 8.48938 5.72072 8.65551C5.55332 8.82164 5.45928 9.04696 5.45928 9.2819V16.8284C5.45928 17.0634 5.55332 17.2887 5.72072 17.4548C5.88812 17.6209 6.11516 17.7143 6.3519 17.7143C6.58864 17.7143 6.81568 17.6209 6.98308 17.4548C7.15048 17.2887 7.24453 17.0634 7.24453 16.8284V16.8249ZM11.5416 16.8249V9.2819C11.5416 9.04696 11.4476 8.82164 11.2802 8.65551C11.1128 8.48938 10.8857 8.39605 10.649 8.39605C10.4123 8.39605 10.1852 8.48938 10.0178 8.65551C9.85041 8.82164 9.75637 9.04696 9.75637 9.2819V16.8284C9.75637 17.0634 9.85041 17.2887 10.0178 17.4548C10.1852 17.6209 10.4123 17.7143 10.649 17.7143C10.8857 17.7143 11.1128 17.6209 11.2802 17.4548C11.4476 17.2887 11.5416 17.0634 11.5416 16.8284V16.8249Z" fill="black"/>
</svg>
       
          {/* Replace with the path for the third icon */}
          <button className=''>
          <svg className='h-[43px] left-[730px] top-[946px] absolute transition-transform transform hover:text-blue-500' xmlns="http://www.w3.org/2000/svg" width="12" height="20" viewBox="0 0 14 20" fill="none">
  <path opacity="0.7" d="M5.44444 20H0.777778C0.571498 20 0.373668 19.9157 0.227806 19.7657C0.0819444 19.6157 0 19.4122 0 19.2V0.8C0 0.587827 0.0819444 0.384344 0.227806 0.234315C0.373668 0.0842854 0.571498 0 0.777778 0H5.44444C5.65072 0 5.84855 0.0842854 5.99442 0.234315C6.14028 0.384344 6.22222 0.587827 6.22222 0.8V19.2C6.22222 19.4122 6.14028 19.6157 5.99442 19.7657C5.84855 19.9157 5.65072 20 5.44444 20ZM1.55556 18.4H4.66667V1.6H1.55556V18.4ZM13.2222 20H8.55556C8.34928 20 8.15145 19.9157 8.00558 19.7657C7.85972 19.6157 7.77778 19.4122 7.77778 19.2V0.8C7.77778 0.587827 7.85972 0.384344 8.00558 0.234315C8.15145 0.0842854 8.34928 0 8.55556 0H13.2222C13.4285 0 13.6263 0.0842854 13.7722 0.234315C13.9181 0.384344 14 0.587827 14 0.8V19.2C14 19.4122 13.9181 19.6157 13.7722 19.7657C13.6263 19.9157 13.4285 20 13.2222 20ZM9.33333 18.4H12.4444V1.6H9.33333V18.4Z" fill="black"/>
</svg>
</button>
      </div>
    </div>
        <div className="left-[751px] top-[265px] absolute text-sky-950 text-sm font-normal font-['Poppins']">CV’s</div>
        <div className="left-[751px] top-[508px] absolute text-sky-950 text-sm font-normal font-['Poppins']">CV’s</div>
        <div className="left-[751px] top-[842px] absolute text-sky-950 text-sm font-normal font-['Poppins']">CV’s</div>
        <div className="left-[847px] top-[265px] absolute text-green-900 text-sm font-normal font-['Poppins']">New CV’s</div>
        <div className="left-[847px] top-[508px] absolute text-green-900 text-sm font-normal font-['Poppins']">New CV’s</div>
        <div className="left-[7147px] top-[842px] absolute text-green-900 text-sm font-normal font-['Poppins']">New CV’s</div>
        <div className="left-[751px] top-[230px] absolute text-sky-950 text-4xl font-normal font-['Space Grotesk']">34</div>
        <div className="left-[751px] top-[473px] absolute text-sky-950 text-4xl font-normal font-['Space Grotesk']">42</div>
        <div className="left-[751px] top-[807px] absolute text-sky-950 text-4xl font-normal font-['Space Grotesk']">156</div>
        <div className="left-[847px] top-[230px] absolute text-green-900 text-4xl font-normal font-['Space Grotesk']">12</div>
        <div className="left-[847px] top-[473px] absolute text-green-900 text-4xl font-normal font-['Space Grotesk']">31</div>
        <div className="left-[847px] top-[807px] absolute text-green-900 text-4xl font-normal font-['Space Grotesk']">29</div>
        <div className="w-2.5 h-[724px] left-[1270px] top-[104px] absolute bg-gray-100" />
        {/* <div className="w-2.5 h-[494px] left-[1270px] top-[104px] absolute bg-[#6610F2]" /> */}
        <div className="left-[171px] top-[42px] absolute text-black text-4xl font-normal font-['Space Grotesk']">Jobs</div>
        <div href="#" className="left-[167px] top-[141px] absolute text-black text-sm font-bold font-['Poppins']"><Link to="/dashboard/Jobs">Active(3)</Link>
       
        </div>
        <div  className="left-[352px] top-[141px] absolute text-[#6610F2] text-sm font-normal font-['Poppins']"> <Link to="/dashboard/Suspended">Suspended(2)</Link>
        
        </div>
        <div className="left-[499px] top-[141px] absolute text-black text-sm font-normal font-['Poppins']"> <Link to="/dashboard/Ended">Ended(7)</Link>
        </div>
        <div className="left-[651px] top-[141px] absolute text-black text-sm font-normal font-['Poppins']"><Link to="/dashboard/draft">Draft(2)</Link>
        </div>
        <div className="flex items-center left-[762px] top-[138px] absolute text-black text-opacity-70 text-base font-medium font-['Poppins']">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
  >
    <g opacity="0.7">
      <path
        d="M17.7043 16.29L14.3054 12.9C15.402 11.5025 15.9971 9.77666 15.9948 8C15.9948 6.41775 15.5258 4.87103 14.647 3.55544C13.7683 2.23985 12.5192 1.21447 11.0579 0.608967C9.59657 0.00346625 7.98855 -0.15496 6.43721 0.153721C4.88586 0.462403 3.46085 1.22433 2.34239 2.34315C1.22393 3.46197 0.462254 4.88743 0.153672 6.43928C-0.15491 7.99113 0.00346513 9.59966 0.608771 11.0615C1.21408 12.5233 2.23913 13.7727 3.5543 14.6518C4.86947 15.5308 6.41569 16 7.99743 16C9.77351 16.0022 11.4988 15.407 12.8958 14.31L16.2848 17.71C16.3777 17.8037 16.4883 17.8781 16.6101 17.9289C16.7319 17.9797 16.8626 18.0058 16.9945 18.0058C17.1265 18.0058 17.2572 17.9797 17.379 17.9289C17.5008 17.8781 17.6114 17.8037 17.7043 17.71C17.798 17.617 17.8724 17.5064 17.9231 17.3846C17.9739 17.2627 18 17.132 18 17 18 16.868 17.9739 16.7373 17.9231 16.6154C17.8724 16.4936 17.798 16.383 17.7043 16.29ZM1.99936 8C1.99936 6.81332 2.35114 5.65328 3.01022 4.66658C3.66929 3.67989 4.60606 2.91085 5.70207 2.45673C6.79807 2.0026 8.00408 1.88378 9.16759 2.11529C10.3311 2.3468 11.3999 2.91825 12.2387 3.75736C13.0775 4.59648 13.6488 5.66558 13.8802 6.82946C14.1117 7.99335 13.9929 9.19975 13.5389 10.2961C13.0849 11.3925 12.3162 12.3295 11.3298 12.9888C10.3434 13.6481 9.18373 14 7.99743 14C6.40664 14 4.88101 13.3679 3.75615 12.2426C2.6313 11.1174 1.99936 9.5913 1.99936 8Z"
        fill="#030303"
      />
    </g>
  </svg>
  <input type="text" placeholder='Seach by keywords' />
</div>      </div>
    )
  }
}
