import Taro, { Component, getApp } from '@tarojs/taro'
import { View, Image, Button, Canvas, ScrollView } from '@tarojs/components'
import './index.scss'

import userHead0 from '../../static/imgs/head0.jpg'
import userHead1 from '../../static/imgs/head1.jpg'
import userHead2 from '../../static/imgs/head2.jpg'

let ctx = Taro.createCanvasContext('flagctx')
const app = getApp()

export default class CanvasItem extends Component<any, any> {
    constructor() {
        super(...arguments)
        this.state = {
            userInfo: '',
            idx: 0,
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

    getInfo = (e) => {
        console.log(e.detail.userInfo)
        this.setState({
            userInfo: e.detail.userInfo
        })
    }
    changeAvatar = (e) => {
        console.log(666, e.currentTarget.dataset.idx)
        this.setState({
            idx: e.currentTarget.dataset.idx
        })
        this.produceAvatar()
    }
    drawImage = (avatarUrl, index) => {
        Taro.showLoading({
            title: '生成中',
            mask: true,
            success: res => {
                console.log(res)
            },
            fail: err => {
                console.log(err)
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
                    console.log(999999, res.path)
                    resolve(res)
                }
            })
        })

        Promise.all([promise1, promise2]).then(res => {
            console.log(res)
            let num = 200
            const newLoca0: any = res[0]
            const newLoca1: any = res[1]
            ctx.drawImage(newLoca0.path, 0, 0, num, num)
            ctx.drawImage(`../../${newLoca1.path}`, 0, 0, num, num)
            console.log(66666, newLoca1.path)
            ctx.draw(false, () => {
                Taro.canvasToTempFilePath({
                    x: 0,
                    y: 0,
                    width: num,
                    height: num,
                    destWidth: num,
                    destHeight: num,
                    canvasId: 'flagctx',
                    success: res => {
                        console.log(res)
                        Taro.hideLoading()
                        this.setState({ loadAvatar: res.tempFilePath })
                        console.log(index, this.state.loadAvatar)
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
        if (imgUrl[imgUrl.length - 1] != 0) {
            imgUrl[imgUrl.length - 1] = 0
        }
        imgUrl = imgUrl.join('/')
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

    handleCanvas = () => {

    }

    render() {
        const { userInfo } = this.state
        const flagList = [userHead0, userHead1, userHead2]
        return (
            <View className='user_header' >
                <View className='container' >
                    <View className='username' >立即登录</View>
                    <Canvas className='canvas' canvasId='flagctx' onTouchStart={this.handleCanvas} onTouchMove={this.handleCanvas}
                        onTouchEnd={this.handleCanvas} onTouchCancel={this.handleCanvas} onLongTap={this.handleCanvas}
                    />
                </View>
                <View className='container2' >
                    {!userInfo
                        ? <View className='mask'  >
                            <View className='dialog autoorize' >
                                <Button openType='getUserInfo' onGetUserInfo={this.getInfo} >获取头像</Button>
                            </View>
                        </View>
                        : <View className='avatar_container' >
                            <ScrollView className='scroll_avatar' scrollY >
                                {flagList.map((item, index) => {
                                    return (
                                        <View className='avatar_preview' key={index} >
                                            <View className='avatar_item' onClick={this.changeAvatar} data-idx={index} >
                                                {/* <Image className='img' src={userInfo.avatarUrl} mode='aspectFit' /> */}
                                                <Image className='img' src={item} mode='aspectFit' />
                                            </View>
                                        </View>
                                    )
                                })}
                            </ScrollView>
                            <Button className='saveAvatar' onClick={this.saveAvatar} >保存头像</Button>
                        </View>
                    }
                </View>
            </View>
        )
    }
}