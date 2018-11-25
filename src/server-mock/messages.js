import { ReplaySubject } from 'rxjs';

const recipients = {};

const getRecipient = id => {
  if (!recipients[id]) {
    recipients[id] = new ReplaySubject();
  }
  return recipients[id];
};

export const send = message => {
  getRecipient(message.to).next(message);
};

export const listen = (recipientsIds, callback) => {
  recipientsIds.forEach(id => getRecipient(id).subscribe(callback));
};
