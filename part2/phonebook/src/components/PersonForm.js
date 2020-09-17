import React, { useRef } from 'react';

const PersonForm = ({ handleAddPerson }) => {
  const nameInput = useRef();

  const submit = e => {
    e.preventDefault();
    handleAddPerson(nameInput.current.value);
    nameInput.current.value = '';
    nameInput.current.focus();
  }

  return (
    <>
      <form onSubmit={submit}>
        <input
          ref={nameInput}
          type="text"
          placeholder={'add a person\'s name'}
          required
        />
        <button type="submit">Add Person</button>
      </form>
    </>
  )
}

export default PersonForm;