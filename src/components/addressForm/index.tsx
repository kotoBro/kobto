import Taro, { } from '@tarojs/taro'
import { View, Text, Input } from '@tarojs/components'
import './index.scss'

export default function Addressform(props) {

    return (
        <View className='index' >
            <View className='user_info' >
                <View className='info_list' >
                    <View className='header'> 联系人 </View>
                    <Input type='text' placeholder='姓名' value={props.username} onInput={props.handleUsernameInput} />
                </View>
                <View className='info_list' >
                    <View className='header'> 性别 </View>
                    <View>
                        <Text className='text' >{props.sir}</Text>
                        <Text className='text' >{props.lady}</Text>
                    </View>
                </View>
                <View className='info_list' >
                    <View className='header'> 电话 </View>
                    <Input type='number' placeholder='手机电话' value={props.phone} onInput={props.handlePhoneInput} />
                </View>
                <View className='info_list' onClick={props.naviSkip} >
                    <View className='header'> 地址 </View>
                    <View className='address' >
                        {props.address.length > 0 ?
                            <Text>{props.address}</Text> : <Text >选择收货地址</Text>
                        }
                    </View>
                </View>
                <View className='info_list' >
                    <View className='header'> 补充说明 </View>
                    <Input type='text' placeholder='详细地址 (如门牌号等)' value={props.explanation} onInput={props.handleExplanationInput} />
                </View>
            </View>
        </View>
    )

}