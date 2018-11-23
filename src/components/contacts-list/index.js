import { connect } from 'react-redux';
import { get } from 'lodash';
import ContactsList from './contacts-list';

const mapStateToProps = ({ contacts, messages, activeChannel }) => ({
  contacts: contacts.map(contact => {
    const result = {
      ...contact,
      lastMessage: get(messages, `${activeChannel.contactId}.0`, {}),
    };
    if (contact.id === activeChannel.contactId) {
      result.isSelected = true;
    }
    return result;
  }),
});

export default connect(mapStateToProps)(ContactsList);
