## 📚 개념

### forward refs란 무엇인가요?
Ref forwarding은 일부 컴포넌트가 받은 참조를 가져와서 하위 컴포넌트로 전달할 수 있는 기능입니다.

```jsx
import { ForwardedRef, forwardRef, useRef } from 'react';

type ButtonProps = {
  children: React.ReactNode;
};

export default function WhatAreForwardRefs() {
  const buttonRef = useRef(null);

  const ButtonElement = forwardRef<HTMLButtonElement, ButtonProps>((props, ref: ForwardedRef<HTMLButtonElement>) => (
    <button onClick={() => console.log('Button Click')} ref={ref}>
      {props.children}
    </button>
  ));

  return (
    <>
      <ButtonElement ref={buttonRef}>{'Forward Ref'}</ButtonElement>
    </>
  );
}
```

위의 코드에서 ButtonElement의 타입을 forwardRef 제네릭을 사용하여 지정하였습니다. forwardRef 함수의 첫 번째 제네릭 타입은 ref가 적용될 DOM 요소의 타입이며, 두 번째 제네릭 타입은 props의 타입입니다.

따라서 forwardRef<HTMLButtonElement, ButtonProps>로 지정하면 ButtonElement는 button 요소에 대한 ref를 사용하고, children 프로퍼티를 가진 ButtonProps 타입을 받는 컴포넌트로 타입이 지정됩니다.

## 💡 추가 학습
React의 forwardRef는 리액트 컴포넌트에서 ref를 전달할 수 있게 해주는 특별한 함수입니다. 일반적으로 ref는 부모 컴포넌트에서 자식 컴포넌트로 전달되지만, forwardRef를 사용하면 자식 컴포넌트에서 ref를 직접 받아 사용할 수 있습니다.

forwardRef 함수는 두 개의 매개변수를 가지고 있습니다. 첫 번째 매개변수는 부모 컴포넌트로부터 전달되는 props를 나타내며, 두 번째 매개변수는 ref입니다. forwardRef 함수는 컴포넌트를 반환하는 함수를 리턴해야 합니다.

다음은 forwardRef를 사용하여 함수형 컴포넌트를 만드는 예시입니다:

```jsx
import React, { forwardRef } from 'react';

const MyComponent = forwardRef((props, ref) => {
  // 컴포넌트 로직 및 JSX 구현

  return <div ref={ref}>Hello, World!</div>;
});
```
위의 예시에서 MyComponent는 forwardRef 함수를 사용하여 만들어진 함수형 컴포넌트입니다. ref 매개변수를 div 요소의 ref 속성에 전달함으로써, 외부에서 ref를 사용하여 이 컴포넌트의 DOM 요소에 접근할 수 있게 됩니다.

부모 컴포넌트에서 MyComponent를 사용할 때, ref를 직접 전달할 수 있습니다:

```jsx
import React, { useRef } from 'react';

const ParentComponent = () => {
  const ref = useRef(null);

  // ref를 MyComponent에 전달
  return <MyComponent ref={ref} />;
};
```
이렇게 하면 ParentComponent에서 ref.current를 사용하여 MyComponent의 DOM 요소에 접근할 수 있습니다.

forwardRef를 사용하면 ref를 자식 컴포넌트로 전달할 수 있으므로, 컴포넌트가 내부적으로 DOM 요소를 가지고 있는 경우 유용합니다. 예를 들어, 외부에서 컴포넌트의 스크롤 위치를 조작하거나 포커스를 설정해야 할 때 forwardRef를 사용할 수 있습니다.

## 📌 참고 
원본 : https://github.com/sudheerj/reactjs-interview-questions#what-are-forward-refs
