import axios from 'axios';
import React, { useEffect, useState } from 'react'


function Delete() {

  const [notes, setNotes] = useState([]);
  let idToDelete;

  async function fetchNotes() {
    const response = await axios.get('http://localhost:3000/notes')
    setNotes(response.data);
  }

  useEffect(() => {
    fetchNotes();
  }, []);

  let clickToDelete = (event)=>{
    if(confirm(`Are you sure, you want to delete ?`)){
      idToDelete = event.target.innerText[0];
      axios.delete(`http://localhost:3000/notes/${idToDelete}`);
      alert("Item deleted")
    }
  }


  return (
    <div>
      <div className="dropdown mt-5">
        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Select a user to delete
        </button>
        <ul className="dropdown-menu">
          {
            notes.map(ele => {
              return (<li key={ele.id}><a className="dropdown-item" onClick={clickToDelete}>{`${ele.id}- ${ele.firstName}`}</a></li>)
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default Delete