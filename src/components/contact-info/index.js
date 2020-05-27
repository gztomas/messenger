import { connect } from 'react-redux';
import ContactInfo from './contact-info';

export const mapStateToProps = ({
  contacts,
  channels,
  activeChannelId,
  me,
}) => {
  const activeChannel = channels[activeChannelId];
  const contactId = activeChannel.members.find((id) => id !== me.id);
  const { picture, name, status } = contacts[contactId];
  const isTyping = activeChannel.typing.some((id) => id === contactId);

  return {
    picture,
    name,
    status,
    isTyping,
  };
};

export default connect(mapStateToProps)(ContactInfo);
