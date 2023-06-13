## 📚 개념

### 순수 컴포넌트란 무엇인가?
**순수 컴포넌트는 동일한 상태와 프로퍼티에 대해 동일한 출력을 렌더링하는 컴포넌트**입니다. 함수 컴포넌트에서는 컴포넌트를 감싸는 메모화된 React.memo() API를 통해 이러한 순수 컴포넌트를 구현할 수 있습니다. 이 **API는 얕은 비교를 통해 이전 프로퍼티와 새로운 프로퍼티를 비교하여 불필요한 재렌더링을 방지**합니다. 따라서 성능 최적화에 도움이 됩니다.

하지만 동시에 함수 컴포넌트 자체에서 동일한 상태를 다시 설정할 때 기본적으로 불필요한 렌더링을 방지하기 때문에 이전 상태와 현재 상태를 비교하지 않습니다.

메모화된 컴포넌트의 구문 표현은 아래와 같습니다.

```jsx
const MemoizedComponent = memo(SomeComponent, areEqual?);
```

아래는 하위 컴포넌트(즉, EmployeeProfile)가 상위 컴포넌트(즉, EmployeeRegForm)에서 전달한 동일한 소품에 대한 재렌더링을 방지하는 방법의 예시입니다.


```jsx
import { memo, useState } from 'react';

  const EmployeeProfile = memo(function EmployeeProfile({ name, email }) {
    return (
      <>
          <p>Name:{name}</p>
          <p>Email: {email}</p>
      </>);
  });
  export default function EmployeeRegForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    return (
      <>
        <label>
          Name: <input value={name} onChange={e => setName(e.target.value)} />
        </label>
        <label>
          Email: <input value={email} onChange={e => setEmail(e.target.value)} />
        </label>
        <hr/>
        <EmployeeProfile name={name}/>
      </>
    );
  }

```

위 코드에서는 이메일 프로퍼티가 하위 컴포넌트로 전달되지 않았습니다. 따라서 이메일 프로퍼티 변경에 대한 리렌더링이 발생하지 않습니다.

클래스 컴포넌트에서는 React.Component 대신 React.PureComponent를 확장하는 컴포넌트가 순수 컴포넌트가 됩니다. 프로퍼티나 상태가 변경되면 PureComponent는 shouldComponentUpdate() 수명 주기 메서드를 호출하여 프로퍼티와 상태 모두에 대해 얕은 비교를 수행합니다.

참고: React.memo()는 상위 컴포넌트입니다.

## 💡 추가 학습
얕은 비교 : 얕은 비교는 객체의 참조(reference)를 비교하는 것입니다. 두 개의 값이 같은 객체를 참조하고 있는 경우에만 동등하다고 판단합니다. 이는 객체의 내부 구조를 검사하지 않고, 단순히 메모리 주소를 비교합니다.

```js
const obj1 = { name: "John" };
const obj2 = { name: "John" };
const obj3 = obj1;

console.log(obj1 === obj2); // false (얕은 비교)
console.log(obj1 === obj3); // true (얕은 비교)
```

깊은 비교 : 값이 같은지를 비교한다. ( 객체의 경우에는 내부 구조까지 하나하나 봐서 같은지 확인해야한다. )

```js
const obj1 = {name : 'john'};
const obj2 = {name : 'john'};
const obj3 = obj1;

console.log(obj1 === obj2); // false ( 깊은 비교 )
console.log(obj1 === obj3); // true ( 깊은 비교 )
```

React.memo의 두 번째 옵션은 areEqual이라는 콜백 함수를 받습니다. 이 콜백 함수는 이전 속성과 새로운 속성을 비교하여 컴포넌트의 재렌더링 여부를 결정하는 데 사용됩니다.

areEqual 콜백 함수는 두 개의 매개변수를 받습니다: 이전 속성(prevProps)과 새로운 속성(nextProps). 콜백 함수는 불리언 값을 반환해야 하며, true를 반환하면 컴포넌트의 재렌더링을 방지하고, false를 반환하면 컴포넌트를 렌더링합니다.

일반적으로 areEqual 콜백 함수는 속성들을 개별적으로 비교하여 얕은 비교(참조 비교)를 수행하거나, 특정 속성들만 비교하는 로직을 작성하는 데 사용됩니다. 만약 이 함수를 제공하지 않으면 React.memo는 기본적으로 얕은 비교를 수행하여 모든 속성을 비교합니다.

```jsx
const MyComponent = React.memo((props) => {
  // 컴포넌트 로직 및 렌더링
}, (prevProps, nextProps) => {
  // prevProps와 nextProps 비교 로직
  // 불리언 값을 반환
  // true이면 렌더링 방지 false이면 컴포넌트 렌더링
});
```

## 📌 참고 
원본 : https://github.com/sudheerj/reactjs-interview-questions#what-are-pure-components
