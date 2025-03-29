import React from 'react'
import phone from '../images/icons8-phone-100.png'
import mail from '../images/icons8-mail-96.png';

const About = () => {
  return (
    <div className='h-100% w-100% overflow-hidden box-border flex flex-col justify-center items-center bg-blue-500'>
             <div className=' flex flex-col justify-center items-center'>
                <div className='text-6xl cookie-regular mt-10 mb-10'>About</div>               
                <div className='aboutText min-w-sm max-w-4xl ml-10 mr-10'>
                My name is Mahak Saini,  and I am pursuing my BTech in Computer Science from Galgotias University.
                During my time in college, I developed a strong foundation in key areas of computer science, including programming, data structures, algorithms, and software development.
                I have worked on several projects that have helped me improve my practical knowledge, such as Paint App and Weather App using HTML, CSS, and JavaScript and React.
                <br />In addition to my academic learning, I have actively participated in coding contest on various coding platforms, where I gained valuable learning in problem-solving and working under pressure.
                I am really passionate about software developer and web development. I am eager to further enhance my skills and contribute to real-world projects.
                </div>
            </div>
            <div className='flex flex-col md:flex-row justify-center items-center gap-10 ' >
                <div className='aboutText flex flex-col justify-center items-center gap-10 mt-10 mb-9'>
                <table>
                    <tr>
                        <td className='tablepadding'>Name</td> 
                        <td className='tablepadding'>Mahak Saini</td>
                    </tr>
                    <tr>
                        <td className='tablepadding'>Degree</td>
                        <td className='tablepadding'>BTech</td>
                    </tr>
                    <tr>
                        <td className='tablepadding'>Phone</td>
                        <td className='tablepadding'>+91 7817037443</td>
                    </tr>
                    <tr>
                        <td className='tablepadding'>Birthday</td>
                        <td className='tablepadding'>07 January 2005</td>
                    </tr>
                    <tr>
                        <td className='tablepadding'>Email</td>
                        <td className='tablepadding'>sainimahak328@gmail.com</td>
                    </tr>
                </table>
                 </div>

                 <div className='flex gap-10'>
                    <a  href="tel:+91 78 1703 6443">
                        <img className='h-25 w-26  border-box p-2' src={phone} alt="" />
                    </a>
                    <a href="mailto:sainimahak328@gmail.com">
                        <img className='h-25 w-26 ' src={mail} alt="" />
                    </a>
                </div>


            </div>
            

            

    </div>
  )
}

export default About

