import React from 'react';

import './ContactList.scss';

import ContactItem from './ContactItem/ContactItem';

function ContactList({ contacts }) {
  const getContacts = contacts => {
    let content = [];
    for (let key in contacts) {
      content.push(<ContactItem name={key} contact={contacts[key]} key={key} />);
    }
    return content;
  };

  return (
    getContacts(contacts)
  );
}

export default ContactList;
