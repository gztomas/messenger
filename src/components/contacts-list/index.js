import { connect } from 'react-redux';
import ContactsList from './contacts-list';

const mapStateToProps = ({ contacts, messages, selectedContactId }) => ({
  contacts: contacts.map(contact => {
    const result = {
      ...contact,
      lastMessage: messages[selectedContactId][0] || {},
    };
    if (contact.id === selectedContactId) {
      result.isSelected = true;
    }
    return result;
  }),
});

export default connect(mapStateToProps)(ContactsList);
