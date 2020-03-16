import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'

export default class SearchBox extends Component<any> {

    naviEditSearch() {
        Taro.navigateTo({
            url: '/pages/index/search/index'
        })
    }

    render() {
        return (
            <View className='search_box' onClick={this.naviEditSearch} >
                <Text className='text' >{this.props.placeholder}</Text>
            </View>
        )
    }
}