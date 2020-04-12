import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { getCommodityCount, setCommodityCount, getEvent } from '../../../../utils/shopDetails/index'
import './index.scss'

let events = getEvent()

export default class AddCut extends Component<any, any> {
    constructor() {
        super(...arguments)
        this.state = {
            num: 0
        }
    }

    componentDidMount() {
        this.setState({
            num: getCommodityCount(this.props.commodity)
        })
    }

    handleCut = () => {
        let { num } = this.state
        let { commodity } = this.props
        if (commodity) {
            if (num > 0) {
                setCommodityCount(commodity, num, 'cut', () => {
                    this.setState({
                        num: getCommodityCount(commodity)
                    })
                    events.emit('addcut')
                })
            }
        }
    }

    handleAdd = () => {
        let { num } = this.state
        let { commodity } = this.props
        if (commodity) {
            setCommodityCount(commodity, num, 'add', () => {
                this.setState({
                    num: getCommodityCount(commodity)
                })
                events.emit('addcut')
            })
        }
    }
    render() {
        const { num } = this.state
        let hideClass = num > 0 ? '' : 'hide'
        return (
            <View className='add_cut' >
                <View className={'cut ' + hideClass} onClick={this.handleCut} >一</View>
                <View className={'num ' + hideClass} >{num}</View>
                <View className='add' onClick={this.handleAdd} >十</View>
            </View>
        )
    }
}