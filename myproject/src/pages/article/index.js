import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import _ from 'lodash';
import  request from '../../utils/request';

const defaultData = '1223';

const requestArticle = (query = {}) => {
  return request({
    type: 'api45701',
    query,
  });
};

class Article extends Component {
  constructor(props){
    super(props);
    this.state ={
      data: defaultData
    }
  }
  async componentDidMount(){
    const {id} = this.$router.params;
    const res= await requestArticle({id});
    this.setState({
      data:_.get(res,'data.data',null)
    })
  }
 

  render () {
    const prefixCls = 'ehome-index'
    const {data} =this.state
    return (
      <View className={prefixCls}>
    {data}
      </View>
    )
  }
}

export default Article;