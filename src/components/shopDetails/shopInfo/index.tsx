
// eslint-disable-next-line no-unused-vars
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import './index.scss'

import nullPng from '../../../static/imgs/null.png'

export default class ShopInfo extends Component<any, any> {
    constructor() {
        super(...arguments)
        this.state = {
            shopDetailsList: [{}]
        }
    }


    render() {
        const { shopDetailsList } = this.state
        return (
            <View className='index' >
                {shopDetailsList.map((item) => {
                    return (
                        <View className='container' key={String(item)} >
                            <View className='shop_info' >
                                <Image className='img' src={nullPng} />
                                <View className='content' >
                                    <View className='shop_name' >{item.shopName || '肯德基(湖东店)'} ▶</View>
                                    <View className='container2' >
                                        <View>月售{item.monthlySales || '20'}单</View>
                                        <View>商家配送约{item.aboutDeliveryTime || '56分钟'}</View>
                                    </View>
                                    <View className='container3' >
                                        <View className='discount_mode'>
                                            <View className='text' >{item.shopDiscount1 || '300减100'}</View>
                                            <View className='text' >{item.shopDiscount2 || '400减120'}</View>
                                            <View className='text' >{item.shopDiscount3 || '500减150'}</View>
                                        </View>
                                        <View className='discount_quantity' >{item.discountQuantity || '5'}个优惠▼</View>
                                    </View>
                                    <View className='notice' >
                                        公告：{item.notice || '下单后默认1-1.5小时送到，请不要催单,谢谢体谅'}
                                    </View>
                                </View>
                            </View>
                        </View>
                    )
                })}
            </View>
        )
    }
}