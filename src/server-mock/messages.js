import { ReplaySubject } from 'rxjs';

const recipients = {};

const getRecipient = id => {
  if (!recipients[id]) {
    // The replay subject will keep the message history,
    // previous values that will be emitted to new subscriptions.
    recipients[id] = new ReplaySubject();
  }
  return recipients[id];
};

/**
 * Deliver message to the recipient
 * @param {{ to: string }} message
 */
export const send = message => {
  getRecipient(message.to).next(message);
};

/**
 * Subscribe to a collection of recipients
 * @param {Array<string>} recipientsIds
 * @param {function} callback
 */
export const listen = (recipientsIds, callback) => {
  recipientsIds.forEach(id => getRecipient(id).subscribe(callback));
};
