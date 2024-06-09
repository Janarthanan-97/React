import React from 'react'

function Portfolio() {
    return (
        <section>
            <div className='portfolio' id='portfolio'>
                <div className='main-text'>
                    <h2>My <span>Portfolio</span></h2>

                    <div className='portfolio-content'>
                        <div className='row'>
                            <img src='https://www.dropbox.com/scl/fi/fdlqq9s4hw2c3d601637g/Capstone.png?rlkey=wvt2gjwp7askzlq0mp7s42ija&dl=0&raw=1' />
                            <a className='layer' href='https://jazzy-fenglisu-c53c8a.netlify.app/' target='_blank' >
                                <h5>Billing APP</h5>
                                <p>Billing app, where one can add, delete, modify, bill items and can retrive customer billing</p>
                            </a>
                        </div>

                        <div className='row'>
                            <img src='https://www.dropbox.com/scl/fi/xwxxlbaiy4d5iku6upmrt/Screenshot-2024-06-09-205629.png?rlkey=2rya169ya3qbn842hjl30r9tm&st=jc00a3dq&dl=0&raw=1' />
                            <a className='layer' href='https://stupendous-squirrel-291bb7.netlify.app/' target='_blank' >
                                <h5>Chat APP</h5>
                                <p>Chat App is created using socket.io where one can communicate on real time.</p>
                            </a>
                        </div>

                        <div className='row'>
                            <img src='https://www.dropbox.com/scl/fi/w5h8i4wi93ypacqy847qj/Screenshot-2024-06-09-210603.png?rlkey=p1t6iy0n2e7xeozdwgo6ywfjw&st=it1i8yqn&dl=0&raw=1' />
                            <a className='layer' href='https://profound-bienenstitch-a76cdc.netlify.app/' target='_blank' >
                                <h5>Business portfolio</h5>
                                <p>This portfolio is completely built using self made designs without using of any designer framework such as bootstrap, tailwind, etc...</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio