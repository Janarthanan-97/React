import React from 'react'

function Experience() {
    return (
        <section id='experience'>
            <div className='experience-container'>
                <h2>My <span>Experience</span></h2>
                <div className='experience-box'>
                    <h4>Medical coder</h4>
                    <p>Company: <span style={{color:'#e8590c'}}>Optum Health Care</span></p>
                    <p>Years of Experience: 2 years</p>
                    <p>Type: ICD-10-CM, HCC (part C)</p>
                    <p>Project: Wellmed</p>
                    <p>Status: <span style={{color:'#76FF7A'}}>Active</span></p>
                </div>
            </div>
        </section>
    )
}

export default Experience