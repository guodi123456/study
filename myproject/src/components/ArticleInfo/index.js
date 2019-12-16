import Taro, { Component } from '@tarojs/taro';
import { View,Text } from '@tarojs/components';
import './index.scss'

const list =[
{key:'行程包含',value:'以自愿为原则，在酒庄购买各种产品'},
{key:'联系人',value:'以自愿为原则，在酒庄购买各种产品'}
]
class ArticleInfo extends Component {
  static defaultProps={
     prefix:'com-article-info',
  }
  config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount () { }

  componentDidMount () { }
  getStretchStyle=()=>{
   let letterLength =4;
   list.forEach(item =>{
     if(item.key.length>letterLength){
       letterLength =item.key.length;
     }
   })
   return{
     width:`${letterLength * 24}rpx`
   }
  }
  render () {
    const prefix = 'com-article-info'

    return (
      <View className={prefix}>
        {
          list.map((item,index)=>{
            const { key, value} =item;
            const stretchStyle = this.getStretchStyle();
            return(
              <View className={`${prefix}-item`} key={index}>
                <Text className={`${prefix}-item-stretch`} style={stretchStyle}>{key}</Text>
                <Text className={`${prefix}-item-quote`}>:</Text>
                <Text className={`${prefix}-item-value`}>{value}</Text>
              </View>
            )
          })
        }
      </View>
    )
  }
}

export default ArticleInfo