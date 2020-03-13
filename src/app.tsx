
// eslint-disable-next-line no-unused-vars
import Taro, { Component, Config } from '@tarojs/taro'
import Index from './pages/index'
import './app.scss'



class App extends Component {

  config: Config = {
    pages: [
      'pages/index/index',
      'pages/index/search/index',

      'pages/shoppingCart/index',

      'pages/my/index'

    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'white'
    },
    tabBar: {
      color: '#D3D3D3',
      selectedColor: '#FF0000',
      backgroundColor: '#F5F5F5',
      borderStyle: 'black',
      list: [{
        text: '食品菜单',
        pagePath: 'pages/index/index',
        iconPath: 'static/tarBar/search1.png',
        selectedIconPath: 'static/tarBar/search2.png'
      },
      {
        text: '购物车',
        pagePath: 'pages/shoppingCart/index',
        iconPath: 'static/tarBar/home1.png',
        selectedIconPath: 'static/tarBar/home2.png'

      },
      {
        text: '我的',
        pagePath: 'pages/my/index',
        iconPath: 'static/tarBar/my1.png',
        selectedIconPath: 'static/tarBar/my2.png'

      },
      ]
    }
  }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return (
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))