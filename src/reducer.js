/* eslint-disable no-param-reassign */
import { handleActions } from 'redux-actions';
import produce from 'immer';
import { fetchInitialState } from './actions';

const initialState = fetchInitialState('laura-id');

// Using immer here, which produces a draft state which can be mutated
// without affecting the original state

const reducer = handleActions(
  {
    ADD_MESSAGE: (state, { payload: { message } }) =>
      produce(state, draft => {
        if (!(message.to in draft.messages)) {
          draft.messages[message.to] = [];
        }
        draft.messages[message.to].push(message);
      }),
    SET_ACTIVE_CHANNEL: (state, { payload: { channelId } }) =>
      produce(state, draft => {
        draft.activeChannelId = channelId;
      }),
    CHANNEL_UPDATE: (state, { payload: { channel } }) =>
      produce(state, draft => {
        Object.assign(draft.channels[channel.id], channel);
      }),
  },
  initialState,
);

export default reducer;
