## 📚 개념

### 컴포넌트 렌더링 과정
1. 함수 컴포넌트 호출
2. 구현부 실행
   - props 취득 , hook 실행 , 내부 변수 및 함수 생성
   - 단 , hook에 등록해둔 상태 값 , 부수함수 효과등은 별도 메모리에 저장되어 관리된다.
3. return 실행
   - 렌더링 시작
4. 렌더 단계 ( Render Phase )
   - 가상 DOM을 생성한다. 
5. 커밋 단계 ( Commit Phase )
   - 실제 DOM에 반영한다. 
6. useLayoutEffect 
   - 브라우저가 화면에 Paint 하기 전에, useLayoutEffect에 등록해둔 effect(부수효과함수)가 '동기'로 실행된다.
   - 이 때, state, redux store 등의 변경이 있다면 한번 더 재렌더링 된다.
7. Paint
   - 브라우저가 실제 DOM을 화면에 그린다. didMount가 완료된다.
8. useEffect
   - Mount되어 화면이 그려진 직후, useEffect에 등록해둔 effect(부수효과함수)가 '비동기'로 실행된다.


### 컴포넌트 리렌더링 과정
1. 함수 컴포넌트 재호출

2. 구현부 실행
    - props 취득, hook 실행, 내부 변수 및 함수 재생성
    - 단, 각 hook의 특성에 따라 기존에 메모리에 저장한 내용을 적절히 활용한다.

3. return 실행 
    - 렌더링 시작

4. 렌더 단계(Render Phase)
    - 새로운 가상DOM 생성 후, 이전 가상 DOM과 비교하여, 달라진 부분을 탐색하고, 실제 DOM에 반영할 부분을 결정한다.

5. 커밋 단계(Commit Phase)
    - 달라진 부분만 실제 DOM에 반영한다.

6. useLayoutEffect
    - 브라우저가 화면에 Paint 하기 전에, useLayoutEffect에 등록해둔 effect(부수효과함수)가 '동기'로 실행된다.
    - 이 때, state, redux store 등의 변경이 있다면 한번 더 재렌더링 된다.

7. Paint
     - 브라우저가 실제 DOM을 화면에 그린다. didUpdate가 완료된다.

8. useEffect
    - update되어 화면이 그려진 직후, useEffect에 등록해둔 effect(부수효과함수)가 '비동기'로 실행된다.
    - effect에 return부분이 있다면, 구현부보다 먼저 실행된다.


## 📌 참고 
원본 : https://curryyou.tistory.com/486
