/* eslint-disable react/jsx-indent-props */
import Taro, { Component } from '@tarojs/taro'
import { View, Swiper, SwiperItem, Image } from '@tarojs/components'
import swiperPng from '../../static/icons/demo.png'

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
                            <Image src={swiperPng} />
                        </View>
                    </SwiperItem>
                    <SwiperItem>
                        <View>
                            <Image src={swiperPng} />
                        </View>
                    </SwiperItem>
                </Swiper>
            </View>
        )
    }
}