import React from 'react'
import codechef from '../assets/icons8-codechef.svg';
import github from '../assets/icons8-github.svg';
import leetcode from '../images/icons8-leetcode-48.png'
import Linkdin from '../assets/icons8-linkedin.svg';


const Contact = () => {
  return (
    <div className='bg-blue-300 h-100% w-100% p-20'>
        <div >
            <div className='flex justify-center items-center '>
            <div className='text-6xl cookie-regular'>Contact Me</div>
            </div>

            <div className='flex  flex-col md:flex-row  justify-center items-center gap-20 m-10'>        
                <div className=' w-100 '>
                    <div className='font-bold text-3xl mb-9'>Get in Touch</div>
                    <p className='text-2xl mb-4'>
                    If you have any questions or just want to say hello, feel free to reach out! 
                    </p>
                    <p className='text-2xl mb-2'>Email: sainimahak328@gmail.com</p>
                    <p className='text-2xl'>Phone: 7817037443</p>
                </div>

                <div>
                    <form action="">
                    <input className='inputfield h-10 w-100' type="text" placeholder='Your Name'  required/>  <br /><br />
                    <input className='inputfield h-10 w-100' type="mail" placeholder='Your Email' required />    <br />   <br />      
                    <textarea className='inputfield h-50 w-100 ' placeholder='Write Text' id="message" name="message" rows="6" cols="70" maxlength="150" required></textarea><br></br>
                    <button className='button w-300 ml-20'>Submit</button>
                    </form>
               </div>


            </div>

            <div className='flex items-center justify-center gap-10'>
                <a href="https://www.linkedin.com/in/sainimahak/"><img src={Linkdin} alt="" /></a>
                <a href="https://github.com/sainimahak"><img src={github} alt="" /></a>
                <a href="https://leetcode.com/u/mahaksaini/"><img src={codechef} alt="" /></a>
                <a href="https://www.codechef.com/users/mahaksaini"><img src={leetcode} alt="" /></a> 
  
            </div>
        </div>
    </div>
  )
}

export default Contact