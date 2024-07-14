import React from 'react'

const DataFetchExample = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();
    console.log(users);
  return (
    <div>
      whoa
    </div>
  )
}

export default DataFetchExample
