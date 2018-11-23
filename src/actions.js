import { createAction } from 'redux-actions';
import * as messagesService from './messages-service';
import * as channelsService from './channels-service';

export const addMessage = createAction('ADD_MESSAGE', message => ({ message }));

export const channelUpdate = createAction(
  'CHANNEL_UPDATE',
  (channel, channelId) => ({
    channel,
    channelId,
  }),
);

export const sendMessage = body => (dispatch, getState) => {
  const { me, activeChannelId } = getState();

  const message = {
    to: activeChannelId,
    from: me.id,
    sentTime: new Date(),
    body,
  };
  messagesService.send(message);
};

export const updateChannel = channel => () => {
  channelsService.update(channel.id, channel);
};

export const listenForMessages = recipientId => dispatch => {
  messagesService.listen(recipientId, message => dispatch(addMessage(message)));
};

export const listenForChannel = channelId => dispatch => {
  channelsService.listen(
    channelId,
    channel => channel && dispatch(channelUpdate(channel, channelId)),
  );
};
