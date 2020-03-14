// eslint-disable-next-line no-unused-vars
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './index.scss'

import userHead from '../../static/imgs/user.png'
import demoIcon from '../../static/icons/demo_icon.png'

export default class Index extends Component {

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
                <View className='user_header' >
                    <View className='container' >
                        <View className='username' >
                            <Text>立即登录</Text>
                        </View>
                        <View className='user_head' >
                            <Image className='img' src={userHead} />
                        </View>
                    </View>
                </View>
                <View className='tab_list' >
                    {tabList.map((tab, idx) => (<View className='tab_item' key={idx} onClick={this.naviSkip.bind(this, tab)} >
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