import React from "react";
import ContactCard from "./ContactCard";

function ContactList(props) {
  //console.log(props);

  const deleteContactHandler = (id) => {
    props.removeContactHandler(id);
  };
  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard
        key={contact.id}
        contact={contact}
        clickHandler={deleteContactHandler}
      />
    );
  });
  return <div className="UI-celled-list">{renderContactList}</div>;
}

export default ContactList;
