import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

class Header extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount () { }

  componentDidMount () { }

  render () {
    const prefix = 'app-user__header'

    return (
      <View className={prefix}>

      </View>
    )
  }
}

export default Header;