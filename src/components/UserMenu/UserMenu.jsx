import React from 'react';
import { logoutUserThunk } from 'redux/usersOperations';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserData } from 'redux/selectors';

const UserMenu = () => {
  const user = useSelector(selectUserData);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUserThunk());
  };

  return (
    <div>
      <p>
        Welcome <span>{user.name}</span>
      </p>
      <button onClick={handleLogout}>Log Out</button>
    </div>
  );
};

export default UserMenu;
