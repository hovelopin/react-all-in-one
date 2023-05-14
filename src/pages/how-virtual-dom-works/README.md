## 📚 개념

### Virtual DOM은 어떻게 동작하는가?

아래는 Virtual DOM이 동작하는 간단한 방법입니다. 

1. 기초 데이터가 변경될 때마다 전체 UI가 가상 DOM 표현으로 다시 렌더링됩니다.
![](https://github.com/sudheerj/reactjs-interview-questions/raw/master/images/vdom1.png)

2. 그런 다음 이전 DOM 표현과 새 표현의 차이가 계산됩니다.
![](https://github.com/sudheerj/reactjs-interview-questions/raw/master/images/vdom2.png)

3. 계산이 완료되면 실제 DOM은 실제로 변경된 내용만 업데이트됩니다.
![](https://github.com/sudheerj/reactjs-interview-questions/raw/master/images/vdom3.png)

## 💡 추가 학습

### Shadow DOM이란 무엇인가?
Shadow DOM은 주로 웹 컴포넌트에서 변수와 CSS의 범위를 지정하기 위해 설계된 브라우저 기술입니다. 가상 DOM은 브라우저 API 위에 자바스크립트 라이브러리로 구현된 개념입니다.

웹 컴포넌트의 중요한 측면은 캡슐화입니다. 캡슐화를 통해 마크업 구조, 스타일, 동작을 숨기고 페이지의 다른 코드로부터의 분리하여 각기 다른 부분들이 충돌하지 않게 하고, 코드가 깔끔하게 유지될 수 있게 합니다. Shadow DOM API는 캡슐화의 핵심 파트이며, 숨겨진 분리된 DOM을 요소에 부착하는 방법을 제공합니다. 이 문서는 Shadow DOM 사용의 기본을 다룹니다.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Simple DOM example</title>
  </head>
  <body>
      <section>
        <img src="dinosaur.png" alt="A red Tyrannosaurus Rex: A two legged dinosaur standing upright like a human, with small arms, and a large head with lots of sharp teeth.">
        <p>Here we will add a link to the <a href="https://www.mozilla.org/">Mozilla homepage</a></p>
      </section>
  </body>
</html>
```

이 fragment는 다음의 구조를 생성합니다. 

![](https://developer.mozilla.org/ko/docs/Web/API/Web_components/Using_shadow_DOM/dom-screenshot.png)



## 📌 참고 
원본 : https://github.com/sudheerj/reactjs-interview-questions#how-virtual-dom-works

MDN : https://developer.mozilla.org/ko/docs/Web/API/Web_components/Using_shadow_DOM
