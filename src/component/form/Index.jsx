import React, { useState } from 'react'
import './Index.css'

function Index() {
  let [eMail, setEMail] = useState()
  let [name, setName] = useState()
  let [phone, setPhone] = useState()
  let [iam, setIam] = useState()
  let [describeMe, setDescribeMe] = useState()
  let [socialMedia, setSocialMedia] = useState([])
  let [mainImage, setMainImage] = useState()
  let [jobTitle, setJobTitle] = useState([])
  let [aboutMe, setAboutMe] = useState()
  let [aboutMeImage, setAboutMeImage] = useState()
  let [resume, setResume] = useState();
  let [skill, setSkill] = useState([])

  let handleSubmit = ()=>{
    let obj = {eMail, name, phone, iam, describeMe, socialMedia, mainImage, jobTitle, aboutMe, aboutMeImage, resume, skill}
    console.log(obj)
  }


  return (
    <div className='form-container'>
      <div>
        <label>E-Mail</label>
        <input onChange={(e)=>{setEMail(e.target.value)}} />
      </div>
      <div>
        <label>Name</label>
        <input onChange={(e)=>{setName(e.target.value)}} />
      </div>
      <div>
        <label>Phone</label>
        <input onChange={(e)=>{setPhone(e.target.value)}} />
      </div>
      <div>
        <label>I am a:</label>
        <input onChange={(e)=>{setIam(e.target.value)}} />
      </div>
      <div>
        <label>Discreption in single sentence</label>
        <input onChange={(e)=>{setDescribeMe(e.target.value)}} />
      </div>
      <div>
        <label>Social Media</label>
        <input />
      </div>
      <div>
        <label>Main Image URL</label>
        <input onChange={(e)=>{setMainImage(e.target.value)}} />
      </div>
      <div>
        <label>Job Title</label>
        <input onChange={(e)=>{setJobTitle(e.target.value)}} />
      </div>
      <div>
        <label>About me</label>
        <textarea onChange={(e)=>{setAboutMe(e.target.value)}} />
      </div>
      <div>
        <label>About Me Image URL</label>
        <input onChange={(e)=>{setAboutMeImage(e.target.value)}} />
      </div>
      <div>
        <label>Resume URL</label>
        <input onChange={(e)=>{setResume(e.target.value)}} />
      </div>
      <div>
        <label>Skills</label>
        <input />
      </div>
      <button onClick={handleSubmit} >Submit</button>
    </div>
  )
}

export default Index