import { connect } from 'react-redux';
import ContactInfo from './contact-info';

const mapStateToProps = ({ contacts, selectedContactId }) =>
  contacts.find(contact => contact.id === selectedContactId);

export default connect(mapStateToProps)(ContactInfo);
