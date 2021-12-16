import React, { useState } from 'react';
import {Authors} from "../utils/constants";

export const Form = ({onSendMessage}) => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onSendMessage(
      {
        text: value,
        author: Authors.human,
        id: `mes-${Date.now()}`
      }
    );
    setValue('');
  }

  return (
    <form  onSubmit={handleSubmit}>
      <input  type="text" value={value} onChange={handleChange} />
      <input type="submit" />
    </form>
  )
}
