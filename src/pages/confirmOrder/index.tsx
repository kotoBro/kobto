// eslint-disable-next-line no-unused-vars
import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { Header } from '../../components/index'

import './index.scss'

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
                <Header />
            </View>
        )
    }
}