// eslint-disable-next-line no-unused-vars
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import './index.scss'

import nullPng from '../../static/imgs/null.png'

export default class Order extends Component<any, any> {
    constructor(props) {
        super(props)
        this.state = {
            orderList: [
                {}
            ]
        }
    }

    config: Config = {
        navigationBarTitleText: '订单',
        navigationBarBackgroundColor: '#1e90ff'
    }



    render() {
        const { orderList } = this.state
        return (
            <View className='index'>
                {orderList.length > 0
                    ? <View className='order_list' >
                        <View className='container' >
                            <Image className='img' src={nullPng} />
                            <View className='info' >
                                <View className='container2' >
                                    <View className='shop_name' >
                                        {orderList.storeName || '肯德基(湖东店)'}
                                    </View>
                                    <View>＞</View>
                                    <View className='order_process' >{orderList.orderProcess || '订单已完成'}</View>
                                </View>
                                <View className='date' >{orderList.date || '2020-03-16 13:14'}</View>
                                <View className='container3' >
                                    <View className='commodity' >
                                        {orderList.commodity || '全家桶'} 等{orderList.commodityQuantity || '5'}件商品
                                    </View>
                                    <View className='actual_payment' >￥{orderList.actualPayment || '20'}</View>
                                </View>
                                <View className='order_operation' >
                                    <View className='text' >再来一单</View>
                                    <View className='text' >删除订单</View>
                                </View>
                            </View>
                        </View>
                    </View>
                    : <View className='prompt_box' >
                        <Image className='img' src={nullPng} />
                        <View className='content' >您最近没有订单</View>
                    </View>
                }
            </View>
        )
    }
}