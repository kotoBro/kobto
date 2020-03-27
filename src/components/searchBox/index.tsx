import Taro, { useState } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './index.scss'

import searchIcon from '../../static/tarBar/search1.png'

export default function SearchBox(props) {
    const [discountList] = useState([
        '首单立减', '满减优惠', '免费配送', '品牌商家', '新店'
    ])

    return (
        <View className='index' >
            <View className='search_box' >
                <View className='container' onClick={() => {
                    Taro.navigateTo({
                        url: '/pages/index/search/index'
                    })
                }}
                >
                    <Image className='img' src={searchIcon} />
                    <Text className='text' >{props.text}</Text>
                </View>
            </View>

            <View className='sortScreen' >
                <View className='header' >
                    <View className='sort' >综合排序 ﹀ </View>
                    <View className='screening' >
                        <View>筛选</View>
                        <Image className='img' src={searchIcon} />
                    </View>
                </View>
                <View className='discount_list' >
                    {discountList.map((item) => {
                        return (
                            <View className='tab' key={String(item)} >{item}</View>
                        )
                    })}
                </View>
            </View>
        </View>

    )
}