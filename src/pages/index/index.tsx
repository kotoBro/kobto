// eslint-disable-next-line no-unused-vars
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './index.scss'
import { HomePageSwiper } from '../../components/index'

import locationPng from '../../static/icons/location.png'
import searchIcon from '../../static/tarBar/search1.png'
import demoIcon from '../../static/icons/demo_icon.png'
import { getData } from '../../constants/test'
import nullPng from '../../static/imgs/null.png'

export default class Index extends Component<any, any> {
  constructor(props) {
    super(props)
    this.state = {
      storeList: []
    }
  }

  componentDidMount() {
    this.getStore()
  }

  config: Config = {
    navigationBarTitleText: '食品采单',
    navigationBarTextStyle: 'white',
    navigationBarBackgroundColor: '#1e90ff'
  }


  async getStore() {
    const res: any = await getData()
    console.log(res)
    this.setState({
      storeList: res.data
    })
  }
  naviSearchBox = () => {
    Taro.navigateTo({
      url: '/pages/index/search/index'
    })
  }



  naviSkip(obj) {
    Taro.navigateTo({
      url: obj.naviUrl
    })
  }

  naviShop = () => {
    Taro.navigateTo({
      url: '/pages/shopDetails/index'
    })
  }

  render() {
    const discountList = ['首单立减', '满减优惠', '免费配送', '品牌商家', '新店']
    const tabList = [
      { icon: demoIcon, name: '商超便利', naviUrl: '/pages/index/shangChao/index' },
      { icon: demoIcon, name: '水果', naviUrl: '/pages/index/fruit/index' },
      { icon: demoIcon, name: '甜品饮料', naviUrl: '/pages/index/dessertDrink/index' },
      { icon: demoIcon, name: '炸鸡炸串', naviUrl: '/pages/index/friedFood/index' }
    ]

    const { storeList } = this.state
    return (
      <View className='index'>
        <View className='location' >
          <View className='container'>
            <Image src={locationPng} className='icon' />
          </View>
          <View className='search_box' onClick={this.naviSearchBox} >
            <View className='container' >
              <Image className='img' src={searchIcon} />
              <Text className='text' >搜索商家、商品名称</Text>
            </View>
          </View>
        </View>

        <HomePageSwiper />

        <View className='tab_list' >
          {tabList.map((item, idx) => {
            return (
              <View className='tab_item' key={idx} onClick={this.naviSkip.bind(this, item)} >
                <View>
                  <Image className='icon' src={item.icon} />
                </View>
                <View>{item.name}</View>
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

          <View className='recommend_business' onClick={this.naviShop} >
            {storeList.map((item) =>
              (<View className='container' key={String(item)}>
                <Image className='img' src={nullPng} />
                <View className='info'>
                  <View className='shop_name'>
                    {item.storeName}
                  </View>
                  <View className='content'>
                    <View className='business'>
                      {item.business}
                    </View>
                    <View className='business_situation'>
                      <View className='text collection'>★{item.star || '0'} </View>
                      <View>月售 {item.monthlySales} </View>
                    </View>
                    <View className='distribution_details'>
                      <View className='container'>
                        <View className='text'>起送￥{item.price}</View>
                        <View>配送费￥：{item.deliveryFee}</View>
                      </View>
                      <View className='container'>
                        <View className='text'> {item.minu}分钟 </View>
                        <View> {item.distance}km </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>))}
          </View>

        </View>

      </View >
    )
  }
}
