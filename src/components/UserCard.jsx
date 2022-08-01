import React from "react";

function UserCard(props) {
  return (
    <div className="user">
      <h1>{props.name}</h1>
      <p>{props.email}</p>
      <p>{props.website}</p>
      <img src={props.image} alt={props.name} />
      <h3>Skills</h3>
      <ul>
        {props.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
      <h3>{props.gender}</h3>
    </div>
  );
}

export default UserCard;
