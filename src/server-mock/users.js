import users from './data-mock/users.json';

// eslint-disable-next-line import/prefer-default-export
export const get = userId => users[userId];
