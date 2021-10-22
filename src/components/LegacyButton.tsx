import type { Dispatch, SetStateAction, MouseEventHandler } from "react";

type ButtonProps = {
  children: string;
  // onClick: React.MouseEventHandler<HTMLButtonElement>;
  onClick: Dispatch<SetStateAction<number>>;
}

function Button(props: ButtonProps) {
  const { children, onClick } = props;
  const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
    onClick((age) => age + 1)
  }
  return (
    <button onClick={handleClick}>{children}</button>
  );
}

export { Button };
