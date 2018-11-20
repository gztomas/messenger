import { connect } from 'react-redux';
import ContactsList from './contacts-list';

const mapStateToProps = ({ contacts, messages, selectedContactId }) => ({
  contacts: contacts.map(contact =>
    contact.id === selectedContactId
      ? {
          ...contact,
          isSelected: true,
          lastMessage: messages[selectedContactId][0] || {},
        }
      : { ...contact, lastMessage: messages[selectedContactId][0] || {} },
  ),
});

export default connect(mapStateToProps)(ContactsList);
