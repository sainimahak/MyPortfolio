import React from 'react'

const Education = () => {
  return (
    <div className='bg-blue-500 h-100% w-100% overflow-hidden p-10'>
        <div className='flex justify-center items-center'>
            <div className='text-6xl cookie-regular mt-10 mb-10'>Education</div>
        </div>
        <div className='flex flex-col md:flex-row gap-15 justify-center items-center '>
            
            <div className='educationBox h-60 w-80'>
                <div className='degree'>Bachelor's in Computer Engineering</div>
                <div className='collegeName'>Galgotias University</div>
                <p className='year'>2022-2026</p>
                <p className='interest'>Keen Interests in subjects like Web Development and Software Development.</p> 
            </div>
            <div className='educationBox h-60 w-80'>
                <div className='degree'>Intermediate</div>
                <div className='collegeName'>Kalvin Central Academy</div>
                <p className='year'>2021-2022</p>
                <p className='interest'>With core subjects: Physics, Chemistry, Mathematics and English</p>
            </div>
            <div className='educationBox h-60 w-80'>
                <div className='degree'>Matriculation</div>
                <div className='collegeName'>Kalvin Central Academy</div>
                <p className='year'>2020</p>
                <p className='interest'>With subjects: Science, Mathematics and Social Studies.</p>
            </div>
        </div>
    </div>
  )
}

export default Education