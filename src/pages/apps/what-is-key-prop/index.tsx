interface Props {
  id: number;
  text: string;
}
export default function WhatIsKeyProp() {
  const todoItems: Props[] = [
    {
      id: 1,
      text: '1번 입니다.',
    },
    {
      id: 2,
      text: '2번 입니다.',
    },
    {
      id: 3,
      text: '3번 입니다.',
    },
    {
      id: 4,
      text: '4번 입니다.',
    },
    {
      id: 5,
      text: '5번 입니다.',
    },
  ];
  return (
    <>
      {todoItems.map(({ id, text }) => (
        <p key={id}>{text}</p>
      ))}
    </>
  );
}
