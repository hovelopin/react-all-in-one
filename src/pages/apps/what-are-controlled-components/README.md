## 📚 개념

### 제어 컴포넌트란 무엇인가요?
후속 사용자 입력에 따라 양식 내의 입력 요소를 제어하는 컴포넌트를 제어 컴포넌트라고 하며, 대표적인 예로는 React State를 사용하여 폼 요소의 값을 제어하는 방식이 이에 속합니다. 

아래는 state를 사용해서 React 폼요소를 관리하는 코드입니다.
``` jsx
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
    <form onSubmit={(e) => handleSubmit}>
      <label>
        Input:
        <input type='text' value={inputValue} onChange={(e) => handleInputChange} />
      </label>
      <button type='submit'>Submit</button>
    </form>
  );
}

```

## 📌 참고 
원본 : https://github.com/sudheerj/reactjs-interview-questions#what-are-controlled-components
