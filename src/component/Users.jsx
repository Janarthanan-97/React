import React from 'react'

function Users() {
  return (
    <div className='mt-5'>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">DOB </th>
            <th scope="col">City</th>
            <th scope="col">State</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
          </tr>
        </tbody>

      </table>
    </div>
  )
}

export default Users