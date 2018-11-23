export const LAURA_INITIAL_STATE = {
  contacts: {
    'rob-contact-id': {
      name: 'Rob',
      status: 'online',
      picture:
        'https://98466-279326-raikfcquaxqncofqfm.stackpathdns.com/admin/assets/images/people/robert_downey_jr._683.jpg',
    },
  },
  channels: {
    'laura-rob-channel-id': {
      members: ['rob-contact-id', 'laura-contact-id'],
      typing: [],
    },
  },
  activeChannelId: 'laura-rob-channel-id',
  messages: {},
  me: {
    id: 'laura-contact-id',
    name: 'Laura',
    status: 'online',
    picture:
      'https://marriedbiography.com/wp-content/uploads/2017/05/Laura-Harrier-1.jpg',
  },
};

export const ROB_INITIAL_STATE = {
  contacts: {
    'laura-contact-id': {
      name: 'Laura',
      status: 'online',
      picture:
        'https://marriedbiography.com/wp-content/uploads/2017/05/Laura-Harrier-1.jpg',
    },
  },
  channels: {
    'laura-rob-channel-id': {
      members: ['rob-contact-id', 'laura-contact-id'],
      typing: [],
    },
  },
  activeChannelId: 'laura-rob-channel-id',
  messages: {},
  me: {
    id: 'rob-contact-id',
    name: 'Rob',
    status: 'online',
    picture:
      'https://98466-279326-raikfcquaxqncofqfm.stackpathdns.com/admin/assets/images/people/robert_downey_jr._683.jpg',
  },
};
