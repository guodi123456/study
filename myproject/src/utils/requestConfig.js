import Taro from '@tarojs/taro';

const mockList = [
  'api45700',
  'api45701',
  'api45702',
  'api45703',
  'api45704',
  'api45705',
  'api45706',
  'api45707',
  'api45708',
  'api45709',
  'api45710',
  'api45711',
  'api45712',
  'api45713',
  'api45714',
  'api45715',
  'api45716',
  'api45717',
  'api45718',
  'api45719',
  'api45720',
  'api45721',
  'api45722',
  'api45723',
];

export const getBaseUrl = (env, type) => {
  if (mockList.includes(type)) {
    return `http://yapi.demo.qunar.com/mock/45084/${type}`;
  }
  const url = {
    test: {
      php: 'https://st.mioji.com/api/',
    },
    online: {
      php: 'https://supplier.mioji.com/api/',
    },
  };
  return url[env].php;
};

export const constantParams = {
  appver: '1.0.0',
};

export const formatUrl = (env, type) => {
  const userParams = {
    type,
    qid: Date.now(),
    uid: Taro.getStorageSync('uid') || '',
  };
  const allParams = Object.assign({}, constantParams, userParams);
  const paramsKeys = Object.keys(allParams);
  const paramsString = paramsKeys.map(i => (`${i}=${allParams[i]}`)).join('&');
  return `${getBaseUrl(env, type)}?${paramsString}`;
};
