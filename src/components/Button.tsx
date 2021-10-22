import type { MouseEventHandler } from "react";

type ButtonProps = {
  children: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

function Button(props: ButtonProps) {
  const { children, onClick } = props;
  return (
    <button onClick={onClick}>{children}</button>
  );
}

export { Button };
