/* eslint-disable no-param-reassign */
import { handleActions } from 'redux-actions';
import produce from 'immer';

const DEFAULT_STATE = {
  contacts: [
    {
      id: 'rob-contact-id',
      name: 'Rob',
      status: 'online',
      isTyping: true,
      picture:
        'https://98466-279326-raikfcquaxqncofqfm.stackpathdns.com/admin/assets/images/people/robert_downey_jr._683.jpg',
    },
    {
      id: 'laura-contact-id',
      name: 'Laura',
      status: 'online',
      isTyping: false,
      picture:
        'https://marriedbiography.com/wp-content/uploads/2017/05/Laura-Harrier-1.jpg',
    },
  ],
  selectedContactId: 'rob-contact-id',
  messages: {
    'rob-contact-id': [],
    'laura-contact-id': [],
  },
};

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
  DEFAULT_STATE,
);

export default reducer;
