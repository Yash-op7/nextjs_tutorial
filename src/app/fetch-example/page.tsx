import React from 'react';

interface User {
    id:number,
    name:string
}

const DataFetchExample = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users: User[] = await res.json();
    console.log(users); // nothing can be seen as this is being done on the server 
  return (
    <div>
      <ul>
        {users.map(user => <li key={user.id}>{user.name}</li>)}
      </ul>
    </div>
  )
}

export default DataFetchExample
