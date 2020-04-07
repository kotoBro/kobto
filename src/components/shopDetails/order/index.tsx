/* eslint-disable react/jsx-indent-props */
import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtTabs, AtTabsPane } from 'taro-ui'
import ShopFooter from '../order/shopFooter'
import CommodityListItem from './commodityListItem/index'
import './index.scss'

import nullPng from '../../../static/imgs/user.png'

export default class Order extends Component<any, any> {
    constructor() {
        super(...arguments)
        this.state = {
            currentCata: 0,
            commodityList1: [
                {
                    commodityId: 'cata1.1', img: nullPng, name: '香辣鸡腿堡', sale: '20', price: '20'
                },
                {
                    commodityId: 'cata1.2', img: nullPng, name: '香辣鸡肉卷',
                    sale: '20', price: '20'
                }
            ],
            commodityList2: [
                {
                    commodityId: 'cata2.1', img: nullPng, name: '香辣大鸡排',
                    sale: '20', price: '20'
                },
                {
                    commodityId: 'cata2.2', img: nullPng, name: '香辣烤翅',
                    sale: '20', price: '20'
                }
            ],
            commodityList3: [
                {
                    commodityId: 'cata3.1', img: nullPng, name: '可口可乐',
                    sale: '20', price: '20'
                },
                {
                    commodityId: 'cata3.3', img: nullPng, name: '草莓汁',
                    sale: '20', price: '20'
                }
            ]
        }
    }

    handleCataClick = (value) => {
        this.setState({
            currentCata: value
        })
    }

    render() {
        const { currentCata, commodityList1, commodityList2, commodityList3 } = this.state
        const cataList = [{ title: '美味主食' }, { title: '缤纷小食' }, { title: '清新饮品' }]

        return (
            <View className='order' >
                <AtTabs className='tab_list' current={currentCata} height='300px' tabDirection='vertical'
                    tabList={cataList} onClick={this.handleCataClick}
                >
                    <AtTabsPane tabDirection='vertical' current={currentCata} index={0} >
                        <CommodityListItem currentList={commodityList1} header={cataList[0].title} />
                    </AtTabsPane>
                    <AtTabsPane tabDirection='vertical' current={currentCata} index={1} >
                        <CommodityListItem currentList={commodityList2} header={cataList[1].title} />
                    </AtTabsPane>
                    <AtTabsPane tabDirection='vertical' current={currentCata} index={2} >
                        <CommodityListItem currentList={commodityList3} header={cataList[2].title} />
                    </AtTabsPane>
                </AtTabs>

                <ShopFooter />
            </View>
        )
    }

}