## 📚 개념

### React에서 State란 무엇인가?
컴포넌트의 상태는 컴포넌트의 수명에 따라 변경될 수 있는 일부 정보를 저장하는 객체입니다. 중요한 점은 상태 객체가 변경될 때마다 컴포넌트가 다시 렌더링된다는 것입니다. 항상 상태를 가능한 한 단순하게 만들고 상태 저장 컴포넌트의 수를 최소화하는 것이 좋습니다.

![](https://github.com/sudheerj/reactjs-interview-questions/raw/master/images/state.jpg)

메시지 상태가 있는 User 컴포넌트를 예로 들어보겠습니다. 여기서는 User 컴포넌트에 state를 추가하기 위해 useState 훅을 사용했으며, 현재 상태와 이를 업데이트하는 함수가 포함된 배열을 반환합니다.

```jsx
import React, { useState } from "react";

function User() {
  const [message, setMessage] = useState("Welcome to React world");

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
}
```
State는 프로퍼티와 비슷하지만 비공개이며 컴포넌트에 의해 완전히 제어됩니다. 즉, 소유자 컴포넌트가 전달하기로 결정하기 전까지는 다른 컴포넌트가 액세스할 수 없습니다.

## 📌 참고 
원본 : https://github.com/sudheerj/reactjs-interview-questions#what-is-state-in-react
