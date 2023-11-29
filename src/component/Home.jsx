import React from 'react'
import { Link } from "react-router-dom";


function Home() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
  <Link to="/" className="navbar-brand">Users</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link to="/addTeacher" className="nav-link" aria-current="page">Add Teacher</Link>
        </li>
        <li className="nav-item">
        <Link to="/addStudent" className="nav-link" aria-current="page">Add Student</Link>
        </li>
        <li className="nav-item">
        <Link to="/modify" className="nav-link" aria-current="page">Delete Student</Link>
        </li>
        
        <li className="nav-item">
        <Link to="/delete" className="nav-link" aria-current="page">Delete Teacher</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Home