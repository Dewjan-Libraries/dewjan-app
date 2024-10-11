import React from 'react'

import vid from '../../assets/images/video-3.mp4'
import Navbar from '../../components/Navbar'


const Join = () => {
    return (
        <div>
            <Navbar />
            <div className='bg-[#fef2f2c0]'>
                <div className=' flex pt-48  w-2/4 ml-80 '>
                    <video controls>
                        <source src={vid} />
                    </video>
                </div>
            </div>
            
        </div>
    )
}

export default Join