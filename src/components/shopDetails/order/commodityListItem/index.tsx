import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import AddCut from '../addCut/index'
import './index.scss'


export default class CommodityListItem extends Component<any, any> {
    static defaultProps: { currentList: never[] }

    render() {
        return (
            <View className='commodity_list' >
                <View className='header' >{this.props.header}</View>
                {this.props.currentList.map((item) => {
                    return (
                        <View className='container' key={item.commodityId} >
                            <View className='left' >
                                <Image className='img' src={item.img} />
                                <View className='content' >
                                    <View className='name' >{item.name}</View>
                                    <View className='monthly_sale' >月售: {item.sale}</View>
                                    <View className='price' >￥{item.price}</View>

                                </View>
                            </View>
                            <View className='right' >
                                <AddCut commodity={item} />
                            </View>
                        </View>
                    )
                })}
            </View>
        )
    }
}
CommodityListItem.defaultProps = {
    currentList: []
}