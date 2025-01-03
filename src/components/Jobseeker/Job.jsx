import React, { Component } from 'react'
import im from 'src/assets/png/Rectangle 114.png'
import ser from 'src/assets/png/Layer 4.png'
import vector from 'src/assets/png/Vector.png'
import add from 'src/assets/png/Add.png'
import margel from 'src/assets/png/jobr-04.png'
import market from 'src/assets/png/jobr-01.png'
import adidas from 'src/assets/png/jobr-02.png'
import tesla from 'src/assets/png/Rectangle 38.png'
import google from 'src/assets/png/image 5.png'
export default class Job extends Component {
    render() {
        return (
            <div className="w-[1280px] h-[832px] relative bg-gray-100">

                <div className="w-6 h-6 left-[47px] top-[763px] absolute">
                </div>
                <div className="w-[17.79px] h-[19.22px] left-[50px] top-[715px] absolute">
                </div>


                <div className="w-[20.10px] h-[20.07px] left-[903px] top-[51px] absolute">
                </div>
                <div className="w-3.5 h-3.5 left-[912px] top-[46px] absolute bg-rose-500 rounded-full" />
                <div className="w-3.5 h-3.5 left-[969px] top-[46px] absolute bg-rose-500 rounded-full" />
                <div className="">

                    <img className="w-[955px] h-[210px] ml-[203px] mt-9 rounded-[20px] shadow" src={im} alt="Your Image Alt Text" />
                    <div className="absolute left-[230px] top-[40px] text-white text-4xl font-normal font-space-grotesk">
                        Find your dream job
                    </div>

                </div>

                <div className="w-[883px] h-[66px] left-[230px] top-[110px] absolute bg-gray-100 rounded-[50px] shadow" />
                <div className=" left-[240px] top-[138px] absolute">
                    <img src={ser} className='top-0' alt="" />

                </div>
                <div className=" left-[530px] top-[138px] absolute">
                    <img src={vector} className='top-0' alt="" />
                </div>
                <div className=" left-[850px] top-[119px] absolute">
                    <button className="w-[195px] h-[49px] bg-[#6610F2] rounded-[36px] text-white text-base font-medium font-['Poppins']"> Search</button>
                </div>

                <input className="left-[299px] top-[136px] absolute text-black text-opacity-70 bg-transparent text-base font-medium font-['Poppins']" placeholder='Job title or keyword'/>
                <input className="left-[558px] top-[136px] absolute text-black text-opacity-70 bg-transparent text-base font-medium font-['Poppins']" placeholder='Add Country or city'/>
                <div className="w-[46px] h-[0px] left-[498px] top-[125px] absolute origin-top-left rotate-90 border-2 border-black border-opacity-70"></div>
                
                <div className="w-[999px] h-[438px] left-[203px] top-[366px] absolute bg-white rounded-[20px] scrollbar scrollbar-thumb-[#6610F2] scrollbar-w-[10px] scrollbar-track-gray-300 overflow-y-scroll  scroll-start"> 
                <div className="px-7 py-1 left-[213px] top-[10px] absolute bg-[#6610F2] rounded-[22px] justify-start items-start gap-2.5 inline-flex">
                    <button className="text-white text-xs font-normal font-['Poppins']">Full Time</button>
                </div>
                <div className="px-7 py-1 left-[352px] top-[10px] absolute bg-gray-100 rounded-[22px] justify-start items-start gap-2.5 inline-flex">
                    <button className="text-black text-xs font-normal font-['Poppins']">Senior Level</button>
                </div>
                <div className="px-7 py-1 left-[509px] top-[10px] absolute bg-gray-100 rounded-[22px] justify-start items-start gap-2.5 inline-flex">
                    <button className="text-black text-xs font-normal font-['Poppins']">Remote</button>
                </div>
                <div className="px-7 py-1 left-[642px] top-[10px] absolute bg-gray-100 rounded-[22px] justify-start items-start gap-2.5 inline-flex">
                    <button className="text-black text-xs font-normal font-['Poppins']">Internship</button>
                </div>
                <div className="px-7 py-1 left-[768px] top-[10px] absolute bg-gray-100 rounded-[22px] justify-start items-start gap-2.5 inline-flex">
                    <button className="text-black text-xs font-normal font-['Poppins']">Entry Level</button>
                </div>
                <div className="px-7 py-1 left-[897px] top-[10px] absolute bg-gray-100 rounded-[22px] justify-start items-start gap-2.5 inline-flex">
                    <button className="text-black text-xs font-normal font-['Poppins']">Contract</button>
                </div>
                <button className="left-[37px] top-[16px] absolute text-black text-xs font-normal font-['Poppins']">Employment Type</button>
                <div className="left-[266px] top-[112px] absolute text-black text-xs font-normal font-['Poppins']">Majorel</div>
                <div className="left-[587px] top-[112px] absolute text-black text-xs font-normal font-['Poppins']">Marrakech, Morroco</div>
                <div className="left-[927px] top-[112px] absolute text-black text-xs font-semibold font-['Poppins']">View</div>
                <div className="left-[927px] top-[112px] absolute text-black text-xs font-semibold font-['Poppins']">View</div>
                <button>
                    <img src={add} className="left-[899px] top-[112px] absolute text-black text-xs font-semibold font-['Poppins']" />
                </button>
                <div className="left-[927px] top-[164px] absolute text-black text-xs font-semibold font-['Poppins']">View</div>
                <button><img src={add} className="left-[899px] top-[164px] absolute text-black text-xs font-semibold font-['Poppins']" /></button>

                <div className="left-[927px] top-[215px] absolute text-black text-xs font-semibold font-['Poppins']">View</div>
                <button><img src={add} className="left-[899px] top-[215px] absolute text-black text-xs font-semibold font-['Poppins']" />
                </button>
                <div className="left-[927px] top-[258px] absolute text-black text-xs font-semibold font-['Poppins']">View</div>
                <button><img src={add} className="left-[899px] top-[258px] absolute text-black text-xs font-semibold font-['Poppins']" />
                </button>
                <div className="left-[927px] top-[310px] absolute text-black text-xs font-semibold font-['Poppins']">View</div>
                <button><img src={add} className="left-[899px] top-[310px] absolute text-black text-xs font-semibold font-['Poppins']" />
                </button><div className="left-[927px] top-[362px] absolute text-black text-xs font-semibold font-['Poppins']">View</div>
                <button><img src={add} className="left-[899px] top-[362px] absolute text-black text-xs font-semibold font-['Poppins']" />
                </button><div className="left-[384px] top-[109px] absolute text-black text-[15px] font-medium font-['Space Grotesk']">Graphic Designer</div>
                <div className="left-[778px] top-[112px] absolute opacity-60 text-black text-xs font-normal font-['Poppins']">1 hour ago</div>
                <div className="left-[266px] top-[164px] absolute text-black text-xs font-normal font-['Poppins']">MarketPoke</div>
                <div className="left-[587px] top-[164px] absolute text-black text-xs font-normal font-['Poppins']">Casablanca, Morroco</div>
                <div className="left-[384px] top-[160px] absolute text-black text-[15px] font-medium font-['Space Grotesk']">Community Manager</div>
                <div className="left-[778px] top-[164px] absolute opacity-60 text-black text-xs font-normal font-['Poppins']">13 hours ago</div>
                <div className="left-[266px] top-[215px] absolute text-black text-xs font-normal font-['Poppins']">Tesla</div>
                <div className="left-[587px] top-[215px] absolute text-black text-xs font-normal font-['Poppins']">London, UK</div>
                <div className="left-[384px] top-[212px] absolute text-black text-[15px] font-medium font-['Space Grotesk']">Devops Engineer</div>
                <div className="left-[778px] top-[215px] absolute opacity-60 text-black text-xs font-normal font-['Poppins']">22 hours ago</div>
                <div className="left-[266px] top-[258px] absolute text-black text-xs font-normal font-['Poppins']">Adidas</div>
                <div className="left-[587px] top-[258px] absolute text-black text-xs font-normal font-['Poppins']">Berlin, Germany</div>
                <div className="left-[384px] top-[256px] absolute text-black text-[15px] font-medium font-['Space Grotesk']">IT Consultant</div>
                <div className="left-[384px] top-[356px] absolute text-black text-[15px] font-medium font-['Space Grotesk']">IT Developer</div>
                <div className="left-[778px] top-[258px] absolute opacity-60 text-black text-xs font-normal font-['Poppins']">1 day ago</div>
                <div className="left-[266px] top-[310px] absolute text-black text-xs font-normal font-['Poppins']">Google</div>
                <div className="left-[587px] top-[310px] absolute text-black text-xs font-normal font-['Poppins']">Chicago, USA</div>
                <div className="left-[384px] top-[308px] absolute text-black text-[15px] font-medium font-['Space Grotesk']">Back End Developer</div>
                <div className="left-[778px] top-[310px] absolute opacity-60 text-black text-xs font-normal font-['Poppins']">2 days ago</div>
                <div className="left-[266px] top-[362px] absolute text-black text-xs font-normal font-['Poppins']">Microsoft</div>
                <div className="left-[587px] top-[362px] absolute text-black text-xs font-normal font-['Poppins']">Tokyo, Japan</div>
                <div className="left-[384px] top-[770px] absolute text-black text-[15px] font-medium font-['Space Grotesk']">IT Developer</div>
                <div className="left-[778px] top-[362px] absolute opacity-60 text-black text-xs font-normal font-['Poppins']">3 days ago</div>
                <img className="w-[45px] h-11 left-[137px] top-[202px] absolute" src={tesla} />
                <img className="w-11 h-11 left-[137px] top-[99px] absolute" src={margel} />
                <div className="w-[44.40px] h-[44.40px] left-[137px] top-[634px] absolute">
                    <div className="w-[44.40px] h-[44.40px] left-0 top-0 absolute bg-zinc-300" />
                    <img className="w-[44.40px] h-[29.87px] left-[0.40px] top-[-377.28px] absolute" src={adidas} />
                </div>
                <div className="w-[31.60px] h-[31.60px] left-[343.40px] top-[702.40px] absolute">
                    <div className="w-[31.60px] h-[31.60px] left-0 top-0 absolute bg-zinc-300" />
                    <img className="w-[30.60px] h-[31.31px] left-[-198.71px] top-[-400px] absolute" src={google} />
                </div>
                <div className="w-[31.60px] h-[31.60px] left-[343.40px] top-[765.40px] absolute">
                    <div className="w-[31.60px] h-[31.60px] left-0 top-0 absolute bg-zinc-300" />
                    <img className="w-[31.31px] h-[31.31px] left-[-199px] top-[-410px] absolute" src={tesla} />
                </div>
                <div className="w-[44.40px] h-[44.40px] left-[137px] top-[511px] absolute">
                    <div className="w-[44.40px] h-[44.40px] left-0 top-0 absolute bg-zinc-300" />
                    <img className="w-[71.04px] h-[60.11px] left-[-13.32px] top-[-370px] absolute" src={market} />
                </div>
                </div>
                <div className="w-[15.85px] h-5 left-[51.38px] top-[574px] absolute">
                </div>
                <div className="w-3 h-[13.33px] left-[53px] top-[372px] absolute">
                </div>
            </div>
        )
    }
}
