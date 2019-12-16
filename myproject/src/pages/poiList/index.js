import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import _ from 'lodash';
import { MJSelect } from '../../components';
import  { requestPoiList} from '../../actions/global'
import './index.scss'

const modeName ={
  2:'景点',
  256: '购物',
  8: '饭店',
  4: '酒店',
  10011: '玩乐'
}

const defaultCityList =[{id:'-1',name:'全部城市'},{id:'0',name:'北京'}];
const defaultModeList=[-1,2,256]
const defaultSortList = ['综合排序','热度排序']
class poiList extends Component {
  constructor(props){
    super(props);
    this.state ={
      select:{
        citys: defaultCityList,
        modes: defaultModeList,
        sorts: defaultSortList
      },
      filter:{
        city: 0,
        mode: 0,
        sort: 0
      }
    }
  }
  config = {
    navigationBarTitleText: '首页'
  }
  componentDidMount() {
    this.handleRequest();
  }
  componentWillMount() { }

  componentDidMount() { }
  handleChange=(key,value)=>{
    const {filter} = this.state;
    filter[key]=value;
    this.setState({filter},()=>{
      this.handleRequest();
    })
    
  }
  handleRequest = async () => {
    const { select, filter } = this.state;
    const { citys = [], modes = [] } = select;
    const {  city, mode, sort } = filter;
    const query = {
 
      city: citys[city].id || '-1',
      mode: modes[mode] || -1,
      sort,
    };
    const res = await requestPoiList(query);
    const {
     
      citys: cityList = [],
      modes: modeList = [],
      
    } = _.get(res, 'data.data', {});
    select.citys = [].concat(defaultCityList, cityList);
    select.modes = [].concat(defaultModeList, modeList);
   
    this.setState({  select });
  }
  render() {
    const prefix = 'app-poi-list'
    const { citys, modes, sorts } = this.state.select;
    const { city, mode, sort } = this.state.filter;
    const cityList = citys.map(item=>(item.name ||'未知类型'));
    const modeList =modes.map(item=>(modeName[item] || '未知类型'))

    return (
      <View className={prefix}>
        <View className={`${prefix}-select`}>
          <View className={`${prefix}-select-item`}>
            <MJSelect
              showDivide
              range={cityList}
              option='city'
              value={city}
              valueText={city === -1 ? '全部城市' : cityList[city]}
              onChange={this.handleChange}
            />
          </View>
          <View className={`${prefix}-select-item`}>
            <MJSelect
              showDivide
              range={modeList}
              option='mode'
              value={mode}
              valueText={mode === -1 ? '未知类型' : modeList[mode]}
              onChange={this.handleChange}
            />
          </View>
          <View className={`${prefix}-select-item`}>
            <MJSelect
              range={sorts}
              option='sort'
              value={sort}
              valueText={sorts[sort]}
              onChange={this.handleChange}
            />
          </View>
        </View>
      </View>
    )
  }
}

export default poiList;