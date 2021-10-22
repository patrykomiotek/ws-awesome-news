// https://randomuser.me/api/?results=1
import axios from 'axios';
import type { AxiosResponse } from 'axios';

type UserResponseType = {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  },
  email: string;
}

type UsersResponseType = {
  results: [UserResponseType]
}

const fetchUsers = (): Promise<AxiosResponse<UsersResponseType>> => {
  return axios.get('https://randomuser.me/api/?results=1');
}

// const fetchUsers: AxiosResponse<UsersResponseType> = async () => {
//   const response = await axios.get('https://randomuser.me/api/?results=1');
//   return response.data;
// }

export { fetchUsers };
