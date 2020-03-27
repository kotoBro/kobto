/* eslint-disable react/jsx-indent-props */
import Taro, { Component } from '@tarojs/taro'
import { View, Swiper, SwiperItem, Image } from '@tarojs/components'
import './index.scss'

import swiperPng from '../../static/imgs/demo.jpg'

export default class SwiperImageItem extends Component {

    render() {
        return (
            <View className='swiper_item'>
                <Swiper
                    className='roll_image'
                    indicatorColor='#fff'
                    indicatorActiveColor='#cococo'
                    indicatorDots
                    autoplay
                >
                    <SwiperItem>
                        <View>
                            <Image className='img' src={swiperPng} />
                        </View>
                    </SwiperItem>
                    <SwiperItem>
                        <View>
                            <Image className='img' src={swiperPng} />
                        </View>
                    </SwiperItem>
                </Swiper>
            </View>
        )
    }
}