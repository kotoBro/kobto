// eslint-disable-next-line no-unused-vars
import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { getCommodityCount, setCommodityCount, getEvent } from '../../../../utils/shopDetails/index'
import './index.scss'

let myEvents = getEvent()


export default class AddCut extends Component<any, any> {
    constructor() {
        super(...arguments)
        this.state = {
            Num: 0
        }
    }

    componentDidMount() {
        this.setState({
            Num: getCommodityCount(this.props.commodity)
        })
    }

    handleCut() {
        let { Num } = this.state
        let { commodity } = this.props
        if (commodity) {
            if (Num > 0) {

                setCommodityCount(commodity, Num, 'cut', () => {
                    this.setState({
                        Num: getCommodityCount(commodity)
                    })
                    myEvents.emit('addcut')
                })
            } else {
                console.error('当前加减商品出现异常')
            }
        }
    }

    handleAdd() {
        let { Num } = this.state
        let { commodity } = this.props
        if (commodity) {
            setCommodityCount(commodity, Num, 'add', () => {
                this.setState({
                    Num: getCommodityCount(commodity)
                })
                myEvents.emit('addcut')
            })

        }
    }
    render() {
        let { Num } = this.state
        let hideClass = Num > 0 ? '' : 'hide'
        return (
            <View className='add_cut' >
                <View className={'cut ' + hideClass} onClick={this.handleCut.bind(this)} >一</View>
                <View className={'num ' + hideClass} >{Num}</View>
                <View className='add' onClick={this.handleAdd.bind(this)} >十</View>
            </View>
        )
    }
}