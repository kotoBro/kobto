// eslint-disable-next-line no-unused-vars
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './index.scss'
import SearchBox from '../../components/searchBox/index'
import HomePageSwiper from '../../components/homePageSwiper/index'

import locationPng from '../../static/icons/location.png'
import demoIcon from '../../static/icons/demo_icon.png'
import { getData } from '../../constants/test'

export default class Index extends Component {

  config: Config = {
    navigationBarTitleText: '食品采单',
    navigationBarTextStyle: 'white',
    navigationBarBackgroundColor: '#1e90ff'
  }

  naviSkip(obj) {
    Taro.navigateTo({
      url: obj.naviUrl
    })
  }

  render() {
    const discountList = ['满减优惠', '下单返红包', '进店领红包', '品质联盟红包']
    const tabList = [
      { icon: demoIcon, name: '商超便利', naviUrl: '/pages/index/shangChao/index' },
      { icon: demoIcon, name: '水果', naviUrl: '/pages/index/fruit/index' },
      { icon: demoIcon, name: '甜品饮料', naviUrl: '/pages/index/dessertDrink/index' },
      { icon: demoIcon, name: '炸鸡炸串', naviUrl: '/pages/index/friedFood/index' }
    ]
    return (
      <View className='index'>
        <View className='location' >
          <View className='container' onClick={getData}>
            <Image src={locationPng} className='icon' />
          </View>
          <View>
            <SearchBox placeholder='搜索商家、商品名称' />
          </View>
        </View>

        <HomePageSwiper />

        <View className='tab_list' >
          {tabList.map((tab, idx) => {
            return (
              <View className='tab_item' key={idx} onClick={this.naviSkip.bind(this, tab)} >
                <View>
                  <Image className='icon' src={tab.icon} />
                </View>
                <View>{tab.name}</View>
              </View>
            )
          }
          )}
        </View>

        <View className='recommend' >
          <Text className='title' >推荐商家</Text>
          <View className='discount_list' >
            {discountList.map((item) =>
              <Text key={String(item)}
                className='tab'
              >
                {item}
              </Text>
            )}
          </View>
        </View>

      </View >
    )
  }
}
