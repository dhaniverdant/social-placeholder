import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import "./UserCard.scss";

const UserCard = () => {
  const users = useSelector((state) => state.allUsers.users);
  const renderList = users.map((user) => {
    const { id, name, username } = user;

    return (
      <div className="card" key={id}>
        <div>{name}</div>
        <div>@{username}</div>
        <Link to={`/user/${id}`}>
          <button type="button" className="btn btn-primary">Details</button>
        </Link>
      </div>
    );
  });

  return renderList;
}

export default UserCard;
