/* eslint-disable no-param-reassign */
import { handleActions } from 'redux-actions';
import produce from 'immer';

import { INITIAL_STATE } from './initial-state';

const reducer = handleActions(
  {
    ADD_MESSAGE: (state, { payload: { message } }) =>
      produce(state, draft => {
        if (!(message.to in draft.messages)) {
          draft.messages[message.to] = [];
        }
        draft.messages[message.to].push(message);
      }),
    START_TYPING: state =>
      produce(state, draft => {
        draft.contacts.find(
          contact => contact.id === state.activeChannel.contactId,
        ).isTyping = true;
      }),
    END_TYPING: state =>
      produce(state, draft => {
        draft.contacts.find(
          contact => contact.id === state.activeChannel.contactId,
        ).isTyping = false;
      }),
  },
  INITIAL_STATE,
);

export default reducer;
