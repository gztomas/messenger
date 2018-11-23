import { connect } from 'react-redux';
import ContactInfo from './contact-info';

const mapStateToProps = ({ contacts, channels, activeChannelId, me }) =>
  contacts[channels[activeChannelId].members.find(id => id !== me.id)];

export default connect(mapStateToProps)(ContactInfo);
