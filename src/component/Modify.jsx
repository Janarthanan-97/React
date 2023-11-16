import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios';

function Modify() {

  let modfirstName = useRef();
  let modlastName = useRef();
  let moddob = useRef();
  let modcity = useRef();
  const [notes, setNotes] = useState([]);
  let modifyID;

  async function fetchNotes() {
    const response = await axios.get('http://localhost:3000/notes')
    setNotes(response.data);
  }

  useEffect(() => {
    fetchNotes();
  }, []);

  let clickToModify = (event) => {
    let ele = notes[event.target.innerText[0] - 1];
    modifyID = event.target.innerText[0];
    modfirstName.current.value = ele.firstName;
    modlastName.current.value = ele.lastName;
    moddob.current.value = ele.dob;
    modcity.current.value = ele.city;
  }

  let modifierFunction = ()=>{
    let objectForModify = {
      firstName: modfirstName.current.value,
      lastName : modlastName.current.value,
      dob : moddob.current.value,
      city :  modcity.current.value
    }

    axios.put(`http://localhost:3000/notes/${modifyID}`, objectForModify)

    alert("Modified successfully!")
  }

  return (
    <div>
      <div className="dropdown mt-5">
        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Select a user to modify
        </button>
        <ul className="dropdown-menu">
          {
            notes.map(ele => {
              return (<li key={ele.id}><a className="dropdown-item" onClick={clickToModify}>{`${ele.id}- ${ele.firstName}`}</a></li>)
            })
          }
        </ul>
      </div>
      <div className='mt-5 position-absolute top-50 start-50 translate-middle input-group'>
        <form className="row g-3">

          <div className="input-group">
            <span className="input-group-text">First and last name</span>
            <input type="text" aria-label="First name" className="form-control" placeholder="First Name" ref={modfirstName} />
            <input type="text" aria-label="Last name" className="form-control" placeholder="Last Name" ref={modlastName} />
          </div>

          <br />

          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">DOB</span>
            <input type="text" className="form-control" placeholder="DD/MM/YYYY" aria-label="Username" aria-describedby="basic-addon1" ref={moddob} />
          </div>

          <br />

          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">City</span>
            <input type="text" className="form-control" placeholder="City" aria-label="Username" aria-describedby="basic-addon1" ref={modcity} />
          </div>

          <button type="button" className="btn btn-secondary" onClick={modifierFunction}>Modifty</button>

        </form>
      </div>
    </div>
  )
}

export default Modify