// eslint-disable-next-line no-unused-vars
import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.scss'

// import demoIcon1 from '../../../static/icons/demo_icon.png'

export default class ConfirmOrder extends Component<any, any> {
    constructor() {
        super(...arguments)
        this.state = {

        }
    }

    config: Config = {
        navigationBarTitleText: '确认订单',
        navigationBarBackgroundColor: '#1e90ff'
    }

    render() {
        return (
            <View className='confirm_order' >

            </View>
        )
    }
}