import { Text } from './Text';

type HelloProps = {
  readonly name: string;
  readonly age: number;
}

function Hello(props: HelloProps) {
  let { name, age } = props;
  return (
    <div>
      <Text>Hello my name is {name}</Text>
      <Text>I am {age} year old</Text>
    </div>
  );
}

export { Hello };
