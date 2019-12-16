import _ from 'lodash';
import request from '../utils/request';

export const requestWelcome = (query = {}) => {
  return request({
    type: 'api45714',
    query,
  });
};
export const requestUserInfo = (query = {}) => {
  return request({
    type: 'api45710',
    query,
  });
};