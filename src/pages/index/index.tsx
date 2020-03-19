// eslint-disable-next-line no-unused-vars
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './index.scss'
import SearchBox from '../../components/searchBox/index'
import HomePageSwiper from '../../components/homePageSwiper/index'

import locationPng from '../../static/icons/location.png'
import demoIcon from '../../static/icons/demo_icon.png'
import { getData } from '../../constants/test'
import swiperPng from '../../static/imgs/demo_img.png'

export default class Index extends Component<any, any> {
  constructor(props) {
    super(props)
    this.state = {
      storeInfo: {
        storeName: '',
        shopLocation: '',
        business: '',
        collectionQuantity: '',
        monthlySales: '',
        price: '',
        deliveryFee: '',
        mimu: '',
        distance: ''
      }
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
    const res = await getData()
    this.setState({
      storeInfo: {
        res
      }

    })
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
    const { storeName, shopLocation, business, collectionQuantity, monthlySales, price,
      deliveryFee, mimu, distance }
      = this.state.storeInfo
    const res = getData()
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

          <View className='recommend_business' >

            {res.map((item) =>
              (<View className='container' key={String(item)}>
                <Image className='img' src={swiperPng} />
                <View className='info'>
                  <View className='shop_name'>
                    {storeName} ({shopLocation || '汕尾店'})
                </View>
                  <View className='content'>
                    <View className='business'>
                      {business || '本店已休息'}
                    </View>
                    <View className='business_situation'>
                      <View className='text collection'>★{collectionQuantity || '0'} </View>
                      <View>月售 {monthlySales || '0'} </View>
                    </View>
                    <View className='distribution_details'>
                      <View className='container'>
                        <View className='text'>起送￥{price}</View>
                        <View>{deliveryFee}</View>
                      </View>
                      <View className='container'>
                        <View className='text'> {mimu}分钟 </View>
                        <View> {distance}km </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>))}
            {/* <View className='container' >
              <Image className='img' src={swiperPng} />
              <View className='info' >
                <View className='shop_name' >
                  {storeName} ({shopLocation || '汕尾店'})
                </View>
                <View className='content' >
                  <View className='business' >
                    {business || '本店已休息'}
                  </View>
                  <View className='business_situation' >
                    <View className='text collection' >★{collectionQuantity || '0'} </View>
                    <View>月售 {monthlySales || '0'} </View>
                  </View>
                  <View className='distribution_details' >
                    <View className='container' >
                      <View className='text' >起送￥{price}</View>
                      <View>{deliveryFee}</View>
                    </View>
                    <View className='container' >
                      <View className='text' > {mimu}分钟 </View>
                      <View> {distance}km </View>
                    </View>
                  </View>
                </View>
              </View>
            </View> */}
          </View>

        </View>

      </View >
    )
  }
}
