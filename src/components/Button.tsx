type ButtonProps = {
  children: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

function Button(props: ButtonProps) {
  const { children, onClick } = props;
  return (
    <button onClick={onClick}>{children}</button>
  );
}

export { Button };
