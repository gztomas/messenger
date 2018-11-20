import { connect } from 'react-redux';
import MessageBuilder from './message-builder';
import { sendMessage } from '../../actions';

const mapDispatchToProps = {
  onSendMessage: sendMessage,
};

export default connect(
  null,
  mapDispatchToProps,
)(MessageBuilder);
