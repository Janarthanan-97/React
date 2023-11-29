import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios';

function AddStudent() {
    const [notes, setNotes] = useState([]);
    let [inputTag, setInputTag] = useState();
    let newStudent = useRef();
    let object = {};
    let id;
    async function fetchNotes() {
        const response = await axios.get('http://localhost:3000/details/');
        setNotes(response.data);
    }

    useEffect(() => {
        fetchNotes();
    }, []);

    function addStudentToTeacher(){
        object.student.push(newStudent.current.value);
        axios.put(`http://localhost:3000/details/${object.id}`, object);
      alert("Student added")
  }

    let formToAddStudent = (event) => {
        notes.forEach(ele=>{
            if(ele.teacher==event.target.innerText){
                object = ele;
            }
        })

        setInputTag(<div className='mt-1 position-absolute top-50 start-50 translate-middle input-group'>

            <form className="row g-3">

                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Student Name</span>
                    <input type="text" ref={newStudent} className="form-control" placeholder="Name" aria-label="Username" aria-describedby="basic-addon1" />
                </div>

                <button type="button" className="btn btn-secondary" onClick={addStudentToTeacher}>Submit</button>

            </form>

        </div>)

    }

    return (
        <><div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Select teacher for student
            </button>
            <ul className="dropdown-menu">
                {(notes.map(ele => {
                    return (<li className="dropdown-item" onClick={formToAddStudent} key={ele.id}>{ele.teacher}</li>)
                }))}
            </ul>

        </div>
            {inputTag}
        </>

    )
}

export default AddStudent