import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Users() {

  const [notes, setNotes] = useState([]);

  async function fetchNotes (){
    const response = await axios.get('http://localhost:3000/details/');
    setNotes(response.data);
    console.log(response.data);
  }

  useEffect(() => {
    fetchNotes();
  }, []);


  return (
    <div>
      {
        notes.map(ele=>{
          return(
            <table key={ele.id} className="table table-dark table-striped">
              <thead key={`${ele.id}-head`}>
                <tr key={`${ele.id}-row`} className='table-bordered border-primary'>
                  <th key={ele.teacher}>
                    {ele.teacher}
                  </th>
                </tr>
              </thead>
              <tbody className='table-group-divider table-light'>
                {ele.student.map(stu=>{
                  return(<tr key={`${stu}-row`}>
                  <td key={stu}>{stu}</td>
                </tr>)
                })}
              </tbody>

            </table>            
          )
        })
      }
     </div>
  )
}

export default Users