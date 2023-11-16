import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Users() {

  const [notes, setNotes] = useState([]);

  async function fetchNotes (){
    const response = await axios.get('http://localhost:3000/notes/');
    setNotes(response.data);
  }

  useEffect(() => {
    fetchNotes();
  }, []);




  return (
    <div>
      <h1>Notes</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th key={"id"}>ID</th>
            <th key={"fn"}>First Name</th>
            <th key={"ln"}>Last Name</th>
            <th key={"dob"}>DOB</th>
            <th key={"city"}>City</th>
          </tr>
        </thead>
        <tbody>
          {
            notes.map(note => {
              return (<tr key={`${note.id}-row`}>
                <td key={`${note.id}-id`}>{note.id}</td>
                <td key={`${note.id}-fn`}>{note.firstName}</td>
                <td key={`${note.id}-ln`}>{note.lastName}</td>
                <td key={`${note.id}-dob`}>{note.dob}</td>
                <td key={`${note.id}-city`}>{note.city}</td>
              </tr>)
            }
            )
          }
        </tbody>
      </table >
    </div>
  )
}

export default Users