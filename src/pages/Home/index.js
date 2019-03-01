import React from 'react';
import { Carousel, Card, Col, Row } from 'antd';
import {NavLink} from 'react-router-dom'
import './index.less'
import Axios from '../../api/index'

const { Meta } = Card;
export default class Home extends React.Component {

  state = {
    cardList: []
  }

  componentWillMount(){

    this.getMenuAPIList()
  }

  // 打开菜谱详情页
  openMenuDetail = () => {
    let item = this.state.cardList
  }

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
            className="home-content-card"
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
  // 从接口获取列表数据
  getMenuAPIList = () => {
    let keyword = '白菜'
    const num = 10
    Axios
      .jsonp({
        url: `http://api.jisuapi.com/recipe/search?keyword=${keyword}&num=${num}&appkey=9d1f6ec2fd2463f7`
      })
      .then(res => {
        if (res.status == 0) {
          console.log(res);

          let cardList = this.renderCardList(res.result.list)

          console.log(Array.isArray(cardList));

          this.setState({
            cardList: cardList
          })
        }
      })
  }
  render() {
    return (
      <div className="home-wrap">
        <Carousel effect="fade" className="home-swiper" autoplay>
          <div><h3>1</h3></div>
          <div><h3>2</h3></div>
          <div><h3>3</h3></div>
          <div><h3>4</h3></div>
        </Carousel>
        <div className="home-content">
          {/* <Card
            hoverable
            className="home-content-card"
            cover={<img alt="example" src="http://api.jisuapi.com/recipe/upload/20160719/115138_46688.jpg" />}
          >
            <Meta

            title="醋溜白菜"
            description="减肥,家常菜,排毒,补钙啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊"
          />
          </Card> */}
          {this.state.cardList}
        </div>
      </div>
    )
  }
}