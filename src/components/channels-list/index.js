import { connect } from 'react-redux';
import { map, last } from 'lodash';
import ChannelsList from './channels-list';

const mapStateToProps = ({
  me,
  contacts,
  messages,
  channels,
  activeChannelId,
}) => ({
  channels: map(channels, (channel, channelId) => {
    const contact =
      contacts[channel.members.find(contactId => contactId !== me.id)];
    const result = {
      ...channel,
      ...contact,
      lastMessage: last(messages[channelId]),
    };
    if (channelId === activeChannelId) {
      result.isActive = true;
    }
    return result;
  }),
});

export default connect(mapStateToProps)(ChannelsList);
