import { memo, useState } from 'react';

interface Props {
  name: string;
  email?: string;
}

function EmployeeProfile({ name, email }: Props) {
  console.log('name', name);
  console.log('email', email);

  return (
    <>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
    </>
  );
}

const MemoizedEmployeeProfile = memo(EmployeeProfile);

export default function PureComponent() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <>
      <label>
        Name: <input value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Email: <input value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <hr />
      {/* EmployeeProfile의 경우에는 email 값을 입력했을때 email은 넘기지 않기 때문에 name값이 동일하다 따라서 렌더링이 일어나지 않는다,  */}
      {/* 만약에 email값까지 같이 넘기게 된다면 email값이 이전값과 다르기 때문에 값이 바뀐다. */}
      {/* 만약에 이전값과 현재값이 같다면 렌더링이 일어나지 않는다. */}
      <MemoizedEmployeeProfile name={name} />
    </>
  );
}
