// eslint-disable-next-line no-unused-vars
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Input, Image } from '@tarojs/components'
import './index.scss'

import searchIcon from '../../../static/tarBar/search1.png'


export default class Search extends Component<any, any> {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: '',
            historyList: []
        }
    }

    componentDidShow() {
        let initList = Taro.getStorageSync('historySearchList')
        let arrList = initList && JSON.parse(initList) || []
        this.setState({
            historyList: arrList
        })
    }



    config: Config = {
        navigationBarTitleText: '搜索',
        navigationBarBackgroundColor: '#1e90ff'
    }


    handleInput = e => {
        this.setState({
            inputValue: e.target.value
        })
    }

    searchContent = () => {
        let { inputValue, historyList } = this.state
        let initList = Taro.getStorageSync('historySearchList')
        historyList = initList && JSON.parse(initList) || []
        historyList.push(inputValue)
        Taro.setStorageSync('historySearchList', JSON.stringify(historyList))
        this.setState({
            historyList
        })
    }

    clearHistory = () => {
        let arrList = Taro.getStorageSync('historySearchList')
        arrList = arrList && JSON.parse(arrList) || []
        arrList.splice(0, arrList.length)
        Taro.setStorageSync('historySearchList', JSON.stringify(arrList))
        this.setState({
            historyList: arrList
        })
    }

    render() {
        const { inputValue, historyList } = this.state
        return (
            <View className='index'  >
                <View className='search_input' >
                    <View className='container' >
                        <Input className='input' type='text' placeholder='搜索商家、商品名称' value={inputValue} onInput={this.handleInput} />
                    </View>
                </View>

                <View className='search_content' >
                    {inputValue.length > 0
                        ? <View className='prompt_box' onClick={this.searchContent} >
                            <Image className='img' src={searchIcon} />
                            <View className='content' >查找 :  {inputValue}</View>
                        </View>
                        : <View className='history_search' >
                            <View className='header' >
                                <View className='title' >历史搜索</View>
                                <Image className='img' src={searchIcon} onClick={this.clearHistory} />
                            </View>
                            <View className='history_list' >
                                {historyList.map((item) => {
                                    return (
                                        <View className='text' key={String(item)} >{item}</View>
                                    )
                                })}
                            </View>
                        </View>

                    }
                </View>
            </View>
        )
    }
}