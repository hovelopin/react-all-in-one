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
