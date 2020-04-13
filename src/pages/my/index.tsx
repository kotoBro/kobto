// eslint-disable-next-line no-unused-vars
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { CanvasItem } from '../../components/index'
import './index.scss'

import demoIcon from '../../static/icons/demo_icon.png'

export default class My extends Component<any, any> {
    constructor() {
        super(...arguments)
        this.state = {

        }
    }

    config: Config = {
        navigationBarTitleText: '我的',
        navigationBarTextStyle: 'black',
        navigationBarBackgroundColor: '#f5f5f5'
    }


    naviSkip(obj) {
        Taro.navigateTo({
            url: obj.naviUrl
        })
    }

    render() {
        const tabList = [
            { icon: demoIcon, text: '我的地址', arrow: '>', naviUrl: '/pages/my/myAddress/index' },
            { icon: demoIcon, text: '我的收藏', arrow: '>', naviUrl: '/pages/my/myCollect/index' },
            { icon: demoIcon, text: '我的客服', arrow: '>', naviUrl: '/pages/my/myCustomerService/index' },
            { icon: demoIcon, text: '规则中心', arrow: '>', naviUrl: '/pages/my/ruleCenter/index' }
        ]
        return (
            <View className='index'>
                <CanvasItem />
                <View className='tab_list' >
                    {tabList.map((tab, index) => (<View className='tab_item' key={index} onClick={this.naviSkip.bind(this, tab)} >
                        <View className='container' >
                            <Image className='icon' src={tab.icon} />
                            <Text className='text' >{tab.text}</Text>
                        </View>
                        <View className='arrow' >{tab.arrow}</View>
                    </View>)
                    )}
                </View>
            </View>
        )
    }
}