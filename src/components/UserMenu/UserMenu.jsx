import React from 'react';
import { logoutUserThunk } from 'redux/usersOperations';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserData } from 'redux/selectors';
import { Div, Span, Paragraph } from './UserMenu.styled';
import { Button } from '@mui/material';

const UserMenu = () => {
  const user = useSelector(selectUserData);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUserThunk());
  };

  return (
    <Div>
      <Paragraph>
        Welcome<Span>{user.name}</Span>
      </Paragraph>
      <Button
        variant="outlined"
        type="submit"
        sx={{ width: '100px', marginRight: '20px' }}
        onClick={handleLogout}
      >
        Log Out
      </Button>
    </Div>
  );
};

export default UserMenu;
