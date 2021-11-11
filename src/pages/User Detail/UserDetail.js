import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { fetchUser } from '../../redux/actions/userActions';

function UserDetail() {
  const { userId } = useParams();
  let user = useSelector((state) => state.user);
  const { name, username, email, phone } = user;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser(userId));
  }, [userId]);

  return (
    <div>
      {Object.keys(user).length === 0 ? (
        <div>Loading...</div>
      ) : (
        <div>
          <h2>{name}</h2>
          <div>{username}</div>
          <div>{email}</div>
          <div>{phone}</div>
        </div>
      )}
    </div>
  )
}

export default UserDetail;
