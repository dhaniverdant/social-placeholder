import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUsers } from '../../redux/actions/userActions';
import UserCard from '../../User Card/UserCard';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div>
      <UserCard />
    </div>
  )
}

export default Home;
