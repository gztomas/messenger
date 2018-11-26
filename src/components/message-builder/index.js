import { connect } from 'react-redux';
import MessageBuilder from './message-builder';
import { sendMessage, startTyping, endTyping } from '../../actions';

const mapDispatchToProps = {
  onSendMessage: sendMessage,
  onStartTyping: startTyping,
  onEndTyping: endTyping,
};

export default connect(
  null,
  mapDispatchToProps,
)(MessageBuilder);
