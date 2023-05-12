export default function WhatAreSyntheticEventsInReact() {
  // 리액트에서는 기본적으로 event가 SyntheticEvent로 이루어져있는데 그 Event는 브라우저의 Native Event를 둘러싼 크로스 브라우저 래퍼이다.
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('The new title is:', e.target.value);
    // 'e' represents synthetic event
    const nativeEvent = e.nativeEvent;
    console.log(nativeEvent);
    (e as any).stopPropogation();
    e.preventDefault();
  };

  return <input name='title' onChange={handleTitleChange} />;
}
