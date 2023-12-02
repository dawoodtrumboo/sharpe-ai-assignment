import React from 'react'
import { FaReact, FaJava, FaPython, FaFigma } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoHtml5 } from "react-icons/io5";
import { TbBrandNextjs } from "react-icons/tb";


const Home = () => {
    return (
        <div className=' pt-[100px] text-white min-h-[100vh] flex px-[100px]'>

            <div className='flex justify-between w-full'>
                <div className='flex flex-col gap-10 w-[50%]'>
                    <div>
                        <h1 className='font-sans text-6xl font-bold'>Dawood Trumboo</h1>
                        <em className='text-[#F9FD6D] text-2xl'>Frontend Developer</em>
                    </div>

                    <div className='space-y-4'>
                        <h3 className='text-xl'>Tech Stack :</h3>

                        <div className='flex flex-wrap gap-5'>

                            <div className='bg-[#F9FD6D] p-4 rounded-xl text-black flex items-center justify-center gap-2 shadow-md shadow-[#ffffff7d]'>
                                <FaReact />
                                <h4>ReactJs</h4>
                            </div>

                            <div className='bg-[#F9FD6D] p-4 rounded-xl text-black flex items-center justify-center gap-2 shadow-md shadow-[#ffffff7d]'>


                                <svg height="20" preserveAspectRatio="xMidYMid" width="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 153.6"><linearGradient id="a" x1="-2.778%" y1="32%" y2="67.556%"><stop offset="0" stop-color="#2298bd" /><stop offset="1" stop-color="#0ed7b5" /></linearGradient><path d="M128 0C93.867 0 72.533 17.067 64 51.2 76.8 34.133 91.733 27.733 108.8 32c9.737 2.434 16.697 9.499 24.401 17.318C145.751 62.057 160.275 76.8 192 76.8c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C174.249 14.743 159.725 0 128 0zM64 76.8C29.867 76.8 8.533 93.867 0 128c12.8-17.067 27.733-23.467 44.8-19.2 9.737 2.434 16.697 9.499 24.401 17.318C81.751 138.857 96.275 153.6 128 153.6c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.543 95.725 76.8 64 76.8z" fill="url(#a)" /></svg>                    <h4>Tailwind</h4>
                            </div>

                            <div className='bg-[#F9FD6D] p-4 rounded-xl text-black flex items-center justify-center gap-2 shadow-md shadow-[#ffffff7d]'>
                                <IoLogoJavascript />
                                <h4>JavaScipt</h4>
                            </div>

                            <div className='bg-[#F9FD6D] p-4 rounded-xl text-black flex items-center justify-center gap-2 shadow-md shadow-[#ffffff7d]'>
                                <IoLogoHtml5 />
                                <h4>HTMl5</h4>
                            </div>

                            <div className='bg-[#F9FD6D] p-4 rounded-xl text-black flex items-center justify-center gap-2 shadow-md shadow-[#ffffff7d]'>
                                <img src='https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg' className='w-[20px]' />
                                <h4>CSS3</h4>
                            </div>

                            <div className='bg-[#F9FD6D] p-4 rounded-xl text-black flex items-center justify-center gap-2 shadow-md shadow-[#ffffff7d]'>
                                <FaJava />
                                <h4>Java</h4>
                            </div>

                            <div className='bg-[#F9FD6D] p-4 rounded-xl text-black flex items-center justify-center gap-2 shadow-md shadow-[#ffffff7d]'>
                                <FaPython />
                                <h4>Python</h4>
                            </div>

                            <div className='bg-[#F9FD6D] p-4 rounded-xl text-black flex items-center justify-center gap-2 shadow-md shadow-[#ffffff7d]'>
                                <TbBrandNextjs />
                                <h4>NextJs</h4>
                            </div>

                            <div className='bg-[#F9FD6D] p-4 rounded-xl text-black flex items-center justify-center gap-2 shadow-md shadow-[#ffffff7d]'>
                                <FaFigma />
                                <h4>Figma</h4>
                            </div>
                        </div>
                    </div>
                    <div className='w-full'>
                        <a href='https://drive.google.com/file/d/1HLGGNTTgiqFKSxvNwoXSapIioabDMjiU/view?usp=sharing' className='bg-white px-5 py-3 rounded-full text-black font-semibold transition-all ease-linear hover:bg-[#F9FD6D] hover:animate-bounce'>Show Resume</a>
                    </div>

                </div>

                <div className='h-[300px] w-[300px] rounded-full overflow-hidden bg-black shadow-[#f8fd6d62] shadow-xl'>

                    <img src="https://st5.depositphotos.com/30551032/64587/i/450/depositphotos_645878944-stock-photo-cybersecurity-vulnerability-hacker-coding-malware.jpg" alt="profile"
                        className='w-full h-full object-cover' />

                </div>
            </div>




        </div>
    )
}

export default Home