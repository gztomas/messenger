import { BehaviorSubject } from 'rxjs';

const channels = {};

const getChannel = id => {
  if (!channels[id]) {
    channels[id] = new BehaviorSubject();
  }
  return channels[id];
};

export const update = (channelId, channel) => {
  getChannel(channelId).next(channel);
};

export const listen = (channelId, callback) => {
  getChannel(channelId).subscribe(callback);
};
