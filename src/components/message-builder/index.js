import { connect } from 'react-redux';
import MessageBuilder from './message-builder';
import { sendMessage, updateChannel } from '../../actions';

const mapDispatchToProps = {
  onSendMessage: sendMessage,
  onStartTyping: () => (dispatch, getState) => {
    const { activeChannelId, channels, me } = getState();
    dispatch(
      updateChannel({
        id: activeChannelId,
        typing: [...channels[activeChannelId].typing, me.id],
      }),
    );
  },
  onEndTyping: () => (dispatch, getState) => {
    const { activeChannelId, channels, me } = getState();
    dispatch(
      updateChannel({
        id: activeChannelId,
        typing: channels[activeChannelId].typing.filter(id => id !== me.id),
      }),
    );
  },
};

export default connect(
  null,
  mapDispatchToProps,
)(MessageBuilder);
