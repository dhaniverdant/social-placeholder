import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUsers } from '../../redux/actions/userActions';
import UserCard from '../../User Card/UserCard';
import './Home.scss';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div className="home-wrapper">
      <UserCard />
    </div>
  )
}

export default Home;
