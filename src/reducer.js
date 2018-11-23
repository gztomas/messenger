/* eslint-disable no-param-reassign */
import { handleActions } from 'redux-actions';
import produce from 'immer';

import { LAURA_INITIAL_STATE } from './initial-state';

const reducer = handleActions(
  {
    ADD_MESSAGE: (state, { payload: { message } }) =>
      produce(state, draft => {
        if (!(message.to in draft.messages)) {
          draft.messages[message.to] = [];
        }
        draft.messages[message.to].push(message);
      }),
    CHANNEL_UPDATE: (state, { payload: { channel, channelId } }) =>
      produce(state, draft => {
        Object.assign(draft.channels[channelId], channel);
      }),
  },
  LAURA_INITIAL_STATE,
);

export default reducer;
