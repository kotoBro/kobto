// eslint-disable-next-line no-unused-vars
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'

export default class DesserDrink extends Component {

    config: Config = {
        navigationBarTitleText: '甜品饮料',
        navigationBarBackgroundColor: '#1e90ff'
    }

    render() {
        return (
            <View className='index'>
                <Text></Text>
            </View>
        )
    }
}