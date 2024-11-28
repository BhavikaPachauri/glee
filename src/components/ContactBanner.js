import React from 'react'

const ContactBanner = () => {
    return (
        <>
            <div className='bg-aboutbanner bg-[#1f488e] bg-no-repeat bg-bgfull'>
                <div className='xl:max-w-[1058px] mx-auto px-3 w-full lg:py-32 py-16 flex justify-center items-center flex-col'>
                    <h2 className="font-medium lg:text-[58px] md:text-[45px] sm:text-[38px] text-[35px] text-white leading-[125%]">
                        Contact Us

                    </h2>
                    <p className='text-base font-medium text-white'>You can put your feedback messages, and we will reach out to you soon.
                    </p>
                </div>
            </div>
        </>
    )
}

export default ContactBanner