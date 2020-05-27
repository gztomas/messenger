import { BehaviorSubject } from 'rxjs';
import { mapValues } from 'lodash';
import data from './data-mock/channels.json';

// The behavior subject will keep the last value and notify every
// subscriber every time it changes
const channels = mapValues(data, (value) => new BehaviorSubject(value));

export const get = (id) => channels[id].value;

/**
 * Update channel with new values
 * @param {{ id: string, typing: Array<boolean> }} channel
 */
export const update = (channel) => {
  channels[channel.id].next(channel);
};

/**
 * Subscribe to a collection of channels
 * @param {Array<string>} channelIds
 * @param {function} callback
 */
export const listen = (channelIds, callback) => {
  channelIds.forEach((id) => channels[id].subscribe(callback));
};
