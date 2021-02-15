import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import getUsers from '../redux/actions/userAction';

const Users = () => {
  const users = useSelector((state) => state.userReducer.users);
  const dispatch = useDispatch();
  console.log(users);

  useEffect(() => {
    dispatch(
      getUsers([
        {
          name: 'Vick',
        },
      ]),
    );
  }, []);

  return (
    <>
      <ul>
        {users.map((u) => (
          <li key={u}>{u.name}</li>
        ))}
      </ul>
    </>
  );
};

export default Users;
