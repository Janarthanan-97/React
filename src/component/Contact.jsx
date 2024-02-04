import React from 'react'

function Contact() {
    return (
        <section className='contact' id='contact'>
            <div className='contact-text'>
                <h2>Contact <span>Me</span></h2>
                <h4>Let's Work together</h4>
                <p></p>
                <div className='contact-list'>
                    <li><i class='bx bx-mail-send'></i> <a href='mailto:janamadhav13@gmail.com'>janamadhav13@gmail.com</a></li>
                    <li><i class='bx bxs-phone-call' ></i> <a href='Tel:9597019410'>9597019410</a></li>
                </div>
            </div>
            <div className='contact-form'>
                <form action=''>
                    <input className='input' type='' placeholder='Enter your Name...' required />
                    <input className='input' type='email' placeholder='Enter your E-mail...' required />
                    <input className='input' type='' placeholder='Enter your Subject...' required />
                    <textarea className='input' name='' id='' cols='40' rows='10' placeholder='Enter your message...' required></textarea>
                    <input type="submit" value='submit' className='send' />
                </form>
            </div>
        </section>
    )
}

export default Contact