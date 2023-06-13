import { ForwardedRef, forwardRef, useRef } from 'react';

type ButtonProps = {
  children: React.ReactNode;
};

export default function WhatAreForwardRefs() {
  const buttonRef = useRef(null);

  const ButtonElement = forwardRef<HTMLButtonElement, ButtonProps>((props, ref: ForwardedRef<HTMLButtonElement>) => (
    <button onClick={() => console.log('Button Click')} ref={ref}>
      {props.children}
    </button>
  ));

  return (
    <>
      <ButtonElement ref={buttonRef}>{'Forward Ref'}</ButtonElement>
    </>
  );
}
