import { connect } from 'react-redux';
import { map, last } from 'lodash';
import ChannelsList from './channels-list';

import { setActiveChannel } from '../../actions';

const mapStateToProps = ({
  me,
  contacts,
  messages,
  channels,
  activeChannelId,
}) => ({
  channels: map(channels, (channel, channelId) => {
    const contact =
      contacts[channel.members.find((contactId) => contactId !== me.id)];
    const result = {
      ...contact,
      ...channel,
      lastMessage: last(messages[channelId]),
    };
    if (channelId === activeChannelId) {
      result.isActive = true;
    }
    return result;
  }),
});

const mapDispatchToProps = {
  onSetActiveChannel: setActiveChannel,
};

export default connect(mapStateToProps, mapDispatchToProps)(ChannelsList);
