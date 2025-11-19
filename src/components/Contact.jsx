import React from 'react'
import codechef from '../assets/icons8-codechef.svg';
import github from '../assets/icons8-github.svg';
import leetcode from '../images/icons8-leetcode-48.png'
import Linkdin from '../assets/icons8-linkedin.svg';


const Contact = () => {
  return (
    // Main Container: Use min-h-screen for full height, consistent padding, and standard light background
    <div className='bg-gray-50 min-h-screen w-full py-16 px-4 sm:px-8 flex flex-col items-center text-gray-900'>
      
      {/* Header */}
      <div className='text-5xl md:text-6xl font-extrabold text-blue-600 cookie-regular mb-12 text-center'>
        Contact Me
      </div>

      {/* --- Content (Info + Form) Section --- */}
      <div className='flex flex-col md:flex-row justify-center items-start md:items-center gap-16 w-full max-w-6xl'>
        
        {/* Contact Info (Left Side) */}
        <div className='w-full md:w-1/2 p-4 md:p-0'>
          <div className='font-bold text-3xl md:text-4xl text-blue-600 mb-8'>Get in Touch</div>
          
          <p className='text-base md:text-lg mb-6 leading-relaxed'>
            If you have any questions or just want to say hello, feel free to reach out! I'm always open to discussing new projects and opportunities.
          </p>
          
          <p className='text-lg font-semibold mb-2'>
            <span className='text-blue-600 mr-2'>📧</span> Email: sainimahak328@gmail.com
          </p>
          <p className='text-lg font-semibold'>
            <span className='text-blue-600 mr-2'>📱</span> Phone: +91 7817037443
          </p>
        </div>

        {/* Contact Form (Right Side) */}
        <div className='w-full md:w-1/2 p-4 md:p-0'>
        {/* 1. PASTE YOUR FORMSPREE URL INSIDE action="" */}
        <form 
            action="https://formspree.io/f/mgvdanvd"
            method="POST"
            className='flex flex-col gap-4 w-full'
        >
        
        {/* Inputs: Use Tailwind for full width and better styling */}
        <input 
            className='inputfield w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500' 
            type="text" 
            placeholder='Your Name'
            name="name"  // <--- CRITICAL: Identifies this data as the Name
            required
        /> 
        
        <input 
            className='inputfield w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500' 
            type="email" 
            placeholder='Your Email' 
            name="email" // <--- CRITICAL: Identifies this as the sender's email
            required 
        /> 
        
        <textarea 
            className='inputfield w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none' 
            placeholder='Write Text' 
            id="message" 
            name="message" // <--- CRITICAL: Identifies this as the message body
            rows="5" 
            maxLength="300" 
            required
        ></textarea>
        
        {/* Submit Button */}
        <button 
            className='button w-full md:w-auto px-6 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 mt-2 self-start'
            type="submit" 
        >
            Submit Message
        </button>
        </form>
    </div>

 
      </div>
      
      {/* --- Social Icons Section --- */}
      <div className='flex items-center justify-center gap-6 mt-16'>
        {/* Applied consistent styling for hover effect and size control */}
        <a href="https://www.linkedin.com/in/sainimahak/" className='hover:scale-110 transition duration-200'>
          <img src={Linkdin} alt="LinkedIn" className='h-10 w-10 md:h-12 md:w-12'/>
        </a>
        <a href="https://github.com/sainimahak" className='hover:scale-110 transition duration-200'>
          <img src={github} alt="GitHub" className='h-10 w-10 md:h-12 md:w-12'/>
        </a>
        <a href="https://www.codechef.com/users/mahaksaini" className='hover:scale-110 transition duration-200'>
          <img src={codechef} alt="CodeChef" className='h-10 w-10 md:h-12 md:w-12'/>
        </a>
        <a href="https://leetcode.com/u/mahaksaini" className='hover:scale-110 transition duration-200'>
          <img src={leetcode} alt="LeetCode" className='h-10 w-10 md:h-12 md:w-12'/> 
        </a>
      </div>
    </div>
  )
}

export default Contact





























