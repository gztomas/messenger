import { handleActions } from 'redux-actions';

const contacts = [
  {
    name: 'Rob',
    status: 'online',
    typing: true,
    picture:
      'https://98466-279326-raikfcquaxqncofqfm.stackpathdns.com/admin/assets/images/people/robert_downey_jr._683.jpg',
    messages: [
      { body: 'Do you know what to do?', inbox: true },
      { body: 'Of course I do', inbox: false },
      { body: 'We should try', inbox: true },
      { body: 'It sounds easier than what it really is', inbox: false },
    ],
  },
  {
    name: 'Laura',
    status: 'online',
    typing: false,
    picture:
      'https://marriedbiography.com/wp-content/uploads/2017/05/Laura-Harrier-1.jpg',
    messages: [{ body: 'We will see', inbox: true }],
  },
];

export const DEFAULT_STATE = {
  contacts,
  selectedContact: contacts[0],
};

const reducer = handleActions({}, DEFAULT_STATE);

export default reducer;
