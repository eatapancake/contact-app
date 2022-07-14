import React from "react";
import "./ContactCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";

const ContactCard = (props) => {
  const { id, name, email } = props.contact;
  return (
    <div className="item">
      <div className="content">
        <div className="header">{name}</div>
        <div className="email">{email}</div>
      </div>
      <FontAwesomeIcon
        className="trash-btn"
        onClick={() => props.clickHandler(id)}
        icon={faTrashCan}
      />
    </div>
  );
};

export default ContactCard;
