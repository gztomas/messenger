import { connect } from 'react-redux';
import MessagesList from './messages-list';

const mapStateToProps = ({ contacts, messages, selectedContactId }) => ({
  messages: messages[selectedContactId],
  isTyping: contacts.find(contact => contact.id === selectedContactId).isTyping,
});

export default connect(mapStateToProps)(MessagesList);
