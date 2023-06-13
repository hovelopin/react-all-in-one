## 📚 개념

### 리액트에서 합성이벤트란 무엇인가?
SyntheticEvent는 브라우저의 네이티브 이벤트를 둘러싼 크로스 브라우저 래퍼입니다. 이 이벤트는 모든 브라우저에서 동일하게 작동한다는 점을 제외하면 stopPropagation(), preventDefault() 등 브라우저의 네이티브 이벤트와 API가 동일합니다. 네이티브 이벤트는 nativeEvent 속성을 사용하여 합성 이벤트에서 직접 액세스할 수 있습니다.

모든 네이티브 이벤트 프로퍼티를 가져올 수 있는 기능을 갖춘 서점 제목 검색 컴포넌트를 예로 들어보겠습니다.
```jsx
function BookStore() {
  handleTitleChange(e) {
    console.log('The new title is:', e.target.value);
    // 'e' represents synthetic event
    const nativeEvent = e.nativeEvent;
    console.log(nativeEvent);
    e.stopPropogation();
    e.preventDefault();
  }

  return <input name="title" onChange={handleTitleChange} />
}
```

## 💡 추가 학습
React는 이벤트를 처리하기 위해 바닐라 자바스크립트와 달리 엘리먼트가 렌더링 될 때 이벤트 리스너(Event Listener)를 제공해 이벤트를 처리한다. 다만 이 이벤트 핸들러는 모든 브라우저에서 동일한 처리를 보장하기 위해 React에서 제공하는 SyntheticEvent 객체를 전달 받는다. 즉, 한 단계 래핑(Wrapping)된 이벤트 객체를 통해 이벤트를 다루는 것이다. SyntheticEvent 객체는 모든 브라우저에서 이벤트를 동일하게 처리하기 위한 래퍼 객체이다. 대부분의 인터페이스는 브라우저 고유 이벤트와 같다.

> SyntheticEvent는 Pooling되며 성능상의 이유로 SyntheticEvent객체는 재사용 되고 모든 속성은 이벤트 핸들러가 호출된 다음 초기화 됩니다. 따라서 비동기적으로 이벤트 객체에 접근할 수 없습니다. ( 현재 react 17버전 이후에 pooling은 없어졌다고 합니다. )


## 📌 참고 
원본 : https://github.com/sudheerj/reactjs-interview-questions#what-are-synthetic-events-in-react

공식문서 : https://ko.legacy.reactjs.org/docs/events.html

참고 블로그 : https://medium.com/crossplatformkorea/react-%EB%A6%AC%EC%95%A1%ED%8A%B8%EB%A5%BC-%EC%B2%98%EC%9D%8C%EB%B6%80%ED%84%B0-%EB%B0%B0%EC%9B%8C%EB%B3%B4%EC%9E%90-06-%ED%95%A9%EC%84%B1-%EC%9D%B4%EB%B2%A4%ED%8A%B8%EC%99%80-event-pooling-6b4a0801c9b9
