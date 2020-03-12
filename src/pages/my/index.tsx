// eslint-disable-next-line no-unused-vars
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'

export default class Index extends Component {

    config: Config = {
        navigationBarTitleText: '我的',
        navigationBarTextStyle: 'black'
    }

    render() {
        return (
            <View className='index'>
                <Text></Text>
            </View>
        )
    }
}