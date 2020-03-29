import Taro, { useState } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import './index.scss'

import foodPng from '../../../../static/imgs/null.png'

export default function ShopInfo(props) {
    const [storeName] = useState('')
    const [foodName] = useState('')
    const [shopLocation] = useState('')
    const [foodQuantity] = useState('')
    const [foodPrice] = useState('')
    const [actualPayment] = useState('')

    const [shopInfo] = useState([
        { title: '包装费', text: '包装费', price: props.packingCharges || '1' },
        { title: '配送费', text: props.deliveryMode || '蜂鸟快送', price: props.deliveryPrice || '3' },
        { title: '满减', text: props.discountMode || '店铺满减', price: props.discountPrice || '7' },
        { title: '红包', text: props.redEnvelopesMode || '店铺红包', price: props.redEnvelopesPrice || '6' }
    ])

    return (
        <View className='shop_info' >
            <View className='header' >
                <View className='shop_name' >
                    {storeName || '肯德基'} ({shopLocation || '湖东店'})  ＞
                            </View>
                <View className='order_operation' >再来一单</View>
            </View>

            <View className='content' >
                <View className='container1 ' >
                    <View className='container' >
                        <Image className='food_img' src={foodPng} />
                        <View className='food_name' >{foodName || '手撕鸡'}</View>
                    </View>
                    <View className='food_quantity' >×{foodQuantity || '1'}</View>
                    <View className='food_price' >￥{foodPrice || '38'}</View>
                </View>

                {shopInfo.map((item) => {
                    return (
                        <View className='container2' key={String(item)} >
                            <View className='header2' >
                                <View className='title' >{item.title}</View>
                                <View className='text' >{item.text}</View>
                            </View>
                            <View className='packing_charges' >￥{item.price}</View>
                        </View>
                    )
                })}

                <View className='container6' >
                    <View className='contact' >联系商家</View>
                    <View className='actual_payment' >实付￥{actualPayment || '20'}</View>
                </View>
            </View>
        </View>
    )
}