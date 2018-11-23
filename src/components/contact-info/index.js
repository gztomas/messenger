import { connect } from 'react-redux';
import ContactInfo from './contact-info';

const mapStateToProps = ({ contacts, activeChannel }) =>
  contacts.find(contact => contact.id === activeChannel.contactId);

export default connect(mapStateToProps)(ContactInfo);
