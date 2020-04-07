// eslint-disable-next-line no-unused-vars
import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import { AtBadge } from 'taro-ui'
import { getAllcommodityInfo, getEvent } from '../../../../utils/shopDetails/index'
import './index.scss'
import demoIcon1 from '../../../../static/icons/demo_icon.png'

let events = getEvent()

export default class ShopFooter extends Component<any, any> {
    constructor() {
        super(...arguments)
        this.state = {
            allPrice: 0,
            allNum: 0
        }
    }

    componentDidMount() {
        let { allPrice, allNum } = getAllcommodityInfo()
        this.setState({
            allPrice: allPrice,
            allNum: allNum
        })
        events.on('addcut', () => {
            this.setState({
                allPrice: allPrice,
                allNum: allNum
            })
        })
    }

    handleClick = () => {
        Taro.navigateTo({
            url: '/pages/confirmOrder/index'
        })
    }

    render() {
        const { allPrice, allNum } = this.state

        return (
            <View className='shop_footer' >

                {allNum > 0
                    ? <View className='container2' >
                        <View className='left' >
                            <AtBadge value={allNum} maxValue={99} >
                                <Image className='img' src={demoIcon1} />
                            </AtBadge>
                            <View className='content2' >
                                <View className='text' >￥{allPrice}</View>
                                <View className='text2' >另需配送费5元</View>
                            </View>
                        </View>
                        <View className='right' onClick={this.handleClick}  >去结算</View>
                    </View>
                    :
                    <View className='container' >
                        <View className='left' >
                            <Image className='img' src={demoIcon1} />
                            <View className='content' >
                                <View className='text' >未选购商品</View>
                                <View className='text2' >另需配送费5元</View>
                            </View>
                        </View>
                        <View className='right' >￥20起送</View>
                    </View>
                }

            </View>
        )
    }
}