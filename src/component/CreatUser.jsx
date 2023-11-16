import React, { useRef } from 'react'
import './Form.css'
import axios from 'axios';

function CreatUser() {

  // let newID = useRef();
  let newfirstName = useRef();
  let newlastName = useRef();
  let newdob = useRef();
  let newcity = useRef();

  function pushJson() {
    const note = {
      // "id" : newID,
      firstName : newfirstName.current.value,
      lastName : newlastName.current.value,
      dob : newdob.current.value,
      city : newcity.current.value
    }
    axios.post(`http://localhost:3000/notes/`, note)
    alert("Registration succesfully completed!")
  }

  return (
    <div className='mt-5 position-absolute top-50 start-50 translate-middle input-group'>
      <form className="row g-3">

        {/* <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">ID</span>
          <input type="text" className="form-control" placeholder="ID" aria-label="Username" aria-describedby="basic-addon1" ref={newID}/>
        </div> */}

        {/* <br /> */}

        <div className="input-group">
          <span className="input-group-text">First and last name</span>
          <input type="text" aria-label="First name" className="form-control" placeholder="First Name" ref={newfirstName} />
          <input type="text" aria-label="Last name" className="form-control" placeholder="Last Name" ref={newlastName} />
        </div>

        <br />

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">DOB</span>
          <input type="text" className="form-control" placeholder="DD/MM/YYYY" aria-label="Username" aria-describedby="basic-addon1" ref={newdob} />
        </div>

        <br />

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">City</span>
          <input type="text" className="form-control" placeholder="City" aria-label="Username" aria-describedby="basic-addon1" ref={newcity} />
        </div>

        <button type="button" className="btn btn-secondary" onClick={pushJson}>Submit</button>


      </form>
    </div>
  )
}

export default CreatUser