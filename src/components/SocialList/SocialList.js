import React from 'react';

import SocialItem from './SocialItem/SocialItem';

function SocialList({ contacts }) {
  const getContacts = contacts => {
    let content = [];
    for (let key in contacts) {
      content.push(<SocialItem name={key} contact={contacts[key]} key={key} />);
    }
    return content;
  };

  return (
    getContacts(contacts)
  );
}

export default SocialList;
