import { connect } from 'react-redux';
import MessagesList from './messages-list';

const mapStateToProps = ({ contacts, messages, activeChannel, me }) => ({
  messages: messages[activeChannel.id] || [],
  isTyping: contacts.find(contact => contact.id === activeChannel.contactId)
    .isTyping,
  myself: me.id,
});

export default connect(mapStateToProps)(MessagesList);
