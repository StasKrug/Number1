import React, { useRef, useState } from 'react';
import {Authors} from "../utils/constants";
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';

export const Form = ({onSendMessage}) => {
  const [value, setValue] = useState('');
  const inputRef = useRef();

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
    inputRef.current?.focus();

    setValue('');
  }

  return (
    <form  onSubmit={handleSubmit}>
      <TextField
        id="standard-basic"
        variant="standard"
        value={value}
        onChange={handleChange}
        inputRef={inputRef}
      />
      <Button variant="outlined" type="submit">
      Forward
      </Button>
    </form>
  )
}
