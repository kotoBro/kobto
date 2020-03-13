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

    render() {
        const tabList = [
            { icon: demoIcon, text: '我的地址', arrow: '>' },
            { icon: demoIcon, text: '我的收藏', arrow: '>' },
            { icon: demoIcon, text: '我的客服', arrow: '>' },
            { icon: demoIcon, text: '规则中心', arrow: '>' }
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
                    {tabList.map((tab, idx) => (<View className='tab_item' key={idx}>
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