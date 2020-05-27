import { connect } from 'react-redux';
import MessagesList from './messages-list';

const mapStateToProps = ({ messages, activeChannelId, me, channels }) => ({
  messages: messages[activeChannelId] || [],
  isTyping: channels[activeChannelId].typing.some((id) => id !== me.id),
  myself: me.id,
});

export default connect(mapStateToProps)(MessagesList);
