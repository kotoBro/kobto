import Taro from '@tarojs/taro'
import Event from '../events'

let myEvent = new Event()
const commodityKey = 'commodityInfo'
export const getCommodityCount = (commodity) => {
    let store = Taro.getStorageSync(commodityKey)
    if (commodity && store[commodity.commodityId]) {
        return store[commodity.commodityId].num
    } else {
        return 0
    }
}

export const setCommodityCount = (commodity, num, type, callback) => {

    if (commodity) {
        let store = Taro.getStorageSync(commodityKey) || {}
        if (type === 'cut') {
            if (num === 1) {
                if (store[commodity.commodityId]) {
                    delete store[commodity.commodityId]
                }
            } else {
                if (store[commodity.commodityId]) {
                    store[commodity.commodityId].num -= 1
                }
            }
            Taro.setStorageSync(commodityKey, store)
            callback && callback()
        } else if (type === 'add') {
            if (store[commodity.commodityId]) {
                store[commodity.commodityId].num += 1
            } else {
                store[commodity.commodityId] = { ...commodity, num: 1 }
            }
            Taro.setStorageSync(commodityKey, store)
            callback && callback()
        }
    }
}

export const getAllcommodityInfo = () => {
    let store = Taro.getStorageSync(commodityKey) || {}
    let allPrice = 0
    let allNum = 0
    let deliveryFee = 5
    if (store) {
        Object.keys(store).map((key) => {
            if (store[key]) {
                allPrice += store[key].price * store[key].num
                allNum += store[key].num
            }
        })
        allPrice += deliveryFee
    }
    return { allPrice, allNum, deliveryFee }

}

export const getEvent = () => {
    return myEvent
}