import { connect } from 'react-redux';
import Conversation from './conversation';

function mapStateToProps({ conversation: { contacts, selectedContact } }) {
  return { contacts, selectedContact };
}

export default connect(mapStateToProps)(Conversation);
