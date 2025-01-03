import React, { Component } from 'react'
import im from 'src/assets/png/jobr-04.png'
export default class Frame extends Component {
  render() {
    return (
     
        <div className="w-[673px] h-[421px] relative">
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
  <div className="left-[424px] top-[178px] absolute text-[#6610F2] text-base font-medium font-['Poppins']">Approximately 71% match.</div>
</div>
     
    )
  }
}
