import { useRef } from 'react';

export default function WhatAreUncontrolledComponents() {
  const inputRef = useRef(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('inputRef', inputRef.current);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        비제어 컴포넌트 : <input ref={inputRef} />
        <button type='submit'>값을 가져오자</button>
      </form>
    </>
  );
}
