import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './index.scss'
import locationPng from '../../static/icons/location.png'
import SwiperImageItem from '../../sharingCom/swiperImageItem/index'

export default class Index extends Component {

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }


  config: Config = {
    navigationBarTitleText: '食品采单',
    navigationBarBackgroundColor: '#1e90ff'
  }

  render() {
    return (
      <View className='index'>
        <View className='container' >
          <View className='location' >
            <Image src={locationPng} className='icon' />
          </View>
          <View className='search_box'>
            <Text className='text' >搜索商家、商品名称</Text>
          </View>
        </View>
        <SwiperImageItem />
      </View >
    )
  }
}
