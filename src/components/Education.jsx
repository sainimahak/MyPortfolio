import React from 'react';

const Education = () => {
  return (
    // Main Container: Set blue background, light text, and centered items
    <div className='bg-[#2176ff] min-h-screen w-full py-16 px-4 flex flex-col items-center text-white'>
      
      {/* Header */}
      <h2 className='text-5xl md:text-6xl font-extrabold mb-12 text-center tracking-wide cookie-regular about-heading'>
        Education
      </h2>

      {/* Education Cards Container: Uses high gap (gap-10) on mobile for vertical separation */}
      <div className='flex flex-col md:flex-row justify-center items-center gap-10 md:gap-8 w-full max-w-6xl'>
        
        {/* --- Card 1: B.Tech --- */}
        {/* On mobile (default), flex-1 and w-full make the card take up all available horizontal space */}
        <div className='educationBox flex-1 p-6 h-auto w-full max-w-sm'>
          <div className='degree font-bold text-xl md:text-2xl text-blue-600 mb-2'>
            Bachelor's in Computer Engineering
          </div>
          <div className='collegeName font-semibold text-lg text-gray-800 mb-4'>
            Galgotias University
          </div>
          <p className='year text-sm bg-blue-50 text-blue-700 font-medium py-1 px-3 rounded-full inline-block mb-3'>
            2022 - 2026
          </p>
          <p className='year font-medium text-base text-gray-700 mb-1'>
            CGPA/Percentage: 9.7/10 (97%)
          </p>
          <p className='interest text-gray-600 mt-3'>
            Key Interests: Web Development, Software Development, and DSA.
          </p> 
        </div>

        {/* --- Card 2: Intermediate (12th) --- */}
        <div className='educationBox flex-1 p-6 h-auto w-full max-w-sm'>
          <div className='degree font-bold text-xl md:text-2xl text-blue-600 mb-2'>
            Intermediate (12th Grade)
          </div>
          <div className='collegeName font-semibold text-lg text-gray-800 mb-4'>
            Kalvin Central Academy
          </div>
          <p className='year text-sm bg-blue-50 text-blue-700 font-medium py-1 px-3 rounded-full inline-block mb-3'>
            2021 - 2022
          </p>
          <p className='year font-medium text-base text-gray-700 mb-1'>
            Percentage: 88%
          </p>
          <p className='interest text-gray-600 mt-3'>
            Core Subjects: Physics, Chemistry, Mathematics, and English.
          </p>
        </div>

        {/* --- Card 3: Matriculation (10th) --- */}
        <div className='educationBox flex-1 p-6 h-auto w-full max-w-sm'>
          <div className='degree font-bold text-xl md:text-2xl text-blue-600 mb-2'>
            Matriculation (10th Grade)
          </div>
          <div className='collegeName font-semibold text-lg text-gray-800 mb-4'>
            Kalvin Central Academy
          </div>
          <p className='year text-sm bg-blue-50 text-blue-700 font-medium py-1 px-3 rounded-full inline-block mb-3'>
            2019 - 2020
          </p>
          <p className='year font-medium text-base text-gray-700 mb-1'>
            Percentage: 85%
          </p>
          <p className='interest text-gray-600 mt-3'>
            Core Subjects: Science, Mathematics, and Social Studies.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Education























