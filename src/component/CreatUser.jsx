import React from 'react'
import './Form.css'

function CreatUser() {
  return (
    <div className='mt-5 position-absolute top-50 start-50 translate-middle input-group'>
      <form className="row g-3">

      <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">ID</span>
          <input type="text" className="form-control" placeholder="ID" aria-label="Username" aria-describedby="basic-addon1" />
        </div>

          <br />

        <div className="input-group">
          <span className="input-group-text">First and last name</span>
          <input type="text" aria-label="First name" className="form-control" placeholder="First Name" />
          <input type="text" aria-label="Last name" className="form-control" placeholder="Last Name" />
        </div>

        <br />

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">DOB</span>
          <input type="text" className="form-control" placeholder="DD/MM/YYYY" aria-label="Username" aria-describedby="basic-addon1" />
        </div>

        <br />

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">City</span>
          <input type="text" className="form-control" placeholder="City" aria-label="Username" aria-describedby="basic-addon1" />
        </div>

        <br />

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">State</span>
          <input type="text" className="form-control" placeholder="State" aria-label="Username" aria-describedby="basic-addon1" />
        </div>

        <button type="button" className="btn btn-secondary">Submit</button>


      </form>
    </div>
  )
}

export default CreatUser