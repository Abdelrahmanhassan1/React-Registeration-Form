import React from "react";
import "./UserCard.css";

function UserCard(props) {
  return (
    <div className="user">
      <div className="userInfo">
        <img src={props.image} alt={props.name} />
        <h1>{props.name}</h1>
        <div className="gender">
          <h3>Gender:</h3>
          <h3>{props.gender}</h3>
        </div>
        <p>
          <span>Email:</span>
          {props.email}
        </p>

        <p>
          <span>Website:</span>
          {props.website}
        </p>
      </div>
      <div className="skills">
        <h3>Skills:</h3>
        <ul>
          {props.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default UserCard;
