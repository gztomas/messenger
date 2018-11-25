import { createAction } from 'redux-actions';
import { keyBy } from 'lodash';
import * as messagesService from './server-mock/messages';
import * as channelsService from './server-mock/channels';
import * as usersService from './server-mock/users';

export const addMessage = createAction('ADD_MESSAGE', message => ({ message }));

export const setActiveChannel = createAction(
  'SET_ACTIVE_CHANNEL',
  channelId => ({ channelId }),
);

export const channelUpdate = createAction('CHANNEL_UPDATE', channel => ({
  channel,
}));

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
  channelsService.update(channel);
};

export const listenForMessages = () => (dispatch, getState) => {
  const { channels } = getState().me;
  messagesService.listen(channels, message => dispatch(addMessage(message)));
};

export const listenForChannels = () => (dispatch, getState) => {
  const { channels } = getState().me;
  channelsService.listen(channels, channel => dispatch(channelUpdate(channel)));
};

export const fetchInitialState = userId => {
  const me = usersService.get(userId);
  const { contacts, channels } = me;
  return {
    contacts: keyBy(contacts.map(usersService.get), 'id'),
    channels: keyBy(channels.map(channelsService.get), 'id'),
    activeChannelId: channels[0],
    messages: {},
    me,
  };
};
