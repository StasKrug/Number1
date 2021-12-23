import React, { useRef, useEffect, useState } from 'react';
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
    setValue('');
  }
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <form  onSubmit={handleSubmit}>
      <TextField
        id="filled-basic"
        variant="filled"
        value={value}
        onChange={handleChange}
        inputRef={inputRef}
      />
      <Button variant="contained" type="submit">
      Forward
      </Button>
    </form>
  )
}
