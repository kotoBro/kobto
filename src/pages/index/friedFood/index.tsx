// eslint-disable-next-line no-unused-vars
import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.scss'
import SearchBox from '../../../components/searchBox/index'

export default class FriedFood extends Component {

    config: Config = {
        navigationBarTitleText: '炸鸡烤串',
        navigationBarBackgroundColor: '#1e90ff'
    }

    render() {
        return (
            <View className='index'>
                <SearchBox text='炸鸡汉堡土豆泥、炸串烤串烤韭菜' />
            </View>
        )
    }
}