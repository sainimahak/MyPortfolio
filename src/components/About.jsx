import React from 'react';
import phone from '../images/icons8-phone-64.png';
import mail from '../images/icons8-mail-64.png';

const About = () => {
    return (
        // Main Container: Uses the specific blue background and light text
        <div className='bg-[#2176ff] min-h-screen w-full py-16 px-4 flex flex-col items-center text-white'>
            
            {/* Header */}
            <h2 className='text-5xl md:text-6xl font-extrabold mb-12 text-center tracking-wide cookie-regular about-heading'>
                About Me
            </h2>
            {/* --- Biography Section --- */}
            <div className='flex flex-col items-center w-full max-w-4xl px-4 mb-16'>
                {/* Text is centered on mobile, left-aligned on desktop, with improved line height */}
                <p className='text-lg leading-relaxed text-center md:text-left font-light aboutText'>
                    My name is Mahak Saini, and I am pursuing my BTech in Computer Science from Galgotias University. 
                    During my time in college, I developed a strong foundation in key areas of computer science, including programming, data structures, algorithms, and software development.
                    <br /><br />
                    I have worked on several projects that have helped me improve my practical knowledge, such as Paint App and Weather App using HTML, CSS, JavaScript, and React. 
                    In addition to my academic learning, I have actively participated in coding contests on various coding platforms, where I gained valuable learning in problem-solving and working under pressure.
                    <br /><br />
                    I am really passionate about software development and web development. I am eager to further enhance my skills and contribute to real-world projects.
                </p>
            </div>

            {/* --- Details & Contact Section (Side-by-side on MD screens) --- */}
            <div className='flex flex-col md:flex-row justify-center items-center md:items-center gap-16 w-full max-w-5xl'>

                {/* Personal Details Table */}
                <div className='  w-full md:w-auto aboutText p-4 md:p-0'>
                    <table className='flex gap-12 justify-center items-center w-full md:min-w '>
                        <tbody>
                            {/* Uses a light border for contrast and readability */}
                            {[['Name', 'Mahak Saini'], ['Degree', 'BTech (CS)'], ['Phone', '+91 7817037443'], ['Birthday', '07 January 2005'], ['Email', 'sainimahak328@gmail.com']].map(([label, value]) => (
                                <tr key={label} className=''>
                                    {/* Labels are white and bold, values are a lighter blue for separation */}
                                    <td className='py-3 pr-6 font-semibold text-white text-lg'>{label}</td> 
                                    <td className='py-3 text-blue-100 text-lg'>{value}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Contact Icons: Beautiful, interactive links */}
                <div className='flex gap-12 mt-10 md:mt-0 pb-12'>
                    
                    {/* Phone Link */}
                    <a 
                        href="tel:+917817037443" 
                        // High contrast white background, strong shadow, and interactive hover effect
                        className='p-4 rounded-full bg-white shadow-2xl hover:bg-gray-100 transition duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-white/50'
                    >
                        <img className='h-12 w-12' src={phone} alt="Phone Icon" />
                    </a>
                    
                    {/* Mail Link */}
                    <a 
                        href="mailto:sainimahak328@gmail.com"
                        // High contrast white background, strong shadow, and interactive hover effect
                        className='p-4 rounded-full bg-white shadow-2xl hover:bg-gray-100 transition duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-white/50'
                    >
                        <img className='h-12 w-12' src={mail} alt="Mail Icon" />
                    </a>
                 </div> 
            </div>
            
        </div>
    );
}

export default About;

