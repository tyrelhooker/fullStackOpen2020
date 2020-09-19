import React from 'react';

const Person = ({ searchResult }) => {
  return (
    <>
      <table>
        <tbody>
          {searchResult.map((val, index) =>
            <tr key={index+1}>
              <td> {val.name} </td>
              <td>{'.'.repeat(10)}</td>
              <td>{val.number}</td>
            </tr> 
            )}
        </tbody>
      </table>
      
     
    </>
  )
}

export default Person;