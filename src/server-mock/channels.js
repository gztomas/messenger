import { BehaviorSubject } from 'rxjs';
import { mapValues } from 'lodash';
import data from './data-mock/channels.json';

const channels = mapValues(data, value => new BehaviorSubject(value));

export const get = id => channels[id].value;

export const update = channel => {
  channels[channel.id].next(channel);
};

export const listen = (channelIds, callback) => {
  channelIds.forEach(id => channels[id].subscribe(callback));
};
