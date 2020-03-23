import Taro, { useState, useEffect } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './index.scss'
import demoIcon from '../../../static/icons/demo_icon.png'

export default function Address() {
    let [addressList, setAddressList] = useState([
        { username: '', phone: '', address: '', explanation: '' }
    ])

    useEffect(() => {
        let arrList = Taro.getStorageSync('addressList')
        // eslint-disable-next-line react-hooks/exhaustive-deps
        addressList = arrList && JSON.parse(arrList) || []
        setAddressList(addressList)
    }, [addressList])

    return (
        <View className='index'>
            <View className='myAddress' >
                {addressList.map((item) => (
                    <View className='container' key={String(item)}>
                        <View className='address_info' >
                            <View className='user_info'>
                                <View className='name'> {item.username} </View>
                                <View className='phone'> {item.phone} </View>
                            </View>
                            <View className='text'> {item.address} {item.explanation} </View>
                        </View>
                        <View className='edit' onclick={() => {

                        }} >
                            <Image className='img' src={demoIcon} />
                        </View>
                    </View>

                ))}
            </View>

            <View className='newIncreased_address' onClick={() =>
                Taro.navigateTo({
                    url: '/pages/my/myAddress/newIncreasedAddress/index'
                })
            }
            >
                <View> <Text className='add' >+</Text>新增地址</View>
            </View>
        </View>
    )
}

Address.config = {
    navigationBarTitleText: '收货地址',
    navigationBarBackgroundColor: '#1e90ff',
}