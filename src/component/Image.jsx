import React from 'react'

function Image() {
    return (
        <div className='image-container'>
            <div className='image-div'>
            <img src='https://www.dropbox.com/scl/fi/u66kmetq8nxcwyvi910si/Home_photo.jpg?rlkey=d593skbiyrht1qldsrfd50c0i&dl=0&raw=1' alt='Home_photo'/>
            </div>
            <svg viewBox='0 0 100 100'>
                <circle cx='50' cy='50' r='45' id='circle1' />
                <circle cx='50' cy='50' r='45' id='circle2' />
                <circle cx='50' cy='50' r='45' id='circle3' />
                <circle cx='50' cy='50' r='45' id='circle4' />
            </svg>
        </div>
    )
}

export default Image