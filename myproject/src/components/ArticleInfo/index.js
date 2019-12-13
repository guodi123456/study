import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';

class ArticleInfo extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount () { }

  componentDidMount () { }

  render () {
    const prefixCls = 'com-ArticleInfo'

    return (
      <View className={prefixCls}>

      </View>
    )
  }
}

export default ArticleInfo