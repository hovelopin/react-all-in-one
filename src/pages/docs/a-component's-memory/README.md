## 📚 개념

### 컴포넌트의 메모리
>Hook(사용으로 시작하는 함수)은 컴포넌트의 최상위 레벨 또는 자체 Hook에서만 호출할 수 있습니다. 조건, 루프 또는 기타 중첩된 함수 내부에서는 Hook을 호출할 수 없습니다. Hook은 함수이지만 컴포넌트의 필요에 대한 무조건적인 선언으로 생각하면 도움이 됩니다. 파일 상단에서 모듈을 "임포트"하는 것과 유사하게 컴포넌트 상단에서 React 기능을 "사용"합니다.

해당 부분에 대한 자세한 이해를 위해 아래와 같은 상황을 만들었습니다. 

⚠️ 아래코드는 에러 상황을 만들기 위해 코드가 작위적입니다.

```jsx
import { useState } from 'react';

export default function ComponentMemeory() {
  const [a, setA] = useState(true);
  let b: any;
  let setB: any;

  if (a) {
    const newB = useState(0);
    b = newB[0];
    setB = newB[1];
  }

  const handleChangeStateOfB = () => {
    setB(b + 10);
  };

  console.log('b의값은?', b);

  return <button onClick={handleChangeStateOfB}>B의 값을 바꾸자</button>;
}
```


ESLint를 사용할 경우에는 위에 코드는 `React Hook "useState" is called conditionally. React Hooks must be called in the exact same order in every component render.`와 같은 에러를 주지만 만약 ESLint가 없다면 어떻게 실행될까? 

우리가 위에 docs에서 살펴봤을때는 조건 , 루프 또는 기타 중첩된 함수 내부에서는 Hook을 호출할 수 없다는 개념을 알았는데 위에 코드를 실행하면 Error는 발생하지 않고 b의 값이 10씩 증가하게 된다.

<img src='/public/assets/a-components-memory/state-component.png' />

이유는 뭐일지 고민해봤고 명확한 이유에 대해서 알지는 못했지만 아래와 같은 상황을 한번 만들어봤다. A의 값이 첫번째 케이스의 경우에는 true이기 때문에 무조건 통과하는 반면에 두번째 케이스의 경우에는 A값을 바꿔서 통과하지 못하게 만들어봤다.

```jsx
import { useState } from 'react';

export default function ComponentMemeory() {
  const [a, setA] = useState(true);
  let b: any;
  let setB: any;

  if (a) {
    const newB = useState(0);
    b = newB[0];
    setB = newB[1];
  }

  const handleChangeStateOfB = () => {
    setB(b + 10);
    setA(false);
  };

  console.log('b의값은?', b);

  return <button onClick={handleChangeStateOfB}>B의 값을 바꾸자</button>;
}
```

두번째 테스트의 경우에는 button을 눌렀을때 값을 증가시키고 a값의 state를 변경 시켰더니 아래와 같은 에러가 나왔다.

<img src='/public/assets/a-components-memory/state-component2.png' />

a의 값을 바꾸니까 에러가 나왔고 아래와 같이 조건에 관련없는 다른 state C를 한번 바꿔봤다.

```jsx
import { useState } from 'react';

export default function ComponentMemeory() {
  const [a, setA] = useState(true);
  const [c, setC] = useState(true);
  let b: any;
  let setB: any;

  if (a) {
    console.log('실행되나?');
    const newB = useState(0);
    b = newB[0];
    setB = newB[1];
  }

  const handleChangeStateOfB = () => {
    setB(b + 10);
    // setA(false);
    setC(false);
  };

  console.log('b의값은?', b);
  console.log('c의값은', c);

  return <button onClick={handleChangeStateOfB}>B의 값을 바꾸자</button>;
}
```

<img src='/public/assets/a-components-memory/state-component3.png' />

위와 같이 조건에 상관없는 c를 바꿨을때는 에러가 나지 않았다. 위에 내용들을 봤을때 렌더링이 일어나는 과정에서 조건문안에 있는 a의 값에 따라 조건 여부를 판단할때는 조건문안에 있는 useState가 무엇인가 에러가 나는 것 같다. 

💬 사실 아직 제대로 된 해답을 찾은건 아니고 저기에서 보여주는 에러가 최상위 레벨에 선언하지 않을때 나는 에러인지 아직 확인 불가능하지만 재밌는 테스트 경험이였던 것 같다.


## 📌 참고 
원본 : https://react.dev/learn/state-a-components-memory
