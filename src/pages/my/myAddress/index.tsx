// eslint-disable-next-line no-unused-vars
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'

export default class Address extends Component<any, any> {
    constructor(props) {
        super(props)
        this.state = {
            addressList: []


        }
    }

    componentDidShow() {
        let { addressList } = this.state
        let list = Taro.getStorageSync('addressList')
        addressList = list && JSON.parse(list) || []
        this.setState({
            addressList
        })
    }

    config: Config = {
        navigationBarTitleText: '收货地址',
        navigationBarBackgroundColor: '#1e90ff',

    }



    naviSkip() {
        Taro.navigateTo({
            url: '/pages/my/myAddress/newIncreasedAddress/index'
        })
    }

    render() {
        let { addressList } = this.state
        return (
            <View className='index'>
                <View className='myAddress' >
                    {addressList.map((item) => (<View className='container' key={String(item)}>
                        <View className='user_info'>
                            <View className='name'> {item.username} </View>
                            <View className='phone'> {item.phone} </View>
                        </View>
                        <View className='text'> {item.address} {item.explanation} </View>
                    </View>))}

                </View>

                <View className='newIncreased_address' onClick={this.naviSkip}  >
                    <View> <Text className='add' >+</Text>新增地址</View>
                </View>
            </View>
        )
    }
}