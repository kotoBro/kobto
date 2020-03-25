/* eslint-disable react/jsx-indent-props */
import Taro, { } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtInput, AtForm } from 'taro-ui'

import './index.scss'


export default function Addressform(props) {
    return (
        <View className='index' >
            <View className='user_info' >
                <AtForm>
                    <View className='info_list' >
                        <AtInput type='text' title='联系人' placeholder='姓名'
                            name='username' value={props.username} onChange={props.handleChange}
                        />
                    </View>
                    <View className='gender' >
                        <View className='container' >
                            <View className='text' >{props.sir}</View>
                            <View className='text' >{props.lady}</View>
                        </View>
                    </View>
                    <View className='info_list topline ' >
                        <AtInput type='phone' title='手机号码' placeholder='手机电话'
                            name='phone' value={props.phone} onChange={props.handleChange}
                        />
                    </View>
                    <View className='info_list' onClick={props.naviSkip} >
                        <AtInput editable={false} type='text' title='地址' placeholder='选择收货地址'
                            name='address' value={props.address} onChange={props.handleChange}
                        />
                    </View>
                    <View className='info_list' >
                        <AtInput type='text' title='补充说明' placeholder='详细地址 (如门牌号等)'
                            name='explanation' value={props.explanation} onChange={props.handleChange}
                        />
                    </View>
                </AtForm>
            </View>
        </View>
    )

}