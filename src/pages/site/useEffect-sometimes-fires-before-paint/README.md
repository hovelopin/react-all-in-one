## 📚 개념

### useEffect는 때때로 paint전에 발생합니다. 
useEffect는 업데이트 차단을 방지하기 위해 페인트 후에 실행되어야 합니다. 하지만 실제로 페인트 후에 실행된다는 보장이 없다는 것을 알고 계셨나요? useLayoutEffect에서 상태를 업데이트하면 동일한 렌더링의 모든 useEffect가 페인트 전에 실행되어 효과적으로 레이아웃 효과로 전환됩니다. 헷갈리시나요? 설명해드리겠습니다.


## 📌 참고 
원본 : https://github.com/sudheerj/reactjs-interview-questions#what-is-state-in-react
