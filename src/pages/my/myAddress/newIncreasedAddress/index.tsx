/* eslint-disable react/jsx-indent-props */
// eslint-disable-next-line no-unused-vars
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Button } from '@tarojs/components'
import './index.scss'

import { AddressForm } from '../../../../components'

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
            lady: '女士',
            addressList: []
        }
    }

    config: Config = {
        navigationBarTitleText: '新增地址',
        navigationBarBackgroundColor: '#1e90ff',

    }



    naviSkip() {
        Taro.navigateTo({
            url: '/pages/address/index'
        })
    }

    saveAddress() {
        let { username, phone, address } = this.state.myAddress
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
        } else if (address === '.') {
            Taro.showModal({
                content: '请填写收货地址',
                showCancel: false
            })
            return false
        }

        let { myAddress, addressList } = this.state
        let arrList = Taro.getStorageSync('addressList')
        addressList = arrList && JSON.parse(arrList) || []
        addressList.push(myAddress)

        Taro.setStorageSync('addressList', JSON.stringify(addressList))
        Taro.navigateBack({
            delta: 1
        })
    }

    handleUsernameInput(e) {
        this.setState({
            myAddress: {
                ...this.state.myAddress,
                username: e.target.value
            }
        })
    }

    handlePhoneInput(e) {
        this.setState({
            myAddress: {
                ...this.state.myAddress,
                phone: e.target.value
            }
        })
    }

    handleExplanationInput(e) {
        this.setState({
            myAddress: {
                ...this.state.myAddress,
                explanation: e.target.value
            }
        })
    }


    render() {
        const { username, phone, address, explanation } = this.state.myAddress
        const { sir, lady } = this.state
        return (
            <View className='index'>
                <AddressForm
                    username={username}
                    phone={phone}
                    address={address}
                    explanation={explanation}
                    sir={sir}
                    lady={lady}
                    handleUsernameInput={this.handleUsernameInput}
                    handlePhoneInput={this.handlePhoneInput}
                    handleExplanationInput={this.handleExplanationInput}
                    naviSkip={this.naviSkip}

                />
                <Button className='button' onClick={this.saveAddress} >确定</Button>
            </View>
        )
    }
}