// eslint-disable-next-line no-unused-vars
import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.scss'

import ShopInfo from './shopInfo/index'
import DeliveryInfo from './deliveryInfo/index'
import OrderInfo from './orderInfo'


export default class OrderDetails extends Component {

    config: Config = {
        navigationBarTitleText: '订单详情',
        navigationBarBackgroundColor: '#1e90ff'
    }

    render() {

        return (
            <View className='index' >
                <ShopInfo />
                <DeliveryInfo />
                <OrderInfo />

            </View>
        )
    }
}