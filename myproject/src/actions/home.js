import Taro from '@tarojs/taro';
import _ from 'lodash';
import request from '../utils/request';

// 校验用户登录
export const checkSession = () => {
  const uid = Taro.getStorageSync('uid') || '';
  if (uid) {
    Taro.checkSession({
      success: (res) => {
        console.log('session未失效', res);
      },
      fail: (err) => {
        console.log('session已失效', err);
        doLogin();
      },
    });
  } else {
    doLogin();
  }
};

// 登录操作
export const doLogin = () => {
  Taro.login({
    success: async (loginRes) => {
      if (loginRes.code) {
        const promise = request({
          type: 'api45707',
          query: { code: loginRes.code },
        });
        promise.then((res) => {
          const { uid = 0 } = _.get(res, 'data.data', {});
          Taro.setStorageSync('uid', uid);
        });
      }
    },
    fail: (loginErr) => {
      console.log('登录失败', loginErr);
    },
  });
};
