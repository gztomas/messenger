import { mapStateToProps } from '.';

describe('ContactInfo container', () => {
  const state = {
    channels: {
      'channel-id': {
        members: ['contact-id', 'me-id'],
        typing: ['contact-id'],
      },
    },
    activeChannelId: 'channel-id',
    contacts: {
      'contact-id': {
        picture: 'picture',
        name: 'some-name',
        status: 'some-status',
      },
    },
    me: { id: 'me-id' },
  };

  describe('mapStateToProps', () => {
    it('should map state to props', () => {
      expect(mapStateToProps(state)).toEqual({
        isTyping: true,
        name: 'some-name',
        picture: 'picture',
        status: 'some-status',
      });
    });
  });
});
