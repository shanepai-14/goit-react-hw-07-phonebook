import React from 'react';
import PropTypes from 'prop-types';

function ContactItem({ contact, onDelete }) {
  return (
    <li>
      {contact.name}: {contact.phone}
      <button onClick={onDelete}>Delete</button>
    </li>
  );
}

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactItem;