import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.scss'

export default class Header extends Component<any, any> {
    constructor() {
        super(...arguments)
        this.state = {
            address: '' || '选择收货地址＞'
        }
    }

    render() {
        const { address } = this.state
        return (
            <View className='index' >
                <View className='header' >订单配送至</View>
                <View className='address' >{address}</View>
                <View className='content' >
                    <View className='time' >
                        <View className='left' >送达时间</View>
                        <View className='right' >尽快送达</View>
                    </View>
                    <View className='mode' >
                        <View className='left' >支付方式</View>
                        <View className='right' >在线支付</View>
                    </View>
                </View>
            </View>
        )
    }
}