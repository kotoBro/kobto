// eslint-disable-next-line no-unused-vars
import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtTabs, AtTabsPane } from 'taro-ui'
import { ShopInfo, Order, Evaluate, Business } from '../../components/index'
import './index.scss'

export default class ShopDetails extends Component<any, any>  {
    constructor() {
        super(...arguments)
        this.state = {
            currentTab: 0
        }
    }

    config: Config = {
        navigationBarTitleText: '',
        navigationBarBackgroundColor: '#1e90ff'
    }
    handleTabClick = (value) => {
        this.setState({
            currentTab: value
        })
    }

    render() {
        const tabList = [{ title: '点餐' }, { title: '评价' }, { title: '商家' }]
        const { currentTab } = this.state
        return (
            <View className='shop_details'>
                <ShopInfo />
                <View className='item_list' >
                    <AtTabs current={currentTab} tabList={tabList} onClick={this.handleTabClick} >
                        <AtTabsPane current={currentTab} index={0}>
                            <Order />
                        </AtTabsPane>
                        <AtTabsPane current={currentTab} index={1}>
                            <Evaluate />
                        </AtTabsPane>

                        <AtTabsPane current={currentTab} index={2}>
                            <Business />
                        </AtTabsPane>
                    </AtTabs>
                </View>
            </View>
        )
    }
}