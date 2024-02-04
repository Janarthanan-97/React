import React from 'react'

function Portfolio() {
    return (
        <section>
            <div className='portfolio' id='portfolio'>
                <div className='main-text'>
                    <h2>My <span>Works</span></h2>

                    <div className='portfolio-content'>
                        <div className='row'>
                            <img src='https://www.dropbox.com/scl/fi/teopqjk5z0f7u1h65e9h9/Billing-app.png?rlkey=kwsk289exemv807yrjegwfgo5&dl=0&raw=1' />
                            <a className='layer' href='https://jazzy-fenglisu-c53c8a.netlify.app/' target='_blank' >
                                <h5>Billing APP</h5>
                                <p>Billing app, where one can add, delete, modify, bill items and can retrive customer billing</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio