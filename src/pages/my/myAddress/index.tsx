import Taro, { useState, useEffect, useDidShow } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './index.scss'
import demoIcon from '../../../static/icons/demo_icon.png'

export default function Address() {
    let [addressList, setAddressList] = useState([
        { addressId: '', username: '', phone: '', address: '', explanation: '' }
    ])
    console.log(addressList)
    useDidShow(() => {
        console.log(11111111111)
        let arrList = Taro.getStorageSync('addressList')
        let initList = arrList && JSON.parse(arrList) || []
        setAddressList(initList)
    })

    return (
        <View className='index'>
            <View className='myAddress' >
                {addressList.map((item, idx) => (
                    <View className='container' key={String(item)}>
                        <View className='address_info' >
                            <View className='user_info'>
                                <View className='name'> {item.username} </View>
                                <View className='phone'> {item.phone} </View>
                            </View>
                            <View className='text'> {item.address} {item.explanation} </View>
                        </View>
                        <View className='edit' onClick={() => {
                            Taro.showModal({
                                title: '提示',
                                content: '您确定要删除该地址?',
                                success: res => {
                                    if (res.confirm) {
                                        let arrList = Taro.getStorageSync('addressList')
                                        addressList = arrList && JSON.parse(arrList) || []
                                        const result = addressList.filter((obj) => {
                                            return obj.addressId !== addressList[idx].addressId
                                        })
                                        setAddressList(result)
                                        Taro.setStorageSync('addressList', JSON.stringify(result))
                                    } else if (res.cancel) {
                                        console.log('取消删除')
                                    }
                                }
                            })
                        }}
                        >
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