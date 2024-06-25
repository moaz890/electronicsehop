import React from 'react'
import { FaLinkedin, FaMobileAlt, FaTwitter } from 'react-icons/fa'
import { FaFacebook, FaHeart, FaInstagram, FaLocationArrow } from 'react-icons/fa6'

const FooterLinks = [
    {
        title: "Home",
        link: "/"
    },
    {
        title: "About",
        link: "/#about"
    },
    {
        title: "Contact",
        link: "/#contact"
    },
    {
        title: "Blog",
        link: "/#blog"
    },
]

const Footer = () => {
    return (
        <div className='dark:bg-gray-950'>
            <div className="container">
                <div className="grid md:grid-cols-3 pb-20 pt-5">
                    {/* Company Details */}
                    <div className='py-8 px-4'>
                        <a href="#"
                            className='text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl'
                        >Eshop</a>
                        <p className='text-gray-600 dark:text-white/70 lg:pr-24 pt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem debitis, nesciunt explicabo voluptatibus eum ipsam quia eveniet tempora eos dignissimos</p>
                        <p className='text-gray-500 mt-4'>Made With <FaHeart className='inline-block text-primary'/> by Moaz Gazer </p>
                    </div>

                    {/* Footer Links */}
                    <div className='col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10'>
                        <div className='py-8 px-4'>
                            <h1 className='text-xl font-bold sm:text-left mb-3'>Important Links </h1>
                            <ul className='space-y-3'>
                                {
                                    FooterLinks.map((data, index) => (
                                        <li key={index}>
                                            <a href={data.link}
                                                className='text-gray-600 hover:text-black duration-300 dark:hover:text-white'
                                            >{data.title}</a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className='py-8 px-4'>
                            <h1 className='text-xl font-bold sm:text-left mb-3'>Quick Links </h1>
                            <ul className='space-y-3'>
                                {
                                    FooterLinks.map((data, index) => (
                                        <li key={index}>
                                            <a href={data.link}
                                                className='text-gray-600 hover:text-black duration-300 dark:hover:text-white'
                                            >{data.title}</a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className="py-8 px-4 col-span-2 sm:col-auto">
                        <h1 className='text-xl font-bold sm:text-left mb-3'>Address</h1>
                            <div>
                                <div className="flex items-center gap-3">
                                    <FaLocationArrow />
                                    <p>Sharqia, Hehia Zahraa St</p>
                                </div>
                                <div className="flex items-center gap-3 mt-6">
                                    <FaMobileAlt />
                                    <p>+20 01208379172</p>
                                </div>
                                {/* Social Links */}
                                <div className='flex gap-3 justify-center items-center mt-4'>
                                    <a target='_blank' href="https://x.com/Prog_Abdelattey"><FaTwitter className='text-3xl hover:text-primary duration-300'/></a>
                                    <a target='_blank' href="https://www.facebook.com/moaz.gazer/"><FaFacebook className='text-3xl hover:text-primary duration-300'/></a>
                                    <a target='_blank' href="https://www.linkedin.com/in/moaz-gazer-294225201/"><FaLinkedin className='text-3xl hover:text-primary duration-300'/></a>
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
