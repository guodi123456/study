import Taro from '@tarojs/taro';
import _ from 'lodash';
import { formatUrl } from './requestConfig';

const defaultSuccessFn = (res) => {
  const error_id = _.get(res, 'data.error.error_id', -1);
  if (error_id !== 0) {
    console.error('请求错误');
  }
};

const request = ({
  type,
  query = {},
  method = 'POST',
  header = {},
  successFn = defaultSuccessFn,
}) => {
  const promise = Taro.request({
    method,
    url:  formatUrl('test', type),
    data: { query },
    header: {
      'content-type': 'application/json',
      ...header,
    },
    success: successFn,
  });
  return promise;
};

export default request;
