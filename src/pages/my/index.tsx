/* eslint-disable react/jsx-indent-props */
// eslint-disable-next-line no-unused-vars
import Taro, { Component, Config, getApp } from '@tarojs/taro'
import { View, Text, Image, Canvas, Button, ScrollView } from '@tarojs/components'
import './index.scss'

import userHead0 from '../../static/imgs/head0.jpg'
import userHead1 from '../../static/imgs/head1.jpg'
import demoIcon from '../../static/icons/demo_icon.png'

let ctx = Taro.createCanvasContext('flagctx')
const app = getApp()

export default class Index extends Component<any, any> {
    constructor() {
        super(...arguments)
        this.state = {
            userInfo: '',
            idx: 1,
            loadAvatar: ''
        }
    }

    componentDidMount() {
        console.log(app.globalData.userInfo)
        if (app.globalData.userInfo) {
            this.setState({
                userInfo: app.globalData.userInfo
            })
            this.produceAvatar()
        } else {
            app.userInfoReadyCallback = res => {
                this.setState({
                    userInfo: res.userInfo
                })
                console.log(this.state.userInfo)
                this.produceAvatar()
            }
        }
    }

    config: Config = {
        navigationBarTitleText: '我的',
        navigationBarTextStyle: 'black',
        navigationBarBackgroundColor: '#f5f5f5'
    }
    getInfo = (e) => {
        console.log(e.detail.userInfo)
        this.setState({
            userInfo: e.detail.userInfo
        })
    }
    changeAvatar = (e) => {
        console.log(e.currentTarget.dataset.idx)
        this.setState({
            idx: e.currentTarget.dataset.idx
        })
        this.produceAvatar()
    }
    drawImage(avatarUrl, index) {
        Taro.showLoading({
            title: '生成中',
            mask: true,
            success: res => {
                console.log(res)
            }
        })
        let promise1 = new Promise((resolve) => {
            Taro.getImageInfo({
                src: avatarUrl,
                success: res => {
                    console.log(res.path)
                    resolve(res)
                }
            })
        })

        let promise2 = new Promise((resolve) => {
            Taro.getImageInfo({
                src: require(`../../static/imgs/head${index}.jpg`),
                success: res => {
                    console.log(res.path);
                    resolve(res)
                }
            })
        })

        Promise.all([promise1, promise2]).then(res => {
            console.log(res)
            let num = 273
            const newLocal: any = res[0]
            const newLoca2: any = res[1]
            ctx.drawImage(newLocal.path, 0, 0, num, num)
            ctx.drawImage(`../../${newLoca2.path}`, 0, 0, num, num)
            ctx.draw(false, () => {
                Taro.canvasToTempFilePath({
                    x: 0,
                    y: 0,
                    width: num,
                    height: num,
                    destWidth: num,
                    destHeight: num,
                    canvasId: 'flagctx',
                    // eslint-disable-next-line no-shadow
                    success: res => {
                        console.log(res)
                        Taro.hideLoading()
                        this.setState({ loadAvatar: res.tempFilePath })
                        console.log(this.state.loadAvatar)
                    },
                    fail: () => {
                        Taro.hideLoading();
                    }
                })
            })
        })

    }

    headimgHd(imgUrl) {
        console.log('原头像', this.state.userInfo.avatarUrl)
        imgUrl = imgUrl.split('/')
        if (imgUrl[imgUrl.length - 1] && imgUrl[imgUrl.length - 1] != 0) {
            imgUrl[imgUrl.length - 1] = 0
        }
        imgUrl.imgUrl.join('/')
        console.log('高清图像', imgUrl)
        return imgUrl
    }

    produceAvatar() {
        let avatarUrl = this.headimgHd(this.state.userInfo.avatarUrl)
        let index = this.state.idx
        this.drawImage(avatarUrl, index)
    }

    saveAvatar = () => {
        console.log(111111, this.state.loadAvatar)
        Taro.saveImageToPhotosAlbum({
            filePath: this.state.loadAvatar,
            success: res => {
                console.log('保存成功', res)
            },
            fail: err => {
                console.log(err)
            }
        })
    }

    naviSkip(obj) {
        Taro.navigateTo({
            url: obj.naviUrl
        })
    }

    handleCanvas = () => {

    }

    render() {
        const { userInfo } = this.state

        const flagList = [userHead0, userHead1]

        const tabList = [
            { icon: demoIcon, text: '我的地址', arrow: '>', naviUrl: '/pages/my/myAddress/index' },
            { icon: demoIcon, text: '我的收藏', arrow: '>', naviUrl: '/pages/my/myCollect/index' },
            { icon: demoIcon, text: '我的客服', arrow: '>', naviUrl: '/pages/my/myCustomerService/index' },
            { icon: demoIcon, text: '规则中心', arrow: '>', naviUrl: '/pages/my/ruleCenter/index' }
        ]
        return (
            <View className='index'>
                <View className='user_header' >
                    <View className='container' >
                        <View className='username' >立即登录</View>
                        <Canvas className='canvas' canvasId='flagctx' onTouchStart={this.handleCanvas} onTouchMove={this.handleCanvas}
                            onTouchEnd={this.handleCanvas} onTouchCancel={this.handleCanvas} onLongTap={this.handleCanvas}
                        />
                        <View className='container2' >
                            {!userInfo
                                ? <View className='mask'  >
                                    <View className='dialog autoorize' >
                                        <Button openType='getUserInfo' onGetUserInfo={this.getInfo} >确定</Button>
                                    </View>
                                </View>
                                : <View className='avatar_container' >
                                    <ScrollView className='scroll_avatar' scrollY >
                                        {flagList.map((item, index) => {
                                            return (
                                                <View className='avatar_preview' key={index} >
                                                    <View className='avatar_item' onClick={this.changeAvatar} data-idx={index} ></View>
                                                    <Image className='img' src={userInfo.avatarUrl} mode='aspectFit' />
                                                    <Image className='img' src={item} mode='aspectFit' />
                                                </View>
                                            )
                                        })}
                                    </ScrollView>
                                    <Button className='saveAvatar' onClick={this.saveAvatar} >保存头像</Button>
                                </View>
                            }
                        </View>
                    </View>
                </View>
                <View className='tab_list' >
                    {tabList.map((tab, index) => (<View className='tab_item' key={index} onClick={this.naviSkip.bind(this, tab)} >
                        <View className='container' >
                            <Image className='icon' src={tab.icon} />
                            <Text className='text' >{tab.text}</Text>
                        </View>
                        <View className='arrow' >{tab.arrow}</View>
                    </View>)
                    )}
                </View>
            </View>
        )
    }
}