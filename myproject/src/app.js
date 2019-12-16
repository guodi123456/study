import '@tarojs/async-await';
import Taro, { Component } from '@tarojs/taro';
import { Provider } from '@tarojs/redux';
import Index from './pages/index';
import configStore from './store';
import { checkSession } from './actions/home';
import './app.scss';

const store = configStore();

class App extends Component {
  componentWillMount() {
    checkSession();
  }
  config = {
    pages: [
      'pages/article/index',
      'pages/index/index',  
         
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#000000',
      navigationBarTitleText: '加泰罗尼亚旅游局',
      navigationBarTextStyle: 'white',
    },
   
  
  }

 

  render() {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    );
  }
}

Taro.render(<App />, document.getElementById('app'));
