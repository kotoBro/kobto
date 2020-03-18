// eslint-disable-next-line no-unused-vars
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'

export default class Address extends Component<any, any> {
    constructor(props) {
        super(props)
        this.state = {
            myAddress: {
                username: '',
                phone: '',
                address: '',
                explanation: '',
            }


        }
    }

    config: Config = {
        navigationBarTitleText: '收货地址',
        navigationBarBackgroundColor: '#1e90ff',

    }

    componentDidShow() {
        let { myAddress } = this.state
        myAddress = Taro.getStorageSync('username')

        this.setState({
            myAddress
        })


    }

    naviSkip() {
        Taro.redirectTo({
            url: '/pages/my/myAddress/newIncreasedAddress/index'
        })
    }

    render() {
        let { username, phone, address, explanation } = this.state.myAddress
        return (
            <View className='index'>
                <View className='myAddress' >
                    <View className='container' >
                        <View className='user_info' >
                            <View className='name' > {username || '陈锡逵'} </View>
                            <View className='phone' > {phone || '13342955574'} </View>
                        </View>
                        <View className='text' > {address || '汕尾市陆丰市湖东镇宁湖村委会田乾外巷26号之三'} {explanation} </View>
                    </View>
                </View>

                <View className='newIncreased_address' onClick={this.naviSkip}  >
                    <View> <Text className='add' >+</Text>新增地址</View>
                </View>
            </View>
        )
    }
}