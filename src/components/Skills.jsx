import React from 'react'
import Progressbar from './ProgressBar'

const Skills = () => {
  return (
    <div  >    
        <div className='bg-blue-300  h-100% w-100% flex flex-col justify-center items-center'>
                <div className='text-6xl cookie-regular mt-10 mb-10'>Skills</div>
                <div className=' flex flex-col lg:flex-row justify-center items-center ml-20 mr-10 pl-10 pb-10'>
                <div className='mr-10'>
                <div className='progresSkill'>Java</div>
                <Progressbar
                    bgcolor="orange"
                    progress="85"
                    height={20}
                    width={400}
                />
                
                <div className='progresSkill'>DSA</div>
                <Progressbar
                    bgcolor="#9900ff"
                    progress="80"
                    height={20}
                    width={400}
                />

                <div className='progresSkill'>HTML5</div>
                <Progressbar
                    bgcolor="red"
                    progress="90"
                    height={20}
                    width={400}
                />
                </div>
                <div className='mr-10'>
                <div className='progresSkill'>CSS</div>
                <Progressbar
                    bgcolor="#99ff88"
                    progress="85"
                    height={20}
                    width={400}
                />
                <div className='progresSkill'>JavaScript</div>
                <Progressbar
                    bgcolor="#0055ff"
                    progress="80"
                    height={20}
                    width={400}
                />
                <div className='progresSkill'>React</div>
                <Progressbar
                    bgcolor="#ff6600"
                    progress="70"
                    height={20}
                    width={400}
                /> 
                </div>          
            </div>
            </div>
            
     </div>
  )
}

export default Skills