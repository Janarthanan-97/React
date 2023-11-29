import React, { useRef, useState, useEffect } from 'react'
import './Form.css'
import axios from 'axios';

function CreatUser() {

  const [notes, setNotes] = useState([]);
  let newTeacher = useRef();
  let newStudent = useRef();

  async function fetchNotes() {
    const response = await axios.get('http://localhost:3000/details/');
    setNotes(response.data);
    console.log(response.data);
  }

  useEffect(() => {
    fetchNotes();
  }, []);


  function pushJson() {
    const note = {
      teacher: newTeacher.current.value,
      student: []
    }
    axios.post(`http://localhost:3000/details/`, note)
    alert("Registration succesfully completed!")
  }


  return (
    <>
      <div className='mt-1 position-absolute top-50 start-50 translate-middle input-group'>

<form className="row g-3">

  <div className="input-group mb-3">
    <span className="input-group-text" id="basic-addon1">Teacher Name</span>
    <input type="text" className="form-control" placeholder="Name" aria-label="Username" aria-describedby="basic-addon1" ref={newTeacher} />
  </div>

  <button type="button" className="btn btn-secondary" onClick={pushJson}>Submit</button>

</form>

</div>
    </>
  )
}

export default CreatUser