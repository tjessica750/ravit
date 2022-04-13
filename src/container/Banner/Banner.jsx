import React from 'react';
import '../Banner/Banner.css'
// import bannerimg from '../../resources/istockphoto-1.jpg'

const banner = ({ }) => {
    return (
        <div className="img">
            {/*<img src={bannerimg} alt=""> */}
            <div class="content-main">
                <div class="text-main ">
                    <div className='letter_type'>
                        <h1 >Swift</h1>
                        <h2 >Swift is a modern, general-purpose and multi-paradigm programming language designed by Apple to build their iOS-powered devices.</h2>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default banner;