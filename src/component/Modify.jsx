import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios';

function Modify() {
  let [notes, setNotes] = useState([]);
  let [studentList, setStudentList] = useState(<div></div>)
  let clearTag = useRef()
  let object = {};


  async function fetchNotes() {
    const response = await axios.get('http://localhost:3000/details')
    setNotes(response.data);
  }

  useEffect(() => {
    fetchNotes();
  }, []);

  let functionToRenderStudentList = (event) => {
    notes.forEach(ele => {
      if (ele.teacher == event.target.innerText) {
        object = ele;
        console.log(object)
        setStudentList(<div>
          <div className='ms-5 mt-5'>
            <button className="btn btn-secondary dropdown-toggle d-inline-flex" type="button" data-bs-toggle="dropdown" aria-expanded="false" >Select Student</button>
            <ul className="dropdown-menu">
              {ele.student.map((ele, index) => {
                return <li className="dropdown-item" onClick={() => functionToDeleteStudent(index)} key={ele}>{ele}</li>
              })}
            </ul>
          </div>
        </div>)
      }
    })
  }

  let functionToDeleteStudent = (i) => {
    object.student.splice(i, 1);
    console.log(object);
    axios.put(`http://localhost:3000/details/${object.id}`, object);
    alert("Student deleted")

  }


  return (
    <div>
      <div ref={clearTag} className='ms-5'>
        <button className="btn btn-secondary dropdown-toggle d-inline-flex" type="button" data-bs-toggle="dropdown" aria-expanded="false" >Select Teacher</button>
        <ul className="dropdown-menu">
          {notes.map((ele) => {
            return <li className="dropdown-item" onClick={functionToRenderStudentList} key={ele.id}>{ele.teacher}</li>
          })}
        </ul>
      </div>
      {studentList}
    </div>
  )
}

export default Modify