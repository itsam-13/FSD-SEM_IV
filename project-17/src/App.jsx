import { useState } from 'react'


function App() {
  const students = [
    {id: 1, name: "John", age: 20},
    {id: 2, name: "Jane", age: 21},
    {id: 3, name: "Bob", age: 22}
    
  ];

  return (
    
      <div>
        <h2>Student List</h2>

        <table border="1">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.age}</td>
            </tr>
          ))}

        </table>
      </div>
     
    
  )
}

export default App
