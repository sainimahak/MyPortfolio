  import React from 'react'
  import myPhoto from '../images/photo.jpg'
  import '../App.css'

  const HomePage = () => {
    return (
      <>
       <div className='bg-blue-300 overflow-hidden h-100% w-100% flex justify-center items-cente'>
          <div className='flex flex-col md:flex-row justify-center items-center gap-10 h-100% w-100% m-10'>
              <div className='flex flex-col justify-center align-center mt-5'>
                  <img className='sm:min-h-70 sm:min-w-70 h-100 w-100 m:h-100 m:w-100 rounded-full mt-10' src={myPhoto} alt="" />
              </div>
              <div className='text-black font-bold flex flex-col justify-center align-center '>
                  <p className= 'font-medium text-3xl m-1'>I am</p>
                  <div className='font-bold text-6xl m-1'>Mahak Saini</div>
                  <div className= 'font-medium text-3xl m-3'>FrontEnd Developer Software Developer</div>
                  <button className='button mt-6 mb-10'>Print Resume</button>
              </div>

          </div>
        </div>
          
      </>
    )
  }

export default HomePage