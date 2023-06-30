import { ComponentType } from 'react';

interface Props {
  isLoading: boolean;
}

function WithHoc(WrappedComponent: ComponentType) {
  return function WithHocComponent({ isLoading }: Props) {
    if (isLoading) {
      return <div>로딩중..</div>;
    }
    return <WrappedComponent />;
  };
}

function Button() {
  return <button>나를 눌러주세요!</button>;
}

export default function WhatAreHigherOrderComponents() {
  // 사용하는 곳에서 HOC에 WrappedComponent가 될 Component를 넘긴다.
  const WithHOCButton = WithHoc(Button);

  return <WithHOCButton isLoading={false} />;
}
