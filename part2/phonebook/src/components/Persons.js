import React from 'react';

const Person = ({ searchResult }) => {
  return (
    <>
      <table>
      {searchResult.map((val, index) =>
        <tr>
          <td key={index+1}> {val.name} </td>
          <td>{'.'.repeat(10)}</td>
          <td>{val.number}</td>
        </tr> 
        )}
      </table>
      
     
    </>
  )
}

export default Person;