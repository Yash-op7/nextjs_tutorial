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
        {users.map(user => <li className='font-mono text-grey-900 underline decoration-sky-500' key={user.id}>{user.name}</li>)}
      </ul>
    </div>
  )
}

export default DataFetchExample
