import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { listenForMessages, listenForChannels } from '../../actions';
import Chat from './chat';

const mapDispatchToProps = {
  listenForMessages,
  listenForChannels,
};

export default compose(
  connect(
    null,
    mapDispatchToProps,
  ),
  lifecycle({
    componentDidMount() {
      this.props.listenForMessages();
      this.props.listenForChannels();
    },
  }),
)(Chat);
