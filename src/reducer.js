/* eslint-disable no-param-reassign */
import { handleActions } from 'redux-actions';
import produce from 'immer';

import { INITIAL_STATE } from './initial-state';

const reducer = handleActions(
  {
    SEND_MESSAGE: (state, { payload: { message } }) =>
      produce(state, draft => {
        draft.messages[state.selectedContactId].push(message);
      }),
    START_TYPING: state =>
      produce(state, draft => {
        draft.contacts.find(
          contact => contact.id === state.selectedContactId,
        ).isTyping = true;
      }),
    END_TYPING: state =>
      produce(state, draft => {
        draft.contacts.find(
          contact => contact.id === state.selectedContactId,
        ).isTyping = false;
      }),
  },
  INITIAL_STATE,
);

export default reducer;
