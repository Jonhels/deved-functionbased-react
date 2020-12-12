import React, {useState} from 'react';
import Tweet from './Tweet';

function App(){

  const [users, setUsers] = useState([
    { name: 'Jon', message: 'Hello there', likes:'200' }, 
    { name: 'Ed', message: 'I am Jon', likes:'50'},
    { name: 'Josh', message: 'I am josh', likes:'10' }
  ]);

  return(
    <div className="app">
      {users.map(user =>(
        <Tweet name={user.name} message={user.message} likes={user.likes} />
      ))}
    </div>
  );
}

export default App;