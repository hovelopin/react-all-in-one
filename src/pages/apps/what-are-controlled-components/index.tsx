import { ChangeEvent, FormEvent, useState } from 'react';

export default function WhatAreControlledComponents() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Submitted value:', inputValue);
    // 여기에서 폼 값을 사용하여 다른 작업을 수행할 수 있습니다.
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Input:
        <input type='text' value={inputValue} onChange={handleInputChange} />
      </label>
      <button type='submit'>Submit</button>
    </form>
  );
}
