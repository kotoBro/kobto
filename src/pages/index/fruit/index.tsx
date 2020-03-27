// eslint-disable-next-line no-unused-vars
import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.scss'
import SearchBox from '../../../components/searchBox/index'

export default class Fruit extends Component {

    config: Config = {
        navigationBarTitleText: '水果',
        navigationBarBackgroundColor: '#1e90ff'
    }

    render() {
        return (
            <View className='index'>
                <SearchBox text='草莓香蕉、黑凤梨' />
            </View>
        )
    }
}