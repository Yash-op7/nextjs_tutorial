import Link from 'next/link'
import React from 'react'

const UsersPage = () => {
  return (
    <div>
      UsersPage
      <Link href="/users/new">Create a new user</Link>
    </div>
  )
}

export default UsersPage
