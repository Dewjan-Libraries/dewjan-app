import React from 'react'

import vid from '../../assets/images/video-2.mp4'
import Navbar from '../../components/Navbar'


const Join = () => {
    return (
        <div>
            <Navbar />
            <div className='bg-red-50'>
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