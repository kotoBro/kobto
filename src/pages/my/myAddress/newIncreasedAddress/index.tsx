// eslint-disable-next-line no-unused-vars
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text, Input, Button } from '@tarojs/components'
import './index.scss'

export default class Address extends Component<any, any> {
    constructor(props) {
        super(props)
        this.state = {
            myAddress: {
                username: '',
                phone: '',
                address: '',
                explanation: '',

            },
            sir: '先生',
            lady: '女士'
        }
    }

    config: Config = {
        navigationBarTitleText: '新增地址',
        navigationBarBackgroundColor: '#1e90ff',

    }


    clickSelect() {

    }


    naviSkip() {
        Taro.navigateTo({
            url: '/pages/address/index'
        })
    }

    saveAddress() {
        let myAddress = this.state.myAddress
        let { username, phone, address } = myAddress

        if (username === '') {
            Taro.showModal({
                content: '请填写联系人',
                showCancel: false
            })
            return false
        } else if (phone === '') {
            Taro.showModal({
                content: '请填写联系电话',
                showCancel: false
            })
            return false
        } else if (phone.length !== 11) {
            Taro.showModal({
                content: '您输入的号码长度有误',
                showCancel: false
            })
            return false
        } else if (address === 0) {
            Taro.showModal({
                content: '请填写收货地址',
                showCancel: false
            })
            return false
        }

        // let addressList = []


        Taro.setStorageSync('myAddress', myAddress)
        Taro.navigateBack({
            delta: 1
        })

    }

    handleChange(e) {
        this.setState({
            myAddress: {
                ...this.state.myAddress,
                username: e.target.value
            }
        })
    }
    handleChange2(e) {
        this.setState({
            myAddress: {
                ...this.state.myAddress,
                phone: e.target.value
            }
        })
    }
    handleChange3(e) {
        this.setState({
            myAddress: {
                ...this.state.myAddress,
                address: e.target.value
            }
        })
    }
    handleChange4(e) {
        this.setState({
            myAddress: {
                ...this.state.myAddress,
                explanation: e.target.value
            }
        })
    }


    render() {
        let { username, phone, address, explanation } = this.state.myAddress
        return (
            <View className='index'>
                <View className='user_information' >
                    <View className='information_list' >
                        <View className='header'> 联系人 </View>
                        <Input type='text' placeholder='姓名' value={username} onInput={this.handleChange} />
                    </View>
                    <View className='information_list' >
                        <View className='header'> 性别 </View>
                        <View onClick={this.clickSelect} >
                            <Text className='text' >{this.state.sir}</Text>
                            <Text className='text' >{this.state.lady}</Text>
                        </View>
                    </View>
                    <View className='information_list' >
                        <View className='header'> 电话 </View>
                        <Input type='number' placeholder='手机电话' value={phone} onInput={this.handleChange2} />
                    </View>
                    <View className='information_list' onClick={this.naviSkip} >
                        <View className='header'> 地址 </View>
                        <Input type='text' placeholder='选择收货地址' value={address} disabled onInput={this.handleChange3} />
                    </View>
                    <View className='information_list' >
                        <View className='header'> 补充说明 </View>
                        <Input type='text' placeholder='详细地址 (如门牌号等)' value={explanation} onInput={this.handleChange4} />
                    </View>
                </View>

                <Button className='button' onClick={this.saveAddress} >确定</Button>
            </View>
        )
    }
}