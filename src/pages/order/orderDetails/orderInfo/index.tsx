import Taro, { useState } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.scss'


export default function OrderInfo(props) {

    const [deliveryInfo] = useState([
        { title: '订单号', text: props.orderNumber || '3060 8843 7328 4573 111 ', text2: '复制' },
        { title: '支付方式', text: props.paymentMode || '在线支付' },
        { title: '下单时间', text: props.orderTime || '2020-03-16 00:00' },
    ])

    return (
        <View className='order_info' >
            <View className='header' >订单信息</View>

            {deliveryInfo.map((item) => {
                return (
                    <View className='container' key={String(item)} >
                        <View className='title' >{item.title}</View>
                        <View className='content' >
                            <View className='text' >{item.text}</View>
                            <View className='text2' >{item.text2}</View>
                        </View>
                    </View>
                )
            })}

        </View>
    )
}