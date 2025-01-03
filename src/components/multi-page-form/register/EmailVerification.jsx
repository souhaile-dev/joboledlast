import React from 'react'
import emailIcon from '../../../assets/svg/email_icon.svg'

const EmailVerification = () => {

    return (
        <div className='flex flex-col gap-y-11 items-center justify-center'>
            <div className='basis-1/4 w-[78px]'>
                <img src={emailIcon} alt="email icon" />
            </div>
            <div className='basis-3/4 font-poppins font-normal flex pb-0 px-20 p-16 '>
                <div className='items-end self-end text-center  w-[422px]'>
                    <h1 className='text-[20px] mb-4'>One more step to GO!</h1>
                    <p className='text-[14px]'>Please take a moment to verify your email address. and start getting the most out of Jobold.</p>
                </div>
            </div>
        </div>
    );
}

export default EmailVerification