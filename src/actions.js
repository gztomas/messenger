import { createAction } from 'redux-actions';
import { keyBy } from 'lodash';
import * as messagesService from './server-mock/messages';
import * as channelsService from './server-mock/channels';
import * as usersService from './server-mock/users';

// Actions

export const addMessage = createAction('ADD_MESSAGE', (message) => ({
  message,
}));

export const setActiveChannel = createAction(
  'SET_ACTIVE_CHANNEL',
  (channelId) => ({ channelId }),
);

export const channelUpdate = createAction('CHANNEL_UPDATE', (channel) => ({
  channel,
}));

// Thunks

/**
 * Dispatch an ADD_MESSAGE action every time there is a new message
 * for any of the user channels
 */
export const listenForMessages = () => (dispatch, getState) => {
  const { channels } = getState().me;
  messagesService.listen(channels, (message) => dispatch(addMessage(message)));
};

/**
 * Dispatch an CHANNEL_UPDATE action every time a channel state changes
 * for any of the user channels
 */
export const listenForChannels = () => (dispatch, getState) => {
  const { channels } = getState().me;
  channelsService.listen(channels, (channel) =>
    dispatch(channelUpdate(channel)),
  );
};

/**
 * Update the current channel state by adding the current user
 * as a typer
 */
export const startTyping = () => (dispatch, getState) => {
  const { activeChannelId, channels, me } = getState();
  channelsService.update({
    id: activeChannelId,
    typing: [...channels[activeChannelId].typing, me.id],
  });
};

/**
 * Update the current channel state by removing the current user
 * as a typer
 */
export const endTyping = () => (dispatch, getState) => {
  const { activeChannelId, channels, me } = getState();
  channelsService.update({
    id: activeChannelId,
    typing: channels[activeChannelId].typing.filter((id) => id !== me.id),
  });
};

/**
 * Send a message with this body and the current user as author
 * to the active channel
 * @param {string} body
 */
export const sendMessage = (body) => (dispatch, getState) => {
  const { me, activeChannelId } = getState();

  const message = {
    to: activeChannelId,
    from: me.id,
    sentTime: new Date(),
    body,
  };
  messagesService.send(message);
};

export const fetchInitialState = (userId) => {
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
