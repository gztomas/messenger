export const INITIAL_STATE = {
  contacts: [
    {
      id: 'rob-contact-id',
      name: 'Rob',
      status: 'online',
      isTyping: true,
      picture:
        'https://98466-279326-raikfcquaxqncofqfm.stackpathdns.com/admin/assets/images/people/robert_downey_jr._683.jpg',
    },
  ],
  me: {
    id: 'laura-contact-id',
    name: 'Laura',
    status: 'online',
    isTyping: false,
    picture:
      'https://marriedbiography.com/wp-content/uploads/2017/05/Laura-Harrier-1.jpg',
  },
  activeChannel: {
    id: 'laura-rob-channel-id',
    contactId: 'rob-contact-id',
  },
  messages: {},
};

export const DEMO_RIGHT_INITIAL_STATE = {
  contacts: [
    {
      id: 'rob-contact-id',
      name: 'Rob',
      status: 'online',
      isTyping: true,
      picture:
        'https://98466-279326-raikfcquaxqncofqfm.stackpathdns.com/admin/assets/images/people/robert_downey_jr._683.jpg',
    },
  ],
  me: {
    id: 'laura-contact-id',
    name: 'Laura',
    status: 'online',
    isTyping: false,
    picture:
      'https://marriedbiography.com/wp-content/uploads/2017/05/Laura-Harrier-1.jpg',
  },
  activeChannel: {
    id: 'laura-rob-channel-id',
    contactId: 'rob-contact-id',
  },
  messages: {},
};

export const DEMO_LEFT_INITIAL_STATE = {
  contacts: [
    {
      id: 'laura-contact-id',
      name: 'Laura',
      status: 'online',
      isTyping: false,
      picture:
        'https://marriedbiography.com/wp-content/uploads/2017/05/Laura-Harrier-1.jpg',
    },
  ],
  me: {
    id: 'rob-contact-id',
    name: 'Rob',
    status: 'online',
    isTyping: true,
    picture:
      'https://98466-279326-raikfcquaxqncofqfm.stackpathdns.com/admin/assets/images/people/robert_downey_jr._683.jpg',
  },
  activeChannel: {
    id: 'laura-rob-channel-id',
    contactId: 'laura-contact-id',
  },
  messages: {},
};
