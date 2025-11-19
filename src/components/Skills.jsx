import React from 'react'
import Progressbar from './ProgressBar'

const Skills = () => {
    return (
        <div className='bg-gray-50 min-h-screen w-full py-16 flex flex-col items-center text-gray-900'>
            <h2 className='text-5xl md:text-6xl font-extrabold text-blue-600 cookie-regular mb-12 text-center'>
                Skills
            </h2>

            <div className='flex flex-col lg:flex-row justify-center items-center w-full max-w-5xl px-6'>
                <div className='w-full lg:w-1/2 p-4 space-y-4'>
                    <div className='progresSkill font-semibold text-lg'>Java</div>
                    <Progressbar bgcolor="#2176ff" progress="85" height={20} />

                    <div className='progresSkill font-semibold text-lg'>DSA</div>
                    <Progressbar bgcolor="#2176ff" progress="80" height={20} />

                    <div className='progresSkill font-semibold text-lg'>HTML5</div>
                    <Progressbar bgcolor="#2176ff" progress="90" height={20} />
                </div>

                <div className='w-full lg:w-1/2 p-4 space-y-4 mt-8 lg:mt-0'>
                    <div className='progresSkill font-semibold text-lg'>CSS</div>
                    <Progressbar bgcolor="#2176ff" progress="85" height={20} />

                    <div className='progresSkill font-semibold text-lg'>JavaScript</div>
                    <Progressbar bgcolor="#2176ff" progress="80" height={20} />

                    <div className='progresSkill font-semibold text-lg'>React</div>
                    <Progressbar bgcolor="#2176ff" progress="70" height={20} />
                </div>
            </div>
        </div>
    )
}

export default Skills
