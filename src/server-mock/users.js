import users from './data-mock/users.json';

/**
 * @param {string} userId
 */
// eslint-disable-next-line import/prefer-default-export
export const get = userId => users[userId];
