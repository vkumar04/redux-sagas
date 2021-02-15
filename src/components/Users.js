import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import getUsers from '../redux/actions/userAction';

import Card from './Card';

const Users = () => {
  const users = useSelector((state) => state.userReducer.users);
  const dispatch = useDispatch();
  console.log(users);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <div className="grid gap-4 grid-cols-3">
      {users.map((u) => (
        <Card key={u.id} user={u} />
      ))}
    </div>
  );
};

export default Users;
