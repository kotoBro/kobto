import Taro, { useState } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.scss'


export default function DeliveryInfo(props) {

    const [deliveryInfo] = useState([
        { title: '送达时间', text: props.deliveryTime || '尽快送达' },
        { title: '收货地址', text: props.deliveryAddress || '银威花园2栋' },
        { text2: props.username || '陈锡', text3: (props.call || '(先生)'), text4: props.phone || '13342951111' },
        { title: '配送方式', text: props.deliveryMode || '蜂鸟配送' },
        { title: '配送骑士', text5: props.contact || '联系骑士', text2: props.deliveryPeople || '流星', text3: '＞' }
    ])

    return (
        <View className='delivery_info' >
            <View className='header' >配送信息</View>

            {deliveryInfo.map((item) => {
                return (
                    <View className='container' key={String(item)} >
                        <View className='title' >{item.title}</View>
                        <View className='content' >
                            <View className='text' >{item.text}</View>
                            <View className='text5' >{item.text5}</View>
                            <View className='container2' >
                                <View className='text2' >{item.text2}</View>
                                <View className='text3' >{item.text3}</View>
                                <View className='text4' >{item.text4}</View>
                            </View>

                        </View>
                    </View>
                )
            })}

        </View>
    )
}