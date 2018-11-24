import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { listenForMessages, listenForChannel } from '../../actions';
import Chat from './chat';

const mapDispatchToProps = {
  listenForMessages: () => (dispatch, getState) =>
    dispatch(listenForMessages(getState().activeChannelId)),
  listenForChannel: () => (dispatch, getState) =>
    dispatch(listenForChannel(getState().activeChannelId)),
};

export default compose(
  connect(
    null,
    mapDispatchToProps,
  ),
  lifecycle({
    componentDidMount() {
      this.props.listenForMessages();
      this.props.listenForChannel();
    },
  }),
)(Chat);
