import Taro, { Component } from '@tarojs/taro';
import { View, Picker } from '@tarojs/components';
import _ from 'lodash';
import './index.scss';

class MJSelect extends Component {
  static defaultProps = {
    prefix: 'com-mjselect',
    mode: 'selector',
    disabled: false,
    range: [],
    option: '',
    value: -1,
    valueText: '请选择',
    showDivide: false,
    onChange: () => {},
    onColumnChange: () => {},
  }

  handleChange = (e) => {
    const { option } = this.props;
    const value = _.get(e, 'detail.value', '0');
    this.props.onChange(option, parseInt(value, 10));
  }

  handleColumnChange = (e) => {
    const { option } = this.props;
    const value = _.get(e, 'detail.value', 0);
    const column = _.get(e, 'detail.column', 0);
    this.props.onColumnChange(option, column, value);
  }

  render() {
    const {
      prefix,
      mode,
      disabled,
      range,
      value,
      valueText,
      showDivide,
    } = this.props;

    return (
      <View className={`${prefix} ${showDivide ? `${prefix}-divide` : ''}`}>
        <Picker
          className={`${prefix}-picker`}
          disabled={disabled}
          mode={mode}
          range={range}
          value={value}
          onChange={this.handleChange}
          onColumnChange={this.handleColumnChange}
        >
          <View className={`${prefix}-picker-text`}>{valueText}</View>
        </Picker>
      
      </View>
    );
  }
}

export default MJSelect;
