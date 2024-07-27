import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaMobileAlt } from 'react-icons/fa'

const FooterLinks=[
    {
        title:"Home",
        link:"/#",

    },
    {
        title:"About",
        link:"/#about",
    },
    {
        title:"Contact",
        link:"/#contact",
    },
    {
        title:"Blog",
        link:"/#blog",
    }
]

const Footer = () => {
  return (
    <div>
        <div className="container">
            <div className="grid md:grid-cols-3 pb-20 pt-5">
                {/* Company Details  */}
                <div className='py-8 px-4'>
                <a href="#"
                            className='text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl'
                        >GSHOP</a>
                <p className='text-gray-600 dark:text-white/70 lg:pr-24 pt-3'>
                    We specialize in high-quality gadgets and accessories.
                    Contact us at 977+ 123-456-789 or email us at Eshop@gmail.com
                </p>
                <p className='text-gray-500 mt-4'>Frontend Developer with Passion</p>
                </div>
                {/* footer links */}
                <div className='col-span-2 grid grid-cols-2 sm:grid-cols-3 ms:pl-10'>
                    <div className='py-8 px-4'>
                        <h1 className='text-xl font-bold sm:text-left mb-3'>Important Links</h1>
                        <ul className='space-y-3'>
                            {
                                FooterLinks.map(
                                    (data,index) => (
                                        <li key={index}>
                                            <a href={data.link} className='text-gray-600 dark:text-gray-400 hover:dark:text-white hover:text-black duration-300'>
                                                {data.title}
                                                </a>
                                        </li>
                                    )
                                )
                            }
                        </ul>
                    </div>
                    {/* Second col */}
                    <div className='py-8 px-4'>
                        <h1 className='text-xl font-bold sm:text-left mb-3'>Important Links</h1>
                        <ul className='space-y-3'>
                            {
                                FooterLinks.map(
                                    (data,index) => (
                                        <li key={index}>
                                            <a href={data.link} className='text-gray-600 dark:text-gray-400 hover:dark:text-white hover:text-black duration-300'>
                                                {data.title}
                                                </a>
                                        </li>
                                    )
                                )
                            }
                        </ul>
                    </div>

                    
                    <div className='py-8 px-4 col-span-2 sm:col-auto'>
                    <h1 className='text-xl font-bold sm:text-left mb-3'>Address</h1>
                            <div>
                                <div className='flex items-center gap-3'>
                                    <FaLocationArrow/>
                                    <p>Kathmandu, Nepal</p>
                                </div>
                                <div className='flex items-center gap-3 mt-6'>
                                    <FaMobileAlt/>
                                    <p>9864152876</p>
                                </div>

                                {/* Social Media */}

                                <div className='flex items-center gap-3 mt-6'>
                                    <a href="https://www.instagram.com/_pawangautam_/" target='blank'>
                                        <FaInstagram className='text-3xl hover:text-primary duration-300'/>
                                    </a>
                                    <a href="https://www.facebook.com/paban.gautam.129" target='blank'>
                                        <FaFacebook className='text-3xl hover:text-primary duration-300'/>
                                    </a>
                                    <a href="https://www.linkedin.com/in/pawan-gautam-418838263/" target='blank'>
                                        <FaLinkedin className='text-3xl hover:text-primary duration-300'/>
                                    </a>
                                </div>


                            </div>
                    </div>




                </div>

            </div>
        </div>
    </div>
  )
}

export default Footer