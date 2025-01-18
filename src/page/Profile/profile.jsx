import React from 'react'
import { Navigate } from 'react-router-dom'

function profile() {
  if (!localStorage.getItem ("token")) {
    return <Navigate to={"/login"}/>
  }
  return (
    <div>
      <h1>profile</h1>
    </div>
  )
}

export default profile
