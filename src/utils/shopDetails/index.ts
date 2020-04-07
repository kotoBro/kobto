import Taro from '@tarojs/taro'
import Event from '../events'

let myEvent = new Event()

const commodityKey = 'commodityInfo'
export function getCommodityCount(commodity) {
    let store = Taro.getStorageSync(commodityKey)
    if (commodity && store[commodity.commodityId]) {
        console.log(store[commodity.commodityId])
        return store[commodity.commodityId].Num
    } else {
        return 0
    }
}

export function setCommodityCount(commodity, Num, type, callback) {

    if (commodity) {
        let store = Taro.getStorageSync(commodityKey) || {}
        if (type === 'cut') {
            if (Num === 1) {
                if (store[commodity.commodityId]) {
                    delete store[commodity.commodityId]
                }
            } else {
                if (store[commodity.commodityId]) {
                    store[commodity.commodityId].Num -= 1
                }
            }
            Taro.setStorageSync(commodityKey, store)
            callback && callback()
        } else if (type === 'add') {
            if (store[commodity.commodityId]) {
                store[commodity.commodityId].Num += 1
            } else {
                store[commodity.commodityId] = { ...commodity, Num: 1 }
            }
            Taro.setStorageSync(commodityKey, store)
            callback && callback()
        }
    }
}

export function getAllcommodityInfo() {
    let store = Taro.getStorageSync(commodityKey) || {}
    let allPrice = 0
    let allNum = 0
    if (store) {
        Object.keys(store).map((key) => {
            if (store[key]) {
                allPrice += store[key].price * store[key].Num
                allNum += store[key].Num
            }
        })
    }
    return { allPrice, allNum }

}

export function getEvent() {
    return myEvent
}