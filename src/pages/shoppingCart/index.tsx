// eslint-disable-next-line no-unused-vars
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import './index.scss'

import nullPng from '../../static/imgs/null.png'

export default class ShoppingCart extends Component<any, any> {
    constructor(props) {
        super(props)
        this.state = {
            orderList: []
        }
    }

    config: Config = {
        navigationBarTitleText: '购物车',
        navigationBarBackgroundColor: '#1e90ff'
    }

    render() {
        const { orderList } = this.state
        return (
            <View className='index'>
                {orderList.length > 0
                    ? <View className='order_list' ></View>
                    : <View className='prompt_box' >
                        <Image className='img' src={nullPng} />
                        <View className='content' >您最近没有订单</View>
                    </View>
                }
            </View>
        )
    }
}