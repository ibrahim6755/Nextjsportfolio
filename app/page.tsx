"use client"
import React from 'react'
import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Typed from 'typed.js'
import sec1img from './imgs/sec-1.png'



export default function Home() {
  // Create reference to store the DOM element containing the animation
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['WEB DEVELOPER', 'UI/UX DEVELOPER.',],
      typeSpeed: 60,
      loop: true, // Add this option to enable continuous looping
    });

    // No need for cleanup function to stop the animation

    // Optional: If you want to stop the animation on component unmount, keep the cleanup function
    // return () => {
    //   typed.destroy();
    // };
  }, []);
  return (
    <>
      <section className='header-section flex items-center justify-center mb-3 mt-16'>
        <div className="info  items-center justify-center w-2/4">
          <h2 className='font-bold text-3xl mr-2 whitespace-normal leading-10'>Welcome I am  <span className='text-blue-600 font-bold'>Ibrahim Ghani</span>.<br /> I live in Pakistan.I make Fully Responsive Designs & I am a <span className='text-blue-600' ref={el} /></h2>
          <div className="links ">
          <ul className='flex items-center'>
            <li className='animate-bounce w-10 h-10 motion-safe:animate-bounce m-1 mt-12 list-none font-semibold hover:bg-blue-500 active:bg-blue-600 active:ring-black focus:outline-none focus:ring focus:ring-blue-700 p-2 rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'><a href=""><img className='w-6' src="https://www.svgrepo.com/show/494202/facebook.svg" alt="" /></a></li>
            <li className='animate-bounce w-10 h-10 motion-safe:animate-bounce m-1 mt-12 list-none font-semibold hover:bg-blue-500 active:bg-blue-600 active:ring-black focus:outline-none focus:ring focus:ring-blue-700 p-2 rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'><a href=""><img className='w-6' src="https://www.svgrepo.com/show/500461/whatsapp.svg" alt="" /></a></li>
            <li className='animate-bounce w-10 h-10 motion-safe:animate-bounce m-1 mt-12 list-none font-semibold hover:bg-blue-500 active:bg-blue-600 active:ring-black focus:outline-none focus:ring focus:ring-blue-700 p-2 rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'><a href=""><img className='w-6' src="https://www.svgrepo.com/show/494217/twitter.svg" alt="" /></a></li>
            <li className='animate-bounce w-10 h-10 motion-safe:animate-bounce m-1 mt-12 list-none font-semibold hover:bg-blue-500 active:bg-blue-600 active:ring-black focus:outline-none focus:ring focus:ring-blue-700 p-2 rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'><a href=""><img className='w-6' src="https://www.svgrepo.com/show/453774/instagram.svg" alt="" /></a></li>
          </ul>
        </div>
        </div>
        <div className="img">
          <Image src={sec1img} alt="Main img" />
        </div>
      </section>

      <section className='about mt-16'>
        <div className="heading flex items-center justify-center ">
          <h2 className='font-bold text-4xl'>About Me</h2>
        </div>
        <div className="paragaph flex items-center align-middle justify-center mt-9 ">
          <p className='text-center w-9/12 leading-9'>Hello! I'm <span className='text-blue-600 font-bold'>Ibrahim Ghani</span> , a passionate and innovative software developer with a love for turning ideas into elegant, functional solutions. With a strong foundation in <span className='text-blue-600 font-bold'>HTML,CSS,JS,REACT,BOOTSTRAP,NEXT JS , TAILWIND CSS</span> , I thrive on tackling complex challenges and creating user-centric applications that make a real impact.
            Collaboration and communication are at the heart of my work. I enjoy collaborating with cross-functional teams, designers, and stakeholders to ensure every project is not only technically sound but also aligns seamlessly with the overall vision. I'm a firm believer in the power of clean code, elegant design, and intuitive user experiences.
            Feel free to explore my portfolio to get a glimpse of some of the exciting projects I've had the privilege to work on. If you're interested in collaborating or have a project in mind, don't hesitate to reach out. I'm always excited about new opportunities to create meaningful and impactful solutions.</p>
        </div>
      </section>

      <section className="skills-wrapper">

      </section>



    </>


  )
}
