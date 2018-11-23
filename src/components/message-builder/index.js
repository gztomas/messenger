import { connect } from 'react-redux';
import MessageBuilder from './message-builder';
import { sendMessage, updateChannel } from '../../actions';

const mapStateToProps = ({ channels, activeChannelId, me }) => ({
  isTyping: channels[activeChannelId].typing.some(id => id !== me.id),
});

const mapDispatchToProps = {
  onSendMessage: sendMessage,
  onStartTyping: () => (dispatch, getState) =>
    dispatch(
      updateChannel({
        id: getState().activeChannelId,
        typing: [getState().me.id],
      }),
    ),
  onEndTyping: () => (dispatch, getState) =>
    dispatch(
      updateChannel({
        id: getState().activeChannelId,
        typing: [],
      }),
    ),
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MessageBuilder);
