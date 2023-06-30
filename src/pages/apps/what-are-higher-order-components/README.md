## 📚 개념

### Higher-Order component란 무엇인가?
고차 컴포넌트(HOC)는 컴포넌트를 받아 새로운 컴포넌트를 반환하는 함수입니다. 기본적으로 React의 컴포지션 특성에서 파생된 패턴입니다.

순수 컴포넌트라고 부르는 이유는 동적으로 제공되는 모든 자식 컴포넌트를 받아들일 수 있지만 입력 컴포넌트의 동작을 수정하거나 복사하지 않기 때문입니다.

```jsx
const EnhancedComponent = higherOrderComponent(WrappedComponent);
```

HOC는 다양한 사용 사례에 사용할 수 있습니다:

1. 코드 재사용, 로직 및 부트스트랩 추상화
2. Render hijacking.
3. State abstraction and manipulation.
4. Props manipulation

## 💡 추가 학습

## 📌 참고 

원본 : https://github.com/sudheerj/reactjs-interview-questions#what-are-higher-order-components