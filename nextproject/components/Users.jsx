"use client"
import { useEffect } from "react"

function Users() {
    useEffect(() => {
        alert('loaded')
    }, []);

  return (
    <div>Users</div>
  )
}

export default Users