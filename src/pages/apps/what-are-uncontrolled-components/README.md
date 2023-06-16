## 📚 개념

### 비제어 컴포넌트란 무엇인가요?
비제어 컴포넌트는 React 상태(state) 대신에 DOM을 직접 조작하여 폼 요소의 값을 처리하는 방식입니다. 폼 요소의 값은 DOM 노드에서 직접 가져오거나 업데이트합니다. 비제어 컴포넌트는 보통 ref를 사용하여 DOM 노드에 접근합니다.

대부분의 경우 폼을 구현할 때는 제어 컴포넌트를 사용하는 것이 좋습니다. 제어 컴포넌트에서 폼 데이터는 React 컴포넌트에 의해 처리됩니다. 반면에 비제어 컴포넌트는 양식 데이터를 DOM 자체에서 처리합니다.

아래는 input 요소의 값을 직접 가져오는 코드입니다.

## 📌 참고 
원본 : https://github.com/sudheerj/reactjs-interview-questions#what-are-uncontrolled-components
