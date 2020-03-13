// eslint-disable-next-line no-unused-vars
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'

export default class FriedFood extends Component {

    config: Config = {
        navigationBarTitleText: '炸鸡炸串',
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