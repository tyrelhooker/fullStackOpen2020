import React, { useRef } from 'react';


const Form = ({ handleAddNote }) => {
  const contentInput = useRef();

  const submit = e => {
    e.preventDefault();
    handleAddNote(contentInput.current.value);
    contentInput.current.value = '';
    contentInput.current.focus();
  }

  return (
    <>
      <form onSubmit={submit}>
        <input
          ref={contentInput}
          type="text" 
          placeholder={'add a note'}
          required
        />
        <button type="submit">Save</button>
      </form>
    </>
  )
}

export default Form;