import { useState, useEffect } from 'react';
import { Text } from './Text';
import { fetchUsers } from 'services/users';
import type { UsersResponseType } from 'services/users';

function Users() {
  const [users, setUsers] = useState<UsersResponseType>();
  const fetchData = async () => {
    const response = await fetchUsers();
    // response.data.results[0].email
    setUsers(response.data);
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      {users && users.results.map((elem) => (
        <div key={elem.email}>
          <Text>{elem.name.first} {elem.name.last} {elem.email}</Text>
        </div>
      ))}
    </div>
  );
}

export { Users };
