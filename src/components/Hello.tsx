import { Text } from './Text';
import { useUserContext } from './UserContext';

type HelloProps = {
  readonly name: string | null;
  readonly age: number;
}

function Hello(props: HelloProps) {
  const userContext = useUserContext();
  const { name, age } = props;
  return (
    <div>
      <Text>Hello my name is {name}</Text>
      <Text>I am {age} year old</Text>
      <Text>User is logged: {userContext.isLogged ? 'Yes' : 'No'}</Text>
    </div>
  );
}

export { Hello };
