# 『小帮厨』- React+AntD项目实战

## 前言

学习React不久，觉得实战才是检验自己学习程度的最好方法，也顺便加深一下自己对React的理解，于是做了这么一个小项目分享一下。


## 技术栈

- react
- react-router
- react-redux
- less

## 预览图


![](https://user-gold-cdn.xitu.io/2019/3/8/1695b731081662e4?w=1852&h=901&f=gif&s=4051977)

![](https://user-gold-cdn.xitu.io/2019/3/8/1695b696f3140c0a?w=1852&h=906&f=gif&s=797019)

![](https://user-gold-cdn.xitu.io/2019/3/8/1695b7529e0b58b2?w=1844&h=900&f=gif&s=696585)

## 基本项目搭建

- node开发环境
- 安装依赖： yarn
- 项目启动： yarn start
- 涉及到第三方API接口，小伙伴们可以自己去接口地址申请一个appkey，毕竟请求次数也是有限的嘛
## 页面结构


```
|-react-kitchen 项目名
    |-node_modules  依赖包
    |-public
    |-src
        |-api   请求数据接口
        |-components    组件目录
            |-CardList      卡片列表组件
            |-Footer        底部组件
            |-Header        头部组件
            |-NavLeft       左侧导航
            |-NavRight      右侧标签
        |-config        菜单配置
        |-pages         页面
            |-Collections   收藏页
            |-Detail        详情页
            |-Home          首页
            |-Search        搜索页
            |-NoMatch       无数据页
            |-。。。        其他导航页
        |-redux         redux数据管理
            action-types
            actions
            reducers
            store
        |-utils         工具类
        admin.js        页面外层结构
        App.js          页面路由
        common.less     页面样式
        index.js        入口文件
    config-overrides.js     antd主题设置
    packjon.json            全局配置
    README.md               readme文件
```

## 功能实现


### 路由配置
作为一个单页面项目，第一步当然是搭建页面路由了，因为是一个菜谱项目，所以路由还是比较多的，这里我把路由的结构都放在config文件下，在NavLeft导航组件下用map函数去将菜单渲染出来，这样既避免了自己一个一个去写重复的代码，也方便后面添加新的导航。

实现代码:
```
import React from 'react';
import { Menu} from 'antd';
import { NavLink } from 'react-router-dom'
import MenuConfig from '../../config/menuConfig'

const SubMenu = Menu.SubMenu;
export default class NavLeft extends React.Component {

  componentWillMount() {
    const menuTreeNode = this.renderMenu(MenuConfig);
    this.setState({
      menuTreeNode
    })
  }
  // // 菜单渲染
  renderMenu = (data) => {
    return data.map((item) => {
      if (item.children) {
        return (
          <SubMenu title={item.title} key={item.key}>
            {this.renderMenu(item.children)}
          </SubMenu>
        )
      }
      return <Menu.Item title={item.title} key={item.key}>
        <NavLink to={item.key}>{item.title}</NavLink>
      </Menu.Item>
    })
  }
  render() {
    return (
      <div>
        <Menu
          onClick={this.handleClick}
        >
          {this.state.menuTreeNode}
        </Menu>
      </div>
    )
  }
}
```

### CardList组件封装
菜谱的预览图用的是antd的Card组件，页面刚开始加载的时候向API请求很多组数据，而且几乎每个导航页用到的列表都是一样的，这里就应该把整个列表抽取出来成为一个组件进行复用。

先从接口中获取数据列表

```
getMenuAPIList = (keyword) => {
    const num = 12
    Axios
      .jsonp({
        url: `http://api.jisuapi.com/recipe/search?keyword=${keyword}&num=${num}&appkey=9d1f6ec2fd2463f7`
      })
      .then(res => {
        if (res.status === '0') {
          let cardList = this.renderCardList(res.result.list)
          this.setState({
            cardList: cardList
          })
        }
      })
  }
```
再调用数据渲染列表页，这里需要注意的是，渲染完预览图之后，点击进入到详情页如何获取当前的的数据去渲染详情页呢？
我想到了三种思路:

- 将数据传到共同的父组件，父组件通过props的方式再将数据传给详情页组件
- 通过路由的方式，react-router v4 中 link可以通过state的方式将参数传递给下一个组件，下一个组件可以通过this.props.location.state来得到数据
- 使用redux来管理数据

这里我用的是第二种方式

```
// 渲染卡片列表
renderCardList = (data) => {
    return data.map((item) => {
      return (
        <NavLink key={item.id} to={{
          pathname: `/common/detail/${item.id}`,
          state: item
        }} >
          <Card
            hoverable
            className="card"
            cover={<img alt="example" src={item.pic} />}
            onClick={this.openMenuDetail}
            id={item.id}
          >
            <Meta
              style={{ whiteSpace: 'nowrap' }}
              title={item.name}
              description={item.tag}
            />
          </Card>
        </NavLink>
      )
    })
  }
```
### 搜索功能
上面我们说到，可以用link携带参数进行组件之间的通信，这里的搜索功能我是用redux进行组件之间的数据传输，也就是将输入框的value值传给搜索页组件，让它拿到value值后去向API请求数据。

1. 先用createStore生成一个store容器，容器接受一个纯函数reducer作为参数返回新的store
> const store = createStore(reducer)

2. reducer接受 Action 和当前 State 作为参数，返回一个新的 State
```
export function reducer(state = 1, action) {
switch (action.type) {
  case TRANSMIT:
    return action.data
  default:
    return state
  }
}
```
3. 输入框中的value值有无数种，也就是用户发送的Action有无数种，可以用一个Action Creator函数来生成Actions
```
export const transmit = (data) => {
  return { type: TRANSMIT, data: data }
}
```
4. 这里引入react-redux 用Provider将根组件包裹起来，所有的子组件默认都可以拿到state
```
ReactDOM.render(<Provider store={store} ><App /></Provider>, document.getElementById('root'));
```

5. 用connect()连接UI组件Header和Search，connect方法接受两个参数： mapStateToProps和mapDispatchToProps。 mapStateToProps会订阅store，state更新时会自动执行，Search组件可以通过this.props.keyword来拿到当前的state， mapDispatchToProps作为对象，里面的每个键值被当做Action Creator
```
export default connect(
  state => ({keyword: state}),
  {transmit}
)(Header)

export default connect(
  state => ({keyword : state}),
  {}
)(Search)
```
由于自己对redux了解并不是很深，所以这里过程讲的有点繁琐，简单地分享自己的一点理解，小伙伴可以去看看阮一峰老师的 [redux教程](http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_one_basic_usages.html)，讲的非常细致

## 收藏功能
收藏夹功能主要是用localStorage实现，主要的思路是：点击收藏时，判断数据在localstorage中是否存在，不存在，先将数据用JSON.stringify()转化为字符串存进localStorage，localstorage.setItem(),存在则localstorage.removeItem()取消收藏
```
handleCollect = () => {
    let starColor = this.state.starColor
    let isCollect = this.state.isCollect
    const menu = JSON.stringify(this.state.menu)
    const menuName = this.state.menu.name
    if (isCollect === false) {
      starColor = '#FDDA04'
      isCollect = !isCollect
      localStorage.setItem(menuName, menu)
    } else {
      starColor = '#52c41a'
      isCollect = !isCollect
      localStorage.removeItem(menuName)
    }
    this.setState({
      starColor,
      isCollect
    })

    message.success((isCollect ? '收藏成功' : '取消收藏'), 1)

  }
```
## 项目踩坑

1. antd Input.Search<br>
点击搜索实现路由跳转 因为antd把输入框和按钮封装了 如果用link包裹Search，没输入文字就会直接跳转<br>
解决办法：不用Input.Search， 直接用input输入框+Button按钮，在Button的点击事件中获取input的value值，再用Link包裹按钮进行路由跳转。这是我想到的办法，如果还有更好的解决办法，也欢迎小伙伴提出~

2. 搜索页面的重新渲染<br>
启用react-redux管理数据，在页面第一次渲染的时候用componentWillMount请求api接口函数，将状态进行传参用的是this.props.keyword，之后的搜索渲染页面的时候用的钩子函数是componentWillReceiveProps，这个时候传递的参数是nextProps.keyword，而不是this.props.keyword

3. react渲染html代码例如`<br />`时无法正确显示<br>
原因： react的JSX 防注入攻击XSS使得大括号里的html代码全部变成字符串进行渲染，而不是html代码<br>
解决：使用标签属性dangerouslySetInnerHTML
```
<div dangerouslySetInnerHTML={{__html: code}}></div>
```
## 结语

### [项目传送门](https://github.com/MrsignzZ/react-kitchen)
写项目的时候也遇到了许多小问题，都是慢慢查文档一个一个解决的，不断的思考然后解决问题也是成长的一部分。

当然，项目还有许多需要完善的地方，如果发现有错误或者不足的地方，也希望大家能够指点一二

**最后的最后，厚颜无耻地求一个STAR😋**