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
            allPrice: '',
            allNum: '',
            deliveryFee: '',
            showView: false,
            chooseList: []
        }
    }

    componentDidMount() {
        let { allPrice, allNum, deliveryFee } = getAllcommodityInfo()
        let store = Taro.getStorageSync('commodityInfo') || {}
        this.setState({
            allPrice: allPrice,
            allNum: allNum,
            deliveryFee: deliveryFee,
            chooseList: store
        })


    }
    componentDidUpdate() {
        let { allPrice, allNum } = getAllcommodityInfo()
        events.on('addcut', () => {
            this.setState({
                allPrice: allPrice,
                allNum: allNum,
            })
            // console.log(allNum)
        })
    }

    handleClick = () => {
        Taro.navigateTo({
            url: '/pages/confirmOrder/index'
        })
    }

    handleDisplay = () => {
        let { showView, allNum } = this.state
        if (allNum > 0) {
            this.setState({
                showView: !showView
            })
        }
    }

    handleClear = () => {

    }

    render() {
        const { allPrice, allNum, deliveryFee, showView, chooseList } = this.state
        let switchClass = showView ? 'show' : 'hide'

        return (
            <View className='shop_footer' >
                <View className={switchClass} >
                    <View className='header' >
                        <View className='left' >已选商品</View>
                        <View className='right' onClick={this.handleClear} >清空</View>
                    </View>
                    {chooseList.map((item) => {
                        return (
                            <View className='content' key={item.id} >
                                <View className='name' >{item.name}</View>
                                <View className='num' >×{item.num}</View>
                                <View className='price' >￥{item.price}</View>
                            </View>
                        )
                    })

                    }
                </View>
                <View className='commodity_info' >
                    {allNum > 0
                        ? <View className='container2' >
                            <View className='left' onClick={this.handleDisplay} >
                                <AtBadge value={allNum} maxValue={99} >
                                    <Image className='img' src={demoIcon1} />
                                </AtBadge>
                                <View className='content2' >
                                    <View className='text' >￥{allPrice}</View>
                                    <View className='text2' >另需配送费{deliveryFee}元</View>
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
                                    <View className='text2' >另需配送费{deliveryFee}元</View>
                                </View>
                            </View>
                            <View className='right' >￥20起送</View>
                        </View>
                    }
                </View>


            </View>
        )
    }
}