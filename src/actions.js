import { createAction } from 'redux-actions';

export const sendMessage = createAction('SEND_MESSAGE', body => ({
  message: {
    inbox: false,
    body,
    time: new Date(),
  },
}));

export const startTyping = createAction('START_TYPING');

export const endTyping = createAction('END_TYPING');
