import axios from 'axios'
import React, { useState } from 'react'

function Contact() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

    const sendMail = async () => {
        if (name == "" && email == "" && subject == "" && message == "") {
            alert('Please fill name, email, subject, message')
        }
        else {
            setName('')
            setEmail('')
            setSubject('')
            setMessage('')
            const res = await axios.put(`${import.meta.env.VITE_URL}/sendMail`, { name, email, subject, message })
            alert(res.data)
        }

    }

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
                <form>
                    <input className='input' type='' placeholder='Enter your Name...' required onChange={(e) => { setName(e.target.value) }} value={name} />
                    <input className='input' type='email' placeholder='Enter your E-mail...' required onChange={(e) => { setEmail(e.target.value) }} value={email} />
                    <input className='input' type='' placeholder='Enter your Subject...' required onChange={(e) => { setSubject(e.target.value) }} value={subject} />
                    <textarea className='input' name='' id='' cols='40' rows='10' placeholder='Enter your message...' required onChange={(e) => { setMessage(e.target.value) }} value={message} />
                    <input type="submit" value='submit' className='send' onClick={sendMail} />
                </form>
            </div>
        </section>
    )
}

export default Contact