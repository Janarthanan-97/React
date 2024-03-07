import React from 'react'

function Skills() {
    return (
        <section>
            <div className='service' id='service'>
                <div className='container'>
                    <h1 className='sub-title'>My <span>Skills</span></h1>
                    <div className='service-list'>

                        <div className='item'>
                            <i class='bx bxl-html5'></i>
                            <h2>HTML</h2>
                            <div className='progress-line'><span style={{ width: '80%' }}></span><p>80%</p></div>
                        </div>

                        <div className='item'>
                            <i className='bx bxl-css3' ></i>
                            <h2>CSS</h2>
                            <div className='progress-line'><span style={{ width: '75%' }}></span><p>75%</p></div>
                        </div>

                        <div className='item'>
                            <i className='bx bxl-javascript' ></i>
                            <h2>JAVASCRIPT</h2>
                            <div className='progress-line'><span style={{ width: '85%' }}></span><p>85%</p></div>
                        </div>

                        <div className='item'>
                            <i className='bx bxl-react' ></i>
                            <h2>REACT</h2>
                            <div className='progress-line'><span style={{ width: '80%' }}></span><p>80%</p></div>
                        </div>

                        <div className='item'>
                            <i className='bx bxl-mongodb' ></i>
                            <h2>MongoDB</h2>
                            <div className='progress-line'><span style={{ width: '65%' }}></span><p>65%</p></div>
                        </div>

                        <div className='item'>
                            <i className='bx bxl-nodejs'></i>
                            <h2>NodeJS</h2>
                            <div className='progress-line'><span style={{ width: '80%' }}></span><p>80%</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills