// eslint-disable-next-line no-unused-vars
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Input } from '@tarojs/components'
import './index.scss'


export default class Search extends Component {

    config: Config = {
        navigationBarTitleText: '搜索',
        navigationBarBackgroundColor: '#1e90ff'
    }

    render() {
        return (
            <View className='index'  >
                <View className='search_input' >
                    <View className='container' >
                        <Input className='input' type='text' placeholder='搜索商家、商品名称' />
                    </View>

                </View>
            </View>
        )
    }
}