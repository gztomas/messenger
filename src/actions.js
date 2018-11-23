import { createAction } from 'redux-actions';
import { send, listen } from './messages-service';

export const addMessage = createAction('ADD_MESSAGE', message => ({ message }));

export const startTyping = createAction('START_TYPING');

export const endTyping = createAction('END_TYPING');

export const sendMessage = body => (dispatch, getState) => {
  const { me, activeChannel } = getState();

  const message = {
    to: activeChannel.id,
    from: me.id,
    sentTime: new Date(),
    body,
  };
  send(message);
};

export const listenForMessages = recipientId => dispatch => {
  listen(recipientId, message => dispatch(addMessage(message)));
};
